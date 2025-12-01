/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  Trophy,
  DollarSign,
  Plus,
  Minus,
  Star,
  Gavel,
  ArrowLeft,
  XCircle, // Icono para eliminar
  Eye, // <-- Icono para ver misión
} from "lucide-react";
import {
  JUGADORES_DB,
  POSICIONES,
  POSICIONES_NOMBRES,
} from "./database.js"; // <-- Asegúrate que sea .jsx

// --- ¡LISTA DE MISIONES (CANTIDAD FIJA Y ADIVINABLES)! ---
const MISIONES_SECRETAS = [
  // --- Trofeos (Prestigio) ---
  "Conseguir 5 jugadores Campeones del Mundo.",
  "Conseguir 6 jugadores que hayan ganado la Champions League.",
  "Conseguir 6 jugadores que hayan ganado la Copa Libertadores.",
  "Conseguir 3 jugadores que hayan ganado el Balón de Oro.",
  "Conseguir 3 jugadores que hayan ganado el 'Triplete' (Liga, Copa, Champions en un mismo año).",
  "Conseguir 3 jugadores que hayan ganado Mundial y Champions League.",

  // --- Clubes (Históricos) ---
  "Conseguir 4 jugadores que hayan jugado en Real Madrid.",
  "Conseguir 4 jugadores que hayan jugado en FC Barcelona.",
  "Conseguir 4 jugadores que hayan jugado en Boca Juniors.",
  "Conseguir 4 jugadores que hayan jugado en River Plate.",
  "Conseguir 4 jugadores que hayan jugado en Manchester United.",
  "Conseguir 4 jugadores que hayan jugado en Juventus.",
  "Conseguir 4 jugadores que hayan jugado en AC Milan.",
  "Conseguir 4 jugadores que hayan jugado en Inter de Milán.",
  "Conseguir 4 jugadores que hayan jugado en Bayern Munich.",
  "Conseguir 4 jugadores que hayan jugado en Liverpool.",

  // --- Ligas (Dominio) ---
  "Conseguir 6 jugadores de la Premier League (actual o histórica).",
  "Conseguir 6 jugadores de la Serie A (actual o histórica).",
  "Conseguir 6 jugadores de La Liga (España) (actual o histórica).",
  "Conseguir 6 jugadores de la Liga Argentina (actual o histórica).",
  
  // --- Nacionalidades (Temáticos) ---
  "Conseguir 5 jugadores de nacionalidad Brasileña.",
  "Conseguir 5 jugadores de nacionalidad Francesa.",
  "Conseguir 5 jugadores de nacionalidad Alemana.",
  "Conseguir 5 jugadores de nacionalidad Italiana.",
  "Conseguir 4 jugadores Africanos.",
  "Conseguir 5 jugadores Sudamericanos (que NO sean Argentinos).",
  "Conseguir un equipo completo (12) solo con jugadores Europeos.",
  "Conseguir un equipo completo (12) solo con jugadores Sudamericanos.",
  "Conseguir 4 jugadores que hayan jugado en Sudamérica Y en Europa."
];

// Función para barajar las misiones
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Componente de Equipo (simplificado, sin votación)
const EquipoFinal = ({ jugador }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md border">
      <h3 className="text-xl font-bold text-blue-800 mb-3">
        {jugador.nombre}
      </h3>
      {/* Misión Secreta (se muestra en la pantalla final) */}
      <div className="bg-blue-100 border border-blue-300 p-2 rounded-md mb-3">
        <p className="text-xs font-bold text-blue-800">Misión Secreta:</p>
        <p className="text-xs text-blue-700">{jugador.misionSecreta}</p>
      </div>
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
                  <span className="text-xs text-blue-600 ml-2">
                    ({carta.calidad} ⭐)
                  </span>
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
      <p className="text-right text-blue-700 font-bold mt-3">
        Presupuesto Restante: ${jugador.presupuesto}M
      </p>
    </div>
  );
};

