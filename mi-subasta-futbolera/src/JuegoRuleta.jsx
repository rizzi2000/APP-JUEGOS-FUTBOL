/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useMemo } from "react";
import { Users, Plus, Minus, ArrowLeft, X, Dices, Trophy } from "lucide-react";

// --- Base de datos (Sin Cambios) ---
const POSICIONES = [
  'POR', 'CTI', 'CTC', 'CTD', 'MCI', 'MCC', 'MCD', 'EI', 'ED', 'DCI', 'DCD', 'DT'
];

const POSICIONES_NOMBRES = {
  'POR': 'Portero', 'CTI': 'Central Izquierdo', 'CTC': 'Central Centro', 'CTD': 'Central Derecho', 'MCI': 'Mediocampista Izquierdo', 
  'MCC': 'Mediocampista Centro', 'MCD': 'Mediocampista Derecho', 'EI': 'Extremo Izquierdo', 'ED': 'Extremo Derecho', 
  'DCI': 'Delantero Centro Izquierdo', 'DCD': 'Delantero Centro Derecho', 'DT': 'D.T.'
};

const CATEGORIAS_RULETA = [
  { tipo: "categoria", texto: "Premier League", color: "#60a5fa", textoColor: "#1f2937" },
  { tipo: "categoria", texto: "La Liga", color: "#a78bfa", textoColor: "#ffffff" },
  { tipo: "categoria", texto: "Serie A", color: "#f87171", textoColor: "#ffffff" },
  { tipo: "accion", texto: "Asignación (Lastre)", color: "#facc15", textoColor: "#422006" },
  { tipo: "categoria", texto: "Bundesliga", color: "#fde047", textoColor: "#422006" },
  { tipo: "categoria", texto: "Ligue 1", color: "#34d399", textoColor: "#1f2937" },
  { tipo: "accion", texto: "Intercambio (Veto)", color: "#facc15", textoColor: "#422006" },
  { tipo: "categoria", texto: "Liga Argentina", color: "#fb923c", textoColor: "#ffffff" },
  { tipo: "categoria", texto: "Brasileirão", color: "#d1d5db", textoColor: "#1f2937" },
  { tipo: "categoria", texto: "Campeón del Mundo", color: "#60a5fa", textoColor: "#1f2937" },
  { tipo: "accion", texto: "¡A la Cancha! (Lastre Humano)", color: "#facc15", textoColor: "#422006" },
  { tipo: "categoria", texto: "Selección 'No Campeona'", color: "#a78bfa", textoColor: "#ffffff" },
  { tipo: "categoria", texto: "Balón de Oro", color: "#f87171", textoColor: "#ffffff" },
  { tipo: "categoria", texto: "Leyenda (Retirado)", color: "#fde047", textoColor: "#422006" },
];

const CATEGORIAS_EXPLICACIONES = {
  "Premier League": "Elige un jugador que esté jugando (o haya sido leyenda) en la Premier League.",
  "La Liga": "Elige un jugador que esté jugando (o haya sido leyenda) en La Liga de España.",
  "Serie A": "Elige un jugador que esté jugando (o haya sido leyenda) en la Serie A de Italia.",
  "Bundesliga": "Elige un jugador que esté jugando (o haya sido leyenda) en la Bundesliga de Alemania.",
  "Ligue 1": "Elige un jugador que esté jugando (o haya sido leyenda) en la Ligue 1 de Francia.",
  "Liga Argentina": "Elige un jugador que esté jugando (o haya sido leyenda) en la Liga Argentina.",
  "Brasileirão": "Elige un jugador que esté jugando (o haya sido leyenda) en el Brasileirão.",
  "Campeón del Mundo": "Elige un jugador que haya ganado la Copa del Mundo.",
  "Selección 'No Campeona'": "Elige un jugador (no retirado) de una selección que NUNCA haya ganado el Mundial.",
  "Balón de Oro": "Elige un jugador que haya ganado el Balón de Oro en cualquier año.",
  "Leyenda (Retirado)": "Elige un jugador LEYENDA que ya esté retirado del fútbol.",
  "Asignación (Lastre)": "¡ACCIÓN! Elige un rival y asígnale el jugador que TÚ quieras para esta posición. Luego, vuelve a tirar para vos.",
  "Intercambio (Veto)": "¡ACCIÓN! Elige un rival y una posición anterior. Debes proponerle un intercambio. El rival NO puede rechazarlo, pero TÚ puedes arrepentirte y no hacerlo. Luego, vuelve a tirar.",
  "¡A la Cancha! (Lastre Humano)": "¡ACCIÓN! Elige un rival. Luego, elige a uno de los OTROS participantes del juego y ponlo en el equipo de tu rival para esta posición. Luego, vuelve a tirar.",
};

