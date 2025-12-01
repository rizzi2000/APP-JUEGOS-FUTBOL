/* eslint-disable no-irregular-whitespace */
import { Gift, TrendingUp, TrendingDown, Frown, Zap } from "lucide-react";

export const JUGADORES_DB = {
 POR: [
  {
    nombre: "Lev Yashin (1963)",
    palmares: 2,
},
    {
      nombre: "Oliver Kahn (2002)",
      palmares: 10,
    },
    {
      nombre: "Iker Casillas (2010)",
      palmares: 20,
    },
    {
      nombre: "Gianluigi Buffon (2006)",
      palmares: 10,
    },
    {
      nombre: "Edwin van der Sar (2008)",
      palmares: 15,
      contexto: "Figura clave en el Manchester United campeón de Champions.",
    },
    {
      nombre: "Peter Schmeichel (1999)",
      palmares: 12,
      contexto: "Capitán y figura del United del '99.",
    },
    {
      nombre: "Manuel Neuer (2014)",
      palmares: 15,
      contexto: "Campeón del mundo y redefinió el rol de 'líbero'.",
    },
    {
      nombre: "Petr Čech (2005)",
      palmares: 10,
      contexto: "Récord de vallas invictas en la Premier League.",
    },
    {
      nombre: "Ubaldo Fillol (1978)",
      palmares: 8,
      contexto:
        "Considerado uno de los mejores porteros de la historia de Argentina. Mundial '78.",
    },
    {
      nombre: "Amadeo Carrizo (1960)",
      palmares: 7,
      contexto: "Leyenda de River Plate, redefinió la posición de portero.",
    },
    {
      nombre: "Gatti (1976)",
      palmares: 8,
      contexto: "El 'Loco', ídolo de Boca, famoso por su juego fuera del área.",
    },
    {
      nombre: "José Luis Chilavert (1996)",
      palmares: 5,
      contexto: "Leyenda de Vélez, famoso por sus tiros libres.",
    },
    {
      nombre: "Navarro Montoya (1995)",
      palmares: 6,
      contexto: "El 'Mono', referente del arco de Boca en los 90s.",
    },
    {
      nombre: "Nery Pumpido (1986)",
      palmares: 7,
      contexto: "Portero titular de la selección de Bilardo en México '86.",
    }, // Actuales (Internacional)
    {
      nombre: "Thibaut Courtois (2022)",
      palmares: 10,
      contexto: "MVP de la final de Champions 2022 con el Real Madrid.",
    },
    {
      nombre: "Alisson (2019)",
      palmares: 8,
      contexto: "Pilar del Liverpool campeón de Europa.",
    },
    {
      nombre: "Ter Stegen (2015)",
      palmares: 12,
      contexto: "Clave en la Champions 2015 del Barcelona.",
    }, // Actuales (Argentina / Liga Local)
    {
      nombre: "Dibu Martínez (2022)",
      palmares: 3,
      contexto: "Momento cumbre de su carrera, clave en el Mundial de Qatar.",
    },
    {
      nombre: "Sergio Romero (2024)",
      palmares: 1,
      contexto: "Figura actual en Boca Juniors, gran rendimiento en penales.",
    },
    {
      nombre: "Franco Armani (2018)",
      palmares: 15,
      contexto: "Figura en River Plate y parte de la selección.",
    },
    {
      nombre: "Andrada (2019)",
      palmares: 5,
      contexto: "En su mejor nivel, figura de la Superliga.",
    },
    {
      nombre: "Marchesín (2018)",
      palmares: 7,
      contexto: "Figura en el América y Porto, parte de la selección.",
    },
    {
      nombre: "Juan Musso (2021)",
      palmares: 1,
      contexto: "Buen nivel en Atalanta, parte del recambio de la selección.",
    }, // Versiones "Troll" o Declive
    {
      nombre: "Willy Caballero (2018)",
      palmares: 5,
      contexto:
        "Etapa final de su carrera, recordado por un error con la selección.",
    },
    {
      nombre: "Gianluigi Buffon (2023)",
      palmares: 28,
      contexto: "Etapa final de su carrera, jugando en la Serie B con Parma.",
    },
    {
      nombre: "Iker Casillas (2015)",
      palmares: 22,
      contexto: "Sus últimos años, transferido al Porto.",
    },
    {
      nombre: "Sergio Romero (2020)",
      palmares: 3,
      contexto: "Años sin jugar, suplente en el Manchester United.",
    },
    {
      nombre: "Claudio Bravo (2017)",
      palmares: 15,
      contexto: "Mala primera temporada en el Man City, muy cuestionado.",
    },
    {
      nombre: "Loris Karius (2018)",
      palmares: 0,
      contexto: "Tristemente recordado por sus errores en la final de Kiev.",
    },
    {
      nombre: "Dino Zoff (1982)",
      palmares: 10,
      contexto: "Capitán de Italia campeona del mundo a los 40 años.",
    },
    {
      nombre: "Gordon Banks (1966)",
      palmares: 5,
      contexto: "Campeón del mundo en 1966, famoso por su atajada a Pelé.",
    },
    {
      nombre: "Sepp Maier (1974)",
      palmares: 15,
      contexto: "Parte del Bayern y Alemania campeones de todo en los 70s.",
    },
    {
      nombre: "Fabien Barthez (1998)",
      palmares: 10,
      contexto: "Campeón del mundo en 1998, figura excéntrica.",
    },
    {
      nombre: "David Seaman (1998)",
      palmares: 9,
      contexto: "Leyenda del Arsenal y la selección inglesa en los 90s.",
    }, // Leyendas Argentinas / Liga Local (Nuevos)
    {
      nombre: "Roberto Abbondanzieri (2003)",
      palmares: 14,
      contexto:
        "Figura clave del Boca de Bianchi, ganador de Intercontinental.",
    },
    {
      nombre: "Óscar Córdoba (2001)",
      palmares: 10,
      contexto: "Pilar del Boca bicampeón de América. Imbatible.",
    },
    {
      nombre: "Marcelo Barovero (2015)",
      palmares: 10,
      contexto:
        "Símbolo del River de Gallardo, clave en la Sudamericana y Libertadores.",
    },
    {
      nombre: "Sebastián Saja (2014)",
      palmares: 4,
      contexto: "Capitán y figura del Racing campeón 2014, también goleador.",
    },
    {
      nombre: "Carlos Roa (1998)",
      palmares: 2,
      contexto:
        "Figura de Argentina en el Mundial '98, atajó penal clave a Inglaterra.",
    }, // Actuales (Internacional - Nuevos)
    {
      nombre: "Mike Maignan (2022)",
      palmares: 4,
      contexto: "Figura del Milan campeón de Serie A.",
    },
    {
      nombre: "Jan Oblak (2021)",
      palmares: 7,
      contexto:
        "Considerado por años el mejor del mundo en su puesto. Leyenda del Atlético.",
    },
    {
      nombre: "Ederson (2023)",
      palmares: 18,
      contexto:
        "El arquero-líbero de Guardiola, clave en el triplete del City.",
    },
    {
      nombre: "Keylor Navas (2018)",
      palmares: 20,
      contexto: "Figura clave en el Real Madrid tricampeón de Champions.",
    },
    {
      nombre: "Wojciech Szczęsny (2022)",
      palmares: 10,
      contexto:
        "Portero titular de Juventus y figura de Polonia en el Mundial.",
    }, // Actuales (Argentina / Liga Local - Nuevos)
    {
      nombre: "Agustín Rossi (2022)",
      palmares: 6,
      contexto: "Figura de Boca, famoso por su habilidad para atajar penales.",
    },
    {
      nombre: "Guido Herrera (2024)",
      palmares: 0,
      contexto: "Capitán y referente de Talleres en la liga actual.",
    },
    {
      nombre: "Walter Benítez (2024)",
      palmares: 2,
      contexto: "Gran nivel en PSV, convocado a la selección argentina.",
    },
    {
      nombre: "Facundo Cambeses (2023)",
      palmares: 0,
      contexto: "Clave en el Banfield de 2023, ahora en Racing.",
    },
    {
      nombre: "Leandro Brey (2024)",
      palmares: 1,
      contexto:
        "Joven promesa del arco de Boca Juniors y la selección juvenil.",
    }, // Versiones "Troll" o Declive (Nuevos)
    {
      nombre: "David De Gea (2023)",
      palmares: 15,
      contexto:
        "Su última temporada en Man Utd, cuestionado por su juego de pies.",
    },
    {
      nombre: "Germán Burgos (2002)",
      palmares: 5,
      contexto: "Etapa final de su carrera, suplente en el Mundial 2002.",
    },
    {
      nombre: "Kepa Arrizabalaga (2019)",
      palmares: 3,
      contexto: "Famoso por negarse a ser sustituido en una final.",
    },
    {
      nombre: "René Higuita (1990)",
      palmares: 5,
      contexto: "Mundial 1990, recordado por su error 'líbero' contra Camerún.",
    },
    {
      nombre: "Javier García (2024)",
      palmares: 10,
      contexto: "Arquero suplente de Boca, con muchos años en el club.",
    }, // --- SEGUNDA TANDA DE ARQUEROS AÑADIDOS --- // Leyendas Internacionales (Más)
    {
      nombre: "Rinat Dasayev (1988)",
      palmares: 3,
      contexto: "Considerado el mejor arquero del mundo en los 80s.",
    },
    {
      nombre: "Michel Preud'homme (1994)",
      palmares: 8,
      contexto:
        "Ganador del primer Trofeo Yashin al mejor arquero del Mundial.",
    },
    {
      nombre: "Jorge Campos (1994)",
      palmares: 5,
      contexto:
        "Un ícono de los 90s, famoso por su estilo arriesgado y sus uniformes.",
    },
    {
      nombre: "Andoni Zubizarreta (1992)",
      palmares: 15,
      contexto:
        "Capitán y arquero titular del 'Dream Team' de Cruyff en Barcelona.",
    },
    {
      nombre: "Antonio Roma (1969)",
      palmares: 10,
      contexto:
        "Leyenda de Boca, famoso por atajar el penal a Delem en el '62.",
    },
    {
      nombre: "Miguel Ángel Santoro (1973)",
      palmares: 11,
      contexto:
        "Ídolo máximo de Independiente, parte de la era dorada de los 70s.",
    },
    {
      nombre: "Julio César Falcioni (1990)",
      palmares: 7,
      contexto:
        "Histórico arquero del América de Cali, subcampeón de Libertadores.",
    },
    {
      nombre: "Ignacio González (1997)",
      palmares: 4,
      contexto:
        "Arquero de Racing en los 90s, conocido por hacerse cargo de los penales.",
    }, // Actuales (Internacional - Más)
    {
      nombre: "Unai Simón (2024)",
      palmares: 3,
      contexto: "Portero titular de la selección española y del Athletic Club.",
    },
    {
      nombre: "Yann Sommer (2024)",
      palmares: 10,
      contexto: "Clave en el Inter campeón de Serie A, muy seguro.",
    },
    {
      nombre: "Gregor Kobel (2024)",
      palmares: 2,
      contexto:
        "Figura del Borussia Dortmund, de los mejores de la Bundesliga.",
    },
    {
      nombre: "André Onana (2023)",
      palmares: 6,
      contexto:
        "Figura en el Inter finalista 2023, antes de su traspaso al Man Utd.",
    }, // Actuales (Argentina / Liga Local - Más)
    {
      nombre: "Gabriel Arias (2023)",
      palmares: 4,
      contexto: "Referente y capitán de Racing Club en los últimos años.",
    },
    {
      nombre: "Rodrigo Rey (2024)",
      palmares: 1,
      contexto: "Arquero titular de Independiente, con buenas actuaciones.",
    },
    {
      nombre: "Tomás Marchiori (2024)",
      palmares: 0,
      contexto: "Clave en la campaña de Vélez finalista de la liga 2024.",
    }, // Versiones "Troll" o Declive (Más)
    {
      nombre: "Hugo Lloris (2023)",
      palmares: 10,
      contexto:
        "Sus últimos meses en Tottenham, ya relegado, antes de ir a la MLS.",
    },
    {
      nombre: "Joe Hart (2017)",
      palmares: 8,
      contexto:
        "Momento de su carrera post-Man City, cedido en Torino/West Ham.",
    },
    {
      nombre: "Roberto Bonano (2002)",
      palmares: 12,
      contexto:
        "Versión suplente en el Mundial 2002, recordado por algunas dudas.",
    },
  ], // 2. Laterales (¡TU LISTA ORIGINAL!)
  LD: [
    {
      nombre: "Cafu (2002)",
      palmares: 18,
      contexto: "Capitán de Brasil campeón del mundo.",
    },
    {
      nombre: "Javier Zanetti (2010)",
      palmares: 16,
      contexto: "Capitán del Inter que ganó el triplete.",
    },
    {
      nombre: "Lilian Thuram (1998)",
      palmares: 12,
      contexto: "Aunque central, fue un LD campeón del mundo.",
    },
    {
      nombre: "Carlos Alberto (1970)",
      palmares: 10,
      contexto: "Capitán del Brasil del 70.",
    },
    {
      nombre: "Philipp Lahm (2014)",
      palmares: 20,
      contexto: "Capitán de Alemania campeona del mundo.",
    },
    {
      nombre: "Dani Alves (2011)",
      palmares: 43,
      contexto: "En su prime del Barça de Guardiola.",
    },
    {
      nombre: "Maicon (2010)",
      palmares: 15,
      contexto: "El 'Expreso', figura absoluta del Inter de Mourinho.",
    },
    {
      nombre: "Gary Neville (1999)",
      palmares: 20,
      contexto:
        "Lateral derecho titular del Manchester United que ganó el triplete.",
    },
    {
      nombre: "Giuseppe Bergomi (1982)",
      palmares: 10,
      contexto:
        "Leyenda del Inter, campeón del mundo en el '82 jugando de lateral.",
    },
    {
      nombre: "Berti Vogts (1974)",
      palmares: 12,
      contexto: "Famoso por su marca pegajosa en la final del '74.",
    },
    {
      nombre: "Djalma Santos (1962)",
      palmares: 6,
      contexto: "Uno de los pioneros en la posición de lateral ofensivo.",
    },
    {
      nombre: "Josimar (1986)",
      palmares: 2,
      contexto: "Famoso por dos golazos espectaculares en el Mundial '86.",
    },

    // --- LEYENDAS ARGENTINAS / LOCALES ---
    {
      nombre: "Hugo Ibarra (2003)",
      palmares: 15,
      contexto: "Histórico lateral de Boca, parte de la era dorada de Bianchi.",
    },
    {
      nombre: "Jorge Olguín (1978)",
      palmares: 6,
      contexto: "Lateral derecho titular de la Argentina campeona del mundo.",
    },
    {
      nombre: "Hernán Díaz (1996)",
      palmares: 12,
      contexto: "Referente de River en los 90s.",
    },
    {
      nombre: "Pablo Zabaleta (2014)",
      palmares: 10,
      contexto: "Subcampeón del mundo y figura/ídolo del Manchester City.",
    },
    {
      nombre: "Julio Buffarini (2018)",
      palmares: 8,
      contexto:
        "Lateral de gran recorrido, campeón de América con San Lorenzo.",
    },
    {
      nombre: "Vicente Pernía (1978)",
      palmares: 8,
      contexto: "Símbolo de Boca en los 70s, famoso por su temperamento.",
    },
    {
      nombre: "Néstor Clausen (1986)",
      palmares: 7,
      contexto: "Lateral derecho titular de la selección campeona.",
    },
    {
      nombre: "Gabriel Mercado (2018)",
      palmares: 10,
      contexto: "Figura de River y Sevilla, titular en el Mundial 2018.",
    },
    {
      nombre: "Iván Pillud (2024)",
      palmares: 5,
      contexto: "Un ícono de Racing, más por su carisma que por su nivel top.",
    },

    // --- ACTUALES INTERNACIONALES ---
    {
      nombre: "Kyle Walker (2023)",
      palmares: 18,
      contexto: "El lateral más rápido del mundo.",
    },
    {
      nombre: "Achraf Hakimi (2023)",
      palmares: 10,
      contexto: "Uno de los laterales más ofensivos y caros del mundo.",
    },
    {
      nombre: "Trent Alexander-Arnold (2019)",
      palmares: 10,
      contexto: "Revolucionó la posición con su calidad de asistidor.",
    },
    {
      nombre: "Reece James (2021)",
      palmares: 5,
      contexto: "En su pico, un lateral completísimo.",
    },
    {
      nombre: "João Cancelo (2022)",
      palmares: 12,
      contexto: "Lateral 'invertido' de Guardiola, clave en el Man City.",
    },
    {
      nombre: "Dani Carvajal (2024)",
      palmares: 25,
      contexto: "Figura clave del Real Madrid, marcó en la final 2024.",
    },
    {
      nombre: "Ben White (2024)",
      palmares: 3,
      contexto: "Reconvertido de DFC, titular en el Arsenal de Arteta.",
    },
    {
      nombre: "Kieran Trippier (2023)",
      palmares: 3,
      contexto: "Especialista en centros y tiros libres, figura del Newcastle.",
    },
    {
      nombre: "Jeremie Frimpong (2024)",
      palmares: 3,
      contexto: "Figura clave como carrilero en el Bayer Leverkusen.",
    },
    {
      nombre: "Giovanni Di Lorenzo (2021)",
      palmares: 4,
      contexto: "Capitán del Napoli campeón y titular de Italia.",
    },
    {
      nombre: "Jules Koundé (2023)",
      palmares: 10,
      contexto: "Central reconvertido a lateral derecho.",
    },

    // --- ACTUALES ARGENTINA / LIGA LOCAL ---
    {
      nombre: "Marcelo Weigandt (2024)",
      palmares: 3,
      contexto: "Lateral derecho con mucha garra, jugando en Boca/Inter Miami.",
    },
    {
      nombre: "Nahuel Molina (2022)",
      palmares: 3,
      contexto:
        "Lateral titular de la Scaloneta, clave en el Mundial de Qatar.",
    },
    {
      nombre: "Gonzalo Montiel (2022)",
      palmares: 10,
      contexto: "Autor del penal que dio la Copa del Mundo.",
    },
    {
      nombre: "Luis Advíncula (2023)",
      palmares: 5,
      contexto: "Figura de Boca, clave en la Libertadores 2023.",
    },
    {
      nombre: "Agustín Sant'Anna (2024)",
      palmares: 1,
      contexto: "Lateral de buen rendimiento en Defensa.",
    },
    {
      nombre: "Leonardo Godoy (2023)",
      palmares: 2,
      contexto: "De los mejores laterales de la liga argentina en 2023.",
    },
    {
      nombre: "Eros Mancuso (2024)",
      palmares: 1,
      contexto: "Buen nivel en Estudiantes, clave en la obtención de títulos.",
    },
    {
      nombre: "Juan Foyth (2021)",
      palmares: 5,
      contexto:
        "Reconvertido a lateral en Villarreal, campeón de Europa League.",
    },
    {
      nombre: "Gonzalo Luján (2024)",
      palmares: 1,
      contexto: "Joven defensor de San Lorenzo.",
    },
    {
      nombre: "Nicolás Tripichio (2023)",
      palmares: 1,
      contexto: "Jugador clave en Defensa y Justicia.",
    },
    {
      nombre: "Agustín Giay (2024)",
      palmares: 1,
      contexto: "Joven promesa de San Lorenzo, con gran proyección ofensiva.",
    },
    {
      nombre: "Joaquín García (2024)",
      palmares: 0,
      contexto: "Lateral derecho titular de Vélez Sársfield.",
    },

    // --- VERSIONES "TROLL" O DECLIVE ---
    {
      nombre: "Nicolás Tagliafico (2018 - LD Troll)",
      palmares: 5,
      contexto: "Recordado por tener que jugar de lateral derecho vs Francia.",
    },
    {
      nombre: "Gino Peruzzi (2017)",
      palmares: 6,
      contexto: "Etapa en Boca donde fue titular pero resistido.",
    },
    {
      nombre: "Álvaro Arbeloa (2015)",
      palmares: 15,
      contexto: "Últimos años en el Real Madrid, conocido por el apodo 'cono'.",
    },
    {
      nombre: "Dani Alves (2022)",
      palmares: 43,
      contexto: "Su breve y nostálgica segunda etapa en el Barcelona.",
    },
    {
      nombre: "Héctor Bellerín (2023)",
      palmares: 6,
      contexto: "Lejos de su nivel top, jugando en Betis/Sporting.",
    },
  ],
  LI: [
    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Paolo Maldini (1994)",
      palmares: 26,
      contexto:
        "Aunque también central, fue un lateral izquierdo legendario. Balón de Oro.",
    },
    {
      nombre: "Roberto Carlos (2002)",
      palmares: 15,
      contexto: "Parte de los 'Galácticos' y campeón del mundo.",
    },
    {
      nombre: "Giacinto Facchetti (1966)",
      palmares: 9,
      contexto:
        "Leyenda del Inter, uno de los primeros laterales ofensivos de la historia.",
    },
    {
      nombre: "Nilton Santos (1962)",
      palmares: 6,
      contexto: "Leyenda de Botafogo y Brasil, pionero en la posición.",
    },
    {
      nombre: "Andreas Brehme (1990)",
      palmares: 8,
      contexto: "Autor del penal en la final de Italia '90. Ambidiestro total.",
    },
    {
      nombre: "Ashley Cole (2004)",
      palmares: 15,
      contexto: "En su prime en Arsenal y Chelsea, de los mejores del mundo.",
    },
    {
      nombre: "Bixente Lizarazu (2001)",
      palmares: 20,
      contexto: "Parte del Bayern y Francia ganadores de Mundia y Champions.",
    },
    {
      nombre: "Patrice Evra (2008)",
      palmares: 21,
      contexto:
        "Figura y líder en el Man Utd de Ferguson, campeón de Champions.",
    },
    {
      nombre: "Júnior (1982)",
      palmares: 10,
      contexto: "Pura clase y técnica en el mediocampo y lateral de Brasil.",
    },
    {
      nombre: "Denis Irwin (1999)",
      palmares: 20,
      contexto:
        "El jugador más fiable de Ferguson en el United del '99. Pateaba todo.",
    },
    {
      nombre: "Ruud Krol (1974)",
      palmares: 12,
      contexto: "Aunque líbero, fue un lateral izquierdo top en el '74.",
    },
    {
      nombre: "Christian Ziege (2000)",
      palmares: 7,
      contexto: "Lateral muy ofensivo, gran pegada de media distancia.",
    },
    {
      nombre: "Joan Capdevila (2008)",
      palmares: 6,
      contexto: "Titular indiscutido de la España campeona de la Euro 2008.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Silvio Marzolini (1965)",
      palmares: 6,
      contexto: "Considerado el mejor LI de la historia de Boca y Argentina.",
    },
    {
      nombre: "Alberto Tarantini (1978)",
      palmares: 8,
      contexto: "Titular en el Mundial '78, mucha proyección y temperamento.",
    },
    {
      nombre: "Juan Pablo Sorín (2002)",
      palmares: 10,
      contexto:
        "Capitán de la selección, ídolo en River y Cruzeiro. Pura garra.",
    },
    {
      nombre: "Clemente Rodríguez (2003)",
      palmares: 13,
      contexto: "En su prime, figura clave del Boca de Bianchi. Imparable.",
    },
    {
      nombre: "José Chamot (1998)",
      palmares: 5,
      contexto:
        "Defensor de la selección en los 90s, garra pura. Jugó en Lazio y Milan.",
    },
    {
      nombre: "Diego Placente (2002)",
      palmares: 8,
      contexto: "Lateral de River y Bayer Leverkusen finalista de Champions.",
    },
    {
      nombre: "Rodolfo Arruabarrena (2000)",
      palmares: 10,
      contexto:
        "Autor de dos goles en la Intercontinental 2000. Ídolo de Boca.",
    },
    {
      nombre: "Nicolás Vivaldo (1994)",
      palmares: 1,
      contexto: "Un ícono del fútbol de los 90s, famoso por su look.",
    },
    {
      nombre: "Vicente Pernía (1976 - LI)",
      palmares: 8,
      contexto: "Aunque más LD, jugó de LI. Símbolo de Boca en los 70s.",
    },
    {
      nombre: "Federico Domínguez (2003)",
      palmares: 4,
      contexto: "Gran pegada de tiro libre, ídolo en Vélez e Independiente.",
    },
    {
      nombre: "Lucas Mareque (2010)",
      palmares: 2,
      contexto: "Buen nivel en el Independiente campeón de Sudamericana 2010.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Theo Hernández (2023)",
      palmares: 8,
      contexto: "De los más rápidos y ofensivos del mundo. Figura en Milan.",
    },
    {
      nombre: "Alphonso Davies (2020)",
      palmares: 15,
      contexto: "Revolucionó la posición con su velocidad. 'Road runner'.",
    },
    {
      nombre: "Andy Robertson (2019)",
      palmares: 10,
      contexto:
        "Pilar del Liverpool de Klopp campeón de Champions, incansable.",
    },
    {
      nombre: "Alejandro Grimaldo (2024)",
      palmares: 8,
      contexto:
        "Figura y goleador en el Bayer Leverkusen invencible de Xabi Alonso.",
    },
    {
      nombre: "Nuno Mendes (2023)",
      palmares: 7,
      contexto: "Promesa convertida en realidad, muy ofensivo y veloz.",
    },
    {
      nombre: "Federico Dimarco (2023)",
      palmares: 6,
      contexto:
        "Clave en el Inter finalista de Champions, gran pegada y centro.",
    },
    {
      nombre: "Alejandro Balde (2023)",
      palmares: 3,
      contexto: "Irrupción en el Barcelona, pura potencia y velocidad.",
    },
    {
      nombre: "Pervis Estupiñán (2023)",
      palmares: 2,
      contexto: "Gran temporada en el Brighton, lateral muy físico.",
    },
    {
      nombre: "David Alaba (2016 - LI)",
      palmares: 30,
      contexto:
        "Su versión de lateral izquierdo en Bayern, antes de ser central.",
    },
    {
      nombre: "João Cancelo (2021 - LI)",
      palmares: 12,
      contexto:
        "Versión de lateral izquierdo en el Man City, jugando 'invertido'.",
    },
    {
      nombre: "Ferland Mendy (2022)",
      palmares: 12,
      contexto:
        "El lateral defensivo de Ancelotti, clave en la Champions 2022.",
    },
    {
      nombre: "Luke Shaw (2021)",
      palmares: 4,
      contexto: "Su mejor versión, figura en la Eurocopa 2021.",
    },
    {
      nombre: "Leonardo Spinazzola (2021)",
      palmares: 3,
      contexto: "Figura absoluta de la Euro 2021 hasta su lesión.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Nicolás Tagliafico (2022)",
      palmares: 5,
      contexto: "Titular en la Scaloneta, ex-Independiente, ahora en Lyon.",
    },
    {
      nombre: "Marcos Acuña (2022)",
      palmares: 5,
      contexto: "Volante reconvertido, clave en la selección. Pura entrega.",
    },
    {
      nombre: "Valentín Barco (2023)",
      palmares: 1,
      contexto: "Versión de su explosión en Boca, pura habilidad y polémica.",
    },
    {
      nombre: "Milton Casco (2018)",
      palmares: 10,
      contexto: "Clave en el River de Gallardo, juega en ambas bandas.",
    },
    {
      nombre: "Enzo Díaz (2024)",
      palmares: 3,
      contexto: "Titular en River, ex-Talleres, mucha fuerza y proyección.",
    },
    {
      nombre: "Frank Fabra (2018)",
      palmares: 8,
      contexto: "Conocido por sus proyecciones ofensivas en Boca Juniors.",
    },
    {
      nombre: "Lautaro Blanco (2024)",
      palmares: 1,
      contexto: "Lateral de buena proyección ofensiva, buscando su lugar.",
    },
    {
      nombre: "Ángelo Martino (2023)",
      palmares: 0,
      contexto: "Figura de Talleres y ahora en Newell's, gran ida y vuelta.",
    },
    {
      nombre: "Gonzalo Escobar (2023)",
      palmares: 0,
      contexto: "Buen nivel en Fortaleza, lateral cumplidor.",
    },
    {
      nombre: "Emanuel Más (2017)",
      palmares: 5,
      contexto: "En su pico, campeón de América y convocado a la selección.",
    },
    {
      nombre: "Adrián Sporle (2020)",
      palmares: 1,
      contexto: "Canterano de Banfield que hizo carrera en Escocia y Francia.",
    },
    {
      nombre: "Francisco Álvarez (2024)",
      palmares: 0,
      contexto: "Joven lateral de Talleres con buena proyección.",
    },
    {
      nombre: "Nahuel Génez (2024)",
      palmares: 1,
      contexto: "Joven promesa de la cantera de Boca, a préstamo.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Marcelo (2023)",
      palmares: 28,
      contexto:
        "Vuelta a Sudamérica, lejos de su prime, campeón de Libertadores.",
    },
    {
      nombre: "Jordi Alba (2024)",
      palmares: 25,
      contexto: "Reunido con Messi en Miami, en la etapa final de su carrera.",
    },
    {
      nombre: "Marcos Rojo (2018 - LI Troll)",
      palmares: 5,
      contexto:
        "Tuvo que jugar de lateral izquierdo en el Mundial 2018, sufriendo.",
    },
    {
      nombre: "Frank Fabra (2023 - Post-Final)",
      palmares: 8,
      contexto:
        "Versión post-expulsión en la final de Libertadores, muy cuestionado.",
    },
    {
      nombre: "Luke Shaw (2018)",
      palmares: 2,
      contexto: "Antes de su resurgimiento, muy criticado y con lesiones.",
    },
    {
      nombre: "Benjamin Mendy (2021)",
      palmares: 8,
      contexto: "Su carrera se desplomó por problemas extradeportivos.",
    },
    {
      nombre: "Leonel Vangioni (2016)",
      palmares: 10,
      contexto:
        "Su paso fallido por el Milan, sin minutos tras ser figura en River.",
    },
    {
      nombre: "Gabriel Heinze (2014)",
      palmares: 10,
      contexto: "Sus últimos partidos como profesional en Newell's.",
    },
    {
      nombre: "Fábio Coentrão (2018)",
      palmares: 12,
      contexto: "Carrera en picada tras su salida del Real Madrid.",
    },
    {
      nombre: "Aleksandar Kolarov (2021)",
      palmares: 10,
      contexto: "Sus últimos años en el Inter, muy lento y jugando de central.",
    },
    {
      nombre: "Filipe Luís (2023)",
      palmares: 20,
      contexto:
        "Etapa final en Flamengo, jugando más por inteligencia que por físico.",
    },
    {
      nombre: "Leighton Baines (2019)",
      palmares: 0,
      contexto: "Sus últimos años, perdiendo el puesto por la edad.",
    },
    {
      nombre: "Nico Schulz (2022)",
      palmares: 1,
      contexto: "Fichaje millonario del Dortmund que no jugó nunca.",
    },
    {
      nombre: "Valentín Barco (2024 - Brighton)",
      palmares: 1,
      contexto:
        "Sus primeros meses en Brighton, sin minutos y jugando en reserva.",
    },
    {
      nombre: "Emanuel Insúa (2023)",
      palmares: 1,
      contexto: "Vuelta a Argentina con un nivel muy bajo.",
    },
    {
      nombre: "Juan Sánchez Miño (2020)",
      palmares: 2,
      contexto:
        "Volante reconvertido a lateral, muy cuestionado en Independiente.",
    },
  ], // 4. Centrales
  DFC_I: [
    {
      nombre: "Daniel Passarella (1978)",
      palmares: 10,
      contexto: "Capitán de la Argentina campeona del '78. Un líder nato.",
    },
    {
      nombre: "Walter Samuel (2010)",
      palmares: 14,
      contexto: "Clave en el triplete del Inter de Mourinho.",
    },
    {
      nombre: "Oscar Ruggeri (1986)",
      palmares: 10,
      contexto: "Líder de la defensa argentina campeona del mundo en México.",
    },
    {
      nombre: "Giorgio Chiellini (2017)",
      palmares: 20,
      contexto:
        "Símbolo de la Juventus y la Italia campeona de Europa. Pura rusticidad.",
    },
    {
      nombre: "Paolo Maldini (2003 - DFC)",
      palmares: 26,
      contexto: "Su versión de central, pura clase, tiempo y elegancia.",
    },
    {
      nombre: "Rio Ferdinand (2008 - LCB)",
      palmares: 18,
      contexto: "Aunque diestro, solía ser el '6' en la zaga del Man Utd.",
    },
    {
      nombre: "Jaap Stam (1999 - LCB)",
      palmares: 15,
      contexto:
        "Una bestia física, pilar del Man Utd. Jugaba en ambos perfiles.",
    },
    {
      nombre: "Marcel Desailly (1998 - LCB)",
      palmares: 15,
      contexto: "Campeón del mundo y de Europa, podía jugar de 5 o central.",
    },
    {
      nombre: "Ronald Koeman (1992 - LCB)",
      palmares: 20,
      contexto: "Defensor más goleador, jugaba de líbero o DFC izquierdo.",
    },
    {
      nombre: "Frank de Boer (1995)",
      palmares: 15,
      contexto: "Clásico central zurdo del Ajax '95 y el Barça. Gran pase.",
    },
    {
      nombre: "Ricardo Carvalho (2004)",
      palmares: 20,
      contexto: "Figura del Porto campeón de Champions y del Chelsea.",
    },
    {
      nombre: "Laurent Blanc (1998)",
      palmares: 15,
      contexto: "Líbero elegante, campeón del mundo con Francia '98.",
    },
    {
      nombre: "Gabriel Heinze (2006)",
      palmares: 8,
      contexto: "En su prime, un DFC/LI zurdo de pura garra y entrega.",
    },
    {
      nombre: "Javier Mascherano (2011 - DFC)",
      palmares: 20,
      contexto:
        "Su versión DFC en el Barcelona de Guardiola. Pura anticipación.",
    },
    {
      nombre: "Daniel Agger (2009)",
      palmares: 3,
      contexto: "Ídolo del Liverpool, gran pegada de zurda y salida limpia.",
    },
    {
      nombre: "Rafa Márquez (2006)",
      palmares: 20,
      contexto: "Pura clase y salida, figura del Barcelona de Rijkaard.",
    },
    {
      nombre: "Roberto Sensini (1999)",
      palmares: 10,
      contexto: "Polifuncional, jugó de DFC, LI o 5. Leyenda de Parma y Lazio.",
    },
    {
      nombre: "Fabián Ayala (2004 - LCB)",
      palmares: 10,
      contexto: "Capitán de la selección, a menudo jugaba como '6' en la zaga.",
    },
    {
      nombre: "Cristian Chivu (2010)",
      palmares: 15,
      contexto: "Zurdo, polifuncional (DFC/LI) del Inter de Mourinho.",
    },
    {
      nombre: "Jan Vertonghen (2018)",
      palmares: 5,
      contexto: "En su prime, de los mejores centrales zurdos de la Premier.",
    },

    // --- ACTUALES (INTERNACIONAL) ---
    {
      nombre: "Virgil van Dijk (2019)",
      palmares: 12,
      contexto: "En su prime, Balón de Plata. El DFC izquierdo dominante.",
    },
    {
      nombre: "Joško Gvardiol (2023)",
      palmares: 6,
      contexto: "De los DFC zurdos más caros de la historia. Pura potencia.",
    },
    {
      nombre: "Alessandro Bastoni (2024)",
      palmares: 8,
      contexto: "El '6' titular de Italia y del Inter. Gran salida.",
    },
    {
      nombre: "David Alaba (2021 - DFC)",
      palmares: 30,
      contexto: "Su versión de DFC zurdo, clave en el Real Madrid y Bayern.",
    },
    {
      nombre: "Aymeric Laporte (2019)",
      palmares: 20,
      contexto: "Pilar zurdo del City de Guardiola antes de ir a Arabia.",
    },
    {
      nombre: "Lisandro Martínez (2022)",
      palmares: 8,
      contexto: "El 'Carnicero', ídolo en Man Utd y pilar de la Scaloneta.",
    },
    {
      nombre: "William Saliba (2024 - LCB)",
      palmares: 4,
      contexto: "Aunque diestro, es el DFC izquierdo titular del Arsenal. Top.",
    },
    {
      nombre: "Nico Schlotterbeck (2024)",
      palmares: 4,
      contexto:
        "Titular en Alemania y finalista de Champions. Fuerte y rápido.",
    },
    {
      nombre: "Pau Torres (2023)",
      palmares: 3,
      contexto: "Clásico DFC zurdo español, gran pase. Figura del Aston Villa.",
    },
    {
      nombre: "Micky van de Ven (2024)",
      palmares: 1,
      contexto: "Considerado el jugador más rápido de la Premier. Zurdo.",
    },
    {
      nombre: "Sven Botman (2023)",
      palmares: 3,
      contexto: "Clave en la defensa del Newcastle pre-lesión. Muy sólido.",
    },
    {
      nombre: "Benoît Badiashile (2023)",
      palmares: 2,
      contexto: "Joven DFC zurdo, fichaje del Chelsea. Mucha proyección.",
    },
    {
      nombre: "Manuel Akanji (2023 - LCB)",
      palmares: 15,
      contexto: "Diestro que juega de DFC, LI o 5. Clave para Guardiola.",
    },
    {
      nombre: "Presnel Kimpembe (2020)",
      palmares: 25,
      contexto: "Campeón del mundo, DFC zurdo de la cantera del PSG. Fuerte.",
    },
    {
      nombre: "Lucas Hernández (2020 - DFC)",
      palmares: 20,
      contexto: "Puede jugar de LI o DFC zurdo. Pura agresividad.",
    },
    {
      nombre: "Bremer (2024 - LCB)",
      palmares: 3,
      contexto: "Diestro, pero el '6' de la Juventus. Físico imponente.",
    },
    {
      nombre: "Mats Hummels (2014)",
      palmares: 15,
      contexto:
        "Diestro, pero el '6' de Alemania campeona del mundo. Gran salida.",
    },

    // --- ACTUALES (ARGENTINA / LIGA LOCAL) ---
    {
      nombre: "Marcos Rojo (2014 - DFC)",
      // (Tus DFC_I originales tenían este)
      palmares: 5,
      contexto: "En su mejor momento, fue subcampeón del mundo con Argentina.",
    },
    {
      nombre: "Lisandro Martínez (2021 - Ajax)",
      palmares: 8,
      contexto: "Su versión en Ajax, donde explotó. Gran salida de balón.",
    },
    {
      nombre: "Marcos Senesi (2023)",
      palmares: 3,
      contexto: "Sólido DFC zurdo, figura en el Bournemouth. Selección.",
    },
    {
      nombre: "Facundo Medina (2024)",
      palmares: 3,
      contexto:
        "Figura del Lens en Francia, DFC zurdo con carácter. Selección.",
    },
    {
      nombre: "Nicolás Valentini (2023)",
      palmares: 1,
      contexto: "Joven DFC zurdo, figura de Boca en la Libertadores '23.",
    },
    {
      nombre: "Ramiro Funes Mori (2015)",
      palmares: 10,
      contexto:
        "En su prime en River, clave en la Libertadores. 'No era de goma'.",
    },
    {
      nombre: "Javier Pinola (2018 - DFC)",
      palmares: 10,
      contexto: "Su mejor versión en River, líder de la defensa con Maidana.",
    },
    {
      nombre: "Walter Kannemann (2017)",
      palmares: 5,
      contexto:
        "Símbolo y pilar del Gremio campeón de Libertadores. Impasable.",
    },
    {
      nombre: "Alexander Callens (2022)",
      palmares: 5,
      contexto: "Titular de la selección peruana, DFC zurdo y sólido.",
    },
    {
      nombre: "Júnior Alonso (2020)",
      palmares: 8,
      contexto: "Pilar de la defensa del Boca de Russo y figura en Brasil.",
    },
    {
      nombre: "Víctor Cuesta (2018)",
      palmares: 3,
      contexto: "Figura en Inter de Porto Alegre, DFC zurdo y capitán.",
    },
    {
      nombre: "Gastón Campi (2023)",
      palmares: 2,
      contexto: "DFC zurdo de buen pie, clave en el San Lorenzo de Insúa.",
    },
    {
      nombre: "Bruno Amione (2024)",
      palmares: 1,
      contexto: "Joven DFC zurdo, ex-Belgrano, jugando en México.",
    },
    {
      nombre: "Lautaro Blanco (2023 - DFC Troll)",
      palmares: 1,
      contexto: "Lateral que tuvo que jugar de DFC por necesidad. Parche.",
    },

    // --- VERSIONES "TROLL" O DECLIVE ---
    {
      nombre: "Harry Maguire (2022)",
      palmares: 3,
      contexto:
        "Aunque diestro, el DFC izquierdo titular (y criticado) del Man Utd.",
    },
    {
      nombre: "Clément Lenglet (2022)",
      palmares: 6,
      contexto: "Su carrera se desplomó en Barcelona, cedido al Tottenham.",
    },
    {
      nombre: "Samuel Umtiti (2021)",
      palmares: 10,
      contexto:
        "Nunca volvió a ser el mismo post-Mundial 2018. Problemas físicos.",
    },
    {
      nombre: "David Luiz (2019 - LCB)",
      palmares: 20,
      contexto: "Su etapa en el Arsenal, jugaba de 6 y era propenso a penales.",
    },
    {
      nombre: "Ramiro Funes Mori (2023 - Vuelta)",
      palmares: 11,
      contexto: "Su segunda etapa en River, muy marcada por las lesiones.",
    },
    {
      nombre: "Javier Pinola (2017 - Error)",
      palmares: 10,
      contexto: "Recordado por el error en la semifinal de Libertadores 2017.",
    },
    {
      nombre: "Marcos Rojo (2018 - Man Utd)",
      palmares: 8,
      contexto: "Su etapa en Man Utd, muchas lesiones y poca continuidad.",
    },
    {
      nombre: "Thomas Vermaelen (2016)",
      palmares: 15,
      contexto: "Fichaje del Barça, vivió lesionado. 'Vermaradona' (ironía).",
    },
    {
      nombre: "Daley Blind (2022 - DFC)",
      palmares: 15,
      contexto: "Reconvertido a DFC zurdo por falta de velocidad para ser LI.",
    },
    {
      nombre: "Nacho (2024 - DFC)",
      palmares: 25,
      contexto: "Diestro, pero el 'parche' histórico del Madrid. Jugó de 6.",
    },
    {
      nombre: "Javier Mascherano (2018 - DFC)",
      palmares: 20,
      contexto: "Jugó de central en el Mundial 2018, sufriendo mucho.",
    },
    {
      nombre: "Lisandro López (2021 - Boca)",
      palmares: 8,
      contexto: "Aunque diestro, jugó de 6 con Izquierdoz. Sólido.",
    },
    {
      nombre: "Jonatan Maidana (2023 - Vuelta)",
      palmares: 15,
      contexto: "Su última etapa en River, diestro pero referente. Lento.",
    },
    {
      nombre: "Nehuén Paz (2022)",
      palmares: 1,
      contexto: "Su paso por San Lorenzo, muy cuestionado por su nivel.",
    },
  ],
  DFC_D: [
    {
      nombre: "Franz Beckenbauer (1974)",
      palmares: 12,
      contexto:
        "Líder de Alemania campeona del mundo, jugaba con una elegancia única.",
    },
    {
      nombre: "Cristian Romero (2022)",
      palmares: 2,
      contexto: "El 'Cuti', pilar de la defensa de la Scaloneta.",
    },
    {
      nombre: "Nicolás Otamendi (2023)",
      palmares: 18,
      contexto: "Referente en Benfica y la Selección Argentina.",
    },
    {
      nombre: "Fabio Cannavaro (2006)",
      palmares: 8,
      contexto:
        "Ganó el Balón de Oro tras ser capitán de Italia campeona del mundo.",
    },
    {
      nombre: "Nicolás Otamendi (2023)",
      palmares: 18,
      contexto: "Referente en Benfica y la Selección Argentina.",
    },
    {
      nombre: "Fabio Cannavaro (2006)",
      palmares: 8,
      contexto:
        "Ganó el Balón de Oro tras ser capitán de Italia campeona del mundo.",
    },
    {
      nombre: "Franco Baresi (1990)",
      palmares: 20,
      contexto: "Capitán histórico del AC Milan, pura elegancia y timing.",
    },
    {
      nombre: "Bobby Moore (1966)",
      palmares: 5,
      contexto: "Capitán de Inglaterra campeona del '66, leyenda del West Ham.",
    },
    {
      nombre: "Alessandro Nesta (2004)",
      palmares: 20,
      contexto:
        "Uno de los defensores más técnicos de la historia. Leyenda de Lazio y Milan.",
    },
    {
      nombre: "Jaap Stam (1999)",
      palmares: 15,
      contexto: "Una bestia física, pilar del Manchester United del triplete.",
    },
    {
      nombre: "Marcel Desailly (1998)",
      palmares: 15,
      contexto: "Campeón del mundo y de Europa, podía jugar de 5 o central.",
    },
    {
      nombre: "Ronald Koeman (1992)",
      palmares: 20,
      contexto:
        "Defensor más goleador de la historia, autor del gol en la final de Wembley '92.",
    },
    {
      nombre: "Carles Puyol (2009)",
      palmares: 25,
      contexto: "Capitán del Barcelona del sextete, un líder absoluto.",
    },
    {
      nombre: "Rio Ferdinand (2008)",
      palmares: 18,
      contexto:
        "Uno de los centrales más técnicos de la Premier, figura del Man Utd.",
    },
    {
      nombre: "John Terry (2005)",
      palmares: 20,
      contexto:
        "El capitán por excelencia del Chelsea de Mourinho. Puro corazón.",
    },
    {
      nombre: "Lucio (2010)",
      palmares: 20,
      contexto:
        "Central potente, a veces desordenado pero clave en el Inter de Mourinho.",
    },
    {
      nombre: "Elias Figueroa (1975)",
      palmares: 10,
      contexto:
        "Considerado uno de los mejores centrales de la historia, leyenda en Brasil.",
    }, // Leyendas Argentinas / Liga Local
    {
      nombre: "Roberto Perfumo (1970)",
      palmares: 10,
      contexto:
        "Uno de los mejores defensores de la historia argentina. Pura personalidad.",
    },
    {
      nombre: "Jorge Bermúdez (2000)",
      palmares: 10,
      contexto: "Líder y caudillo del Boca de Bianchi. Pura jerarquía.",
    },
    {
      nombre: "Rolando Schiavi (2003)",
      palmares: 12,
      contexto:
        "Figura clave del Boca campeón del mundo 2003. Fuerte en ambas áreas.",
    },
    {
      nombre: "José Luis Brown (1986)",
      palmares: 8,
      contexto:
        "El líbero de Bilardo, autor del primer gol en la final del '86.",
    },
    {
      nombre: "Roberto Ayala (2004)",
      palmares: 10,
      contexto: "Capitán de la selección, figura en Valencia campeón de UEFA.",
    },
    {
      nombre: "Mauricio Pochettino (2000)",
      palmares: 5,
      contexto: "Sólido central de la selección argentina y del Espanyol.",
    },
    {
      nombre: "Nicolás Burdisso (2003)",
      palmares: 15,
      contexto:
        "Joven figura del Boca de Bianchi, luego larga carrera en Italia.",
    },
    {
      nombre: "Daniel Díaz (2007)",
      palmares: 12,
      contexto: "Figura del Boca campeón de Libertadores 2007. Muy completo.",
    },
    {
      nombre: "Fernando Cáceres (1994)",
      palmares: 5,
      contexto: "Defensor elegante, titular en el Mundial '94.",
    },
    {
      nombre: "Néstor Fabbri (1990)",
      palmares: 3,
      contexto:
        "Central titular de la selección subcampeona del mundo en Italia '90.",
    },
    {
      nombre: "Germán Pezzella (2022)",
      palmares: 5,
      contexto: "Capitán del Betis y parte importante de la Scaloneta.",
    },

    {
      nombre: "Nehuén Pérez (2024)",
      palmares: 1,
      contexto: "Joven central argentino asentado como titular en Serie A.",
    },
    {
      nombre: "Leonardo Balerdi (2024)",
      palmares: 2,
      contexto: "Buen nivel en Francia, recuperando su proyección.",
    },
    {
      nombre: "Lautaro Giannetti (2023)",
      palmares: 1,
      contexto: "Referente y capitán de Vélez durante muchos años.",
    },
    {
      nombre: "Adonis Frías (2022)",
      palmares: 2,
      contexto: "Figura del Defensa y Justicia campeón, ahora en México.",
    },
    {
      nombre: "Nicolás Figal (2023)",
      palmares: 7,
      contexto: "Uno de los referentes de la defensa de Boca Juniors.",
    },
    {
      nombre: "Paulo Díaz (2024)",
      palmares: 10,
      contexto:
        "Considerado el mejor defensor de la liga argentina, pilar de River.",
    },
    {
      nombre: "Leandro González Pírez (2023)",
      palmares: 10,
      contexto: "Titular en River, conocido por su voz de mando.",
    },
    {
      nombre: "Emanuel Mammana (2022)",
      palmares: 7,
      contexto: "Versión de su vuelta a River, mostró destellos de su calidad.",
    }, // Versiones "Troll" o Declive
    {
      nombre: "Carles Puyol (2014)",
      palmares: 25,
      contexto: "Su última temporada, ya muy castigado por las lesiones.",
    },
    {
      nombre: "Rio Ferdinand (2015)",
      palmares: 18,
      contexto:
        "Su tristísima última temporada en el QPR, muy lejos de su nivel.",
    },
    {
      nombre: "John Terry (2017)",
      palmares: 20,
      contexto: "Su último año de carrera, jugando en el Championship.",
    },
    {
      nombre: "Gerard Piqué (2022)",
      palmares: 35,
      contexto:
        "Sus últimos meses, muy cuestionado por su nivel y su retiro a mitad de temporada.",
    },
    {
      nombre: "Sergio Ramos (2023)",
      palmares: 30,
      contexto:
        "Su vuelta nostálgica a Sevilla, lejos de su prime pero aportando.",
    },
    {
      nombre: "Thiago Silva (2024)",
      palmares: 32,
      contexto:
        "Sigue rindiendo a una edad avanzada, pero ya no es el de antes.",
    },
    {
      nombre: "David Luiz (2019)",
      palmares: 20,
      contexto: "Su etapa en el Arsenal, recordada por penales y expulsiones.",
    },
    {
      nombre: "Shkodran Mustafi (2018)",
      palmares: 5,
      contexto:
        "Campeón del mundo que se convirtió en sinónimo de error defensivo.",
    },
    {
      nombre: "Javier Mascherano (2018 - DFC)",
      palmares: 20,
      contexto: "Jugó de central en el Mundial 2018, sufriendo mucho.",
    },
    {
      nombre: "Gary Medel (2015 - DFC)",
      palmares: 5,
      contexto:
        "Volante reconvertido a central por su garra, campeón de América.",
    },
    {
      nombre: "Harry Maguire (2022)",
      palmares: 3,
      contexto:
        "Capitán del Man Utd, pero muy criticado y relegado por Ten Hag.",
    },
    {
      nombre: "Eric García (2022)",
      palmares: 5,
      contexto: "Muy cuestionado en Barcelona por su fragilidad defensiva.",
    },
    {
      nombre: "Martín Demichelis (2014 - Final)",
      palmares: 20,
      contexto:
        "Titular en la final del mundo, recordado por sufrir con la velocidad.",
    },
    {
      nombre: "Marcos Rojo (2023 - Lesiones)",
      palmares: 10,
      contexto: "Su versión post-lesión de rodilla, jugando poco.",
    },
    {
      nombre: "Javier Pinola (2017)",
      palmares: 10,
      contexto: "Recordado por el error en la semifinal de Libertadores 2017.",
    },
    {
      nombre: "Carlos Izquierdoz (2022)",
      palmares: 8,
      contexto: "Su salida conflictiva de Boca tras ser capitán y referente.",
    },
  ],
  // 4. Mediocampo
  MCD: [
    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Claude Makélélé (2004)",
      palmares: 12,
      contexto:
        "El 'Makelele Roll'. El mejor 5 defensivo de su era en el Chelsea.",
    },
    {
      nombre: "Sergio Busquets (2011)",
      palmares: 30,
      contexto: "El pulpo del Barcelona de Guardiola. Cerebro total.",
    },
    {
      nombre: "Frank Rijkaard (1990)",
      palmares: 20,
      contexto:
        "El equilibrio perfecto en el Milan de Sacchi. Campeón de todo.",
    },
    {
      nombre: "Roy Keane (1999)",
      palmares: 19,
      contexto: "El alma y capitán del Manchester United del '99. Intimidador.",
    },
    {
      nombre: "Patrick Vieira (2004)",
      palmares: 15,
      contexto:
        "El 'box-to-box' por excelencia. Capitán de los Invencibles del Arsenal.",
    },
    {
      nombre: "Edgar Davids (1998)",
      palmares: 18,
      contexto: "Pura energía e intensidad. Famoso por sus gafas y rastas.",
    },
    {
      nombre: "Gennaro Gattuso (2007)",
      palmares: 10,
      contexto: "El corazón del Milan campeón de Champions. 'Rino'.",
    },
    {
      nombre: "Andrea Pirlo (2006)",
      palmares: 15,
      contexto:
        "Redefinió la posición de 5, cerebro de Italia campeona del mundo.",
    },
    {
      nombre: "Xabi Alonso (2009)",
      palmares: 20,
      contexto:
        "El 'Kaiser' del mediocampo. Figura en Liverpool, Real Madrid y Bayern.",
    },
    {
      nombre: "Lothar Matthäus (1990)",
      palmares: 18,
      contexto:
        "Capitán de Alemania '90. Un 'box-to-box' total que luego jugó de líbero.",
    },
    {
      nombre: "Dunga (1994)",
      palmares: 8,
      contexto:
        "El capitán del Brasil 'de pocos lujos' campeón del mundo en USA '94.",
    },
    {
      nombre: "Didier Deschamps (1998)",
      palmares: 15,
      contexto: "Capitán de Francia campeona del mundo '98. Pura táctica.",
    },
    {
      nombre: "Mauro Silva (1994)",
      palmares: 8,
      contexto:
        "El equilibrio de Brasil '94 y leyenda absoluta del Deportivo La Coruña.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Javier Mascherano (2014)",
      palmares: 20,
      contexto: "Símbolo de la selección argentina subcampeona del mundo.",
    },
    {
      nombre: "Fernando Redondo (1998)",
      palmares: 10,
      contexto: "El 'Príncipe'. Uno de los 5 más elegantes de la historia.",
    },
    {
      nombre: "Diego Simeone (1998)",
      palmares: 10,
      contexto: "El 'Cholo' como jugador. Pura intensidad y llegada.",
    },
    {
      nombre: "Esteban Cambiasso (2010)",
      palmares: 25,
      contexto:
        "El cerebro táctico del Inter de Mourinho. Increíblemente inteligente.",
    },
    {
      nombre: "Mauricio Serna (2000)",
      palmares: 10,
      contexto: "El patrón del mediocampo del Boca de Bianchi. Pura garra.",
    },
    {
      nombre: "Sebastián Battaglia (2003)",
      palmares: 17,
      contexto:
        "El 5 silencioso, siempre bien ubicado. El jugador con más títulos en Boca.",
    },
    {
      nombre: "Raúl Cascini (2003)",
      palmares: 8,
      contexto:
        "El socio de Battaglia, clave en la Libertadores e Intercontinental 2003.",
    },
    {
      nombre: "Leonardo Astrada (1997)",
      palmares: 12,
      contexto: "Símbolo de River, el '5' clásico del paladar negro de Núñez.",
    },
    {
      nombre: "Matías Almeyda (1999)",
      palmares: 10,
      contexto: "Figura en River y Lazio, un 5 de despliegue incansable.",
    },
    {
      nombre: "Fernando Gago (2007)",
      palmares: 15,
      contexto: "En su prime, comparado con Redondo. Visión y pase exquisito.",
    },
    {
      nombre: "Blas Giunta (1991)",
      palmares: 5,
      contexto:
        "Símbolo de la entrega y la garra de Boca a principios de los 90s.",
    },
    {
      nombre: "Américo Gallego (1978)",
      palmares: 10,
      contexto: "El 5 titular de la Argentina campeona del '78. Pura garra.",
    },
    {
      nombre: "Antonio Rattín (1966)",
      palmares: 6,
      contexto:
        "Capitán y símbolo de Boca y la Selección. Famosa expulsión vs Inglaterra.",
    },
    {
      nombre: "Rodrigo Braña (2009)",
      palmares: 4,
      contexto: "El corazón de Estudiantes campeón de América 2009.",
    },
    {
      nombre: "Leonardo Ponzio (2018)",
      palmares: 17,
      contexto:
        "El capitán y símbolo del River de Gallardo. Pura personalidad.",
    },
    {
      nombre: "Juan Mercier (2014)",
      palmares: 4,
      contexto:
        "Figura clave del San Lorenzo campeón de Libertadores. 'El 5 de Bauza'.",
    },
    {
      nombre: "Wilmar Barrios (2018)",
      palmares: 6,
      contexto:
        "En su prime en Boca, un 5 de recuperación impresionante. 'La Pantera'.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Rodri (2023)",
      palmares: 15,
      contexto: "El mejor 5 del mundo, cerebro del Man City del triplete.",
    },
    {
      nombre: "Casemiro (2018)",
      palmares: 22,
      contexto: "El equilibrio del Real Madrid multicampeón. Pura fuerza.",
    },
    {
      nombre: "N'Golo Kanté (2018)",
      palmares: 10,
      contexto:
        "El hombre que recuperaba todo. Figura de Francia '18 y Chelsea.",
    },
    {
      nombre: "Fabinho (2019)",
      palmares: 10,
      contexto:
        "El '5' posicional del Liverpool de Klopp campeón de Champions.",
    },
    {
      nombre: "Joshua Kimmich (2020)",
      palmares: 20,
      contexto: "Puede jugar de 5 o lateral. Cerebro y motor del Bayern.",
    },
    {
      nombre: "Declan Rice (2023)",
      palmares: 2,
      contexto: "El 'box-to-box' inglés, fichaje millonario del Arsenal.",
    },
    {
      nombre: "Aurélien Tchouaméni (2022)",
      palmares: 8,
      contexto: "El '5' del futuro de Francia y Real Madrid. Físico imponente.",
    },
    {
      nombre: "Jorginho (2021)",
      palmares: 8,
      contexto: "Ganador de Champions y Eurocopa. Famoso por su penal.",
    },
    {
      nombre: "Marcelo Brozović (2022)",
      palmares: 8,
      contexto:
        "El '5' del Inter finalista y de Croacia. Famoso por tapar tiros libres.",
    },
    {
      nombre: "Martín Zubimendi (2024)",
      palmares: 2,
      contexto: "El 5 deseado por Xavi, pura inteligencia táctica.",
    },
    {
      nombre: "Manuel Ugarte (2023)",
      palmares: 4,
      contexto: "Un 5 de recuperación pura, fichaje millonario del PSG.",
    },
    {
      nombre: "Hakan Çalhanoğlu (2024 - MCD)",
      palmares: 7,
      contexto: "Reconvertido a 5, cerebro y mejor jugador de la Serie A.",
    },
    {
      nombre: "Toni Kroos (2017)",
      palmares: 30,
      contexto:
        "Aunque jugaba de doble 5, el organizador más elegante del mundo.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Alan Varela (2023)",
      palmares: 4,
      contexto: "Joven promesa salida de Boca, ahora en el Porto.",
    },
    {
      nombre: "Leandro Paredes (2022)",
      palmares: 15,
      contexto: "El 5 de la Scaloneta, gran pegada y visión de juego.",
    },
{
      nombre: "Guido Rodríguez (2022)",
      palmares: 5,
      contexto: "El 5 de equilibrio de la Scaloneta, figura en Betis.",
    },
    {
      nombre: "Enzo Pérez (2018)",
      palmares: 15,
      contexto: "Referente y capitán del River de Gallardo. Pura jerarquía.",
    },
    {
      nombre: "Equi Fernández (2024)",
      palmares: 2,
      contexto: "La gran promesa del mediocampo de Boca. Pura técnica.",
    },
    {
      nombre: "Santiago Ascacíbar (2018)",
      palmares: 1,
      contexto: "Volante de recuperación incansable, figura en Estudiantes.",
    },
    {
      nombre: "Andrés Cubas (2020)",
      palmares: 3,
      contexto: "Un 5 'quita-y-pasa' clásico, buen nivel en Talleres y MLS.",
    },
    {
      nombre: "Iván Marcone (2018)",
      palmares: 3,
      contexto: "Capitán de Independiente, buen pase y orden táctico.",
    },
    {
      nombre: "Matías Kranevitter (2015)",
      palmares: 10,
      contexto:
        "En su prime de River, comparado con Mascherano. Pura recuperación.",
    },
    {
      nombre: "Rodrigo Aliendro (2023)",
      palmares: 5,
      contexto: "El motor silencioso de River, recupera y juega.",
    },
    {
      nombre: "Aníbal Moreno (2023)",
      palmares: 3,
      contexto: "De los mejores 5 de la liga, vendido a Brasil.",
    },
    {
      nombre: "Juan Nardoni (2023)",
      palmares: 2,
      contexto: "Joven promesa de Racing, polifuncional.",
    },
    {
      nombre: "Fausto Vera (2022)",
      palmares: 1,
      contexto: "Gran promesa de Argentinos Jrs, vendido a Corinthians.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Javier Mascherano (2018 - China)",
      palmares: 20,
      contexto: "Sus últimos años en la liga china, lejos de su nivel top.",
    },
    {
      nombre: "Sergio Busquets (2024 - MLS)",
      palmares: 35,
      contexto: "En el Inter Miami, jugando a otro ritmo.",
    },
    {
      nombre: "Fernando Gago (2018 - Lesiones)",
      palmares: 15,
      contexto: "Sus últimos años, marcados por las lesiones de tendón.",
    },
    {
      nombre: "N'Golo Kanté (2024 - Arabia)",
      palmares: 12,
      contexto: "Jugando en la liga saudí, lejos de la élite.",
    },
    {
      nombre: "Casemiro (2024 - Man Utd)",
      palmares: 22,
      contexto: "Versión muy lenta y superada en el Man Utd post-lesión.",
    },
    {
      nombre: "Daniele De Rossi (2019 - Boca)",
      palmares: 10,
      contexto: "Su breve y mediático paso por Boca, jugó poco y nada.",
    },
    {
      nombre: "Bastian Schweinsteiger (2017 - MLS)",
      palmares: 25,
      contexto: "Sus últimos años de carrera en la MLS.",
    },
    {
      nombre: "Gary Medel (2024 - Boca)",
      palmares: 8,
      contexto: "Su vuelta a Boca, jugando de 5 por necesidad. Lento.",
    },
    {
      nombre: "Jorman Campuzano (2024 - Boca)",
      palmares: 5,
      contexto: "Muy cuestionado por los hinchas de Boca, propenso a errores.",
    },
    {
      nombre: "Iván Marcone (2020 - Boca)",
      palmares: 3,
      contexto: "Su etapa en Boca, donde llegó como estrella y fue resistido.",
    },
    { 
      nombre:"Enzo Pérez (2024 - Estudiantes)",
      palmares: 17,
      contexto: "Su vuelta a Estudiantes, líder pero con menos despliegue.",
    },
    {
      nombre: "Matías Kranevitter (2024 - Vuelta)",
      palmares: 11,
      contexto: "Su vuelta a River, marcada por una grave lesión apenas llegó.",
    },
    {
      nombre: "Lucas Leiva (2019)",
      palmares: 3,
      contexto:
        "Volante de corte clásico, ya en sus últimos años de buen nivel en Italia.",
    },
  ],
  MC_I: [
    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Andrés Iniesta (2010)",

      palmares: 32,
      contexto: "Héroe de Sudáfrica 2010 y leyenda del Barcelona.",
    },
    {
      nombre: "Pavel Nedvěd (2003)",

      palmares: 15,
      contexto: "El motor incansable de la Juventus, ganador del Balón de Oro.",
    },
    {
      nombre: "Rivaldo (1999)",

      palmares: 10,
      contexto: "Pura fantasía y pegada, figura del Barcelona.",
    },
    {
      nombre: "Clarence Seedorf (2007)",

      palmares: 22,
      contexto:
        "El único en ganar la Champions con 3 clubes distintos. Pura clase.",
    },
    {
      nombre: "Luka Modrić (2018)",

      palmares: 30,
      contexto: "El 'Cruyff de los Balcanes'. Lideró a Croacia a la final del mundo.",
    },
    {
      nombre: "Paul Scholes (2003)",

      palmares: 25,
      contexto: "El cerebro silencioso del Man Utd. Elogiado por todos.",
    },
    {
      nombre: "Steven Gerrard (2009)",

      palmares: 11,
      contexto: "El alma del Liverpool, famoso por sus goles agónicos.",
    },
    {
      nombre: "Frank Lampard (2005)",

      palmares: 15,
      contexto:"El mediocampista con más goles en la historia de la Premier League.",
    },
    {
      nombre: "Michael Ballack (2004)",

      palmares: 12,
      contexto: "Líder de Alemania y el Leverkusen, pero perdió finales clave.",
    },
    {
      nombre: "Robert Pires (2004)",

      palmares: 12,
      contexto: "Figura clave del Arsenal de los Invencibles. Pura clase.",
    },
    {
      nombre: "Gheorghe Hagi (1994)",

      palmares: 15,
      contexto: "El 'Maradona de los Cárpatos', estrella del Mundial '94.",
    },
    {
      nombre: "Michael Laudrup (1992)",

      palmares: 10,
      contexto:"La elegancia hecha jugador, cerebro del 'Dream Team' de Cruyff.",
    },
    {
      nombre: "David Silva (2018)",

      palmares: 20,
      contexto: "Leyenda absoluta del Manchester City, pura magia.",
    },
    {
      nombre: "Wesley Sneijder (2010)",
      palmares: 18,
      contexto: "Cerebro del Inter del Triplete y finalista del mundo en 2010.",
    },
    {
      nombre: "Ryan Giggs (2001 - Interior)",

      palmares: 34,
      contexto: "Su versión más cerebral, jugando de interior y no de extremo.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Juan R. Riquelme (2000)",

      palmares: 12,
      contexto: "En su prime, ganando la Intercontinental al Real Madrid.",
    },
    {
      nombre: "Juan Sebastián Verón (2009)",

      palmares: 10,
      contexto: "Líder de Estudiantes de La Plata campeón de la Libertadores.",
    },
    {
      nombre: "Ricardo Bochini (1984)",

      palmares: 14,
      contexto: "Ídolo máximo de Independiente. El espejo de Maradona.",
    },
    {
      nombre: "Pablo Aimar (2002)",

      palmares: 10,
      contexto: "Pura magia en River y Valencia. La 'pausa' hecha jugador.",
    },
    {
      nombre: "Marcelo Gallardo (1997)",

      palmares: 12,
      contexto: "El '10' de River en su etapa de jugador. Pura clase.",
    },
    {
      nombre: "Andrés D'Alessandro (2008)",

      palmares: 15,
      contexto: "En su prime absoluto, ídolo total del Inter de Porto Alegre.",
    },
    {
      nombre: "Beto Alonso (1978)",

      palmares: 9,
      contexto: "Zurdo elegante, ídolo máximo de River, campeón del mundo.",
    },
    {
      nombre: "Ángel Di María (2014 - Interior)",

      palmares: 18,
      contexto: "Su versión de interior 'box-to-box' en el Real Madrid de Ancelotti.",
    },
    {
      nombre: "Lucho González (2007)",

      palmares: 25,
      contexto: "Figura e ídolo en Porto y River, un 'box-to-box' elegante.",
    },
    {
      nombre: "Kily González (2000)",

      palmares: 6,
      contexto:"Un extremo reconvertido a interior. Pura entrega en la Selección.",
    },
    {
      nombre: "Pipo Gorosito (1995)",

      palmares: 5,
      contexto: "Pura clase y pausa, recordada dupla en San Lorenzo y Católica.",
    },
    {
      nombre: "Leandro Romagnoli (2002)",

      palmares: 6,
      contexto: "Ídolo y símbolo de San Lorenzo, pura habilidad.",
    },
    {
      nombre: "Pocho Insúa (2007)",

      palmares: 5,
      contexto: "En su prime, ídolo en el América de México. Mucha clase.",
    },
    {
      nombre: "Walter Erviti (2010)",

      palmares: 5,
      contexto: "Figura clave del Banfield campeón 2009. Muy inteligente.",
    },
    {
      nombre: "Patito Hernández (1982)",

      palmares: 3,
      contexto: "Volante de gran clase, figura en Estudiantes y el fútbol italiano.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Jude Bellingham (2024)",

      palmares: 5,
      contexto: "El 'box-to-box' total. Figura absoluta del Real Madrid.",
    },
    {
      nombre: "Pedri (2021)",

      palmares: 4,
      contexto: "Pura magia y control, comparado con Iniesta desde el día uno.",
    },
    {
      nombre: "Jamal Musiala (2024)",

      palmares: 10,
      contexto: "Uno de los jóvenes con más habilidad y desequilibrio del mundo.",
    },
    {
      nombre: "Florian Wirtz (2024)",

      palmares: 3,
      contexto: "Figura y cerebro del Bayer Leverkusen campeón invicto.",
    },
    {
      nombre: "Bernardo Silva (2023)",

      palmares: 20,
      contexto: "El motor incansable y técnico del Man City. Juega de todo.",
    },
    {
      nombre: "Gavi (2022)",

      palmares: 4,
      contexto: "Un 'box-to-box' de pura intensidad y carácter. 'El nuevo Gattuso'.",
    },
    {
      nombre: "Nicolò Barella (2023)",

      palmares: 8,
      contexto: "El motor de Italia y del Inter. 'Box-to-box' incansable.",
    },
    {
      nombre: "Eduardo Camavinga (2023)",

      palmares: 10,
      contexto: "Joven promesa que rinde de 5, de 8 o hasta de 3. Pura potencia.",
    },
    {
      nombre: "Federico Valverde (2022)",

      palmares: 15,
      contexto: "Un 'box-to-box' con una zancada y un remate temibles.",
    },
    {
      nombre: "İlkay Gündoğan (2023)",

      palmares: 20,
      contexto: "Capitán y figura clave del Man City del triplete. Gran llegador.",
    },
    {
      nombre: "Xavi Simons (2024)",

      palmares: 5,
      contexto: "La gran promesa holandesa, pura gambeta y personalidad.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Enzo Fernández (2022)",

      palmares: 2,
      contexto: "Mejor jugador joven del Mundial 2022.",
    },
    {
      nombre: "Rodrigo De Paul (2021)",

      palmares: 5,
      contexto: "El motor de la Scaloneta, clave en la Copa América 2021.",
    },
    {
      nombre: "Alexis Mac Allister (2023)",

      palmares: 4,
      contexto: "Figura clave del Mundial 2022 y pilar del Liverpool.",
    },
    {
      nombre: "Giovani Lo Celso (2021)",

      palmares: 5,
      contexto: "El socio de todos en la Scaloneta, gran visión de juego.",
    },
    {
      nombre: "Cristian Medina (2023)",

      palmares: 4,
      contexto: "El mejor 'box-to-box' de la cantera de Boca. Pura dinámica.",
    },
    {
      nombre: "Kevin Zenón (2024)",

      palmares: 1,
      contexto: "Irrupción en Boca, con gran pegada y centro. Ex-Unión.",
    },
    {
      nombre: "Esequiel Barco (2023)",

      palmares: 4,
      contexto: "Extremo reconvertido a interior. Muy desequilibrante.",
    },
    {
      nombre: "Claudio Echeverri (2024)",

      palmares: 2,
      contexto: "La gran joya de River, vendido al City Group. Pura gambeta.",
    },
    {
      nombre: "Juanfer Quintero (2018)",

      palmares: 8,
      contexto: "El héroe de Madrid. Pura magia y pegada.",
    },
    {
      nombre: "Nacho Fernández (2019)",

      palmares: 12,
      contexto: "En su prime, el cerebro y jugador más inteligente del fútbol argentino.",
    },
    {
      nombre: "Rodrigo Garro (2023)",

      palmares: 1,
      contexto: "Figura de Talleres, de las mejores pegadas de la liga.",
    },
    {
      nombre: "Thiago Almada (2022)",

      palmares: 3,
      contexto: "MVP de la MLS y parte de la Scaloneta.",
    },
    {
      nombre: "Nicolás De La Cruz (2022)",

      palmares: 10,
      contexto: "El 'box-to-box' de River, incansable. Ahora en Brasil.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Andrés Iniesta (2020 - Japón)",

      palmares: 35,
      contexto: "Su etapa en el fútbol japonés, lejos de la élite.",
    },
    {
      nombre: "James Rodríguez (2023)",

      palmares: 20,
      contexto: "El 'Golden Boy' de 2014, en una carrera de trotamundos.",
    },
    {
      nombre: "Philippe Coutinho (2022)",

      palmares: 15,
      contexto: "El fichaje más caro del Barça, ahora en ligas menores.",
    },
    {
      nombre: "Isco (2022 - Sevilla)",

      palmares: 20,
      contexto: "Su conflictiva salida de Sevilla, antes de resurgir en Betis.",
    },
    {
      nombre: "Mesut Özil (2021)",

      palmares: 12,
      contexto: "Sus últimos años en Fenerbahce, muy resistido.",
    },
    {
      nombre: "Dele Alli (2023)",

      palmares: 0,
      contexto: "Considerado el futuro de Inglaterra, su carrera colapsó.",
    },
    {
      nombre: "Javier Pastore (2021)",

      palmares: 25,
      contexto: "Sus últimos años en Roma/Elche, marcado por las lesiones.",
    },
    {
      nombre: "Éver Banega (2024 - Vuelta)",

      palmares: 10,
      contexto: "Vuelta a Newell's, con clase pero muy lento.",
    },
    {
      nombre: "Nacho Fernández (2024 - Declive)",

      palmares: 12,
      contexto: "Su última etapa en River, muy cuestionado por su físico.",
    },
    {
      nombre: "Pol Fernández (2023)",

      palmares: 7,
      contexto: "Capitán de Boca, pero a menudo cuestionado por la hinchada.",
    },
    {
      nombre: "Edwin Cardona (2021 - Racing)",

      palmares: 5,
      contexto: "Su tristísimo paso por Racing, fuera de forma.",
    },
    {
      nombre: "Ricardo Centurión (2020)",

      palmares: 4,
      contexto: "Su último intento en Vélez, marcado por problemas extrafutbolísticos.",
    },
    {
      nombre: "Andrés D'Alessandro (2022 - Retiro)",

      palmares: 16,
      contexto: "Su breve vuelta a River para retirarse.",
    },
  ],
  MC_D: [
    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Zinedine Zidane (1998)",

      palmares: 10,
      contexto: "Balón de Oro y campeón del mundo en 1998.",
    },
    {
      nombre: "Xavi (2011)",

      palmares: 31,
      contexto: "El motor del mejor Barcelona de la historia.",
    },
    {
      nombre: "Kevin De Bruyne (2023)",

      palmares: 15,
      contexto: "Cerebro del Manchester City campeón de la Champions.",
    },
    {
      nombre: "Kaká (2007)",

      palmares: 12,
      contexto:"El último Balón de Oro antes de la era Messi-CR7. Figura del Milan.",
    },
    {
      nombre: "Lothar Matthäus (1990)",

      palmares: 18,
      contexto: "Capitán de Alemania '90. Un 'box-to-box' total.",
    },
    {
      nombre: "Steven Gerrard (2009)",

      palmares: 11,
      contexto: "El alma del Liverpool, famoso por sus goles agónicos.",
    },
    {
      nombre: "Frank Lampard (2005)",

      palmares: 15,
      contexto:"El mediocampista con más goles en la historia de la Premier League.",
    },
    {
      nombre: "David Beckham (1999)",

      palmares: 20,
      contexto:"Figura del Man Utd del Triplete. El mejor pie derecho del mundo.",
    },
    {
      nombre: "Deco (2004)",

      palmares: 20,
      contexto:"Cerebro del Porto campeón de Champions y figura del Barcelona.",
    },
    {
      nombre: "Ruud Gullit (1989)",

      palmares: 15,
      contexto:"Balón de Oro, un todoterreno que podía jugar de todo. Pura potencia.",
    },
    {
      nombre: "Socrates (1982)",

      palmares: 5,
      contexto: "Capitán y cerebro del Brasil '82. Pura elegancia y clase.",
    },
    {
      nombre: "Paul Gascoigne (1990)",

      palmares: 3,
      contexto:"El talento inglés más puro de su generación. Figura en Italia '90.",
    },
    {
      nombre: "Dejan Stanković (2010)",

      palmares: 25,
      contexto:"El 'box-to-box' del Inter de Mourinho, famoso por sus golazos de lejos.",
    },
    {
      nombre: "Bernd Schuster (1985)",

      palmares: 15,
      contexto: "Pura clase y carácter, jugó en Barça, Real Madrid y Atlético.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Juan R. Riquelme (2007 - Libertadores)",

      palmares: 12,
      contexto: "Su versión de la Libertadores 2007. Ganó la copa solo.",
    },
    {
      nombre: "Osvaldo Ardiles (1978)",

      palmares: 8,
      contexto:"El cerebro de la Argentina del '78. Ídolo total del Tottenham.",
    },
    {
      nombre: "JJ López (1975)",

      palmares: 10,
      contexto:"El '8' por excelencia de la historia de River. Pura clase y despliegue.",
    },
    {
      nombre: "Miguel Ángel Brindisi (1973)",

      palmares: 6,
      contexto: "Cerebro y figura del Huracán del '73 de Menotti. Pura clase.",
    },
    {
      nombre: "Rubén Suñé (1976)",

      palmares: 10,
      contexto: "Capitán y símbolo de Boca, autor del famoso gol a River en el '76.",
    },
    {
      nombre: "Diego Cagna (2000)",

      palmares: 12,
      contexto: "Capitán y referente de Independiente y del Boca de Bianchi.",
    },
    {
      nombre: "Guillermo Barros Schelotto (2003 - Volante)",

      palmares: 17,
      contexto: "Su versión jugando de '8', puro sacrificio y picardía.",
    },
    {
      nombre: "Cholo Sotomayor (1994)",

      palmares: 3,
      contexto: "El motor silencioso del Vélez de Bianchi. Pura entrega.",
    },
    {
      nombre: "Pipo Gorosito (1995)",

      palmares: 5,
      contexto:"Pura clase y pausa, recordada dupla en San Lorenzo y Católica.",
    },
    {
      nombre: "Gustavo Barros Schelotto (1999)",

      palmares: 10,
      contexto: "El '8' suplente del Boca de Bianchi. Cumplidor.",
    },
    {
      nombre: "Leo Rodríguez (1991)",

      palmares: 4,
      contexto: "Figura de la Copa América '91, pura gambeta y pase.",
    },
    {
      nombre: "Chino Benítez (2003)",

      palmares: 8,
      contexto: "El volante 'tapón' del Boca de Bianchi 2003. Pura entrega.",
    },
    {
      nombre: "Matías Donnet (2003)",

      palmares: 5,
      contexto: "El héroe inesperado de la Intercontinental 2003. Figura.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Toni Kroos (2017)",

      palmares: 30,
      contexto: "El organizador más elegante del mundo. Tricampeón de Champions.",
    },
    {
      nombre: "Bernardo Silva (2023)",

      palmares: 20,
      contexto: "El motor incansable y técnico del Man City. Juega de todo.",
    },
    {
      nombre: "Federico Valverde (2022)",

      palmares: 15,
      contexto: "Un 'box-to-box' con una zancada y un remate temibles.",
    },
    {
      nombre: "İlkay Gündoğan (2023)",

      palmares: 20,
      contexto:"Capitán y figura clave del Man City del triplete. Gran llegador.",
    },
    {
      nombre: "Jude Bellingham (2024)",

      palmares: 5,
      contexto: "El 'box-to-box' total. Figura absoluta del Real Madrid.",
    },
    {
      nombre: "Martin Ødegaard (2024)",

      palmares: 3,
      contexto: "El cerebro y capitán del Arsenal de Arteta. Pura visión.",
    },
    {
      nombre: "Frenkie de Jong (2021)",

      palmares: 8,
      contexto: "Famoso por sus conducciones rompiendo líneas. ADN Barça.",
    },
    {
      nombre: "Leon Goretzka (2020)",

      palmares: 20,
      contexto: "Un 'box-to-box' con una potencia física descomunal. Figura del Bayern.",
    },
    {
      nombre: "Vitinha (2024)",

      palmares: 8,
      contexto:"El motor del mediocampo del PSG de Luis Enrique. Gran dinámica.",
    },
    {
      nombre: "Dominik Szoboszlai (2023)",

      palmares: 6,
      contexto: "Famoso por su remate de media distancia. Figura en Liverpool.",
    },
    {
      nombre: "Marcos Llorente (2021)",

      palmares: 5,
      contexto: "Figura del Atlético campeón de Liga, una bestia física.",
    },
    {
      nombre: "Warren Zaïre-Emery (2024)",

      palmares: 4,
      contexto: "La gran joya de la cantera del PSG. Un 'box-to-box' total.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Rodrigo De Paul (2022)",

      palmares: 5,
      contexto: "El motor de la Scaloneta, clave en el Mundial 2022.",
    },
    {
      nombre: "Alexis Mac Allister (2023)",

      palmares: 4,
      contexto: "Figura clave del Mundial 2022 y pilar del Liverpool.",
    },
    {
      nombre: "Exequiel Palacios (2024)",

      palmares: 6,
      contexto: "El motor del Leverkusen campeón invicto. Campeón del mundo.",
    },
    {
      nombre: "Nacho Fernández (2019)",

      palmares: 12,
      contexto: "En su prime, el cerebro y jugador más inteligente del fútbol argentino.",
    },
    {
      nombre: "Pol Fernández (2022)",

      palmares: 7,
      contexto: "Capitán y referente del mediocampo de Boca Juniors.",
    },
    {
      nombre: "Cristian Medina (2023)",

      palmares: 4,
      contexto: "El mejor 'box-to-box' de la cantera de Boca. Pura dinámica.",
    },
    {
      nombre: "Martín Payero (2023 - Boca)",

      palmares: 2,
      contexto: "Su buena etapa en Boca, aportando goles y llegada.",
    },
    {
      nombre: "Agustín Almendra (2018)",

      palmares: 4,
      contexto: "La versión 'promesa' de Boca, pura clase y pegada.",
    },
    {
      nombre: "Carlos Alcaraz (2022)",

      palmares: 2,
      contexto: "La gran promesa de Racing, vendido a Inglaterra. 'Box-to-box'.",
    },
    {
      nombre: "Juan Nardoni (2023)",

      palmares: 2,
      contexto: "Joven promesa de Racing, polifuncional.",
    },
    {
      nombre: "Agustín Palavecino (2021)",

      palmares: 7,
      contexto: "Su primer año en River, con goles y buen nivel.",
    },
    {
      nombre: "Ezequiel Bullaude (2023)",

      palmares: 1,
      contexto: "Mediocampista ofensivo con paso por Boca.",
    },
    {
      nombre: "Ulises Sánchez (2024)",

      palmares: 0,
      contexto: "De los mejores volantes de la liga, figura en Belgrano.",
    },
    {
      nombre: "Benjamín Rollheiser (2023)",

      palmares: 3,
      contexto: "Figura de Estudiantes, pura gambeta y pegada.",
    },
    {
      nombre: "Rodrigo Aliendro (2023)",

      palmares: 5,
      contexto: "El motor silencioso de River, recupera y juega.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Kaká (2014 - MLS)",

      palmares: 12,
      contexto: "Sus últimos años de carrera jugando en la MLS.",
    },
    {
      nombre: "Xavi (2017 - Qatar)",

      palmares: 35,
      contexto: "Sus últimos años como jugador en la liga de Qatar.",
    },
    {
      nombre: "Aaron Ramsey (2019 - Juventus)",

      palmares: 12,
      contexto: "Su paso por Juventus, marcado por las lesiones.",
    },
    {
      nombre: "Renato Sanches (2022 - PSG)",

      palmares: 15,
      contexto: "Eterno 'Golden Boy' que nunca explotó, plagado de lesiones.",
    },
    {
      nombre: "Arthur Melo (2020 - Juventus)",

      palmares: 8,
      contexto: "Llegó al Barça como el 'nuevo Xavi' y su carrera se diluyó.",
    },
    {
      nombre: "Juanfer Quintero (2023 - Racing)",

      palmares: 10,
      contexto: "Su etapa en Racing, con destellos de clase pero poco físico.",
    },
    {
      nombre: "Javier Pastore (2021)",

      palmares: 25,
      contexto: "Sus últimos años en Roma/Elche, marcado por las lesiones.",
    },
    {
      nombre: "Guillermo 'Pol' Fernández (2018 - Racing)",

      palmares: 7,
      contexto: "Su buen nivel en Racing que lo llevó a Cruz Azul y Boca.",
    },
    {
      nombre: "Jorman Campuzano (2024 - Boca)",

      palmares: 5,
      contexto: "Muy cuestionado por los hinchas de Boca, propenso a errores.",
    }, // Troll por posición
    {
      nombre: "Agustín Almendra (2022 - Conflicto)",

      palmares: 4,
      contexto: "Separado del plantel de Boca por Battaglia.",
    },
    {
      nombre: "Diego González (2021 - Boca)",

      palmares: 8,
      contexto: "Su etapa en Boca, marcada por lesiones y poco fútbol.",
    },
    {
      nombre: "Enzo Pérez (2014 - Volante)",

      palmares: 15,
      contexto: "Su versión 'box-to-box' en Benfica y subcampeón del mundo.",
    },
    {
      nombre: "Ricky Álvarez (2018 - Vélez)",

      palmares: 5,
      contexto: "Su vuelta a Vélez, lejos del nivel que lo llevó al Inter.",
    },
  ],
  // 5. Delanteros
  // 9. Extremo Izquierdo (EI)
  EI: [
    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Ronaldinho (2005)",
      palmares: 8,
      contexto: "Balón de Oro. Puso de pie al Bernabéu.",
    },
    {
      nombre: "Thierry Henry (2004)",
      palmares: 12,
      contexto: "Líder del Arsenal de los 'Invencibles'. Pura clase y velocidad.",
    },
    {
      nombre: "Hristo Stoichkov (1994)",
      palmares: 15,
      contexto: "Genio y figura del 'Dream Team' de Cruyff. Pura dinamita.",
    },
    {
      nombre: "Ryan Giggs (1999)",
      palmares: 34,
      contexto: "El extremo clásico del Man Utd del Triplete. Leyenda eterna.",
    },
    {
      nombre: "Franck Ribéry (2013)",
      palmares: 24,
      contexto: "Balón de Bronce, figura absoluta del Bayern Múnich del triplete.",
    },
    {
      nombre: "Paco Gento (1960)",
      palmares: 23,
      contexto: "Leyenda del Real Madrid, el único con 6 Copas de Europa.",
    },
    {
      nombre: "Neymar Jr. (2015)",
      palmares: 25,
      contexto: "En su prime absoluto, figura del Barcelona campeón de Champions.",
    },
    {
      nombre: "Roberto Rivelino (1970)",
      palmares: 6,
      contexto: "Zurdo exquisito, parte del Brasil '70. Famoso por 'el elástico'.",
    },
    {
      nombre: "Oleg Blokhin (1975)",
      palmares: 12,
      contexto: "La 'Flecha' de Kiev, uno de los jugadores más rápidos de su era.",
    },
    {
      nombre: "Karl-Heinz Rummenigge (1980)",
      palmares: 12,
      contexto: "Balón de Oro, un delantero potente y elegante.",
    },
    {
      nombre: "John Barnes (1988)",
      palmares: 10,
      contexto: "Ídolo de Liverpool, pura potencia y habilidad en los 80s.",
    },
    {
      nombre: "Gareth Bale (2014 - LI)",
      palmares: 20,
      contexto: "Su versión de la final de Copa del Rey. Imparable.",
    },
    {
      nombre: "Robert Pires (2004)",
      palmares: 12,
      contexto: "Figura clave del Arsenal de los Invencibles. Pura clase.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Claudio Caniggia (1990)",
      palmares: 3,
      contexto: "Famoso por su velocidad y el gol a Brasil en el Mundial '90.",
    },
    {
      nombre: "Ariel Ortega (1997)",
      palmares: 10,
      contexto: "Pura gambeta y talento, ídolo máximo de River.",
    },
    {
      nombre: "Claudio 'Piojo' López (1999)",
      palmares: 8,
      contexto: "Figura de la Selección y leyenda del Valencia. Imparable.",
    },
    {
      nombre: "Ezequiel Lavezzi (2014)",
      palmares: 15,
      contexto: "Figura del Mundial 2014, ídolo en Napoli y PSG. Pura garra.",
    },
    {
      nombre: "Ricardo Centurión (2017 - Boca)",
      palmares: 4,
      contexto: "Su mejor versión, figura del Boca campeón. Desequilibrante.",
    },
    {
      nombre: "Diego Latorre (1991)",
      palmares: 4,
      contexto: "En su prime en Boca, pura habilidad y velocidad.",
    },
    {
      nombre: "Oscar 'Pinino' Más (1970)",
      palmares: 8,
      contexto: "Puntero izquierdo clásico, segundo goleador histórico de River.",
    },
    {
      nombre: "Ramón 'Mencho' Medina Bello (1993)",
      palmares: 10,
      contexto: "Figura del River de los 90s, campeón de América.",
    },
    {
      nombre: "René Houseman (1973)",
      palmares: 5,
      contexto: "Pura gambeta y locura, campeón del mundo '78.",
    },
    {
      nombre: "Lautaro Acosta (2017)",
      palmares: 4,
      contexto: "Símbolo y capitán de Lanús, figura en la final de Libertadores.",
    },
    {
      nombre: "Cristian Pavón (2018)",
      palmares: 8,
      contexto: "Su versión previa al Mundial 2018, imparable en el fútbol local.",
    },
    {
      nombre: "Ángel Di María (2014 - Final)",
      palmares: 18,
      contexto: "Figura de la final de Champions 2014. MVP.",
    },
    {
      nombre: "Alberto 'Beto' Acosta (1995)",
      palmares: 5,
      contexto: "Ídolo de San Lorenzo, pura potencia y gol.",
    },
    {
      nombre: "Sebastián Driussi (2017)",
      palmares: 8,
      contexto: "Figura del River de Gallardo antes de irse a Rusia.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Kylian Mbappé (2022)",
      palmares: 20,
      contexto: "El jugador más rápido y desequilibrante del mundo.",
    },
    {
      nombre: "Vinícius Júnior (2023)",
      palmares: 15,
      contexto: "Figura del Real Madrid, pura gambeta y descaro.",
    },
    {
      nombre: "Sadio Mané (2019)",
      palmares: 10,
      contexto: "En su prime, pilar del Liverpool de Klopp campeón de Champions.",
    },
    {
      nombre: "Rafael Leão (2022)",
      palmares: 3,
      contexto: "MVP de la Serie A, pura potencia y elegancia.",
    },
    {
      nombre: "Khvicha Kvaratskhelia (2023)",
      palmares: 2,
      contexto: "Figura absoluta del Napoli campeón de Serie A. Pura magia.",
    },
    {
      nombre: "Luis Díaz (2023)",
      palmares: 6,
      contexto: "Extremo desequilibrante, figura en Liverpool.",
    },
    {
      nombre: "Jack Grealish (2023)",
      palmares: 15,
      contexto: "Clave en el City del triplete, gran manejo de la pausa.",
    },
    {
      nombre: "Marcus Rashford (2023 - Peak)",
      palmares: 6,
      contexto: "Su mejor temporada post-Mundial, goleador.",
    },
    {
      nombre: "Son Heung-min (2022)",
      palmares: 2,
      contexto: "Pura velocidad y definición con ambas piernas.",
    },
    {
      nombre: "Kingsley Coman (2020)",
      palmares: 30,
      contexto: "Extremo rapidísimo, famoso por ganar ligas cada año.",
    },
    {
      nombre: "Leroy Sané (2019)",
      palmares: 20,
      contexto: "En su prime en el City, de los extremos más rápidos del mundo.",
    },
    {
      nombre: "Ousmane Dembélé (2023 - PSG)",
      palmares: 10,
      contexto: "Pura velocidad y gambeta, aunque errático. Figura del PSG.",
    },
    {
      nombre: "Ansu Fati (2020 - Peak)",
      palmares: 5,
      contexto: "Su irrupción en el Barcelona antes de las lesiones. 'El nuevo Messi'.",
    },
    {
      nombre: "Cody Gakpo (2022)",
      palmares: 4,
      contexto: "Figura del Mundial 2022, fichaje del Liverpool.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Exequiel Zeballos (2022)",
      palmares: 4,
      contexto: "Joven promesa de Boca, pura habilidad.",
    },
    {
      nombre: "Alejandro Garnacho (2024)",
      palmares: 3,
      contexto: "La gran promesa argentina en el Man Utd, pura explosión.",
    },
    {
      nombre: "Nico González (2023)",
      palmares: 5,
      contexto: "Pilar de la Scaloneta, pura intensidad y gol.",
    },
    {
      nombre: "Lucas Ocampos (2020)",
      palmares: 5,
      contexto: "En su prime, figura del Sevilla campeón de Europa League.",
    },
    {
      nombre: "Ramón Sosa (2024)",
      palmares: 0,
      contexto: "El jugador más desequilibrante de la liga argentina.",
    },
    {
      nombre: "Brian Aguirre (2023)",
      palmares: 0,
      contexto: "Joven promesa de Newell's, pura gambeta.",
    },
    {
      nombre: "Johan Carbonero (2023)",
      palmares: 2,
      contexto: "Extremo rapidísimo de Racing, antes de su lesión.",
    },
    {
      nombre: "Facundo Colidio (2024 - River)",
      palmares: 3,
      contexto: "Jugador polifuncional, rindiendo en River.",
    },
    {
      nombre: "Gastón Togni (2023)",
      palmares: 2,
      contexto: "Buena pegada y desborde, figura en DyJ.",
    },
    {
      nombre: "Luca Langoni (2022)",
      palmares: 3,
      contexto: "Su irrupción goleadora que le dio un título a Boca.",
    },
    {
      nombre: "Esequiel Barco (2023 - EI)",
      palmares: 4,
      contexto: "Extremo reconvertido a interior. Muy desequilibrante.",
    },
    {
      nombre: "Baltasar Barcia (2023)",
      palmares: 0,
      contexto: "Volante uruguayo de mucha entrega en Independiente.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Eden Hazard (2021 - Real Madrid)",
      palmares: 20,
      contexto: "El fichaje más caro del Madrid, recordado por sus lesiones.",
    },
    {
      nombre: "Neymar Jr. (2023 - Arabia)",
      palmares: 30,
      contexto: "Su ida a Arabia Saudí, marcada por una grave lesión.",
    },
    {
      nombre: "Alexis Sánchez (2018 - Man Utd)",
      palmares: 15,
      contexto: "Su tristísimo paso por el Man Utd, siendo el mejor pagado.",
    },
    {
      nombre: "Philippe Coutinho (2022 - Qatar)",
      palmares: 15,
      contexto: "El fichaje más caro del Barça, ahora en ligas menores.",
    },
    {
      nombre: "Ansu Fati (2023 - Brighton)",
      palmares: 5,
      contexto: "Cedido al Brighton para intentar recuperar su nivel.",
    },
    {
      nombre: "Gareth Bale (2021 - Real Madrid)",
      palmares: 22,
      contexto: "Sus últimos años en Madrid, más famoso por el golf que por jugar.",
    },
    {
      nombre: "Ricardo Centurión (2021 - Vélez)",
      palmares: 4,
      contexto: "Sus últimos intentos en Vélez, marcados por problemas.",
    },
    {
      nombre: "Sebastian Villa (2022 - Boca)",
      palmares: 7,
      contexto: "Extremo rapidísimo, pero muy cuestionado por sus decisiones y polémicas.",
    },
    {
      nombre: "Frank Fabra (2018 - Enganche)",
      palmares: 8,
      contexto: "Versión de cuando Guillermo lo puso de enganche. No funcionó.",
    },
    {
      nombre: "Marcos Acuña (2016 - Racing)",
      palmares: 5,
      contexto: "Su versión en Racing, donde jugaba de extremo. Pura potencia.",
    },
    {
      nombre: "Jesé Rodríguez (2017 - PSG)",
      palmares: 15,
      contexto: "La gran promesa del Madrid que se perdió en PSG.",
    },
    {
      nombre: "Ezequiel Lavezzi (2017 - China)",
      palmares: 18,
      contexto: "Sus últimos años en la liga china, lejos de su nivel top.",
    },
  ],

  // 10. Extremo Derecho (ED)
  ED: [
    // --- TUS 4 JUGADORES ORIGINALES ---
    {
      nombre: "Lionel Messi (2006)",
      palmares: 3,
      contexto: "Versión adolescente de Messi, pura explosión y descaro en el Barcelona.",
    },
    {
      nombre: "Garrincha (1962)",
      palmares: 4,
      contexto: "Ganó el Mundial '62 prácticamente solo.",
    },
    {
      nombre: "Pedro de la Vega (2023)",
      palmares: 0,
      contexto: "Extremo rápido y habilidoso de Lanús.",
    },
    {
      nombre: "Angel Di María (2014)",
      palmares: 18,
      contexto: "Figura de la final de Champions 2014 y del Mundial de Brasil.",
    },

    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "George Best (1968)",
      palmares: 6,
      contexto: "Leyenda del Man Utd, pura gambeta y carisma.",
    },
    {
      nombre: "Luís Figo (2000)",
      palmares: 20,
      contexto: "En su prime absoluto, justo antes de su polémico paso al Real Madrid.",
    },
    {
      nombre: "Arjen Robben (2014)",
      palmares: 30,
      contexto: "La jugada que todos conocían y nadie podía parar. Figura del Mundial 2014.",
    },
    {
      nombre: "Jairzinho (1970)",
      palmares: 6,
      contexto: "Leyenda de Brasil '70, el único en marcar en todos los partidos de un Mundial.",
    },
    {
      nombre: "David Beckham (1999)",
      palmares: 20,
      contexto: "Figura del Man Utd del Triplete. El mejor pie derecho del mundo.",
    },
    {
      nombre: "Stanley Matthews (1953)",
      palmares: 2,
      contexto: "Jugó hasta los 50 años. Una leyenda absoluta.",
    },
    {
      nombre: "Kevin Keegan (1979)",
      palmares: 10,
      contexto: "Ganador de dos Balones de Oro, figura en Liverpool y Hamburgo.",
    },
    {
      nombre: "Jimmy Johnstone (1967)",
      palmares: 15,
      contexto: "El mejor jugador de la historia del Celtic, campeón de Europa en '67.",
    },
    {
      nombre: "Siniša Mihajlović (1999 - Extremo)",
      palmares: 15,
      contexto: "Aunque defensor, su zurda lo ponía como extremo o volante. 'Bombardero'.",
    },
    {
      nombre: "Marc Overmars (1995)",
      palmares: 15,
      contexto: "Extremo rapidísimo, figura del Ajax campeón de Champions.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Guillermo Barros Schelotto (1999)",
      palmares: 17,
      contexto: "El alma del Boca de Bianchi. Pura picardía, garra y provocación.",
    },
    {
      nombre: "Mauro Camoranesi (2006)",
      palmares: 10,
      contexto: "Figura de la Italia campeona del mundo 2006. Pura garra.",
    },
    {
      nombre: "René Houseman (1973)",
      palmares: 5,
      contexto: "Pura gambeta y locura, campeón del mundo '78.",
    },
    {
      nombre: "Omar Corbatta (1957)",
      palmares: 6,
      contexto: "Uno de los mejores gambeteadores de la historia del fútbol argentino.",
    },
    {
      nombre: "Ernesto Mastrángelo (1977)",
      palmares: 10,
      contexto: "El '7' del Boca campeón de América y del Mundo de Lorenzo.",
    },
    {
      nombre: "Ariel Ortega (2000 - Volante)",
      palmares: 10,
      contexto: "Su versión jugando más recostado por derecha, pura gambeta.",
    },
    {
      nombre: "Julio Olarticoechea (1986)",
      palmares: 5,
      contexto: "El comodín de Bilardo en el '86, jugó de todo, hasta de '8'.",
    },
    {
      nombre: "José 'Pepe' Basualdo (1994)",
      palmares: 10,
      contexto: "Un 'box-to-box' incansable, figura en Vélez y Boca.",
    },
    {
      nombre: "Tito Pompei (1994)",
      palmares: 5,
      contexto: "El '8' elegante del Vélez campeón de todo.",
    },
    {
      nombre: "Gustavo Bou (2014 - Racing)",
      palmares: 4,
      contexto: "Figura y goleador del Racing campeón de Cocca.",
    },
    {
      nombre: "Pichi Mercier (2014 - Troll)",
      palmares: 4,
      contexto: "Bauza lo puso de '8' vs Bolívar en la altura. Insólito.",
    },
    {
      nombre: "Carlos Tevez (2003 - Extremo)",
      palmares: 25,
      contexto: "Su versión inicial en Boca, jugando recostado por derecha.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Mohamed Salah (2019)",
      palmares: 12,
      contexto: "En su prime absoluto, Bota de Oro y campeón de Champions.",
    },
    {
      nombre: "Bukayo Saka (2024)",
      palmares: 3,
      contexto: "La figura y el jugador franquicia del Arsenal de Arteta.",
    },
    {
      nombre: "Rodrygo (2023)",
      palmares: 15,
      contexto: "Clave en las remontadas de Champions del Real Madrid.",
    },
    {
      nombre: "Ousmane Dembélé (2023)",
      palmares: 10,
      contexto: "Pura velocidad y gambeta, aunque errático. Figura del PSG.",
    },
    {
      nombre: "Riyad Mahrez (2023)",
      palmares: 20,
      contexto: "Extremo elegante, clave en el City del Triplete.",
    },
    {
      nombre: "Leroy Sané (2023)",
      palmares: 20,
      contexto: "Pura explosión y velocidad en el Bayern Múnich.",
    },
    {
      nombre: "Federico Chiesa (2021)",
      palmares: 8,
      contexto: "Figura absoluta de la Italia campeona de la Eurocopa.",
    },
    {
      nombre: "Serge Gnabry (2020)",
      palmares: 20,
      contexto: "Figura del Bayern campeón de Champions 2020.",
    },
    {
      nombre: "Dejan Kulusevski (2024)",
      palmares: 3,
      contexto: "Extremo potente y gran asistidor en el Tottenham.",
    },
    {
      nombre: "Lamine Yamal (2024)",
      palmares: 2,
      contexto: "La irrupción más espectacular de La Masía en la última década.",
    },
    {
      nombre: "Cole Palmer (2024)",
      palmares: 5,
      contexto: "La figura absoluta del Chelsea, goleador y asistidor. 'Cold Palmer'.",
    },
    {
      nombre: "Ángel Di María (2024 - Benfica)",
      palmares: 30,
      contexto: "Su versión actual, liderando al Benfica con pura clase.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Luca Langoni (2022)",
      palmares: 3,
      contexto: "Su irrupción goleadora que le dio un título a Boca.",
    },
    {
      nombre: "Exequiel Zeballos (2022)",
      palmares: 4,
      contexto: "Joven promesa de Boca, pura habilidad (pre-lesión).",
    },
    {
      nombre: "Pablo Solari (2023)",
      palmares: 5,
      contexto: "El 'factor Solari', un revulsivo rapidísimo.",
    },
    {
      nombre: "Benjamín Domínguez (2024)",
      palmares: 0,
      contexto: "De los jugadores más desequilibrantes de la liga. Pura gambeta.",
    },
    {
      nombre: "Matías Soulé (2024)",
      palmares: 2,
      contexto: "Figura del Frosinone, de las grandes promesas argentinas.",
    },
    {
      nombre: "Gianluca Prestianni (2023)",
      palmares: 0,
      contexto: "Joven promesa de Vélez, pura gambeta, vendido a Europa.",
    },
    {
      nombre: "Lucas Ocampos (2020)",
      palmares: 5,
      contexto: "En su prime, figura del Sevilla campeón de Europa League.",
    },
    {
      nombre: "Nico González (2023)",
      palmares: 5,
      contexto: "Pilar de la Scaloneta, pura intensidad y gol.",
    },
    {
      nombre: "Facundo Colidio (2023 - Tigre)",
      palmares: 1,
      contexto: "Su mejor versión en Tigre que lo llevó a River.",
    },
    {
      nombre: "Juan Gauto (2023)",
      palmares: 0,
      contexto: "Joven promesa de Huracán, rapidísimo, vendido a Suiza.",
    },
    {
      nombre: "Agustín Urzi (2021)",
      palmares: 1,
      contexto: "En su prime de Banfield, de los más rápidos de la liga.",
    },
    {
      nombre: "Santiago Solari (2024)",
      palmares: 1,
      contexto: "Extremo de buen rendimiento en Racing y DyJ.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Antony (2024)",
      palmares: 6,
      contexto: "Fichaje de 100M del Man Utd, muy cuestionado por su nivel.",
    },
    {
      nombre: "Jadon Sancho (2023 - Conflicto)",
      palmares: 5,
      contexto: "Separado del plantel del Man Utd por Ten Hag.",
    },
    {
      nombre: "Nicolas Pépé (2021)",
      palmares: 2,
      contexto: "El fichaje más caro de la historia del Arsenal, un fracaso.",
    },
    {
      nombre: "Ousmane Dembélé (2021 - Barça)",
      palmares: 10,
      contexto: "Su etapa en Barcelona, marcada por constantes lesiones.",
    },
    {
      nombre: "Eduardo Salvio (2022 - Boca)",
      palmares: 10,
      contexto: "Su etapa final en Boca, post-lesión y salida conflictiva.",
    },
    {
      nombre: "Pity Martínez (2024 - River)",
      palmares: 10,
      contexto: "Su vuelta a River, llegó lesionado y jugó muy poco.",
    },
    {
      nombre: "Ricardo Quaresma (2020)",
      palmares: 15,
      contexto: "Sus últimos años de carrera, jugando en ligas menores.",
    },
    {
      nombre: "Hulk (2015 - Zenit)",
      palmares: 20,
      contexto: "Su etapa en la liga rusa, lejos de la élite europea.",
    },
    {
      nombre: "Juan Iturbe (2015 - Roma)",
      palmares: 3,
      contexto: "Fichaje estrella de la Roma que nunca rindió.",
    },
    {
      nombre: "Lucas Vázquez (2018)",
      palmares: 20,
      contexto: "El eterno suplente del Real Madrid, cumplía de extremo o lateral.",
    },
    {
      nombre: "Jesús Navas (2012 - Extremo)",
      palmares: 15,
      contexto: "Su versión de extremo puro, antes de ser lateral.",
    },
    {
      nombre: "Malcom (2019 - Barça)",
      palmares: 8,
      contexto: "Fichaje fallido del Barcelona, recordado por un gol al Madrid.",
    },
    {
      nombre: "Cristian Pavón (2022 - Boca)",
      palmares: 8,
      contexto: "Su salida conflictiva de Boca, colgado y sin jugar.",
    },
  ],
  DC: [
    // --- TUS 5 JUGADORES ORIGINALES ---
    {
      nombre: "Ronaldo Nazário (1998)",
      palmares: 7,
      contexto: "Previo a su grave lesión, era considerado imparable.",
    },
    {
      nombre: "Martín Palermo (2000)",
      palmares: 14,
      contexto: "Héroe de la Intercontinental contra el Real Madrid.",
    },
    {
      nombre: "Lionel Messi (2012)",
      palmares: 40,
      contexto: "La versión de 91 goles en un año. Imparable.",
    },
    {
      nombre: "Darío Benedetto (2018)",
      palmares: 7,
      contexto: "En su mejor momento, clave en la Libertadores 2018 para Boca.",
    },
    {
      nombre: "Julián Álvarez (2022)",
      palmares: 10,
      contexto: "Clave en el Mundial de Qatar y ganando todo en Europa.",
    },

    // --- Leyendas Internacionales (Prime) ---
    {
      nombre: "Pelé (1970)",
      palmares: 20,
      contexto: "Considerado por muchos el mejor de la historia. Ganador de 3 Mundiales.",
    },
    {
      nombre: "Marco van Basten (1989)",
      palmares: 15,
      contexto: "El '9' más elegante, Balón de Oro y figura del Milan de Sacchi.",
    },
    {
      nombre: "Gerd Müller (1972)",
      palmares: 15,
      contexto: "El 'Torpedo'. Récord de goles en Bundesliga y Mundiales.",
    },
    {
      nombre: "Ferenc Puskás (1954)",
      palmares: 18,
      contexto: "Leyenda de Hungría y del Real Madrid. Un goleador de época.",
    },
    {
      nombre: "Eusébio (1966)",
      palmares: 18,
      contexto: "Balón de Oro y leyenda de Portugal. Pura potencia.",
    },
    {
      nombre: "Romário (1994)",
      palmares: 15,
      contexto: "Figura de Brasil '94. Un definidor letal.",
    },
    {
      nombre: "Dennis Bergkamp (1998)",
      palmares: 15,
      contexto: "Pura clase y técnica, autor de goles inolvidables en Arsenal.",
    },
    {
      nombre: "Didier Drogba (2012)",
      palmares: 18,
      contexto: "El 'Rey' de Chelsea, clave en la Champions 2012. Imparable.",
    },
    {
      nombre: "Samuel Eto'o (2009)",
      palmares: 25,
      contexto: "Ganó dos tripletes seguidos (Barça e Inter). Definidor letal.",
    },
    {
      nombre: "Andriy Shevchenko (2004)",
      palmares: 15,
      contexto: "El '9' perfecto: potencia, gol y clase. Figura del Milan.",
    },
    {
      nombre: "David Villa (2010)",
      palmares: 20,
      contexto: "Máximo goleador de España, clave en el Mundial 2010.",
    },
    {
      nombre: "Ruud van Nistelrooy (2003)",
      palmares: 10,
      contexto: "Uno de los '9' de área más letales de la historia de la Premier.",
    },
    {
      nombre: "Thierry Henry (2004 - DC)",
      palmares: 12,
      contexto: "Líder del Arsenal de los 'Invencibles'. Pura clase y velocidad.",
    },
    {
      nombre: "Diego Forlán (2010)",
      palmares: 8,
      contexto: "Figura y Bota de Oro del Mundial 2010. Pegada temible.",
    },

    // --- Leyendas Argentinas / Liga Local ---
    {
      nombre: "Gabriel Batistuta (1998)",
      palmares: 8,
      contexto: "El '9' histórico de la Selección. Un cañonero.",
    },
    {
      nombre: "Hernán Crespo (2001)",
      palmares: 15,
      contexto: "Pura clase y cabezazo, de los mejores '9' argentinos en Europa.",
    },
    {
      nombre: "Diego Maradona (1986)",
      palmares: 10,
      contexto: "El barrilete cósmico. Ganó un Mundial solo.",
    },
    {
      nombre: "Mario Kempes (1978)",
      palmares: 8,
      contexto: "Goleador y figura de la Argentina campeona del '78.",
    },
    {
      nombre: "Enzo Francescoli (1996)",
      palmares: 15,
      contexto: "Ídolo máximo de River, pura clase. El ídolo de Zidane.",
    },
    {
      nombre: "Alfredo Di Stéfano (1958)",
      palmares: 25,
      contexto: "Leyenda del Real Madrid, considerado el jugador total.",
    },
    {
      nombre: "Lucas Pratto (2018)",
      palmares: 10,
      contexto: "El '9' de Gallardo, autor del gol clave en la final de Madrid.",
    },
    {
      nombre: "Lisandro López (2014 - Racing)",
      palmares: 8,
      contexto: "Ídolo y capitán de Racing, clave en el título de 2014 y 2019.",
    },
    {
      nombre: "Diego Milito (2010)",
      palmares: 15,
      contexto: "Figura absoluta del Inter de Mourinho, goles en todas las finales.",
    },
    {
      nombre: "Julio Cruz (2006)",
      palmares: 10,
      contexto: "El eterno suplente de lujo del Inter, muy efectivo.",
    },
    {
      nombre: "Bernardo 'Toro' Acosta (1994)",
      palmares: 3,
      contexto: "Goleador de raza, ídolo en San Lorenzo y clave en Vélez.",
    },
    {
      nombre: "Beto Acosta (1995)",
      palmares: 5,
      contexto: "Ídolo de San Lorenzo, pura potencia y gol.",
    },
    {
      nombre: "Silvio Romero (2018)",
      palmares: 4,
      contexto: "Goleador y capitán de Independiente en su mejor momento.",
    },
    {
      nombre: "Marcelo Salas (1997)",
      palmares: 15,
      contexto: "Uno de los mejores '9' de la historia de River. Pura clase.",
    },
    {
      nombre: "Iván Alonso (2016)",
      palmares: 8,
      contexto: "El suplente veterano de Gallardo, clave en la Recopa.",
    },

    // --- Actuales (Internacional) ---
    {
      nombre: "Erling Haaland (2023)",
      palmares: 10,
      contexto: "La máquina de hacer goles del Man City. Imparable.",
    },
    {
      nombre: "Robert Lewandowski (2020)",
      palmares: 30,
      contexto: "Debió ganar el Balón de Oro 2020. Goleador total.",
    },
    {
      nombre: "Karim Benzema (2022)",
      palmares: 30,
      contexto: "Figura y Balón de Oro, líder de las remontadas del Real Madrid.",
    },
    {
      nombre: "Harry Kane (2023)",
      palmares: 1,
      contexto: "Goleador histórico de Inglaterra, una máquina en Bayern.",
    },
    {
      nombre: "Luis Suárez (2016)",
      palmares: 20,
      contexto: "En su prime del Barça, Bota de Oro europea. Depredador.",
    },
    {
      nombre: "Zlatan Ibrahimović (2012 - PSG)",
      palmares: 30,
      contexto: "Pura arrogancia y goles inolvidables. Dominó Francia.",
    },
    {
      nombre: "Kylian Mbappé (2022 - DC)",
      palmares: 20,
      contexto: "El jugador más rápido y desequilibrante del mundo.",
    },
    {
      nombre: "Victor Osimhen (2023)",
      palmares: 3,
      contexto: "Capocannoniere y figura del Napoli campeón. Pura potencia.",
    },
    {
      nombre: "Viktor Gyökeres (2024)",
      palmares: 3,
      contexto: "La sensación de Europa, una bestia física en Portugal.",
    },
    {
      nombre: "Ollie Watkins (2024)",
      palmares: 1,
      contexto: "De los mejores '9' de la Premier League, figura del Villa.",
    },
    {
      nombre: "Antoine Griezmann (2018)",
      palmares: 10,
      contexto: "Figura de Francia '18. Un 'falso 9' total.",
    },

    // --- Actuales (Argentina / Liga Local) ---
    {
      nombre: "Lautaro Martínez (2024)",
      palmares: 10,
      contexto: "Capitán y Capocannoniere de la Serie A. Campeón del mundo.",
    },
    {
      nombre: "Miguel Borja (2024)",
      palmares: 10,
      contexto: "Goleador de River, letal dentro del área.",
    },
    {
      nombre: "Edinson Cavani (2023 - Boca)",
      palmares: 25,
      contexto: "Figura de jerarquía en Boca, clave en la Libertadores.",
    },
    {
      nombre: "Michael Santos (2023)",
      palmares: 1,
      contexto: "Goleador de la liga argentina con Talleres. 'Pelo Platinado'.",
    },
    {
      nombre: "Mateo Retegui (2023)",
      palmares: 3,
      contexto: "Goleador de Tigre que se convirtió en el '9' de Italia.",
    },
    {
      nombre: "Lucas Beltrán (2023 - River)",
      palmares: 5,
      contexto: "El '9' de Demichelis, vendido a la Fiorentina.",
    },
    {
      nombre: "Adam Bareiro (2024)",
      palmares: 1,
      contexto: "Goleador y capitán de San Lorenzo, pura garra.",
    },
    {
      nombre: "Adrián 'Maravilla' Martínez (2024)",
      palmares: 1,
      contexto: "La sensación de Racing, goleador con una historia de superación.",
    },
    {
      nombre: "Leandro Fernández (2022 - Indep.)",
      palmares: 3,
      contexto: "Delantero de gran pegada, ídolo en Independiente.",
    },
    {
      nombre: "Luciano Gondou (2024)",
      palmares: 1,
      contexto: "Goleador de Argentinos Jrs y la Sub-23. ",
    },
    {
      nombre: "Mauro Icardi (2018 - Inter)",
      palmares: 8,
      contexto: "En su prime, un '9' de área letal. Capitán del Inter.",
    },

    // --- Versiones "Troll" o Declive ---
    {
      nombre: "Lionel Messi (2016 - Falso 9)",
      palmares: 40,
      contexto: "Su versión de 'Falso 9' con Guardiola, pura magia.",
    },
    {
      nombre: "Cristiano Ronaldo (2024 - Arabia)",
      palmares: 35,
      contexto: "Máquina de hacer goles en la liga saudí.",
    },
    {
      nombre: "Luis Suárez (2024 - MLS)",
      palmares: 22,
      contexto: "Jugando 'roto' en el Inter Miami, pura clase.",
    },
    {
      nombre: "Darío Benedetto (2024 - Boca)",
      palmares: 7,
      contexto: "Muy cuestionado, suplente y lejos de su nivel 2018.",
    },
    {
      nombre: "Edinson Cavani (2021 - Man Utd)",
      palmares: 25,
      contexto: "Sus últimos años en Man Utd, con lesiones y suplencia.",
    },
    {
      nombre: "Gonzalo Higuaín (2018 - Mundial)",
      palmares: 20,
      contexto: "Su versión del Mundial 2018, muy resistido.",
    },
    {
      nombre: "Radamel Falcao (2016 - Chelsea)",
      palmares: 15,
      contexto: "Su tristísimo paso por Chelsea, nunca se recuperó.",
    },
    {
      nombre: "Fernando Torres (2011 - Chelsea)",
      palmares: 15,
      contexto: "Fichaje récord del Chelsea que nunca rindió.",
    },
    {
      nombre: "Romelu Lukaku (2022 - Chelsea)",
      palmares: 10,
      contexto: "Su segunda etapa en Chelsea, un fracaso recordado por una entrevista.",
    },
    {
      nombre: "Mauro Zárate (2019 - Boca)",
      palmares: 5,
      contexto: "Su etapa en Boca, marcada por la polémica con Vélez y lesiones.",
    },
    {
      nombre: "Franco Di Santo (2022 - San Lorenzo)",
      palmares: 3,
      contexto: "Delantero muy criticado en San Lorenzo por su falta de gol.",
    },
    {
      nombre: "Wanchope Ábila (2021 - Boca)",
      palmares: 8,
      contexto: "Su última etapa en Boca, fuera de forma.",
    },
  ],

  // 6. DT (Directores Técnicos)
  DT: [
    // --- TUS 5 ORIGINALES ---
    {
      nombre: "Carlos Bianchi (2000)",
      palmares: 12,
      contexto: "El DT más ganador de la historia de Boca Juniors.",
    },
    {
      nombre: "Pep Guardiola (2011)",
      palmares: 25,
      contexto: "Creador del mejor Barcelona de la historia.",
    },
    {
      nombre: "Lionel Scaloni (2022)",
      palmares: 3,
      contexto: "Llevó a Argentina a la gloria máxima.",
    },
    {
      nombre: "Diego Martínez (2024)",
      palmares: 0,
      contexto: "El 'Gigoló', actual DT de Boca Juniors.",
    },
    {
      nombre: "Marcelo Gallardo (2018)",
      palmares: 14,
      contexto: "El DT más ganador de la historia de River Plate.",
    },

    // --- LEYENDAS INTERNACIONALES ---
    {
      nombre: "Sir Alex Ferguson (1999)",
      palmares: 49,
      contexto: "El DT más ganador de la historia. Ganador del Triplete en 1999.",
    },
    {
      nombre: "José Mourinho (2010)",
      palmares: 26,
      contexto: "En su prime absoluto, ganador del triplete con el Inter.",
    },
    {
      nombre: "Arrigo Sacchi (1990)",
      palmares: 8,
      contexto: "Revolucionó el fútbol con su Milan, de los mejores equipos de la historia.",
    },
    {
      nombre: "Johan Cruyff (1992)",
      palmares: 14,
      contexto: "El padre del estilo Barça. Creador del 'Dream Team'.",
    },
    {
      nombre: "Carlo Ancelotti (2024)",
      palmares: 28,
      contexto: "El DT más ganador de la Champions League. Pura gestión.",
    },
    {
      nombre: "Jürgen Klopp (2019)",
      palmares: 15,
      contexto: "Devolvió al Liverpool a la gloria con su fútbol 'Heavy Metal'.",
    },
    {
      nombre: "Arsène Wenger (2004)",
      palmares: 21,
      contexto: "DT del Arsenal que ganó la Premier League invicto. 'Le Professeur'.",
    },
    {
      nombre: "Vicente del Bosque (2010)",
      palmares: 10,
      contexto: "Ganó el Mundial 2010 y la Euro 2012 con España.",
    },
    {
      nombre: "Zinedine Zidane (2018)",
      palmares: 11,
      contexto: "Ganó 3 Champions consecutivas con el Real Madrid.",
    },
    {
      nombre: "Marcello Lippi (2006)",
      palmares: 18,
      contexto: "Llevó a Italia a ganar el Mundial 2006. Pura táctica.",
    },

    // --- LEYENDAS ARGENTINAS ---
    {
      nombre: "César Luis Menotti (1978)",
      palmares: 5,
      contexto: "El padre del 'Fútbol Lirico'. Campeón del mundo con Argentina.",
    },
    {
      nombre: "Carlos Bilardo (1986)",
      palmares: 5,
      contexto: "El 'Doctor'. Llevó a Argentina a la gloria en México '86. 'El resultadista'.",
    },
    {
      nombre: "Ramón Díaz (1996)",
      palmares: 14,
      contexto: "El DT más ganador de River (hasta Gallardo). Pura picardía.",
    },
    {
      nombre: "Alfio Basile (1991)",
      palmares: 8,
      contexto: "DT de la Selección invicta bicampeona de Copa América '91-'93.",
    },
    {
      nombre: "Miguel Ángel Russo (2007)",
      palmares: 7,
      contexto: "El DT que ganó la última Libertadores de Boca con Riquelme.",
    },
    {
      nombre: "Juan Carlos Lorenzo (1977)",
      palmares: 10,
      contexto: "El DT que le dio a Boca su primera Copa Libertadores.",
    },
    {
      nombre: "José Pékerman (2005)",
      palmares: 5,
      contexto: "El padre de la generación dorada, DT en el Mundial 2006.",
    },

    // --- ACTUALES / TROLL / CULTO ---
    {
      nombre: "Xabi Alonso (2024)",
      palmares: 3,
      contexto: "El DT sensación de Europa, campeón invicto con el Leverkusen.",
    },
    {
      nombre: "Diego Simeone (2014)",
      palmares: 10,
      contexto: "Creador del 'Cholismo'. Llevó al Atlético a la gloria.",
    },
    {
      nombre: "Rubén Darío Insúa (2023)",
      palmares: 3,
      contexto: "El 'economista' que resucitó a San Lorenzo sin refuerzos.",
    },
    {
      nombre: "Martín Demichelis (2023)",
      palmares: 3,
      contexto: "El sucesor de Gallardo, campeón de la Liga 2023.",
    },
    {
      nombre: "Ricardo Caruso Lombardi (2012)",
      palmares: 0,
      contexto: "El especialista en salvar equipos del descenso. 'El Vendehumo'.",
    },
    {
      nombre: "Gustavo Alfaro (2019)",
      palmares: 4,
      contexto: "Su etapa en Boca, campeón de Supercopa pero muy defensivo.",
    },
    {
      nombre: "Diego Maradona (DT 2010)",
      palmares: 0,
      contexto: "Su caótica pero inolvidable etapa como DT de Argentina en Sudáfrica 2010.",
    },
    {
      nombre: "Sebastián Battaglia (DT 2022)",
      palmares: 2,
      contexto: "Ganó dos copas con Boca pero fue despedido tras una eliminación.",
    },
  ],
};