const JuegoSubastaObjetivos = ({ onVolver }) => {
  const [fase, setFase] = useState("setup");
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([]);
  const [posicionActual, setPosicionActual] = useState(0);
  const [cartasActuales, setCartasActuales] = useState([]);
  const [cartaActiva, setCartaActiva] = useState(0);
  const [pujaActual, setPujaActual] = useState(0);
  const [jugadorPujando, setJugadorPujando] = useState(null);
  const [biddingLocked, setBiddingLocked] = useState(true);
  const [timer, setTimer] = useState(null);
  const [mostrarBotonAvanzar, setMostrarBotonAvanzar] = useState(false);
  const [jugadoresEliminados, setJugadoresEliminados] = useState([]);
  const [misionModal, setMisionModal] = useState(null); // Estado para el modal
  const [skipCountRonda, setSkipCountRonda] = useState(0); // <-- ¡AGREGAR ESTA LÍNEA!


  const generarCartasRonda = useCallback(() => {
    const posicion = POSICIONES[posicionActual];
    const jugadoresDisponibles = [...(JUGADORES_DB[posicion] || [])];
    const seleccionados = [];
    // Filtra jugadores eliminados antes de contar
    const numJugadoresActivos = jugadores.filter(
      (j) => !jugadoresEliminados.includes(j.id)
    ).length;
    
    // Si no quedan jugadores activos, no generes cartas
    if (numJugadoresActivos === 0) {
      setCartasActuales([]);
      setTimer(null);
      setBiddingLocked(true);
      // Saltear a la siguiente ronda (o al final)
      setTimeout(siguienteRonda, 100); // Pequeño delay para evitar loops
      return;
    }

    const numCartasRonda = numJugadoresActivos + 1; // n+1 cartas por JUGADOR ACTIVO

    for (let i = 0; i < numCartasRonda; i++) {
      if (jugadoresDisponibles.length === 0) break;
      const index = Math.floor(Math.random() * jugadoresDisponibles.length);
      const jugador = { ...jugadoresDisponibles[index] };

      let minPuja = Math.floor(Math.random() * (70 - 20 + 1)) + 20;
      minPuja = Math.round(minPuja / 5) * 5;
      jugador.minimo = minPuja;

      seleccionados.push(jugador);
      jugadoresDisponibles.splice(index, 1);
    }
    
    // Si no se seleccionaron cartas (ej. DB vacía), saltear
    if (seleccionados.length === 0) {
      setCartasActuales([]);
      setTimer(null);
      setBiddingLocked(true);
      setTimeout(siguienteRonda, 100);
      return;
    }

    setCartasActuales(seleccionados);
    setCartaActiva(0);
    setPujaActual(0);
    setJugadorPujando(null);

    // --- LÓGICA DE SUBASTA DIRECTA ---
    setBiddingLocked(false);
    if (seleccionados[0]) {
      setPujaActual(seleccionados[0].minimo); // Fija el precio base
    }
    setSkipCountRonda(0); // Resetea el contador de saltos
    setTimer(40); // ¡Timer de puja directo!
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posicionActual, jugadores, jugadoresEliminados]); 

  const iniciarJuego = () => {
    // Barajar las misiones
    const misionesBarajadas = shuffleArray([...MISIONES_SECRETAS]);

    // Asignar misiones a los jugadores (y resetearlos)
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: jugadores[i]?.nombre || `Jugador ${i + 1}`, // Mantener nombres si ya existen
        presupuesto: 900,
        equipo: [],
        misionSecreta: misionesBarajadas.pop() || "¡Error! No quedan misiones." // Asigna una misión
      }))
    );
    
    // Resetear estado de eliminación
    setJugadoresEliminados([]);
    
    setFase("mision"); // <-- CAMBIO: Va a la fase de misiones
  };

  // --- ¡NUEVA FUNCIÓN PARA EMPEZAR LA SUBASTA! ---
  const empezarSubasta = () => {
    setFase("subasta");
    setPosicionActual(0); // <-- Ahora sí seteamos la primera ronda
  };

  // Lógica de puja simplificada
  const pujar = (jugadorId, monto) => {
    // --- ¡CAMBIO AQUÍ! Bloqueo de puja ---
    if (biddingLocked || jugadoresEliminados.includes(jugadorId) || jugadorId === jugadorPujando) return;

    const jugador = jugadores.find((j) => j.id === jugadorId);
    const yaComproEnRonda = jugador.equipo.some(c => c.posicion === POSICIONES[posicionActual]);
    if (yaComproEnRonda) return;

    const nuevaPuja = pujaActual + monto;

    if (jugador.presupuesto >= nuevaPuja && nuevaPuja > pujaActual) {
      setPujaActual(nuevaPuja);
      setJugadorPujando(jugadorId);
      setTimer(40); // Reinicia el timer
    }
  };

  const confirmarCompra = useCallback(() => {
    if (jugadorPujando) {
      const carta = cartasActuales[cartaActiva];
      if (!carta) return; // Seguridad
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
    setSkipCountRonda((prev) => prev + 1);
  }, []);

  // --- ¡NUEVA FUNCIÓN! Terminar puja manualmente ---
  const terminarPujaManualmente = () => {
    if (timer === null || mostrarBotonAvanzar) return; // No hacer nada si ya terminó
    setTimer(0); // Forzar el timer a 0
  };

  const siguienteRonda = useCallback(() => {
    setTimer(null);
    if (posicionActual < 11) {
      setPosicionActual(posicionActual + 1);
      setFase("subasta");
    } else {
      setFase("final");
    }
  }, [posicionActual]);

  const asignarCartaAlAzar = useCallback(() => {
    const carta = cartasActuales[cartaActiva];
    if (!carta) { // Seguridad
      saltearCarta(); // Si no hay carta, solo saltea
      return;
    }
    const posicion = POSICIONES[posicionActual];
    
    // Encontrar participantes activos que AÚN NO compraron en esta ronda
    const participantesSinJugador = jugadores.filter(
      (j) =>
        !jugadoresEliminados.includes(j.id) &&
        !j.equipo.some((c) => c.posicion === posicion)
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
      // Si todos los activos ya tienen jugador, se saltea
      setSkipCountRonda((prev) => prev + 1); // Contamos el skip
    }

    // Terminar la subasta de esta carta
    setMostrarBotonAvanzar(true);
    setTimer(null);
  }, [
    cartasActuales,
    cartaActiva,
    jugadores,
    posicionActual,
    jugadoresEliminados,
  ]);

  const siguienteCarta = () => {
    // Filtra jugadores eliminados antes de contar
    const numJugadoresActivos = jugadores.filter(
      (j) => !jugadoresEliminados.includes(j.id)
    ).length;

    // Si no hay jugadores, saltar a la ronda final
    if (numJugadoresActivos === 0) {
      setMostrarBotonAvanzar(false);
      setBiddingLocked(true);
      setFase("final");
      return;
    }
    
    const numCartasRonda = numJugadoresActivos + 1;

    if (cartaActiva < numCartasRonda - 1 && cartaActiva < cartasActuales.length - 1) {
      // --- AVANZA A CARTA SIGUIENTE ---
      setMostrarBotonAvanzar(false);
      setBiddingLocked(true);
      const proximaCartaIndex = cartaActiva + 1;
      setCartaActiva(proximaCartaIndex);
      setPujaActual(cartasActuales[proximaCartaIndex].minimo); 
      setJugadorPujando(null);
      setBiddingLocked(false);
      setTimer(40);
    } else {
      // --- FIN DE LA RONDA ---
      setMostrarBotonAvanzar(false);
      setBiddingLocked(true);
      setTimer(null);

      // ¡AQUÍ LA NUEVA LÓGICA!
      // Es ronda 5 (MCD, index 4) o ronda 11 (DT, index 10)
      const esRondaDeEliminacion = (posicionActual === 4 || posicionActual === 10);

      if (esRondaDeEliminacion) {
        // ¡Ir a la FASE DE ACUSACIÓN!
        setFase("acusacion");
      } else {
        // Fin de ronda normal, continuar
        siguienteRonda();
     }
    }
  };
  // --- ¡NUEVA FUNCIÓN PARA ELIMINAR! ---
  const eliminarJugador = (jugadorId) => {
    // Se elimina la confirmación (window.confirm no es ideal en apps web)
    // La eliminación es directa al hacer clic.
    setJugadoresEliminados((prev) => {
        if (prev.includes(jugadorId)) {
            return prev; // Ya está eliminado
        }
        return [...prev, jugadorId];
    });
  };

  const continuarDesdeAcusacion = () => {
    // Revisa si queda un solo jugador
    const jugadoresActivos = jugadores.filter(
      (j) => !jugadoresEliminados.includes(j.id)
    ).length;

    if (jugadoresActivos <= 1) {
      // ¡Hay un ganador!
      setFase("final");
    } else {
      // Queda más de un jugador, continuar el juego
      siguienteRonda(); // Esto ya pasa a la siguiente posición y fase "subasta"
    }
  };

  useEffect(() => {
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: `Jugador ${i + 1}`,
        // El resto de props se setean en iniciarJuego
      }))
    );
  }, [numJugadores]);

  useEffect(() => {
    if (fase === "subasta") {
      generarCartasRonda();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, posicionActual]); // <-- ¡BUG CORREGIDO!

  // Timer simplificado
  useEffect(() => {
    if (timer === null) return;

    if (timer === 0) {
      setBiddingLocked(true);
      if (jugadorPujando) {
        confirmarCompra();
      } else {
        // ¡AQUÍ LA NUEVA LÓGICA DE SKIP!
        if (skipCountRonda > 0) {
          // Ya se salteó uno, forzar asignación
          asignarCartaAlAzar();
        } else {
          // Es el primer skip
          saltearCarta();
        }
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, jugadorPujando, confirmarCompra, saltearCarta,skipCountRonda,asignarCartaAlAzar]);

  // --- RENDERIZADO ---
  if (fase === "setup") {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-4 text-blue-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-blue-900 mb-2">
                🎯 Subasta de Objetivos
              </h1>
            </div>
            {/* Selector de Jugadores */}
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Participantes
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNumJugadores(Math.max(2, numJugadores - 1))}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
                >
                  <Minus size={24} />
                </button>
                <span className="text-4xl font-bold text-blue-900">
                  {numJugadores}
                </span>
                <button
                  onClick={() => setNumJugadores(Math.min(8, numJugadores + 1))}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 transition-colors"
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
                    <Users className="text-blue-600" />
                    <input
                      type="text"
                      value={j.nombre}
                      onChange={(e) => {
                        const nuevos = [...jugadores];
                        // Truco para actualizar el array de estado sin mutar
                        const jugadorActualizado = {...nuevos[index], nombre: e.target.value};
                        nuevos[index] = jugadorActualizado;
                        setJugadores(nuevos);
                      }}
                      className="text-lg w-full font-semibold border-b-2 border-gray-300 focus:border-blue-600 outline-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={iniciarJuego}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              ¡Comenzar!
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- ¡NUEVA FASE DE MISIÓN! ---
  if (fase === "mision") {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-700 to-gray-900 p-8">
        {/* --- MODAL DE MISIÓN SECRETA (reutilizado) --- */}
        {misionModal && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setMisionModal(null)}
          >
            <div 
              className="bg-white rounded-lg p-10 max-w-lg text-center mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={48} className="mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TU MISIÓN SECRETA</h2>
              <p className="text-xl text-gray-700 mb-8">{misionModal}</p>
              <button
                onClick={() => setMisionModal(null)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Ocultar Misión
              </button>
            </div>
          </div>
        )}
        {/* --- FIN MODAL --- */}

        <div className="max-w-4xl mx-auto">
          <button
            onClick={onVolver}
            className="mb-4 text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-blue-900 mb-2">
                🎯 Revisión de Misiones
              </h1>
              <p className="text-xl text-gray-600">
                ¡Qué nadie espíe! Cada jugador debe ver su misión secreta.
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Participantes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jugadores.map((j) => (
                  <div
                    key={j.id}
                    className="flex items-center justify-between gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Users className="text-blue-600" />
                      <span className="text-lg font-semibold text-gray-800">{j.nombre}</span>
                    </div>
                    <button
                      onClick={() => setMisionModal(j.misionSecreta)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2"
                      title="Ver Misión Secreta"
                    >
                      <Eye size={20} />
                      Ver Misión
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={empezarSubasta}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-2xl font-bold py-4 rounded-xl transition-colors animate-pulse"
            >
              ¡COMENZAR SUBASTA (Ronda 1)!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "subasta") {
    const carta = cartasActuales[cartaActiva]; // Ronda 5 (MCD) o Ronda 11 (DT)

    if (!carta) {
      return (
        <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 p-4 flex items-center justify-center">
          <div className="text-white text-2xl font-bold">
            Cargando cartas...
          </div>
        </div>
      );
    }
    
    // Filtra jugadores eliminados antes de contar
    const numJugadoresActivos = jugadores.filter(
      (j) => !jugadoresEliminados.includes(j.id)
    ).length;
    const numCartasRonda = numJugadoresActivos + 1;

    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 p-4">
        {/* --- MODAL DE MISIÓN SECRETA (reutilizado) --- */}
        {misionModal && (
          <div 
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setMisionModal(null)}
          >
            <div 
              className="bg-white rounded-lg p-10 max-w-lg text-center mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Eye size={48} className="mx-auto text-blue-600 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">TU MISIÓN SECRETA</h2>
              <p className="text-xl text-gray-700 mb-8">{misionModal}</p>
              <button
                onClick={() => setMisionModal(null)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
              >
                Ocultar Misión
              </button>
            </div>
          </div>
        )}
        {/* --- FIN MODAL --- */}

        <div className="max-w-7xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-blue-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>

          

          <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
              <h2 className="text-3xl font-bold text-blue-900 mb-2 sm:mb-0">
                {POSICIONES_NOMBRES[POSICIONES[posicionActual]]}
              </h2>
              <div className="text-left sm:text-right">
                <p className="text-sm text-gray-600">
                  Carta {cartaActiva + 1} de {numCartasRonda}
                </p>
                <div className="flex gap-2 mt-1 flex-wrap">
                  {Array.from({ length: numCartasRonda }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i === cartaActiva ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* --- LADO IZQUIERDO: LA CARTA REVELADA --- */}
              <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-white">
                <div className="text-center">
                  <div className="w-full h-96 flex flex-col items-center justify-center mb-6 bg-blue-500/20 rounded-lg p-6">
                    <p className="text-5xl font-bold mb-4">{carta.nombre}</p>
                    <p className="text-2xl text-gray-300 mb-6">
                      {carta.contexto}
                    </p>
                    <div className="flex justify-center gap-6 text-xl">
                      <span className="bg-blue-500 px-4 py-2 rounded">
                        Calidad: {carta.calidad}/100
                      </span>
                      <span className="bg-yellow-500 text-yellow-900 px-4 py-2 rounded">
                        Palmarés: {carta.palmares}
                      </span>
                    </div>
                  </div>

                  {/* 4. Precio y Timer */}
                  <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-4 mb-4">
                    <p className="text-xl font-bold">Precio Actual</p>
                    <p className="text-5xl font-bold text-red-400">
                      ${pujaActual}M
                    </p>
                  </div>

                  {timer !== null && !mostrarBotonAvanzar && (
                    <div className="mb-4 text-center">
                      <p className="text-xl font-bold text-white">
                        ¡TIEMPO DE PUJA!
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

                  {pujaActual > carta.minimo && !mostrarBotonAvanzar && (
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
                    
                    <div className="flex-1 space-y-4 max-h-[80vh] overflow-y-auto pr-2">
                      {jugadores.map((j) => {
                        const estaEliminado = jugadoresEliminados.includes(j.id);
                        const yaComproEnRonda = j.equipo.some(c => c.posicion === POSICIONES[posicionActual]);
              
                        const puedePujar = !biddingLocked && !estaEliminado && !yaComproEnRonda;
                        // --- ¡CAMBIO AQUÍ! Bloqueo de puja ---
                        const esPujaMaxima = j.id === jugadorPujando;

                        return (
                          <div
                            key={j.id}
                            className={`bg-gray-50 rounded-lg p-4 transition-all ${
                              estaEliminado ? "opacity-30 bg-red-100" : ""
                            } ${
                              esPujaMaxima ? "border-2 border-yellow-500" : ""
                            }`}
                          >
                            <div className="flex justify-between items-center mb-3">
                              <span className={`font-bold text-gray-800 text-lg ${estaEliminado ? 'line-through' : ''}`}>
                                {j.nombre} {estaEliminado && "❌"}
                                {esPujaMaxima && " 👑"}
                              </span>
                              
                              {/* --- ¡BOTÓN DE MISIÓN AQUÍ! --- */}
                              {!estaEliminado && (
                                <button
                                  onClick={() => setMisionModal(j.misionSecreta)}
                                  className="text-blue-600 hover:text-blue-800 transition-colors mx-2"
                                  title="Ver Misión Secreta"
                                >
                                  <Eye size={20} />
                                </button>
                              )}

                              <div className="flex-1 flex justify-end items-center gap-4">
                                {!estaEliminado && (
                                  <span className="text-blue-700 font-bold text-xl">
                                    ${j.presupuesto}M
                                  </span>
                                )}
                                {/* Botón de Eliminar (solo en rondas clave) */}
                              </div>
                            </div>
                            
                            {!estaEliminado && (
                              <div className="flex gap-2">
                                <button
                                  onClick={() => pujar(j.id, 10)}
                                  disabled={
                                    !puedePujar ||
                                    j.presupuesto < pujaActual + 10 ||
                                    esPujaMaxima // <-- CAMBIO
                                  }
                                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
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
                                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
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
                                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 rounded font-semibold transition-colors disabled:cursor-not-allowed text-sm"
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

  if (fase === "acusacion") {
    const rondaAcusacion = (posicionActual === 4) ? 1 : 2;
    const proximaRonda = (posicionActual === 4) ? 6 : "Final";

    return (
      <div className="min-h-screen bg-linear-to-br from-red-900 via-red-800 to-rose-900 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-red-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <Gavel className="inline text-red-600 w-24 h-24 mb-4" />
              <h1 className="text-5xl font-bold text-red-900 mb-2">
                ¡Fase de Acusación! ({rondaAcusacion}/2)
              </h1>
              <p className="text-2xl text-gray-600">
                Revisen los equipos. ¿Alguien adivinó un objetivo? ¡Es hora de eliminar!
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Equipos y Acusaciones
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jugadores.map((j) => {
                  const estaEliminado = jugadoresEliminados.includes(j.id);
                  return (
                    <div key={j.id} className={`relative ${estaEliminado ? 'opacity-40' : ''}`}>
                      <EquipoFinal jugador={j} />
                      
                      {/* Botón de Eliminar */}
                      {!estaEliminado && (
                	<button
                          onClick={() => eliminarJugador(j.id)}
                          className="absolute -top-3 -right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg"
                          title={`Eliminar a ${j.nombre}`}
                      	>
                          <XCircle size={24} />
                      	</button>
                      )}

                      {estaEliminado && (
                       <p className="text-center text-red-600 font-bold text-xl mt-2">ELIMINADO</p>
                      )}
                    </div>
                 );
                })}
              </div>
            </div>

            <button
              onClick={continuarDesdeAcusacion}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              {jugadores.filter(j => !jugadoresEliminados.includes(j.id)).length <= 1
                ? "🏆 Ver Ganador"
                : `Continuar a la Ronda ${proximaRonda}`
              }
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "final") {
    return (
      <div className="min-h-screen bg-linear-to-br from-blue-900 via-blue-700 to-indigo-800 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-2 text-blue-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <Trophy className="inline text-blue-500 w-24 h-24 mb-4" />
              <h1 className="text-5xl font-bold text-blue-900 mb-2">
                ¡Subasta Terminada!
              </h1>
              <p className="text-2xl text-gray-600">
                ¡Revisen sus equipos y vean quién cumplió el objetivo!
              </p>
            </div>

            <div className="my-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Planteles Finales
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jugadores.map((j) => (
                  <div key={j.id} className={`${jugadoresEliminados.includes(j.id) ? 'opacity-40' : ''}`}>
                    <EquipoFinal jugador={j} />
                    {jugadoresEliminados.includes(j.id) && (
                       <p className="text-center text-red-600 font-bold text-xl mt-2">ELIMINADO</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setFase("setup");
                // Reseteamos estados clave para una nueva partida
                setPosicionActual(0);
                setCartasActuales([]);
                setJugadoresEliminados([]);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
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

export default JuegoSubastaObjetivos;