// --- Estilos CSS para el Carrete (Sin Cambios) ---
const RuletaStyles = () => (
  <style>{`
    .carrete-container {
      position: relative;
      width: 300px;
      height: 350px; 
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 12px;
      border: 10px solid #374151; /* gray-800 */
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent 30%, transparent 70%, rgba(0,0,0,0.8));
    }
    
    /* El Selector fijo en el centro */
    .carrete-selector {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: 40px; 
      transform: translateY(-50%);
      border-top: 2px solid #ef4444; 
      border-bottom: 2px solid #ef4444; 
      z-index: 10;
      pointer-events: none;
      box-shadow: 0 0 10px rgba(239, 68, 68, 0.7);
    }
    
    /* El contenedor que se desplaza */
    .carrete-spinner {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    /* El ítem individual */
    .carrete-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px; 
      font-weight: 700;
      font-size: 14px;
      line-height: 1.2;
      padding: 10px;
      text-align: center;
      user-select: none;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(0,0,0,0.1);
    }
  `}</style>
);


// --- Componente EquipoFinal (Sin Cambios) ---
const EquipoFinal = ({ jugador }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md border">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">
        {jugador.nombre}
      </h3>
      <div className="space-y-2">
        {POSICIONES.map((pos) => (
          <div
            key={pos}
            className="flex justify-between items-center bg-white p-2 rounded shadow-sm"
          >
            <span className="text-xs font-bold text-gray-500">
              {POSICIONES_NOMBRES[pos]}
            </span>
            <span className="font-semibold text-gray-900 text-right">
              {jugador.equipo[POSICIONES.indexOf(pos)] || <span className="text-xs italic text-gray-400">-- Vacío --</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- Componente Principal (JuegoRuleta) con lógica de Carrete ---
const JuegoRuleta = ({ onVolver }) => {
  const [fase, setFase] = useState("setup");
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([]);
  const [posicionActual, setPosicionActual] = useState(0);
  const [jugadorTurno, setJugadorTurno] = useState(0);

  // Estados de la Ruleta (Carrete)
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [carreteY, setCarreteY] = useState(0); // Posición Y del carrete (en píxeles)

  // Estados para Modales
  const [modalExplicacion, setModalExplicacion] = useState(null);
  const [modalAccion, setModalAccion] = useState(null);
  const [intercambioRivalId, setIntercambioRivalId] = useState("");
  const [intercambioPosIndex, setIntercambioPosIndex] = useState("");

  // Estados de Votación
  const [votacionPosicion, setVotacionPosicion] = useState(0);
  const [votos, setVotos] = useState({});

  // --- Lógica del Carrete ---
  const ITEM_HEIGHT = 100; // Altura de cada segmento en px
  const VUELTAS = 50; // Cuántas veces duplicar la lista original (solo visual)
  const LISTA_ORIGINAL_LENGTH = CATEGORIAS_RULETA.length;
  
  // Lista de categorías duplicada para simular el giro continuo
  const LISTA_COMPLETA = useMemo(() => {
    let lista = [];
    for (let i = 0; i < VUELTAS; i++) {
      lista = lista.concat(CATEGORIAS_RULETA);
    }
    return lista;
  }, []);

  useEffect(() => {
    setCarreteY(0);
  }, []);

  const iniciarJuego = () => {
    const jugadoresLimpios = Array.from({ length: numJugadores }, (_, i) => ({
      id: i + 1,
      nombre: jugadores[i]?.nombre || `Jugador ${i + 1}`,
      equipo: Array(12).fill(""),
    }));
    setJugadores(jugadoresLimpios);
    const puntosIniciales = {};
    jugadoresLimpios.forEach((j) => {
      puntosIniciales[j.id] = 0;
    });
    setVotos(puntosIniciales);
    setPosicionActual(0);
    setVotacionPosicion(0);
    setJugadorTurno(0);
    setFase("juego");
  };

  // --- LÓGICA DE GIRO CORREGIDA: Rápido y Consistente ---
  const girarRuleta = () => {
    if (girando) return;

    setGirando(true);
    setResultado(null);
    setModalExplicacion(null);
    
    const totalItems = CATEGORIAS_RULETA.length;
    // La probabilidad es igual para las 14 opciones
    const itemElegidoIndex = Math.floor(Math.random() * totalItems);
    const item = CATEGORIAS_RULETA[itemElegidoIndex];

    // --- ¡PARÁMETROS DE CONSISTENCIA! ---
    const MIN_VUELTAS_FIJAS = 20; // Vueltas mínimas y fijas para que siempre recorra mucha distancia
    const VUELTAS_ADICIONALES = 5; // Vueltas extra (aleatorias) para que el punto de parada no sea predecible
    const GIRO_TIME = 3000; // 3 segundos para una sensación de rapidez
    // -------------------------------------

    // 1. Calcular las vueltas totales (fijas + aleatorias)
    const vueltasAleatorias = Math.floor(Math.random() * (VUELTAS_ADICIONALES + 1));
    const vueltasTotales = MIN_VUELTAS_FIJAS + vueltasAleatorias;
    
    // 2. Calcular la posición de parada real (el índice del item en la VUELTA FINAL)
    const indiceFinal = (vueltasTotales * totalItems) + itemElegidoIndex;

    // 3. Offset para centrar el ítem: (350 / 2) - (100 / 2) = 125px
    const offsetCentro = 125; 
    
    // 4. Calcular el desplazamiento final (NEGATIVO para ir hacia abajo)
    const desplazamientoTotal = indiceFinal * ITEM_HEIGHT;
    const yFinal = -(desplazamientoTotal - offsetCentro);
    
    // 5. Añadir una pequeña variación (opcional, para romper la alineación perfecta de píxeles)
    const variacion = (Math.random() * (ITEM_HEIGHT * 0.1)) - (ITEM_HEIGHT * 0.05);
    const yFinalConVariacion = yFinal + variacion;

    setCarreteY(yFinalConVariacion);

    setTimeout(() => {
      setGirando(false);
      setResultado(item);
      setModalExplicacion({
        titulo: item.texto,
        texto: CATEGORIAS_EXPLICACIONES[item.texto],
        tipo: item.tipo,
      });
    }, GIRO_TIME); 
  };
  // --- FIN LÓGICA DE GIRO CORREGIDA ---


  // --- Lógica de Turnos, Equipos, Modales y Votación (Sin Cambios Relevantes) ---
  const siguienteTurno = () => {
    setResultado(null);
    setModalExplicacion(null);
    if (jugadorTurno < jugadores.length - 1) {
      setJugadorTurno(jugadorTurno + 1);
    } else {
      setJugadorTurno(0);
      siguientePosicion();
    }
  };

  const siguientePosicion = () => {
    if (posicionActual < 11) {
      setPosicionActual(posicionActual + 1);
      setResultado(null);
    } else {
      setFase("votacion"); 
    }
  };

  const handleEquipoChange = (jugadorId, indexPos, valor) => {
    setJugadores((prevJugadores) =>
      prevJugadores.map((j) => {
        if (j.id === jugadorId) {
          const nuevoEquipo = [...j.equipo];
          nuevoEquipo[indexPos] = valor;
          return { ...j, equipo: nuevoEquipo };
        }
        return j;
      })
    );
  };

  const handleCerrarExplicacion = () => {
    if (!modalExplicacion) return;
    const tipo = modalExplicacion.tipo;
    const texto = modalExplicacion.titulo;
    setModalExplicacion(null);
    if (tipo === 'accion') {
      if (texto.includes("Intercambio")) {
        setIntercambioRivalId("");
        setIntercambioPosIndex("");
        setModalAccion("intercambio");
      }
      if (texto.includes("Asignación")) setModalAccion("asignacion");
      if (texto.includes("Lastre Humano")) setModalAccion("lastre");
    }
  };

  const ejecutarIntercambio = (e) => {
    e.preventDefault();
    const tuId = jugadores[jugadorTurno].id;
    const rivalIdNum = parseInt(intercambioRivalId, 10);
    const posIndexNum = parseInt(intercambioPosIndex, 10);

    const nuevosJugadores = jugadores.map(j => ({ ...j, equipo: [...j.equipo] }));
    const tuJugador = nuevosJugadores.find(j => j.id === tuId);
    const rivalJugador = nuevosJugadores.find(j => j.id === rivalIdNum);

    if (!tuJugador || !rivalJugador) return;

    const tuCarta = tuJugador.equipo[posIndexNum];
    const rivalCarta = rivalJugador.equipo[posIndexNum];

    tuJugador.equipo[posIndexNum] = rivalCarta;
    rivalJugador.equipo[posIndexNum] = tuCarta;
    setJugadores(nuevosJugadores);
    setModalAccion(null);
  };

  const ejecutarAsignacion = (rivalId, jugadorAsignado) => {
    handleEquipoChange(rivalId, posicionActual, jugadorAsignado);
    setModalAccion(null);
  };

  const ejecutarLastreHumano = (rivalId, participanteId) => {
    const nombreParticipante = jugadores.find(j => j.id === participanteId)?.nombre || "Participante";
    handleEquipoChange(rivalId, posicionActual, `*${nombreParticipante}*`);
    setModalAccion(null);
  };

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
    jugadores.forEach((j) => { puntos[j.id] = 0; });
    Object.values(votos).forEach((jugadorIdVotado) => {
      if (puntos[jugadorIdVotado] !== undefined) {
        puntos[jugadorIdVotado]++;
      }
    });
    const ganadorVotos = jugadores.reduce(
      (max, j) => (puntos[j.id] > (puntos[max.id] || 0) ? j : max),
      jugadores[0] || {}
    );
    return {
      ganadorVotos: {
        ganador: ganadorVotos,
        valor: puntos[ganadorVotos.id] || 0,
      },
      puntosTotales: puntos,
    };
  };

  useEffect(() => {
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: `Jugador ${i + 1}`,
        equipo: Array(12).fill(""),
      }))
    );
  }, [numJugadores]);


  // --- RENDERIZADO DE FASES (Adaptado al Carrete) ---
  if (fase === "setup") {
    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-yellow-800 to-orange-900 p-8">
        <RuletaStyles />
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onVolver}
            className="mb-4 text-yellow-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-yellow-900 mb-2">
                🎰 Ruleta del Caos
              </h1>
            </div>
            {/* Selector de Jugadores */}
            <div className="bg-yellow-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-yellow-800 mb-4">
                Participantes
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNumJugadores(Math.max(2, numJugadores - 1))}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full p-2 transition-colors"
                >
                  <Minus size={24} />
                </button>
                <span className="text-4xl font-bold text-yellow-900">
                  {numJugadores}
                </span>
                <button
                  onClick={() => setNumJugadores(Math.min(8, numJugadores + 1))}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-full p-2 transition-colors"
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
                    <Users className="text-yellow-600" />
                    <input
                      type="text"
                      value={j.nombre}
                      onChange={(e) => {
                        const nuevos = [...jugadores];
                        const jugadorActualizado = { ...nuevos[index], nombre: e.target.value };
                        nuevos[index] = jugadorActualizado;
                        setJugadores(nuevos);
                      }}
                      className="text-lg w-full font-semibold border-b-2 border-gray-300 focus:border-yellow-600 outline-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={iniciarJuego}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-yellow-900 text-xl font-bold py-4 rounded-xl transition-colors"
            >
              ¡Comenzar!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "juego") {
    if (posicionActual >= POSICIONES.length) {
       console.error("Error: Se intentó acceder a una posición fuera de rango.");
       setFase("votacion");
       return null;
    }
    const pos = POSICIONES[posicionActual];
    const nombrePos = POSICIONES_NOMBRES[pos];
    const jugadorActual = jugadores[jugadorTurno];

    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 p-4">
        <RuletaStyles />
        
        {/* --- MODALES --- */}
        {modalExplicacion && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
              <Dices size={40} className={`mx-auto mb-4 ${modalExplicacion.tipo === 'accion' ? 'text-yellow-500' : 'text-green-500'}`} />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{modalExplicacion.titulo}</h2>
              <p className="text-gray-700 mb-6">{modalExplicacion.texto}</p>
              <button
                onClick={handleCerrarExplicacion}
                className={`w-full font-bold py-3 rounded-lg text-white ${modalExplicacion.tipo === 'accion' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {modalExplicacion.tipo === 'accion' ? '¡Entendido, a la acción!' : '¡Entendido!'}
              </button>
            </div>
          </div>
        )}
        {modalAccion && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
              <button onClick={() => setModalAccion(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>

              {/* MODAL DE INTERCAMBIO */}
              {modalAccion === 'intercambio' && (
                <form onSubmit={ejecutarIntercambio}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Acción: Intercambio</h2>
                  <p className="text-gray-700 mb-4">Elige un rival y una posición *anterior* para proponer el trueque. (No pueden rechazarlo, pero tú puedes arrepentirte).</p>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Elegir Rival:</label>
                    <select
                      value={intercambioRivalId}
                      onChange={(e) => setIntercambioRivalId(e.target.value)}
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Selecciona un rival...</option>
                      {jugadores.filter(j => j.id !== jugadorActual.id).map(r => (
                        <option key={r.id} value={r.id}>{r.nombre}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Elegir Posición a intercambiar:</label>
                    <select
                      value={intercambioPosIndex}
                      onChange={(e) => setIntercambioPosIndex(e.target.value)}
                      required
                      disabled={posicionActual === 0}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Selecciona una posición...</option>
                      {POSICIONES.slice(0, posicionActual).map((p, index) => (
                        <option key={p} value={index}>{POSICIONES_NOMBRES[p]}</option>
                      ))}
                    </select>
                    {posicionActual === 0 && <p className="text-red-500 text-xs mt-1">No hay posiciones anteriores para intercambiar. Pierdes la acción.</p>}
                  </div>

                  <div className="flex gap-2">
                    <button type="button" onClick={() => setModalAccion(null)} className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      Cancelar (Arrepentirse)
                    </button>
                    <button type="submit" disabled={!intercambioRivalId || !intercambioPosIndex} className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400">
                      ¡Intercambiar!
                    </button>
                  </div>
                </form>
              )}

              {/* MODAL ASIGNACIÓN / LASTRE */}
              {(modalAccion === 'asignacion' || modalAccion === 'lastre') && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const rivalId = parseInt(e.target.rival.value, 10);
                  const valor = e.target.valor.value;
                  if (modalAccion === 'asignacion') ejecutarAsignacion(rivalId, valor);
                  if (modalAccion === 'lastre') ejecutarLastreHumano(rivalId, parseInt(valor, 10));
                }}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {modalAccion === 'asignacion' ? 'Acción: Asignación (Lastre)' : 'Acción: ¡A la Cancha!'}
                  </h2>
                  <p className="text-gray-700 mb-4">
                    {modalAccion === 'asignacion'
                      ? `Elige un rival y escribe el nombre del jugador que DEBE anotar para ${nombrePos}.`
                      : `Elige un rival y elige a qué OTRO participante del juego pondrás en su equipo como ${nombrePos}.`
                    }
                  </p>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Elegir Rival:</label>
                    <select
                      name="rival"
                      required
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="">Selecciona un rival...</option>
                      {jugadores.filter(j => j.id !== jugadorActual.id).map(r => (
                        <option key={r.id} value={r.id}>{r.nombre}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {modalAccion === 'asignacion' ? 'Nombre del Jugador (Lastre):' : 'Participante a Asignar:'}
                    </label>
                    {modalAccion === 'asignacion' ? (
                      <input
                        type="text"
                        name="valor"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Ej: Loris Karius"
                      />
                    ) : (
                      <select
                        name="valor"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">Selecciona un participante...</option>
                        {jugadores.filter(j => j.id !== jugadorActual.id).map(p => (
                          <option key={p.id} value={p.id}>{p.nombre}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded">
                    Confirmar Acción
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <button
            onClick={onVolver}
            className="mb-2 text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>

          <h2 className="text-4xl font-bold text-white mb-2 text-center">
            Ronda: <span className="text-yellow-400">{nombrePos}</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6 text-center">
            Turno de: <span className="text-yellow-300 font-bold">{jugadorActual.nombre}</span>
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* --- RULETA DE CARRETE --- */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="carrete-container">
                <div className="carrete-selector"></div> {/* La línea de selección */}

                <div
                  className="carrete-spinner"
                  style={{
                    // Desplazamiento vertical
                    transform: `translateY(${carreteY}px)`, 
                    // TRANSICIÓN FIJA Y RÁPIDA
                    transition: girando ? "transform 3s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                  }}
                >
                  {LISTA_COMPLETA.map((item, index) => (
                    <div
                      key={index}
                      className="carrete-item"
                      style={{
                        backgroundColor: item.color,
                        color: item.textoColor,
                        opacity: 1
                      }}
                    >
                      {item.texto}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={girarRuleta}
                disabled={girando || modalExplicacion || modalAccion}
                className="mt-8 w-full bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-500 text-yellow-900 font-bold text-2xl py-4 rounded-lg shadow-lg transition-colors"
              >
                {girando ? "Girando..." : "¡GIRAR!"}
              </button>
            </div>

            {/* --- ANOTADOR --- */}
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Anotador de Equipos
              </h3>
              <div className="space-y-4">
                {jugadores.map((j) => {
                  const esTurnoActual = j.id === jugadorActual.id;
                  return (
                    <div
                      key={j.id}
                      className={`p-4 rounded-lg transition-all ${esTurnoActual ? 'bg-yellow-100 border-2 border-yellow-400' : 'bg-gray-100'}`}
                    >
                      <h4 className={`text-xl font-bold mb-2 ${esTurnoActual ? 'text-yellow-800' : 'text-gray-700'}`}>{j.nombre}</h4>
                      <div className="flex items-center gap-2">
                        <label className="font-semibold text-gray-600 w-28">{nombrePos}:</label>
                        <input
                          type="text"
                          value={j.equipo[posicionActual]}
                          onChange={(e) => handleEquipoChange(j.id, posicionActual, e.target.value)}
                          className="flex-1 p-2 border-2 border-gray-300 rounded-md focus:border-yellow-600 outline-none"
                          placeholder="Anota tu jugador..."
                          disabled={!esTurnoActual || girando || (resultado && resultado.tipo === 'accion') || modalExplicacion || modalAccion}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={siguienteTurno}
                disabled={girando || (resultado && resultado.tipo === 'accion') || modalExplicacion || modalAccion}
                className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-3 rounded-lg disabled:bg-gray-400"
              >
                {jugadorTurno < jugadores.length - 1 ? `Siguiente Turno (${jugadores[jugadorTurno + 1].nombre})` : 'Terminar Ronda (Siguiente Posición)'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "votacion") {
    if (votacionPosicion >= POSICIONES.length) {
       console.error("Error: Se intentó acceder a una votación fuera de rango.");
       setFase("final");
       return null;
    }
    const pos = POSICIONES[votacionPosicion];
    const nombrePos = POSICIONES_NOMBRES[pos];

    const jugadoresEnPosicion = jugadores
      .map((j) => ({
        jugador: j,
        cartaTexto: j.equipo[votacionPosicion],
      }))
      .filter((item) => item.cartaTexto);

    const votoActual = votos[pos];

    return (
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 p-4">
        <RuletaStyles />
        <div className="max-w-4xl mx-auto">
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
                jugadoresEnPosicion.map(({ jugador, cartaTexto }) => (
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
                        <p className="text-xl font-bold">{cartaTexto}</p>
                        <p className="text-sm font-semibold opacity-80">
                          Equipo de: {jugador.nombre}
                        </p>
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500 italic text-lg">
                  Nadie anotó un {nombrePos} esta ronda.
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
    const { ganadorVotos, puntosTotales } = calcularResultados();

    const jugadoresOrdenados = [...jugadores].sort(
      (a, b) => (puntosTotales[b.id] || 0) - (puntosTotales[a.id] || 0)
    );

    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-yellow-700 to-orange-800 p-4">
        <RuletaStyles />
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
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${numJugadores > 3 ? 4 : numJugadores} gap-6`}>
                {jugadores.map((j) => (
                  <EquipoFinal key={j.id} jugador={j} />
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setFase("setup");
                setPosicionActual(0);
              }}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-yellow-900 text-xl font-bold py-4 rounded-xl transition-colors"
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

export default JuegoRuleta;