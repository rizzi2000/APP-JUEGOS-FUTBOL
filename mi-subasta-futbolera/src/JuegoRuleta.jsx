/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from "react";
import { Users, Plus, Minus, ArrowLeft, X, Dices, Trophy } from "lucide-react"; // Añadido Trophy

// --- ¡NUEVO! Base de datos integrada ---
// (Corregido el error de 'MCD' duplicado)
const POSICIONES = [
  'POR', // Portero
  'CTI', // Central Izquierdo
  'CTC', // Central Centro
  'CTD', // Central Derecho
  'MCI', // Mediocampista Izquierdo
  'MCC', // Mediocampista CENTRO (Cambiado de MCD)
  'MCD', // Mediocampista DERECHO
  'EI',  // Extremo Izquierdo
  'ED',  // Extremo Derecho
  'DCI', // Delantero Centro Izquierdo
  'DCD', // Delantero Centro Derecho
  'DT'   // Director Técnico (o Suplente)
];

const POSICIONES_NOMBRES = {
  'POR': 'Portero',
  'CTI': 'Central Izquierdo',
  'CTC': 'Central Centro',
  'CTD': 'Central Derecho',
  'MCI': 'Mediocampista Izquierdo',
  'MCC': 'Mediocampista Centro', // (Cambiado de MCD)
  'MCD': 'Mediocampista Derecho',
  'EI': 'Extremo Izquierdo',
  'ED': 'Extremo Derecho',
  'DCI': 'Delantero Centro Izquierdo',
  'DCD': 'Delantero Centro Derecho',
  'DT': 'D.T.'
};


// --- ¡RESTAURADAS! Las 14 categorías originales ---
const CATEGORIAS_RULETA = [
  { tipo: "categoria", texto: "Premier League", color: "#60a5fa", textoColor: "#1f2937" }, // blue-400
  { tipo: "categoria", texto: "La Liga", color: "#a78bfa", textoColor: "#ffffff" }, // purple-400
  { tipo: "categoria", texto: "Serie A", color: "#f87171", textoColor: "#ffffff" }, // red-400
  { tipo: "accion", texto: "Asignación (Lastre)", color: "#facc15", textoColor: "#422006" }, // yellow-400
  { tipo: "categoria", texto: "Bundesliga", color: "#fde047", textoColor: "#422006" }, // yellow-300
  { tipo: "categoria", texto: "Ligue 1", color: "#34d399", textoColor: "#1f2937" }, // green-400
  { tipo: "accion", texto: "Intercambio (Veto)", color: "#facc15", textoColor: "#422006" }, // yellow-400
  { tipo: "categoria", texto: "Liga Argentina", color: "#fb923c", textoColor: "#ffffff" }, // orange-400
  { tipo: "categoria", texto: "Brasileirão", color: "#d1d5db", textoColor: "#1f2937" }, // gray-300
  { tipo: "categoria", texto: "Campeón del Mundo", color: "#60a5fa", textoColor: "#1f2937" }, // blue-400
  { tipo: "accion", texto: "¡A la Cancha! (Lastre Humano)", color: "#facc15", textoColor: "#422006" }, // yellow-400
  { tipo: "categoria", texto: "Selección 'No Campeona'", color: "#a78bfa", textoColor: "#ffffff" }, // purple-400
  { tipo: "categoria", texto: "Balón de Oro", color: "#f87171", textoColor: "#ffffff" }, // red-400
  { tipo: "categoria", texto: "Leyenda (Retirado)", color: "#fde047", textoColor: "#422006" }, // yellow-300
];

// --- ¡RESTAURADAS! Las explicaciones originales ---
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