export const POSICIONES = [
  "POR",
  "LD",
  "LI",
  "DFC_I",
  "DFC_D",
  "MCD",
  "MC_I",
  "MC_D",
  "EI",
  "ED",
  "DC",
  "DT",
];
export const POSICIONES_NOMBRES = {
  POR: "Portero",
  LD: "Lateral Derecho",
  LI: "Lateral Izquierdo",
  DFC_I: "Central Izquierdo",
  DFC_D: "Central Derecho",
  MCD: "Mediocentro Defensivo",
  MC_I: "Interior Izquierdo",
  MC_D: "Interior Derecho",
  EI: "Extremo Izquierdo",
  ED: "Extremo Derecho",
  DC: "Delantero Centro",
  DT: "Director Técnico",
};
export const CATEGORIAS_EXTRA = [
  { id: "palmares", nombre: "Palmarés (Títulos)" },
  // Química es muy complejo de implementar sin una DB mucho más detallada (club, nacionalidad, liga en CADA carta)
  // { id: 'quimica', nombre: 'Química de Equipo' },
];

// --- EVENTOS SORPRESA ---
export const EVENTOS_SORPRESA = [
  {
    id: "INYECCION",
    titulo: "¡Inyección de Capital!",
    descripcion:
      "Un grupo inversor extranjero ha comprado la liga. ¡Todos los jugadores reciben $50M extra!",
    icono: Gift,
    efecto: (jugadores) =>
      jugadores.map((j) => ({ ...j, presupuesto: j.presupuesto + 50 })),
  },
  {
    id: "PATROCINADOR",
    titulo: "¡Patrocinador Sorpresa!",
    descripcion: (jugador) =>
      `¡${jugador.nombre} ha firmado un contrato millonario! Recibe $100M.`,
    icono: TrendingUp,
    efecto: (jugadores) => {
      const jugadorAzar = Math.floor(Math.random() * jugadores.length);
      return jugadores.map((j, index) =>
        index === jugadorAzar ? { ...j, presupuesto: j.presupuesto + 100 } : j
      );
    },
  },
  {
    id: "CRISIS",
    titulo: "¡Crisis Financiera!",
    descripcion:
      "El mercado colapsa. Todos los jugadores pierden $30M de su presupuesto.",
    icono: TrendingDown,
    efecto: (jugadores) =>
      jugadores.map((j) => ({
        ...j,
        presupuesto: Math.max(0, j.presupuesto - 30),
      })),
  },
  {
    id: "FUGA_TALENTO",
    titulo: "¡Fuga de Talento!",
    descripcion: (jugador, carta) =>
      `¡${jugador.nombre} ha perdido un jugador! ${carta.nombre} se fue como agente libre.`,
    icono: Frown,
    efecto: (jugadores) => {
      const jugadorAzar = Math.floor(Math.random() * jugadores.length);
      const jugadorAfectado = jugadores[jugadorAzar];
      if (jugadorAfectado.equipo.length === 0) return null; // No hay efecto si no tiene equipo

      // Pierde al jugador más barato
      const equipoOrdenado = [...jugadorAfectado.equipo].sort(
        (a, b) => a.precio - b.precio
      );
      const cartaPerdida = equipoOrdenado[0];
      const nuevoEquipo = jugadorAfectado.equipo.filter(
        (c) => c.nombre !== cartaPerdida.nombre
      ); // Simplificado

      return {
        jugadores: jugadores.map((j, index) =>
          index === jugadorAzar ? { ...j, equipo: nuevoEquipo } : j
        ),
        cartaPerdida: cartaPerdida,
      };
    },
  },
  {
    id: "MERCADO_INFLADO",
    titulo: "¡Mercado Inflado!",
    descripcion:
      "Los clubes están desesperados. ¡Los precios mínimos de la siguiente ronda se duplican!",
    icono: Zap,
    efecto: (jugadores) => jugadores, // El efecto se aplica en la próxima ronda
  },
  {
    id: "SWAP_CAOTICO",
    titulo: "¡Mercado de Locos!",
    icono: Zap,
    efecto: (jugadores) => {
      // 1. Elige una posición al azar que ya haya pasado (excepto DT)
      // eslint-disable-next-line no-undef
      const posPasadas = POSICIONES.slice(0, Math.min(posicionActual + 1, 11));
      const posAzar = posPasadas[Math.floor(Math.random() * posPasadas.length)];

      // 2. Elige 2 jugadores distintos al azar
      const idx1 = Math.floor(Math.random() * jugadores.length);
      let idx2 = Math.floor(Math.random() * jugadores.length);
      while (idx1 === idx2) {
        idx2 = Math.floor(Math.random() * jugadores.length);
      }

      const j1 = jugadores[idx1];
      const j2 = jugadores[idx2];

      // 3. Encuentra las cartas de esa posición
      const cartaJ1 = j1.equipo.find((c) => c.posicion === posAzar);
      const cartaJ2 = j2.equipo.find((c) => c.posicion === posAzar);

      // 4. Si ambos tienen una carta, las intercambian
      if (cartaJ1 && cartaJ2) {
        const nuevoEquipoJ1 = j1.equipo
          .filter((c) => c.posicion !== posAzar)
          .concat(cartaJ2);
        const nuevoEquipoJ2 = j2.equipo
          .filter((c) => c.posicion !== posAzar)
          .concat(cartaJ1);

        const descripcion = `¡INTERCAMBIO FORZADO! ${j1.nombre} y ${j2.nombre} intercambian sus ${POSICIONES_NOMBRES[posAzar]}: (${cartaJ1.nombre} por ${cartaJ2.nombre})`;

        return {
          jugadores: jugadores.map((j) => {
            if (j.id === j1.id) return { ...j, equipo: nuevoEquipoJ1 };
            if (j.id === j2.id) return { ...j, equipo: nuevoEquipoJ2 };
            return j;
          }),
          descripcionFinal: descripcion,
        };
      }

      return null; // No hay efecto si uno no tenía jugador
    },
  },
  {
    id: "ROBO_JUGADOR",
    titulo: "¡Robo en el Mercado!",
    icono: Frown, // Usamos Frown porque alguien se fastidia
    efecto: (jugadores) => {
      // 1. Elige un ladrón y una víctima
      const idxLadron = Math.floor(Math.random() * jugadores.length);
      let idxVictima = Math.floor(Math.random() * jugadores.length);
      while (idxLadron === idxVictima) {
        idxVictima = Math.floor(Math.random() * jugadores.length);
      }

      const ladron = jugadores[idxLadron];
      const victima = jugadores[idxVictima];

      // 2. Si la víctima no tiene jugadores, no se puede robar
      if (victima.equipo.length === 0) return null;

      // 3. Elige una carta al azar de la víctima
      const cartaRobada =
        victima.equipo[Math.floor(Math.random() * victima.equipo.length)];

      // 4. Ver si el ladrón ya tiene esa posición
      const cartaExistenteLadron = ladron.equipo.find(
        (c) => c.posicion === cartaRobada.posicion
      );

      // 5. Verificamos que el ladrón no tenga ya esa posición (para no tener 2 porteros)
      //    Y que no sea una carta gratis de "Cantera" (si la implementamos)
      if (cartaExistenteLadron || cartaRobada.precio === 0) return null;

      // 6. Ejecutar el robo
      const nuevoEquipoVictima = victima.equipo.filter(
        (c) => c.nombre !== cartaRobada.nombre
      ); // Simplificado
      const nuevoEquipoLadron = [...ladron.equipo, cartaRobada];

      const descripcion = `¡ROBO! ${ladron.nombre} le ha robado ${cartaRobada.nombre} (${cartaRobada.posicion}) a ${victima.nombre}!`;

      return {
        jugadores: jugadores.map((j) => {
          if (j.id === ladron.id) return { ...j, equipo: nuevoEquipoLadron };
          if (j.id === victima.id) return { ...j, equipo: nuevoEquipoVictima };
          return j;
        }),
        descripcionFinal: descripcion,
      };
    },
  },
];
