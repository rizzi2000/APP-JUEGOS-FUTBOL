// Este servicio maneja toda la comunicación con la IA
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("¡ERROR GRAVE! No se encontró la VITE_GEMINI_API_KEY en el archivo .env");
}

const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

/**
 * Función para extraer un bloque JSON de un texto de respuesta de la IA.
 * @param {string} text El texto que contiene el JSON.
 * @returns {Object|null} El objeto JSON parseado o null si no se encuentra.
 */
function extraerJSONdelTexto(text) {
  const match = text.match(/```json\n([\s\S]*?)\n```/);
  if (match && match[1]) {
    try {
      return JSON.parse(match[1]);
    } catch (e) {
      console.error("Error al parsear el JSON extraído:", e);
      return null;
    }
  }
  // Fallback por si la IA no devuelve el bloque ```json
  try {
    return JSON.parse(text);
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
     console.error("No se encontró el bloque JSON en la respuesta de la IA, ni es un JSON válido.", text);
     return null;
  }
}

/**
 * Llama a Gemini CON Google Search y extrae el JSON de la respuesta.
 */
async function llamarGeminiConBusqueda(prompt, systemInstruction) {
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    tools: [{ "google_search": {} }], // <-- ¡AQUÍ ESTÁ LA BÚSQUEDA!
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Error en la API de Gemini: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts[0].text) {
      console.error("Respuesta de la IA inválida (búsqueda):", data);
      throw new Error("Respuesta de la IA inválida o vacía.");
    }
    
    const textoRespuesta = data.candidates[0].content.parts[0].text;
    
    // Extraemos el JSON del texto de respuesta
    return extraerJSONdelTexto(textoRespuesta);

  } catch (error) {
    console.error("Falló la llamada a la IA con búsqueda:", error);
    return null;
  }
}

/**
 * Llama a Gemini con un SCHEMA JSON forzado (sin búsqueda).
 */
async function llamarGeminiJSON(prompt, systemInstruction, schema) {
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Error API: ${response.statusText}`);
    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0].content || !data.candidates[0].content.parts[0].text) {
      console.error("Respuesta de la IA inválida (JSON):", data);
      throw new Error("Respuesta de la IA inválida o vacía.");
    }
    const textoJSON = data.candidates[0].content.parts[0].text;
    return JSON.parse(textoJSON);
  } catch (error) {
    console.error("Falló la llamada a la IA (JSON):", error);
    return null;
  }
}

/**
 * (Para el Juego 4)
 * Obtiene un jugador aleatorio con su trayectoria y pistas.
 */
export async function obtenerJugadorMisterioso() {
  const systemPrompt = `
    Eres un experto en historia del fútbol.
    Tu tarea es elegir un jugador de fútbol famoso (retirado o actual) AL AZAR.
    Debes devolver un JSON con:
    - "nombre": El nombre del jugador (ej: "Zinedine Zidane").
    - "trayectoria": Un array de OBJETOS con {"club": "Santos", "anios": "2009-2013"}, EN ORDEN CRONOLÓGICO.
    - "pistas": Un array de 2 strings con datos curiosos (sin decir el nombre).
    
    IMPORTANTE:
    - No elijas siempre a Messi o Ronaldo. Varía entre leyendas, jugadores actuales top y jugadores de culto.
    - En "trayectoria", usa solo el nombre del club (ej: "Santos", "Barcelona", "PSG").
  `;

  // --- ¡ESTE ES EL CAMBIO! ---
  // El schema ahora pide un objeto con "club" y "anios"
  const schema = {
    type: "OBJECT",
    properties: {
      "nombre": { "type": "STRING" },
      "trayectoria": { 
        "type": "ARRAY",
        "items": {
          "type": "OBJECT",
          "properties": {
            "club": { "type": "STRING" },
            "anios": { "type": "STRING" }
          },
          "required": ["club", "anios"]
        }
      },
      "pistas": { 
        "type": "ARRAY",
        "items": { "type": "STRING" }
      }
    },
    "required": ["nombre", "trayectoria", "pistas"]
  };

  const userPrompt = `Dame un jugador aleatorio distinto al anterior. Seed: ${Date.now()}`;

  return await llamarGeminiJSON(userPrompt, systemPrompt, schema, false); // false = sin búsqueda
}

/**
 * (Para el Juego 1)
 * Genera datos dinámicos para una carta de subasta.
 */
export async function generarDatosSubasta(nombreJugador) {
  const systemPrompt = `
    Eres un tasador de fútbol experto, pero a veces te gusta "trollear".
    Recibirás el nombre de un jugador.
    
    1.  **BUSCA EN GOOGLE** información sobre el jugador: ${nombreJugador}.
    2.  **ANALIZA** su nivel, palmarés y contexto (ej. el año "(1998)" es clave).
    3.  **DEVUELVE TU ANÁLISIS** en un bloque de código JSON con "pistas" y "precio".
    
    Lógica de PRECIO (Número 15-90):
    - **Modo Coherente (80% de las veces):** El precio debe ser lógico para su nivel/contexto.
        - Nivel Top (Messi, Ronaldo, Pelé): 70-90M.
        - Nivel Leyenda (Zidane, Kahn, Maldini): 50-70M.
        - Nivel Crack (Dibu, Julián Álvarez): 30-50M.
        - Nivel "Troll" o Declive (Karius, Maguire): 15-25M.
    - **Modo Troll (20% de las veces):** Invierte la lógica.
        - Jugador Top: Precio bajo (15-30M).
        - Jugador Malo/Troll: Precio alto (70-90M).
    
    Lógica de PISTAS (Array de 3 strings):
     - 3 pistas ambiguas **basadas en los resultados de búsqueda**.
     - Podes dar algun club donde jugo, o compañeros o entrenadores.
     - Prefiere pistas sobre su estilo, nacionalidad, logros o roles (ej: 'Arquero español', 'Especialista en penales', 'Finalista del mundo', 'Recordado por un gol icónico').
    
    IMPORTANTE: Responde ÚNICAMENTE con el bloque de código JSON y nada más.
    Ejemplo de respuesta (Ronaldo Nazário):
   \`\`\`json
   {
     "pistas": [
       "Gané el Balón de Oro dos veces.",
       "Fui campeón del mundo en 2002 siendo la bota de oro."
       "Jugué en clubes como Barcelona, Inter y Real Madrid."
       "Soy conocido por mi velocidad y regate."
       "Fui compañero de ronaldinho en las eleccion brasileña."
     ],
      "precio": 85
}
    \`\`\`
  `;

  const userPrompt = `Analiza al jugador: ${nombreJugador}`;

  return await llamarGeminiConBusqueda(userPrompt, systemPrompt); // true = con búsqueda
}