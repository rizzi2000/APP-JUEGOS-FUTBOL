/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  Send, 
  HelpCircle, 
  Loader2, 
  Trophy, 
  XCircle, 
  CheckCircle, 
  RefreshCw, 
  EyeOff,
  Users, // <-- ¡CORRECCIÓN AQUÍ!
  Plus,  // <-- ¡CORRECCIÓN AQUÍ!
  Minus, // <-- ¡CORRECCIÓN AQUÍ!
  StopCircle
} from "lucide-react";
import { obtenerJugadorMisterioso } from "./ServiceIA.jsx";

// Puntos por nivel de pista (1 club revelado = 10 pts, 2 clubes = 8 pts, etc.)
const PUNTOS_POR_NIVEL = [10, 8, 6, 4, 2, 1, 1, 1, 1, 1]; // Máximo 10 pistas

const JuegoAdivinaJugador = ({ onVolver }) => {
  const [fase, setFase] = useState("setup");
  const [numJugadores, setNumJugadores] = useState(2);
  const [jugadores, setJugadores] = useState([]); // Array de { id, nombre, puntos }
  
  const [estadoJuego, setEstadoJuego] = useState("cargando"); // cargando, jugando, revelado
  const [jugadorMisterioso, setJugadorMisterioso] = useState(null);
  const [pistasReveladas, setPistasReveladas] = useState(1); // Nivel de pistas
  const [inputAdivinanza, setInputAdivinanza] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [jugadoresBloqueados, setJugadoresBloqueados] = useState([]); // IDs de quienes ya adivinaron (esta ronda)
  const [jugadoresBloqueadosPista, setJugadoresBloqueadosPista] = useState([]); // IDs de quienes fallaron (esta pista)
  const [jugadoresUsados, setJugadoresUsados] = useState([]);
  
  // Cargar nuevo jugador
  const cargarNuevoJugador = useCallback(async () => {
    setEstadoJuego("cargando");
    setMensaje("");
    setInputAdivinanza("");
    setJugadorMisterioso(null);
    setPistasReveladas(1);
    setJugadoresBloqueados([]);
    setJugadoresBloqueadosPista([]);

    const data = await obtenerJugadorMisterioso(jugadoresUsados);
    
    if (data && data.nombre && data.trayectoria) {
      setJugadorMisterioso(data);
      setEstadoJuego("jugando");
      setJugadoresUsados(prevUsados => [...prevUsados, data.nombre]);
    } else {
      console.error("Error de IA:", data);
      if (jugadoresUsados.length > 200) { // Ejemplo de límite
         setMensaje("Se acabaron los jugadores. Reiniciando historial...");
         setJugadoresUsados([]); // Reinicia el historial local
      }
      setMensaje("La IA está ocupada. Intentando de nuevo...");
      setTimeout(cargarNuevoJugador, 2000); // Reintenta si falla
    }
  }, [jugadoresUsados]);

  const iniciarJuego = () => {
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        // Usamos el nombre del setup anterior si existe
        nombre: jugadores[i]?.nombre || `Jugador ${i + 1}`, 
        puntos: 0,
      }))
    );
    setJugadoresUsados([]);
    setFase("juego");
    cargarNuevoJugador();
  };
  
  // Normalizar nombres para comparación
  const normalizar = (str) => {
    if (!str) return "";
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  };

  const verificarRespuesta = (idJugadorQueAdivina) => {
    if (!jugadorMisterioso || !inputAdivinanza) return;

    const respuestaLimpia = normalizar(inputAdivinanza);
    const nombreCorrecto = normalizar(jugadorMisterioso.nombre);
    
    // Comparamos si la respuesta contiene el apellido, o si el nombre completo contiene la respuesta
    const esCorrecto = (nombreCorrecto.includes(respuestaLimpia) && respuestaLimpia.length > 3) || 
                       (respuestaLimpia.includes(nombreCorrecto) && nombreCorrecto.length > 3);

    if (esCorrecto) {
      // --- ¡CORRECTO! ---
     const puntosGanados = PUNTOS_POR_NIVEL[pistasReveladas - 1] || 1;
      
      // Sumar puntos y bloquear al jugador
      setJugadores(jugadores.map(j => 
        j.id === idJugadorQueAdivina ? { ...j, puntos: j.puntos + puntosGanados } : j
      ));
      setJugadoresBloqueados(prev => [...prev, idJugadorQueAdivina]);
      setInputAdivinanza("");
      
      // --- ¡CAMBIO CLAVE AQUÍ! ---
      // Pasa a revelado inmediatamente, no espera a que todos acierten.
      setMensaje(`¡${jugadores.find(j=>j.id === idJugadorQueAdivina).nombre} acertó! ¡Era ${jugadorMisterioso.nombre}! +${puntosGanados} Pts.`);
      setEstadoJuego("revelado");
      
    } else {
      // --- INCORRECTO ---
      setMensaje(`¡Incorrecto! ${jugadores.find(j=>j.id === idJugadorQueAdivina).nombre} queda bloqueado para esta pista.`);
      // Bloquear al jugador solo para este nivel de pista
      setJugadoresBloqueadosPista(prev => [...prev, idJugadorQueAdivina]);
      setInputAdivinanza("");
    }
  };

  const revelarSiguienteClub = () => {
    if (jugadorMisterioso && pistasReveladas < jugadorMisterioso.trayectoria.length) {
      setPistasReveladas(pistasReveladas + 1);
      setJugadoresBloqueadosPista([]); // Desbloquea a los que fallaron
      setMensaje("");
    } else {
      // Ya no hay más clubes, mostrar pistas de texto
      setMensaje("Ya no hay más clubes. ¡Usen las pistas de texto!");
    }
  };

  const revelarJugador = () => {
    setEstadoJuego("revelado");
    setMensaje(`¡Nadie adivinó! Era ${jugadorMisterioso?.nombre || "el jugador"}`);
  };

  const siguienteRonda = () => {
    cargarNuevoJugador();
  };

  const terminarJuego = () => {
    setFase("final");
  };

  // --- ¡NUEVA FUNCIÓN! ---
  const calcularGanador = () => {
    if (jugadores.length === 0) return { ganadores: [], maxPuntos: 0, jugadoresOrdenados: [] };
    
    const jugadoresOrdenados = [...jugadores].sort((a, b) => b.puntos - a.puntos);
    const maxPuntos = jugadoresOrdenados[0].puntos;
    const ganadores = jugadoresOrdenados.filter(j => j.puntos === maxPuntos && maxPuntos > 0);
    
    return { ganadores, jugadoresOrdenados };
  };

  useEffect(() => {
    // Inicializa los jugadores para el setup
    setJugadores(
      Array.from({ length: numJugadores }, (_, i) => ({
        id: i + 1,
        nombre: `Jugador ${i + 1}`,
        puntos: 0,
      }))
    );
  }, [numJugadores]);

  // --- RENDERIZADO ---

  if (fase === "setup") {
    return (
      <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Botón Volver */}
          <button
            onClick={onVolver}
            className="mb-4 text-purple-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-purple-900 mb-2">
                🕵️ Adivina la Trayectoria
              </h1>
            </div>
            {/* Selector de Jugadores */}
            <div className="bg-purple-50 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Participantes
              </h2>
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={() => setNumJugadores(Math.max(2, numJugadores - 1))}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors"
                >
                  <Minus size={24} />
                </button>
                <span className="text-4xl font-bold text-purple-900">
                  {numJugadores}
                </span>
                <button
                  onClick={() => setNumJugadores(Math.min(8, numJugadores + 1))}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors"
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
                    <Users className="text-purple-600" />
                    <input
                      type="text"
                      value={j.nombre}
                      onChange={(e) => {
                        const nuevos = [...jugadores];
                        const jugadorActualizado = {...nuevos[index], nombre: e.target.value};
                        nuevos[index] = jugadorActualizado;
                        setJugadores(nuevos);
                      }}
                      className="text-lg w-full font-semibold border-b-2 border-gray-300 focus:border-purple-600 outline-none bg-transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={iniciarJuego}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              ¡Comenzar!
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (fase === "final") {
    const { ganadores, jugadoresOrdenados } = calcularGanador();
    const nombreGanador = ganadores.length > 1 ? "¡Empate!" : (ganadores[0]?.nombre || "Nadie");
    const subTitulo = ganadores.length > 1 
      ? `Entre: ${ganadores.map(g => g.nombre).join(', ')}` 
      : (ganadores.length === 1 ? `Con ${ganadores[0].puntos} puntos` : "Nadie ganó.");

    return (
      <div className="min-h-screen bg-linear-to-br from-yellow-900 via-orange-800 to-red-900 p-8">
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
              <Trophy className="inline text-yellow-500 w-24 h-24 mb-4" />
              <h1 className="text-5xl font-bold text-yellow-900 mb-2">
                ¡{nombreGanador} Gana!
              </h1>
              <p className="text-2xl text-gray-600">
                {subTitulo}
              </p>
            </div>

            <div className="mb-8">
             <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                📊 Podio Final
              </h3>
              <div className="space-y-3">
                {jugadoresOrdenados.map((j, index) => (
                  <div
                    key={j.id}
                      className={`p-4 rounded-lg flex items-center shadow ${
                      index === 0 && j.puntos > 0
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
                t     </p>
                    </div>
                    <span className="text-2xl font-bold text-yellow-800">
                      {j.puntos} Puntos
                    </span>
                  </div>
                 ))}
              </div>
            </div>

            <button
              onClick={iniciarJuego}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-4 rounded-xl transition-colors"
            >
              🔄 Jugar de Nuevo
            </button>
          </div>
        </div>
      </div>
    );
  };

  
 
  // Pantalla principal del juego
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* --- ¡INICIO DEL CAMBIO! --- */}
        <div className="flex justify-between mb-6">
          <button
            onClick={onVolver}
            className="text-indigo-200 hover:text-white transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al Menú
          </button>

          <button
          	onClick={terminarJuego}
          	className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
          >
          	<StopCircle size={18} />
          	Terminar Partida
          </button>
      	</div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          
          {/* HEADER */}
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">
              Adivina la Trayectoria
            </h1>
            <div className="text-left md:text-right w-full md:w-auto bg-black/20 p-3 rounded-lg">
              <p className="font-bold text-lg">{jugadores.map(j => `${j.nombre}: ${j.puntos} pts`).join(' | ')}</p>
            </div>
          </div>

          {/* ESTADO: CARGANDO */}
          {estadoJuego === "cargando" && (
            <div className="flex flex-col items-center justify-center h-96 animate-pulse">
              <Loader2 size={64} className="text-purple-400 animate-spin mb-4" />
              <p className="text-xl font-light">La IA está buscando un jugador...</p>
            </div>
          )}
          
          {/* ESTADO: REVELADO (Fin de ronda) */}
          {estadoJuego === "revelado" && (
             <div className="text-center py-10 h-96 flex flex-col justify-center items-center">
              <Trophy size={80} className="text-yellow-400 mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white mb-2">¡Ronda Terminada!</h2>
              <p className="text-2xl text-gray-300 mb-8">{mensaje || `Era ${jugadorMisterioso?.nombre}`}</p>
              <button
                onClick={siguienteRonda}
                className="bg-green-600 hover:bg-green-500 text-white text-xl font-bold py-4 px-12 rounded-xl shadow-lg shadow-green-900/50 transition-transform hover:scale-105"
              >
                Siguiente Ronda
              </button>
            </div>
          )}

          {/* ESTADO: JUGANDO */}
          {estadoJuego === "jugando" && jugadorMisterioso && (
            <div style={{ minHeight: '384px' }}> {/* 96 * 4px = h-96 */}
              <p className="text-center text-indigo-200 mb-6 text-lg">
                Este jugador pasó por estos clubes (en orden):
              </p>
              
              {/* TRAYECTORIA */}
              <div className="flex flex-wrap justify-center items-center gap-2 mb-8 min-h-[50px]">
                {jugadorMisterioso.trayectoria.slice(0, pistasReveladas).map((club, idx) => (
                  <React.Fragment key={idx}>
                    <div className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-bold shadow-lg transform transition hover:scale-105">
                      {club.club} ({club.anios})
                    </div>
                    {idx < pistasReveladas - 1 && (
                      <div className="flex items-center text-gray-400 text-2xl font-bold">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* PISTAS DE TEXTO (si se acaban los clubes) */}
              {pistasReveladas > jugadorMisterioso.trayectoria.length && (
                <div className="mb-8 bg-black/20 p-4 rounded-xl animate-pulse">
                  <p className="font-bold text-pink-300 mb-2 flex items-center gap-2">
                    <HelpCircle size={18} /> Pistas Extra:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {jugadorMisterioso.pistas.map((pista, i) => (
                      <li key={i}>{pista}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* MENSAJE DE ESTADO */}
              {mensaje && (
                <p className={`text-center font-semibold mb-4 ${mensaje.includes('Incorrecto') ? 'text-red-400' : 'text-green-400'}`}>
                  {mensaje}
                </p>
              )}

              {/* INPUT DE ADIVINANZA */}
              <div className="relative mb-6">
                <input
                  type="text"
                  value={inputAdivinanza}
                  onChange={(e) => setInputAdivinanza(e.target.value)}
                  placeholder="Escribe tu adivinanza..."
                  className="w-full bg-indigo-950/50 border-2 border-indigo-500/50 rounded-xl py-3 px-5 text-lg text-white placeholder-indigo-400 focus:outline-none focus:border-pink-500 transition-all"
                />
              </div>

              {/* BOTONES DE JUGADOR */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {jugadores.map(j => {
                  const yaAdivino = jugadoresBloqueados.includes(j.id);
                  const falloEstaPista = jugadoresBloqueadosPista.includes(j.id);
                  const deshabilitado = yaAdivino || falloEstaPista || !inputAdivinanza;
                  
                  return (
                    <button
                      key={j.id}
                      onClick={() => verificarRespuesta(j.id)}
                      disabled={deshabilitado}
                      className={`py-3 px-4 rounded-lg font-bold transition-colors
                        ${yaAdivino ? 'bg-green-600 text-white' : 
                          falloEstaPista ? 'bg-red-800 text-red-400' : 
                          'bg-pink-600 hover:bg-pink-500 text-white'}
                        ${deshabilitado ? 'opacity-50 cursor-not-allowed' : ''}
                      `}
                    >
                      {yaAdivino ? `${j.nombre} (Acertó)` : 
                       falloEstaPista ? `${j.nombre} (Bloqueado)` : 
                       `¡${j.nombre} adivina!`}
                    </button>
                  );
                })}
              </div>
              
              {/* BOTONES DE CONTROL DE RONDA */}
              <div className="flex gap-4">
                 <button 
                  onClick={revelarSiguienteClub}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg"
                >
                  Siguiente Club ({PUNTOS_POR_NIVEL[pistasReveladas] || 1} pts)
                </button>
                 <button 
                  onClick={revelarJugador}
                  className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-4 rounded-lg"
                >
                  Me Rindo / Revelar
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default JuegoAdivinaJugador;