// --- ¡NUEVO! Estilos CSS integrados ---
const RuletaStyles = () => (
  <style>{`
    .ruleta-container {
      position: relative;
      width: 350px;
      height: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 50%;
      border: 10px solid #374151; /* gray-800 */
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    .ruleta-selector {
      position: absolute;
      /* Apunta "ARRIBA" (12 en punto) */
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 30px solid #ef4444; /* red-500 */
      z-index: 10;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
    }
    
    /* El spinner es el contenedor que rota */
    .ruleta-spinner {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    
    /* El fondo es el gradiente cónico */
    .ruleta-fondo {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1; /* Fondo */
    }
    
    /* El contenedor de las etiquetas de texto */
    .ruleta-labels {
      width: 100%;
      height: 100%;
      z-index: 2; /* Encima del fondo */
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute; /* <-- ¡CORRECCIÓN! */
      top: 0;             /* <-- ¡CORRECCIÓN! */
      left: 0;            /* <-- ¡CORRECCIÓN! */
    }
    
    /* Es un <li> que rota a su posición */
    .ruleta-texto-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: center center;
      display: flex;
      justify-content: center;
      
      /* El texto se alinea "arriba" (que en realidad es el borde exterior) */
      align-items: flex-start;
      padding-top: 60px; /* Distancia desde el borde exterior */
    }
    
    /* Es el <span> con el texto adentro */
    .ruleta-texto {
      display: block;
      text-align: center;
      font-weight: 700;
      font-size: 11px;
      line-height: 1.1;
      word-wrap: break-word;
      user-select: none;
      transform: rotate(90deg);
      width: 135px; /* Ancho máximo del texto */
      
      /* Sombra para legibilidad */
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.7); 
    }
  `}</style>
);


