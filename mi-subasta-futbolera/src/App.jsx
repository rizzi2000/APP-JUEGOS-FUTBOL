/* eslint-disable no-irregular-whitespace */
import React, { useState } from "react";
import { Gavel, Brain, Dices, MapPin, ArrowLeft, X, BookOpen } from "lucide-react"; // Añadidos X y BookOpen
import JuegoSubastaClasica from "./JuegoSubastaClasica.jsx";
import JuegoSubastaObjetivos from "./JuegoSubastaObjetivos.jsx";
import JuegoRuleta from "./JuegoRuleta.jsx";
import JuegoAdivinaJugador from "./JuegoAdivinaJugador.jsx"; 

// --- ¡NUEVO! Componente de Reglas ---
const ReglasModal = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic adentro
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Reglamento</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-700"
          >
            <X size={32} />
          </button>
        </div>
        
        <div className="space-y-6">
          {/* Juego 1 */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-2">Juego 1: Subasta Oculta </h3>
            <p className="text-gray-700">
              El objetivo es armar el mejor equipo posible.
              Por cada posición, se subastan N+1 cartas (donde N es el n° de jugadores).
              Las cartas están ocultas.Se iran generando pistas a medida que avance la subasta.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
              <li><b>Fase 1 (Clasificación):</b> Ves 1 pista y el precio. Tenés 15s para "Entrar al Pozo" (pagando el mínimo).</li>
              <li><b>Fase 2 (Puja):</b> Si más de uno entró, se revelan 2 pistas y empieza la puja real (con +10, +20, +50)supere.</li>
              <li><b>Botón Martillo:</b> Se puede usar para terminar la subasta antes de tiempo.</li>
              <li><b>Ganador:</b> Al final, se vota posición por posición. El que más votos tenga, gana.</li>
            </ul>
          </div>

          {/* Juego 2 */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">Juego 2: Subasta de Objetivos</h3>
            <p className="text-gray-700">
              El objetivo es ser el primero en cumplir tu Misión Secreta 
              Al inicio, cada jugador recibe una misión.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
              <li><b>Cartas Reveladas:</b> Las cartas se muestran con nombre, palmarés y contexto. No hay pistas.</li>
              <li><b>Subasta Directa:</b></li>
              <li><b>Botón Martillo:</b> Se puede usar para terminar la subasta antes.</li>
              <li><b>Rondas de Acusación (5 y 10):</b> En estas rondas, se habilita el botón (❌) para eliminar a un rival si adivinaste su objetivo.</li>
              <li><b>Ganador:</b> El primero que declare haber cumplido su misión. La app solo muestra los equipos.</li>
            </ul>
          </div>

          {/* Juego 3 */}
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
            <h3 className="text-2xl font-bold text-yellow-800 mb-2">Juego 3: Ruleta del Caos</h3>
            <p className="text-gray-700">
              El objetivo es armar el mejor equipo posible, pero tu elección depende de la suerte de la ruleta.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
              <li><b>Por Turnos:</b> Cada jugador, en su turno, gira la ruleta.</li>
              <li><b>Categorías:</b> Si sale una categoría (ej: "Premier League"), el jugador anota un jugador de esa categoría para la posición actual (ej: "POR").</li>
              <li><b>Acciones:</b> Si sale una "Acción" (ej: "Intercambio"), se abre un menú para ejecutarla. ¡Luego, el jugador debe volver a tirar por su categoría!</li>
              <li><b>Ganador:</b> Al final, se vota posición por posición.</li>
            </ul>
          </div>

          {/* Juego 4 */}
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">Juego 4: Adivina la Trayectoria</h3>
            <p className="text-gray-700">
              Un juego de trivia . El objetivo es sumar más puntos que el resto adivinando al jugador misterioso.
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-gray-600">
              <li>Se elige un jugador y muestra su primer club y años.</li>
              <li>Los jugadores escriben su respuesta y aprietan su botón.</li>
              <li><b>Si aciertan:</b> Ganan puntos (10 por el 1er club, 8 por el 2do, etc.) y quedan bloqueados esa ronda.</li>
              <li><b>Si fallan:</b> Quedan bloqueados *solo* para esa pista (pueden volver a intentar cuando se revele el siguiente club).</li>
              <li><b>Botones:</b> Se puede "Revelar Siguiente Club" (baja los puntos) o "Rendirse".</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};


const MenuPrincipal = ({ onSelectGame }) => {
  // --- ¡NUEVO ESTADO! ---
  const [mostrarReglas, setMostrarReglas] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 p-8 flex items-center justify-center">
      
      {/* --- ¡NUEVO MODAL! --- */}
      {mostrarReglas && <ReglasModal onClose={() => setMostrarReglas(false)} />}

      <div className="w-full max-w-2xl">
        <h1 className="text-6xl font-bold text-white text-center mb-12">
          ⚽ Centro de Juegos ⚽
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {/* --- JUEGO 1 --- */}
          <button
            onClick={() => onSelectGame("juego1")}
            className="w-full bg-green-700 hover:bg-green-600 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Gavel size={40} className="mr-5" />
            <div className="text-left">
              <h2 className="text-2xl font-bold">Juego 1: Subasta Oculta (con IA)</h2>
              <p className="text-green-100">
                Pistas y precios por IA, bloqueo de puja y más.
              </p>
            </div>
          </button>

          {/* --- JUEGO 2 --- */}
          <button
            onClick={() => onSelectGame("juego2")}
            className="w-full bg-blue-700 hover:bg-blue-600 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Brain size={40} className="mr-5" />
            <div className="text-left">
              <h2 className="text-2xl font-bold">
                Juego 2: Subasta de Objetivos
              </h2>
              <p className="text-blue-100">
                Misiones secretas, cartas reveladas y estrategia.
              </p>
            </div>
          </button>

          {/* --- JUEGO 3 --- */}
          <button
            onClick={() => onSelectGame("juego3")}
            className="w-full bg-yellow-600 hover:bg-yellow-500 text-yellow-900 p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <Dices size={40} className="mr-5" />
            <div className="text-left">
              <h2 className="text-2xl font-bold">Juego 3: Ruleta del Caos</h2>
              <p className="text-yellow-800">
                Pura suerte, acciones malvadas y armado de equipo.
              </p>
            </div>
          </button>

          {/* --- JUEGO 4 --- */}
          <button
            onClick={() => onSelectGame("juego4")}
            className="w-full bg-purple-700 hover:bg-purple-600 text-white p-6 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <MapPin size={40} className="mr-5" />
            <div className="text-left">
              <h2 className="text-2xl font-bold">Juego 4: Adivina la Trayectoria (IA)</h2>
              <p className="text-purple-100">
                La IA genera un jugador misterioso. ¿Podés adivinarlo por sus clubes?
              </p>
            </div>
          </button>
        </div>

        {/* --- ¡NUEVO BOTÓN DE REGLAS! --- */}
        <div className="text-center mt-10">
          <button
            onClick={() => setMostrarReglas(true)}
            className="text-gray-400 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 mx-auto"
          >
            <BookOpen size={20} />
            Ver Reglas de Todos los Juegos
          </button>
        </div>

      </div>
    </div>
  );
};

const App = () => {
  const [juegoActivo, setJuegoActivo] = useState(null);

  const renderJuego = () => {
    switch (juegoActivo) {
      case "juego1":
        return <JuegoSubastaClasica onVolver={() => setJuegoActivo(null)} />;
      case "juego2":
        return <JuegoSubastaObjetivos onVolver={() => setJuegoActivo(null)} />;
      case "juego3":
        return <JuegoRuleta onVolver={() => setJuegoActivo(null)} />;
      case "juego4": 
        return <JuegoAdivinaJugador onVolver={() => setJuegoActivo(null)} />;
      default:
        return <MenuPrincipal onSelectGame={setJuegoActivo} />;
    }
  };

  return <div className="App">{renderJuego()}</div>;
};

export default App;