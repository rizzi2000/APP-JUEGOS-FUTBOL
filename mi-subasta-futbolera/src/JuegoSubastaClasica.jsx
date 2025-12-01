/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  Trophy,
  DollarSign,
  Plus,
  Minus,
  Star, // <-- Se mantiene para el modo Categorías
  Zap,
  TrendingUp,
  TrendingDown,
  Gift,
  Frown,
  Gavel,
  ArrowLeft,
  Loader2, // <-- Importado para la carga de IA
} from "lucide-react";
import {
  JUGADORES_DB,
  POSICIONES,
  POSICIONES_NOMBRES,
  EVENTOS_SORPRESA,
  CATEGORIAS_EXTRA, // <-- Se mantiene
} from "./database.js";
// --- ¡NUEVA IMPORTACIÓN DE IA! ---
import { generarDatosSubasta } from "./ServiceIA.jsx";

// --- Componente EquipoFinal (SIN CALIDAD) ---
const EquipoFinal = ({ jugador }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md border">
      <h3 className="text-xl font-bold text-green-800 mb-3">
        {jugador.nombre}
      </h3>
      <div className="space-y-2">
        {POSICIONES.map((pos) => {
          const carta = jugador.equipo.find((c) => c.posicion === pos);
          return (
            <div
              key={pos}
              className="flex justify-between items-center bg-white p-2 rounded shadow-sm"
            >
              <span className="text-xs font-bold text-gray-500">
                {POSICIONES_NOMBRES[pos]}
              </span>
              {carta ? (
                <div className="text-right">
                  <span className="font-semibold text-gray-900">
                    {carta.nombre}
                  </span>
                  {/* --- CALIDAD REMOVIDA --- */}
                </div>
              ) : (
                <span className="text-xs italic text-gray-400">
                  -- Vacío --
                </span>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-right text-green-700 font-bold mt-3">
        Presupuesto Restante: ${jugador.presupuesto}M
      </p>
    </div>
  );
};

// --- Componente Principal del Juego 1 ---
const JuegoSubastaClasica = ({ onVolver }) => {
  const [fase, setFase] = useState("setup");
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([]);
  const [modoJuego, setModoJuego] = useState("clasico"); // Mantenemos el modo
  const [categoriasActivas, setCategoriasActivas] = useState([]); // Mantenemos categorías
  const [posicionActual, setPosicionActual] = useState(0);
  const [cartasActuales, setCartasActuales] = useState([]);
  const [cartaActiva, setCartaActiva] = useState(0);
  const [pujaActual, setPujaActual] = useState(0);
  const [jugadorPujando, setJugadorPujando] = useState(null);
  const [cartaRevelada, setCartaRevelada] = useState(false);
  const [biddingLocked, setBiddingLocked] = useState(true);
  const [evento, setEvento] = useState(null);
  // const [mercadoInflado, setMercadoInflado] = useState(false); // <-- IA maneja esto
  const [timer, setTimer] = useState(null);
  const [eventosOcurridos, setEventosOcurridos] = useState(0);
  const [votacionPosicion, setVotacionPosicion] = useState(0);
  const [votos, setVotos] = useState({});
  const [mostrarBotonAvanzar, setMostrarBotonAvanzar] = useState(false);
  const [subastaFase, setSubastaFase] = useState("clasificacion");
  const [jugadoresEnPozo, setJugadoresEnPozo] = useState([]);
  const [pistasReveladas, setPistasReveladas] = useState(1);
  const [subastaCargando, setSubastaCargando] = useState(false); // <-- NUEVO ESTADO
  const [saltearConteoRonda, setSaltearConteoRonda] = useState(0); // <-- NUEVO ESTADO

  const generarCartasRonda = useCallback(async () => {
    setSubastaCargando(true); // <-- Mostramos el loader
    setTimer(null);
    setMostrarBotonAvanzar(false);
    setCartaRevelada(false);

    const posicion = POSICIONES[posicionActual];
    const jugadoresDisponibles = [...(JUGADORES_DB[posicion] || [])];
    const seleccionados = [];
    const numCartasRonda = numJugadores + 1;

    for (let i = 0; i < numCartasRonda; i++) {
      if (jugadoresDisponibles.length === 0) break;
      const index = Math.floor(Math.random() * jugadoresDisponibles.length);
      // Solo tomamos el jugador base, la IA hará el resto
      seleccionados.push({ ...jugadoresDisponibles[index] });
      jugadoresDisponibles.splice(index, 1);
    }
    
    if (seleccionados.length === 0) {
      console.error("No hay jugadores en la DB para la posición:", posicion);
      setSubastaCargando(false);
      // Saltear a la siguiente ronda
      setTimeout(siguienteRonda, 100);
      return;
    }

    // --- ¡NUEVA LÓGICA DE IA! ---
    const promesasDeCartas = seleccionados.map(async (jugadorBase) => {
      const aiData = await generarDatosSubasta(jugadorBase.nombre);
      
      if (aiData && aiData.pistas && aiData.precio) {
        // Sobreescribimos las pistas y el precio con la IA
        jugadorBase.pistas = aiData.pistas;
        jugadorBase.minimo = aiData.precio;
        // jugadorBase.calidad = aiData.calidad; // <-- IA YA NO GENERA CALIDAD
      } else {
        // Fallback por si la IA falla
        console.warn(`IA falló para ${jugadorBase.nombre}, usando datos de fallback.`);
        jugadorBase.pistas = ["Pista de Fallback 1", "Pista de Fallback 2", "IA no disponible"];
        jugadorBase.minimo = Math.round((Math.random() * 50 + 20) / 5) * 5; // Precio fallback
        // jugadorBase.calidad = 75; // <-- Calidad fallback
      }
      return jugadorBase;
    });

    const cartasConIA = await Promise.all(promesasDeCartas);
    // --- FIN LÓGICA DE IA ---

    setCartasActuales(cartasConIA);
    setCartaActiva(0);
    setCartaRevelada(false);
    setPujaActual(0);
    setJugadorPujando(null);
    // setMercadoInflado(false); // <-- Ya no se usa

    setBiddingLocked(false);
    setPistasReveladas(1);
    setJugadoresEnPozo([]);
    setSubastaFase("clasificacion");
    setSubastaCargando(false);// <-- Ocultamos el loader
    setSaltearConteoRonda(0); // <-- Reiniciamos el conteo

    setTimer(40);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posicionActual, numJugadores]);

  const iniciarJuego = () => {
    setFase("subasta");
    setPosicionActual(0);
  };

  const pujar = (jugadorId, monto) => {
    const jugador = jugadores.find((j) => j.id === jugadorId);
    const yaComproEnRonda = jugador.equipo.some(c => c.posicion === POSICIONES[posicionActual]);
    if (yaComproEnRonda) return;
    if (biddingLocked) return;
    const carta = cartasActuales[cartaActiva];

    if (subastaFase === "clasificacion") {
      if (jugadoresEnPozo.includes(jugadorId)) return;
      if (jugador.presupuesto >= carta.minimo) {
        setJugadoresEnPozo((prevPozo) => [...prevPozo, jugadorId]);
        setJugadorPujando(jugadorId); // Se marca al último que entró
      }
    } else if (subastaFase === "puja") {
      // --- ¡CAMBIO AQUÍ! Bloqueo de puja ---
      if (!jugadoresEnPozo.includes(jugadorId) || jugadorId === jugadorPujando) return;
      
      const nuevaPuja = pujaActual + monto;
      if (jugador.presupuesto >= nuevaPuja && nuevaPuja > pujaActual) {
        setPujaActual(nuevaPuja);
        setJugadorPujando(jugadorId);
        setTimer(40);
        if (pistasReveladas < 2 && carta.pistas.length >= 2) {
          setPistasReveladas(2);
        }
      }
    }
  };

  const confirmarCompra = useCallback(() => {
    if (jugadorPujando) {
      const carta = cartasActuales[cartaActiva];
      const nuevosJugadores = jugadores.map((j) => {
        if (j.id === jugadorPujando) {
          const cartaComprada = {
            ...carta,
            precio: pujaActual,
            posicion: POSICIONES[posicionActual],
          };
          return {
            ...j,
            presupuesto: j.presupuesto - pujaActual,
            equipo: [...j.equipo, cartaComprada],
          };
        }
        return j;
      });
      setJugadores(nuevosJugadores);
    }
    setMostrarBotonAvanzar(true);
    setTimer(null);
  }, [
    jugadorPujando,
    cartasActuales,
    cartaActiva,
    pujaActual,
    jugadores,
    posicionActual,
  ]);

  const saltearCarta = useCallback(() => {
    setTimer(null);
    setMostrarBotonAvanzar(true);
    setCartaRevelada(true);
    setSaltearConteoRonda((prev)=> prev + 1); // <-- Incrementamos el conteo
  }, []);

  // --- ¡NUEVA FUNCIÓN! Terminar puja manualmente ---
  const terminarPujaManualmente = () => {
    if (timer === null || mostrarBotonAvanzar || subastaCargando) return; // No hacer nada si ya terminó o está cargando
    setTimer(0); // Forzar el timer a 0
  };

  const siguienteRonda = useCallback(() => {
    setEvento(null);
    setTimer(null);
    if (posicionActual < 11) {
      setPosicionActual(posicionActual + 1);
      setFase("subasta");
    } else {
      const puntosIniciales = {};
      jugadores.forEach((j) => {
        puntosIniciales[j.id] = 0;
      });
      setVotos(puntosIniciales);
      setVotacionPosicion(0);
      setFase("votacion");
    }
  }, [posicionActual, jugadores]);

  const siguienteCarta = () => {
    setMostrarBotonAvanzar(false);
    setBiddingLocked(true);

    // Asegurarse de que cartasActuales tenga elementos
    if (cartasActuales.length === 0) {
      siguienteRonda(); // Saltear si no hay cartas
      return;
    }

    if (cartaActiva <  cartasActuales.length - 1) {
      const proximaCartaIndex = cartaActiva + 1;
      setCartaActiva(proximaCartaIndex);
      setCartaRevelada(false);
      setPujaActual(0);
      setJugadorPujando(null);
      setPistasReveladas(1);
      setJugadoresEnPozo([]);
      setSubastaFase("clasificacion");
      setBiddingLocked(false);
      setTimer(40);
    } else {
      setBiddingLocked(true);
      setTimer(null);
      if (
        eventosOcurridos < 2 &&
        posicionActual < 10 &&
        Math.random() < 0.35
      ) {
        // Nota: El evento MercadoInflado ya no tiene efecto en el precio de la IA
        dispararEvento(); 
      } else {
        siguienteRonda();
      }
    }
  };

  const asignarCartaAlAzar = useCallback(() => {
    const carta = cartasActuales[cartaActiva];
    const posicion = POSICIONES[posicionActual];
    
    // Encontrar participantes que AÚN NO compraron en esta ronda
    const participantesSinJugador = jugadores.filter(
      (j) => !j.equipo.some((c) => c.posicion === posicion)
    );

    if (participantesSinJugador.length > 0) {
      // Seleccionar uno al azar
      const ganadorAzar =
        participantesSinJugador[
          Math.floor(Math.random() * participantesSinJugador.length)
        ];
      
      const precioCompra = carta.minimo;

      // Asignar la carta y descontar presupuesto
      const nuevosJugadores = jugadores.map((j) => {
        if (j.id === ganadorAzar.id) {
          const cartaComprada = {
            ...carta,
            precio: precioCompra,
            posicion: posicion,
          };
          return {
            ...j,
            presupuesto: j.presupuesto - precioCompra,
            equipo: [...j.equipo, cartaComprada],
          };
        }
        return j;
      });
      setJugadores(nuevosJugadores);
      
    } else {
      // Si (por alguna razón) todos ya tienen jugador, simplemente se saltea
      // (esto aplica al jugador N+1 si todos ya compraron)
      setSaltearConteoRonda((prev) => prev + 1); // Contamos el skip
    }

    // Terminar la subasta de esta carta
    setCartaRevelada(true);
    setMostrarBotonAvanzar(true);
    setTimer(null);
  }, [cartasActuales, cartaActiva, jugadores, posicionActual]);

  const dispararEvento = () => {
    setEventosOcurridos(eventosOcurridos + 1);

    let poolEventos = [...EVENTOS_SORPRESA];
    // Ya no filtramos MercadoInflado, aunque no tenga efecto en el precio
    if (posicionActual < 3) {
      poolEventos = poolEventos.filter(
        (e) => e.id !== "FUGA_TALENTO" && e.id !== "ROBO_JUGADOR"
      );
    }

    const eventoAzar =
    poolEventos[Math.floor(Math.random() * poolEventos.length)];
    let descripcion = eventoAzar.descripcion;
    let jugadoresActualizados = jugadores;

    // Pasamos posicionActual al efecto
    const listaJugadoresSegura = jugadores && !Array.isArray(jugadores) 
      ? Object.values(jugadores) 
      : (jugadores || []);

    // Pasamos la lista limpia al efecto
    
    const resultado = eventoAzar.efecto(listaJugadoresSegura);

    if (resultado && resultado.jugadores) {
      jugadoresActualizados = resultado.jugadores;
      if (resultado.descripcionFinal) {
        descripcion = resultado.descripcionFinal;
      }
    } else if (resultado && Array.isArray(resultado)) {
      jugadoresActualizados = resultado;
    } else if (
      (eventoAzar.id === "FUGA_TALENTO" ||
      eventoAzar.id === "SWAP_CAOTICO" ||
      eventoAzar.id === "ROBO_JUGADOR") &&
      !resultado // Si el efecto fue nulo (ej. no había jugadores para robar)
    ) {
      const eventoSeguro = EVENTOS_SORPRESA.find((e) => e.id === "INYECCION");
      jugadoresActualizados = eventoSeguro.efecto(contextoEfecto);
      descripcion = eventoSeguro.descripcion;
    }

    // if (eventoAzar.id === "MERCADO_INFLADO") { // <-- Ya no se usa
    //   setMercadoInflado(true);
    // }
    if (eventoAzar.id === "PATROCINADOR" && typeof descripcion === "function") {
      // Encontrar al jugador que recibió el dinero
      const jugadorGanador = jugadoresActualizados.find((j, index) => 
        jugadores[index] && j.presupuesto !== jugadores[index].presupuesto
      );
      descripcion = descripcion(jugadorGanador || {nombre: "Alguien"});
    }

    setJugadores(jugadoresActualizados);
    setEvento({ ...eventoAzar, descripcion });
    setFase("evento");
  };

  // --- FUNCIONES DE VOTACIÓN (YA NO USAN CALIDAD) ---
  const votar = (jugadorId) => {
    const pos = POSICIONES[votacionPosicion];
    setVotos({ ...votos, [pos]: jugadorId });
  };

  const siguienteVotacion = () => {
    if (votacionPosicion < 11) {
      setVotacionPosicion(votacionPosicion + 1);
    } else {
      setFase("final");
    }
  };

  const calcularResultados = () => {
    const puntos = {};
    jugadores.forEach((j) => {
      puntos[j.id] = 0;
    });
    Object.values(votos).forEach((jugadorIdVotado) => {
      if (puntos[jugadorIdVotado] !== undefined) {
        puntos[jugadorIdVotado]++;
      }
    });
    const ganadorVotos = jugadores.reduce(
      (max, j) => (puntos[j.id] > (puntos[max.id] || 0) ? j : max),
      jugadores[0] || {}
    );

    let resultadosCategorias = {};

    // --- ¡LÓGICA DE CALIDAD ELIMINADA! ---
    if (modoJuego === "categorias") {
      // if (categoriasActivas.includes("calidad")) { ... } // REMOVIDO

      if (categoriasActivas.includes("palmares")) {
        let maxPalmares = -1;
        let ganadorPalmares = null;
        jugadores.forEach((j) => {
          const totalPalmares = j.equipo.reduce(
            (acc, c) => acc + (c.palmares || 0), // (c.palmares || 0) para seguridad
            0
          );
          if (totalPalmares > maxPalmares) {
            maxPalmares = totalPalmares;
            ganadorPalmares = j;
          }
        });
        resultadosCategorias.palmares = {
          ganador: ganadorPalmares,
          valor: maxPalmares,
        };
      }
    }

    return {
      ganadorVotos: {
        ganador: ganadorVotos,
        valor: puntos[ganadorVotos.id] || 0,
      },
      resultadosCategorias,
      puntosTotales: puntos,
    };
  };

  useEffect(() => {
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: `Jugador ${i + 1}`,
        presupuesto: 900,
        equipo: [],
      }))
    );
  }, [numJugadores]);

  useEffect(() => {
    if (fase === "subasta") {
      generarCartasRonda();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, posicionActual]); // <-- BUG CORREGIDO

  useEffect(() => {
    if (timer === null) return;

    if (timer === 0) {
      if (subastaFase === "clasificacion") {
        setBiddingLocked(true);
        if (jugadoresEnPozo.length === 0) {
          if(saltearConteoRonda>0){
            asignarCartaAlAzar();
          }
          else{
            saltearCarta();
          }
        } else if (jugadoresEnPozo.length === 1) {
          // 1. Definimos el precio final localmente
          const precioFinal = cartasActuales[cartaActiva].minimo;
          const ganadorId = jugadoresEnPozo[0];
          const carta = cartasActuales[cartaActiva];

          // 2. Actualizamos la UI
          setPujaActual(precioFinal);
          setCartaRevelada(true);

          // 3. Aplicamos la compra manualmente para asegurar el descuento
          const nuevosJugadores = jugadores.map((j) => {
            if (j.id === ganadorId) {
              const cartaComprada = {
                ...carta,
                precio: precioFinal,
                posicion: POSICIONES[posicionActual],
              };
              return {
                ...j,
                presupuesto: j.presupuesto - precioFinal, // <-- AQUÍ ocurre el descuento real
                equipo: [...j.equipo, cartaComprada],
              };
            }
            return j;
          });
          
          setJugadores(nuevosJugadores);
          setMostrarBotonAvanzar(true);
          setTimer(null);
        } else {
          setSubastaFase("puja");
          setPistasReveladas(2);
          setPujaActual(cartasActuales[cartaActiva].minimo);
          setJugadorPujando(null); // <-- CAMBIO: Nadie tiene la puja inicial
          setTimer(40);
          setBiddingLocked(false);
        }
      } else if (subastaFase === "puja") {
        setBiddingLocked(true);
        setCartaRevelada(true);

        if (jugadorPujando) {
          // Si alguien pujó, se confirma su compra normalmente
          confirmarCompra();
        } else {
          // --- CORRECCIÓN: Empate en la base ---
          // Si nadie pujó, hay múltiples jugadores en el pozo que pagaron la base.
          // Se debe asignar al azar a uno de ellos.
          const ganadorId = jugadoresEnPozo[Math.floor(Math.random() * jugadoresEnPozo.length)];
          const carta = cartasActuales[cartaActiva];
          const precioFinal = carta.minimo;

          const nuevosJugadores = jugadores.map((j) => {
            if (j.id === ganadorId) {
              const cartaComprada = {
                ...carta,
                precio: precioFinal,
                posicion: POSICIONES[posicionActual],
              };
              return {
                ...j,
                presupuesto: j.presupuesto - precioFinal,
                equipo: [...j.equipo, cartaComprada],
              };
            }
            return j;
          });

          setJugadores(nuevosJugadores);
          setJugadorPujando(ganadorId); // Actualizamos para que se sepa quién ganó
          setMostrarBotonAvanzar(true);
          setTimer(null);
        }
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [
    timer,
    subastaFase,
    jugadoresEnPozo,
    cartasActuales,
    cartaActiva,
    confirmarCompra,
    saltearCarta,
    saltearConteoRonda,
    asignarCartaAlAzar,
  ]);

  // --- RENDERIZADO ---
  if (fase === "setup") {
    return (
      <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-4 text-green-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-green-900 mb-2">
                ⚽ Subasta Oculta
              </h1>
            </div>
            {/* Selector de Jugadores */}
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Participantes
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNumJugadores(Math.max(2, numJugadores - 1))}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors"
                >
                  <Minus size={24} />
                </button>
                <span className="text-4xl font-bold text-green-900">
                  {numJugadores}
                </span>
                <button
                  onClick={() => setNumJugadores(Math.min(8, numJugadores + 1))}
                  className="bg-green-600 hover:bg-green-700 text-white rounded-full p-2 transition-colors"
                >
                  <Plus size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jugadores.map((j, index) => (
                  <div
                    key={j.id}
                    className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <Users className="text-green-600" />
                    <input
                      type="text"
                      value={j.nombre}
                      onChange={(e) => {
                        const nuevos = [...jugadores];
                        const jugadorActualizado = {...nuevos[index], nombre: e.target.value};
                        nuevos[index] = jugadorActualizado;
                        setJugadores(nuevos);
                      }}
                      className="text-lg w-full font-semibold border-b-2 border-gray-300 focus:border-green-600 outline-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Selector de Modo de Juego (SIMPLIFICADO) */}
            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Modo de Juego
              </h2>
              <div className="flex gap-4 mb-4">
                <button
                  onClick={() => setModoJuego("clasico")}
                  className={`flex-1 p-4 rounded-lg text-lg font-bold transition-all ${
                    modoJuego === "clasico"
                      ? "bg-green-700 text-white shadow-lg scale-105"
                      : "bg-white text-green-800 hover:bg-green-100"
                  }`}
                >
                  <Trophy className="inline mr-2" size={20} />
                  Clásico
                </button>
                <button
                  onClick={() => setModoJuego("categorias")}
                  className={`flex-1 p-4 rounded-lg text-lg font-bold transition-all ${
                    modoJuego === "categorias"
                      ? "bg-green-700 text-white shadow-lg scale-105"
                      : "bg-white text-green-800 hover:bg-green-100"
                  }`}
                >
                  <Star className="inline mr-2" size={20} />
                  Categorías
                </button>
              </div>
              {modoJuego === "categorias" && (
                <div className="bg-white rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    Elige categorías extra:
                  </h3>
                  <div className="space-y-2">
                    {CATEGORIAS_EXTRA.map((cat) => ( // Ahora solo debería mostrar "Palmarés"
                      <label
                        key={cat.id}
                        className="flex items-center gap-3 p-2 rounded hover:bg-green-50"
                      >
                        <input
                          type="checkbox"
                          className="h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                          checked={categoriasActivas.includes(cat.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setCategoriasActivas([
                                ...categoriasActivas,
                                cat.id,
                              ]);
                            } else {
                              setCategoriasActivas(
                                categoriasActivas.filter((c) => c !== cat.id)
                              );
                            }
                          }}
                        />
                        <span className="text-gray-700">{cat.nombre}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={iniciarJuego}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              ¡Comenzar Subasta!
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (fase === "evento") {
    const Icono = evento.icono;
    return (
      <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center transition-opacity duration-500">
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-2xl mx-auto text-center">
          <Icono className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {evento.titulo}
          </h1>
          <p className="text-xl text-gray-700 mb-8">{evento.descripcion}</p>
          <button
            onClick={siguienteRonda}
            className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
          >
            Continuar a la Ronda {posicionActual + 2}
          </button>
        </div>
      </div>
    );
  }

  // --- ¡NUEVO ESTADO DE CARGA DE IA! ---
  if (subastaCargando) {
    return (
      <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-4 flex items-center justify-center">
        <div className="flex flex-col items-center text-white">
          <Loader2 size={64} className="animate-spin mb-4" />
          <p className="text-xl font-bold text-yellow-300">¡La IA está pensando!</p>
          <p className="text-lg">Generando pistas y precios para la ronda...</p>
        </div>
      </div>
    );
  }

  if (fase === "subasta") {
    const carta = cartasActuales[cartaActiva];

    if (!carta) {
      // Esto puede pasar si la DB no tiene jugadores para una posición
      // O si la IA falló en todas las cartas (raro)
      return (
        <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-4 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold mb-4">Error al cargar cartas.</h1>
            <p className="mb-4">Puede que la base de datos no tenga jugadores para esta posición.</p>
            <button
              onClick={siguienteRonda}
              className="bg-yellow-600 hover:bg-yellow-700 text-yellow-900 font-bold py-2 px-4 rounded"
            >
              Saltear Ronda
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-linear-to-br from-green-900 via-green-800 to-emerald-900 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-green-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <h2 className="text-3xl font-bold text-green-900 mb-2 sm:mb-0">
                {POSICIONES_NOMBRES[POSICIONES[posicionActual]]}
              </h2>
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-600">
                  Carta {cartaActiva + 1} de {cartasActuales.length}
                </p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {Array.from({ length: cartasActuales.length }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === cartaActiva ? "bg-green-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* --- LADO IZQUIERDO: LA CARTA MISTERIOSA --- */}
              <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white">
                <div className="text-center">
                  {/* 1. La "Carta Oculta" */}
                  {!cartaRevelada ? (
                    <div className="w-full h-96 flex flex-col items-center justify-center mb-6">
                      <Users size={120} className="text-slate-700" />
                      <p className="text-4xl font-bold text-slate-600 mt-4">
                        {POSICIONES_NOMBRES[POSICIONES[posicionActual]]}
                      </p>
                    </div>
                  ) : (
                    /* 2. La Carta Revelada (SIN CALIDAD) */
                    <div className="w-full h-96 flex flex-col items-center justify-center mb-6 bg-green-500/20 rounded-lg p-6 animate-pulse">
                      <p className="text-5xl font-bold mb-4">{carta.nombre}</p>
                      <p className="text-2xl text-gray-300 mb-6">
                        {carta.contexto}
                      </p>
                      <div className="flex justify-center gap-6 text-xl">
                        {/* --- CALIDAD REMOVIDA --- */}
                        <span className="bg-yellow-500 text-yellow-900 px-4 py-2 rounded">
                          Palmarés: {carta.palmares}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 3. Las Pistas (AHORA VIENEN DE LA IA) */}
                  {!cartaRevelada && (
                    <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6 min-h-[180px]">
                      <p className="text-xl font-bold mb-4 text-yellow-400">
                        PISTAS
                      </p>
                      <div className="space-y-2 text-left">
                        {carta.pistas
                          .slice(0, pistasReveladas)
                          .map((pista, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <span className="text-yellow-400 text-xl">•</span>
                              <p className="text-lg">{pista}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* 4. Precio y Timer (PRECIO AHORA ES DE IA) */}
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 mb-4">
                    <p className="text-xl font-bold">
                      Precio{" "}
                      {subastaFase === "clasificacion"
                        ? "Mínimo (IA)"
                        : "Actual"}
                    </p>
                    <p className="text-5xl font-bold text-red-400">
                      ${pujaActual === 0 ? carta.minimo : pujaActual}M
                    </p>
                  </div>

                  {timer !== null && !mostrarBotonAvanzar && (
                    <div className="mb-4 text-center">
                      <p className="text-xl font-bold text-white">
                        {subastaFase === "clasificacion"
                          ? "¡Tiempo para entrar!"
                          : "¡ÚLTIMA OFERTA!"}
                      </p>
                      <div
                        className={`flex items-center justify-center gap-4 ${
                          timer <= 5 ? "text-red-500" : "text-white"
                        }`}
                      >
                        {/* --- ¡CAMBIO! Botón de Adjudicar --- */}
                        <button 
                          onClick={terminarPujaManualmente} 
                          title="Adjudicar / Saltear"
                          className="p-3 bg-green-600 hover:bg-green-700 rounded-full"
                        >
                          <Gavel size={40}/>
                        </button>
                        <p
                          className={`text-7xl font-bold ${
                            timer <= 5 ? "animate-pulse" : ""
                          }`}
                        >
                          {timer}
                        </p>
                      </div>
                    </div>
                  )}

                  {pujaActual > 0 &&
                    subastaFase === "puja" &&
                    !cartaRevelada && (
                      <div className="mt-4 bg-yellow-400 text-yellow-900 rounded-lg p-4">
                        <p className="text-xl font-bold">Puja Ganadora</p>
                        <p className="text-4xl font-bold">${pujaActual}M</p>
                        <p className="text-sm mt-2 font-semibold">
                          {
                            jugadores.find((j) => j.id === jugadorPujando)
                              ?.nombre
                          }
                        </p>
                      </div>
                    )}
                </div>
              </div>

              {/* --- LADO DERECHO: BOTONES DE PUJA --- */}
              <div className="flex flex-col h-full">
                {mostrarBotonAvanzar ? (
                  <div className="flex-1 flex items-center justify-center">
                    <button
                      onClick={siguienteCarta}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg font-bold text-2xl transition-colors animate-pulse"
                    >
                      ➡️ Siguiente Jugador
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Presupuestos y Pujas
                    </h3>
                    {timer !== null && !mostrarBotonAvanzar && (
                      <div className="text-center p-3 bg-yellow-100 rounded-lg border-2 border-yellow-300 mb-4">
                        <p className="font-bold text-yellow-800">
                          {subastaFase === "clasificacion"
                            ? `¡FASE 1: ENTRAR AL POZO! (Coste: $${carta.minimo}M)`
                            : "¡FASE 2: SUBASTA FINAL!"}
                        </p>
                      </div>
                    )}
                    <div className="flex-1 space-y-4 max-h-[80vh] overflow-y-auto pr-2">
                      {biddingLocked &&
                        subastaFase !== "clasificacion" &&
                        !mostrarBotonAvanzar && (
                          <div className="text-center p-4 bg-gray-100 rounded-lg">
                            <p className="font-bold text-gray-600">
                              Cargando...
                            </p>
                          </div>
                        )}
                      {jugadores.map((j) => {
                        const estaEnElPozo = jugadoresEnPozo.includes(j.id);
                        let puedePujar = true;
                        const yaComproEnRonda = j.equipo.some(c => c.posicion === POSICIONES[posicionActual]);

                        if (biddingLocked || yaComproEnRonda) puedePujar = false; // <-- MODIFICAR ESTA LÍNEA

                        if (subastaFase === "puja" && !estaEnElPozo)
                          puedePujar = false;
                        // --- ¡CAMBIO AQUÍ! Bloqueo de puja ---
                        const esPujaMaxima = j.id === jugadorPujando;

                        const panelDeshabilitado =
                          subastaFase === "puja" && !estaEnElPozo;
                        return (
                          <div
                            key={j.id}
                            className={`bg-gray-50 rounded-lg p-4 transition-all ${
                              panelDeshabilitado ? "opacity-40" : ""
                            } ${
                              estaEnElPozo && subastaFase === 'clasificacion' ? "border-2 border-green-500" : ""
                            } ${
                              esPujaMaxima && subastaFase === 'puja' ? "border-2 border-yellow-500" : ""
                            }`}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-bold text-gray-800 text-lg">
                                {j.nombre} {estaEnElPozo && subastaFase === 'clasificacion' && "✅"}
                                {esPujaMaxima && subastaFase === 'puja' && " 👑"}
                              </span>
                              <span className="text-green-700 font-bold text-xl">
                                ${j.presupuesto}M
                              </span>
                            </div>
                            {subastaFase === "clasificacion" ? (
                              <button
                                onClick={() => pujar(j.id, carta.minimo)}
                                disabled={
                                  biddingLocked ||
                                  yaComproEnRonda||
                                  j.presupuesto < carta.minimo ||
                                  estaEnElPozo
                                }
                                className={`w-full py-3 rounded font-semibold text-sm transition-colors ${
                                  estaEnElPozo
                                    ? "bg-green-600 text-white"
                                    : "bg-yellow-500 hover:bg-yellow-600 text-yellow-900 disabled:bg-gray-300 disabled:cursor-not-allowed"
                                }`}
                              >
                                {estaEnElPozo
                                  ? "¡EN EL POZO!"
                                  : `Entrar (Pagar $${carta.minimo}M)`}
                              </button>
                            ) : (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => pujar(j.id, 10)}
                                  disabled={
                                    !puedePujar ||
                                    j.presupuesto < pujaActual + 10 ||
                                    esPujaMaxima // <-- CAMBIO
                                  }
                                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
                                >
                                  +10M
                                </button>
                                <button
                                  onClick={() => pujar(j.id, 20)}
                                  disabled={
                                    !puedePujar ||
                                    j.presupuesto < pujaActual + 20 ||
                                    esPujaMaxima // <-- CAMBIO
                                  }
                                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
                                >
                                  +20M
                                </button>
                                <button
                                  onClick={() => pujar(j.id, 50)}
                                  disabled={
                                    !puedePujar ||
                                    j.presupuesto < pujaActual + 50 ||
                                    esPujaMaxima // <-- CAMBIO
                                  }
                                  className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
                                >
                                  +50M
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "votacion") {
    const pos = POSICIONES[votacionPosicion];
    const nombrePos = POSICIONES_NOMBRES[pos];
    const jugadoresEnPosicion = jugadores
      .map((j) => ({
        jugador: j,
        carta: j.equipo.find((c) => c.posicion === pos),
      }))
      .filter((item) => item.carta);
    const votoActual = votos[pos];

    return (
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-purple-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-4xl font-bold text-purple-900 mb-2 text-center">
              Votación ({votacionPosicion + 1}/12)
            </h2>
            <p className="text-2xl text-gray-600 mb-8 text-center">
              ¿Quién tiene el mejor{" "}
              <span className="font-bold">{nombrePos}</span>?
            </p>

            <div className="space-y-4 mb-8">
              {jugadoresEnPosicion.length > 0 ? (
                jugadoresEnPosicion.map(({ jugador, carta }) => (
                  <button
                    key={jugador.id}
                    onClick={() => votar(jugador.id)}
                    className={`w-full p-5 rounded-lg border-4 transition-all ${
                      votoActual === jugador.id
                        ? "bg-purple-600 text-white border-purple-800 scale-105 shadow-lg"
                        : "bg-white hover:bg-purple-50 border-purple-200 hover:border-purple-400"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p className="text-xl font-bold">{carta.nombre}</p>
                        <p className="text-sm font-semibold opacity-80">
                          Comprado por: {jugador.nombre} (${carta.precio}M)
                        </p>
                      </div>
                      <div className="text-right">
                        {/* --- CALIDAD REMOVIDA --- */}
                        <span className="block text-xs font-semibold opacity-80">
                          🏆 {carta.palmares}
                        </span>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500 italic text-lg">
                  Nadie compró un {nombrePos} esta partida.
                </p>
              )}
            </div>

            <button
              onClick={siguienteVotacion}
              disabled={!votoActual && jugadoresEnPosicion.length > 0}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white text-xl font-bold py-4 rounded-xl transition-colors disabled:cursor-not-allowed"
            >
              {votacionPosicion < 11
                ? "Siguiente Posición"
                : "🏆 Ver Resultados Finales"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "final") {
    const { ganadorVotos, resultadosCategorias, puntosTotales } =
      calcularResultados();

    const jugadoresOrdenados = [...jugadores].sort(
      (a, b) => (puntosTotales[b.id] || 0) - (puntosTotales[a.id] || 0)
    );

    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-yellow-700 to-orange-800 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-yellow-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <Trophy className="inline text-yellow-500 w-24 h-24 mb-4" />
              <h1 className="text-5xl font-bold text-yellow-900 mb-2">
                ¡{ganadorVotos.ganador?.nombre || "Nadie"} Gana el "Mejor
                Equipo"!
              </h1>
              <p className="text-2xl text-gray-600">
                Con {ganadorVotos.valor || 0} de 12 votos de posición
              </p>
            </div>

            {/* Podio de Votos */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                📊 "Mejor Equipo" (por Votos)
              </h3>
              <div className="space-y-3">
                {jugadoresOrdenados.map((j, index) => (
                  <div
                    key={j.id}
                    className={`p-4 rounded-lg flex items-center shadow ${
                      index === 0
                        ? "bg-yellow-100 border-2 border-yellow-400"
                        : "bg-gray-50"
                    }`}
                  >
                    <span
                      className={`text-3xl font-bold w-12 ${
                        index === 0
                          ? "text-yellow-600"
                          : index === 1
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {index + 1}°
                    </span>
                    <div className="flex-1">
                      <p className="text-xl font-bold text-gray-900">
                        {j.nombre}
                      </p>
                      <p className="text-sm text-gray-600">
                        Presupuesto Restante: ${j.presupuesto}M
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-800">
                      {puntosTotales[j.id] || 0} Puntos
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Planteles Finales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jugadores.map((j) => (
                  <EquipoFinal key={j.id} jugador={j} />
                ))}
              </div>
            </div>

            {/* Ganadores de Categorías Extra (SIN CALIDAD) */}
            {modoJuego === "categorias" && categoriasActivas.length > 0 && (
              <div className="bg-green-50 rounded-xl p-6 mb-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-green-900 mb-4 text-center">
                  <Star className="inline mr-2" />
                  Ganadores de Categorías Extra
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* --- CALIDAD REMOVIDA --- */}
                  {categoriasActivas.includes("palmares") && (
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-bold text-lg text-green-800">
                        Más Títulos (Palmarés)
                      </p>
                      <p className="text-2xl font-bold">
                        {resultadosCategorias.palmares?.ganador?.nombre || "-"}
                      </p>
                      <p className="text-gray-600">
                        Total de {resultadosCategorias.palmares?.valor || 0} 🏆
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                setFase("setup");
                // Reseteamos estados clave para una nueva partida
                setPosicionActual(0);
                setCartasActuales([]);
                setEvento(null);
                // setMercadoInflado(false); // Ya no se usa
                setEventosOcurridos(0);
              }}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              🔄 Jugar de Nuevo (Mismo Juego)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default JuegoSubastaClasica;