// --- Componente EquipoFinal (para la pantalla final) ---
const EquipoFinal = ({ jugador }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-md border">
      <h3 className="text-xl font-bold text-yellow-800 mb-3">
        {jugador.nombre}
      </h3>
      <div className="space-y-2">
        {POSICIONES.map((pos) => (
          <div
            key={pos} // <-- Corregido para usar la clave única (ej. 'MCC' y 'MCD')
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


const JuegoRuleta = ({ onVolver }) => {
  const [fase, setFase] = useState("setup");
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([]);
  const [posicionActual, setPosicionActual] = useState(0);
  const [jugadorTurno, setJugadorTurno] = useState(0);

  // Estados de la Ruleta
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [ruletaDeg, setRuletaDeg] = useState(0);
  const [gradientFondo, setGradientFondo] = useState("");

  // Estados para Modales
  const [modalExplicacion, setModalExplicacion] = useState(null);
  const [modalAccion, setModalAccion] = useState(null);

  // Estados para el modal de Intercambio
  const [intercambioRivalId, setIntercambioRivalId] = useState("");
  const [intercambioPosIndex, setIntercambioPosIndex] = useState("");

  // --- ¡NUEVOS ESTADOS DE VOTACIÓN! ---
  const [votacionPosicion, setVotacionPosicion] = useState(0);
  const [votos, setVotos] = useState({});

  useEffect(() => {
    // Generación de gradientFondo
    const totalItems = CATEGORIAS_RULETA.length; // Ahora 14
    const anguloItem = 360 / totalItems;
    // --- LÓGICA DE GRADIENTE CORREGIDA ---
    const stops = CATEGORIAS_RULETA.map((item, index) => {
      const start = anguloItem * index;
      const end = anguloItem * (index + 1);
      return `${item.color} ${start}deg ${end}deg`;
    }).join(", ");
    setGradientFondo(`conic-gradient(${stops})`);
  }, []);

  const iniciarJuego = () => {
    // Resetea puntos y equipos
    const jugadoresLimpios = Array.from({ length: numJugadores }, (_, i) => ({
      id: i + 1,
      nombre: jugadores[i]?.nombre || `Jugador ${i + 1}`,
      equipo: Array(12).fill(""),
    }));
    setJugadores(jugadoresLimpios);

    // Resetea votos
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

  const girarRuleta = () => {
    if (girando) return;

    setGirando(true);
    setResultado(null);
    setModalExplicacion(null);
    const itemElegido = Math.floor(Math.random() * CATEGORIAS_RULETA.length);
    const item = CATEGORIAS_RULETA[itemElegido];

    const anguloItem = 360 / CATEGORIAS_RULETA.length; // Ahora 14
    const vueltasExtra = Math.floor(Math.random() * 4) + 4;
    const anguloMedioItem = anguloItem * itemElegido + anguloItem / 2;
    const variacion = (Math.random() - 0.5) * (anguloItem * 0.8);
    // --- LÓGICA DE GIRO CORREGIDA (sin el +90) ---
    const anguloNuevo = (vueltasExtra * 360) - anguloMedioItem - variacion;

    setRuletaDeg(ruletaDeg + anguloNuevo);

    setTimeout(() => {
      setGirando(false);
      setResultado(item);
      setModalExplicacion({
        titulo: item.texto,
        texto: CATEGORIAS_EXPLICACIONES[item.texto],
        tipo: item.tipo,
      });
    }, 5000);
  };

  // --- LÓGICA DE TURNOS ---
  const siguienteTurno = () => {
    setResultado(null);
    setModalExplicacion(null);

    if (jugadorTurno < jugadores.length - 1) {
      setJugadorTurno(jugadorTurno + 1);
    } else {
      // Último jugador terminó, pasa a la siguiente posición
      setJugadorTurno(0);
      siguientePosicion();
    }
  };

  const siguientePosicion = () => {
    if (posicionActual < 11) { // 0 a 10 (son 11)
      setPosicionActual(posicionActual + 1);
      setResultado(null);
    } else {
      // Cuando posicionActual es 11 (la 12va posición, 'DT'), pasa a votación
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

  // --- ¡LÓGICA RESTAURADA! ---
  const handleCerrarExplicacion = () => {
    if (!modalExplicacion) return; // Guarda de seguridad
    const tipo = modalExplicacion.tipo;
    const texto = modalExplicacion.titulo;
    setModalExplicacion(null);

    if (tipo === 'accion') {
      if (texto.includes("Intercambio")) {
        setIntercambioRivalId(""); // Resetea
        setIntercambioPosIndex(""); // Resetea
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

    const nuevosJugadores = jugadores.map(j => ({
      ...j,
      equipo: [...j.equipo]
    }));

    const tuJugador = nuevosJugadores.find(j => j.id === tuId);
    const rivalJugador = nuevosJugadores.find(j => j.id === rivalIdNum);

    if (!tuJugador || !rivalJugador) return; // Guarda de seguridad

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

  // --- ¡NUEVAS FUNCIONES DE VOTACIÓN! ---
  const votar = (jugadorId) => {
    const pos = POSICIONES[votacionPosicion];
    setVotos({ ...votos, [pos]: jugadorId });
  };

  const siguienteVotacion = () => {
    if (votacionPosicion < 11) { // 0 a 10
      setVotacionPosicion(votacionPosicion + 1);
    } else {
      // Cuando votacionPosicion es 11 (la 12va), termina
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

    return {
      ganadorVotos: {
        ganador: ganadorVotos,
        valor: puntos[ganadorVotos.id] || 0,
      },
      puntosTotales: puntos,
    };
  };
  // --- FIN FUNCIONES DE VOTACIÓN ---


  useEffect(() => {
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: `Jugador ${i + 1}`,
        equipo: Array(12).fill(""),
      }))
    );
  }, [numJugadores]);


  // --- RENDERIZADO ---
  if (fase === "setup") {
    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-yellow-800 to-orange-900 p-8">
        <RuletaStyles /> {/* <-- Estilos inyectados */}
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
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
    // Asegurarse de que no nos pasemos del array de posiciones
    if (posicionActual >= POSICIONES.length) {
       console.error("Error: Se intentó acceder a una posición fuera de rango.");
       setFase("votacion"); // Forzar salida a votación
       return null;
    }
    const pos = POSICIONES[posicionActual];
    const nombrePos = POSICIONES_NOMBRES[pos];
    const anguloItem = 360 / CATEGORIAS_RULETA.length;
    const jugadorActual = jugadores[jugadorTurno];
    // --- NUEVO OFFSET PARA ALINEAR LA RULETA ---
    const offsetDeg = 0; 

    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 p-4">
        <RuletaStyles /> {/* <-- Estilos inyectados */}
        
        {/* --- MODALES (sin cambios) --- */}
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

        {/* --- FIN MODALES --- */}

        <div className="max-w-7xl mx-auto">
          {/* Botón Volver */}
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

            {/* --- RULETA (RENDER NUEVO) --- */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-lg">
              <div className="ruleta-container">
                <div className="ruleta-selector"></div> {/* La flecha roja */}

                <div
                  className="ruleta-spinner"
                  style={{
                    transform: `rotate(${ruletaDeg}deg)`,
                    transition: girando ? "transform 5s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none",
                  }}
                >
                  {/* 1. EL FONDO DE COLORES */}
                  <div
                    className="ruleta-fondo"
                    style={{ 
                      backgroundImage: gradientFondo,
                      transform: `rotate(${offsetDeg}deg)` // <-- OFFSET APLICADO
                    }}
                  ></div>

                  {/* 2. LAS ETIQUETAS DE TEXTO (que giran con el fondo) */}
                  <ul 
                    className="ruleta-labels"
                    style={{
                      transform: `rotate(${offsetDeg}deg)` // <-- OFFSET APLICADO
                    }}
                  >
                    {CATEGORIAS_RULETA.map((item, index) => {
                      // --- LÓGICA DE ÁNGULO SIMPLIFICADA ---
                      const angulo = (anguloItem * index) + (anguloItem / 2); 
                      // --- LÓGICA DE TEXTO AJUSTADA --- 

                      return (
                        <li
                          key={index}
                          className="ruleta-texto-container"
                          style={{
                            /* Rota el contenedor al ángulo del sector */
                            transform: `rotate(${angulo}deg)`,
                          }}
                        >
                          <span
                            className="ruleta-texto"
                            style={{
                              /* El 'transform' ahora está en el CSS */
                              color: item.textoColor
                            }}
                          >
                            {item.texto}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
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
                          disabled={!esTurnoActual || girando || (resultado && resultado.tipo === 'accion') || modalExplicacion || modalAccion} // Deshabilitado
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

  // --- ¡NUEVA FASE DE VOTACIÓN! ---
  if (fase === "votacion") {
    // Asegurarse de que no nos pasemos del array de votación
    if (votacionPosicion >= POSICIONES.length) {
       console.error("Error: Se intentó acceder a una votación fuera de rango.");
       setFase("final"); // Forzar salida a final
       return null;
    }
    const pos = POSICIONES[votacionPosicion];
    const nombrePos = POSICIONES_NOMBRES[pos];

    // Filtra jugadores que SÍ escribieron algo
    const jugadoresEnPosicion = jugadores
      .map((j) => ({
        jugador: j,
        cartaTexto: j.equipo[votacionPosicion], // El texto que escribieron
      }))
      .filter((item) => item.cartaTexto); // Solo los que anotaron algo

    const votoActual = votos[pos];

    return (
      <div className="min-h-screen bg-linear-to-br from-purple-900 via-purple-800 to-indigo-900 p-4">
        <RuletaStyles /> {/* <-- Estilos inyectados */}
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
              // Habilitado aunque no haya opciones, para poder saltear
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

  // --- ¡NUEVA FASE FINAL CON PODIO! ---
  if (fase === "final") {
    const { ganadorVotos, puntosTotales } = calcularResultados();

    const jugadoresOrdenados = [...jugadores].sort(
      (a, b) => (puntosTotales[b.id] || 0) - (puntosTotales[a.id] || 0)
    );

    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-yellow-700 to-orange-800 p-4">
        <RuletaStyles /> {/* <-- Estilos inyectados */}
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