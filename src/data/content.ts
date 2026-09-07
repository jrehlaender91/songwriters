// Contenido original del "Test de Estilo Creativo para Letristas".
// Inspirado conceptualmente en la teoría de tipos psicológicos de Carl Jung
// (dominio público) y en la idea de que el estilo cognitivo influye en el
// proceso creativo — un marco que también explora Sheila Davis en
// "The Songwriter's Idea Book". Todo el texto, las preguntas y las
// descripciones de esta página son redacción propia, no una transcripción
// del libro.

export type DimensionKey = "EI" | "SN" | "TF" | "JP";
export type Letter = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

export interface Question {
  id: string;
  dimension: DimensionKey;
  textA: string; // lado "negativo" del puntaje -> letra low (I, S, T, J)
  textB: string; // lado "positivo" del puntaje -> letra high (E, N, F, P)
}

export const DIMENSIONS: Record<
  DimensionKey,
  { title: string; low: Letter; high: Letter; question: string }
> = {
  EI: {
    title: "Energía creativa",
    low: "I",
    high: "E",
    question: "¿De dónde sacas el impulso para crear?",
  },
  SN: {
    title: "Percepción",
    low: "S",
    high: "N",
    question: "¿En qué se apoyan tus letras?",
  },
  TF: {
    title: "Decisión",
    low: "T",
    high: "F",
    question: "¿Cómo decides si algo funciona?",
  },
  JP: {
    title: "Método de trabajo",
    low: "J",
    high: "P",
    question: "¿Cómo organizas tu proceso?",
  },
};

export const QUESTIONS: Question[] = [
  // Energía creativa: Introversión (I) vs Extraversión (E)
  {
    id: "ei1",
    dimension: "EI",
    textA: "Escribo mejor a solas, sin interrupciones ni miradas encima.",
    textB: "Escribo mejor conversando o probando ideas en voz alta con otra persona.",
  },
  {
    id: "ei2",
    dimension: "EI",
    textA: "Prefiero masticar una idea en silencio antes de mostrarla.",
    textB: "Se me ocurren las mejores líneas mientras hablo, canto o toco con alguien.",
  },
  {
    id: "ei3",
    dimension: "EI",
    textA: "Después de una sesión larga de composición, necesito tiempo a solas para recargar.",
    textB: "Después de componer, me dan ganas de tocarle la canción a alguien enseguida.",
  },
  {
    id: "ei4",
    dimension: "EI",
    textA: "Me cuesta improvisar letras frente a otras personas.",
    textB: "Disfruto tirar ideas al aire en el momento, aunque la mayoría sean malas.",
  },
  {
    id: "ei5",
    dimension: "EI",
    textA: "Si tengo una idea nueva, la trabajo yo primero antes de contarla.",
    textB: "Si tengo una idea nueva, se la cuento a alguien enseguida para pensarla juntos.",
  },
  {
    id: "ei6",
    dimension: "EI",
    textA: "En una co-escritura, necesito momentos de silencio para poder pensar.",
    textB: "En una co-escritura, el silencio me bloquea; necesito que la conversación fluya.",
  },

  // Percepción: Sensación (S) vs Intuición (N)
  {
    id: "sn1",
    dimension: "SN",
    textA: "Mis letras suelen tener detalles concretos: nombres, lugares, objetos puntuales.",
    textB: "Mis letras tienden a lo simbólico, lo abstracto o lo metafórico.",
  },
  {
    id: "sn2",
    dimension: "SN",
    textA: "Me gusta partir de algo que realmente pasó.",
    textB: "Me gusta inventar una imagen o una situación que nunca viví.",
  },
  {
    id: "sn3",
    dimension: "SN",
    textA: "Prefiero apoyarme en una estructura conocida (verso-coro-verso).",
    textB: "Me atrae romper la estructura habitual o probar una forma distinta.",
  },
  {
    id: "sn4",
    dimension: "SN",
    textA: "Al revisar una letra, checo que cada verso sea literal y creíble.",
    textB: "Al revisar una letra, me importa más el efecto emocional que la literalidad.",
  },
  {
    id: "sn5",
    dimension: "SN",
    textA: "Escribo mejor observando el presente: lo que veo, oigo y siento ahora.",
    textB: "Escribo mejor imaginando posibilidades: lo que podría ser, el futuro, lo hipotético.",
  },
  {
    id: "sn6",
    dimension: "SN",
    textA: "Cuando reviso una letra, me detengo en el detalle: una palabra, una coma, una rima.",
    textB: "Cuando reviso una letra, pienso primero en si el concepto general se entiende.",
  },

  // Decisión: Pensamiento (T) vs Sentimiento (F)
  {
    id: "tf1",
    dimension: "TF",
    textA: "Cuando algo falla en una canción, casi siempre es un problema de estructura o lógica.",
    textB: "Cuando algo falla en una canción, casi siempre es que no se siente honesto.",
  },
  {
    id: "tf2",
    dimension: "TF",
    textA: "Puedo ser bastante crítico con mi propio trabajo y el de otros.",
    textB: "Me cuesta ser duro criticando; prefiero alentar antes que señalar fallas.",
  },
  {
    id: "tf3",
    dimension: "TF",
    textA: "Valoro que una canción esté bien construida técnicamente.",
    textB: "Valoro que una canción emocione, aunque técnicamente no sea perfecta.",
  },
  {
    id: "tf4",
    dimension: "TF",
    textA: "Decido si una letra funciona según si es coherente y tiene sentido.",
    textB: "Decido si una letra funciona según cómo hace sentir a quien la escucha.",
  },
  {
    id: "tf5",
    dimension: "TF",
    textA: "Me atrae escribir sobre ideas, sistemas o temas sociales.",
    textB: "Me atrae escribir sobre vínculos, emociones y relaciones personales.",
  },
  {
    id: "tf6",
    dimension: "TF",
    textA: "Prefiero un feedback directo y objetivo, aunque sea incómodo.",
    textB: "Prefiero un feedback con tacto, que también reconozca lo que sí funciona.",
  },

  // Método de trabajo: Juicio (J) vs Percepción (P)
  {
    id: "jp1",
    dimension: "JP",
    textA: "Trabajo mejor con un horario fijo para componer.",
    textB: "Trabajo mejor cuando llega la inspiración, sin horario fijo.",
  },
  {
    id: "jp2",
    dimension: "JP",
    textA: "Me gusta terminar una canción antes de empezar otra.",
    textB: "Suelo tener varias canciones abiertas al mismo tiempo.",
  },
  {
    id: "jp3",
    dimension: "JP",
    textA: "Planifico la estructura antes de escribir la letra.",
    textB: "Dejo que la canción encuentre su forma mientras la escribo.",
  },
  {
    id: "jp4",
    dimension: "JP",
    textA: "Me incomoda dejar una canción sin terminar.",
    textB: "No me molesta dejar una canción en pausa y volver más adelante.",
  },
  {
    id: "jp5",
    dimension: "JP",
    textA: "Prefiero decidir rápido sobre una línea y avanzar.",
    textB: "Prefiero mantener varias opciones abiertas el mayor tiempo posible.",
  },
  {
    id: "jp6",
    dimension: "JP",
    textA: "Cuando me atoro, prefiero insistir ahí hasta resolverlo.",
    textB: "Cuando me atoro, prefiero dejarlo y volver después con la cabeza despejada.",
  },
];

export interface LetterProfile {
  letter: Letter;
  name: string;
  tagline: string;
  strengths: string[];
  workStyle: string;
  block: string;
  tip: string;
}

export const LETTER_PROFILES: Record<Letter, LetterProfile> = {
  I: {
    letter: "I",
    name: "Introversión",
    tagline: "Tu energía creativa nace hacia adentro.",
    strengths: [
      "Profundidad: no te conformas con la primera línea, sigues cavando.",
      "Buena escucha interior: detectas matices emocionales sutiles.",
      "Autonomía: no dependes de otros para sostener el impulso creativo.",
    ],
    workStyle:
      "Rindes mejor en sesiones a solas o con muy poca gente alrededor. Necesitas tiempo de reflexión antes de mostrar una idea a medio cocinar.",
    block:
      "Puedes quedarte demasiado tiempo dando vueltas en tu cabeza antes de animarte a mostrar algo, o postergar una co-escritura por incomodidad.",
    tip:
      "Reserva bloques de tiempo a solas antes de cualquier sesión grupal. Si vas a co-escribir, pide unos minutos de silencio para pensar antes de opinar.",
  },
  E: {
    letter: "E",
    name: "Extraversión",
    tagline: "Tu energía creativa nace hacia afuera.",
    strengths: [
      "Fluidez verbal: te salen ideas hablando o cantando en voz alta.",
      "Buena en colaboración: la conversación te dispara nuevas líneas.",
      "Capacidad de probar y descartar rápido, sin apego.",
    ],
    workStyle:
      "Rindes mejor co-escribiendo, tocando en vivo tus ideas o pensando en voz alta. El silencio prolongado tiende a frenarte en vez de ayudarte.",
    block:
      "Puedes confundir 'hablar mucho' con 'avanzar'; a veces generas muchas ideas sueltas sin cerrar ninguna.",
    tip:
      "Si escribes solo, grábate hablando o cantando mientras caminas — tu propia voz en voz alta cumple la función que cumpliría otra persona.",
  },
  S: {
    letter: "S",
    name: "Sensación",
    tagline: "Percibes el mundo por lo concreto y lo real.",
    strengths: [
      "Detalle: tus letras tienen texturas, objetos y escenas que se pueden ver.",
      "Credibilidad: tus historias suenan a algo que realmente pudo pasar.",
      "Disciplina con la forma: manejas bien una estructura conocida.",
    ],
    workStyle:
      "Trabajas mejor partiendo de un hecho, una imagen real o una anécdota concreta, y construyendo la canción hacia afuera desde ahí.",
    block:
      "El riesgo es quedarte en la enumeración de detalles sin llegar a un sentido claro: mucha escena, poco mensaje.",
    tip:
      "Cuando termines un borrador, pregúntate: '¿qué significa esto? ¿qué quiero que la otra persona sienta al final?' Si no puedes responder en una frase, todavía falta.",
  },
  N: {
    letter: "N",
    name: "Intuición",
    tagline: "Percibes el mundo por patrones, símbolos y posibilidades.",
    strengths: [
      "Imaginación: generas metáforas e imágenes que nadie esperaba.",
      "Visión de conjunto: encuentras el concepto que une toda la canción.",
      "Originalidad: te aburre lo obvio y buscas ángulos nuevos.",
    ],
    workStyle:
      "Trabajas mejor a partir de una idea, una imagen o un concepto abstracto, dejando que la canción se abra en abanico antes de cerrarla.",
    block:
      "El riesgo es perder el hilo: saltar de imagen en imagen sin que quien escucha pueda seguir la historia o ubicarse en el tiempo y el lugar.",
    tip:
      "Antes de dar por cerrado un borrador, responde por escrito: ¿quién canta?, ¿a quién le habla?, ¿en qué momento y lugar exacto ocurre esto?",
  },
  T: {
    letter: "T",
    name: "Pensamiento",
    tagline: "Decides evaluando lógica, estructura y coherencia.",
    strengths: [
      "Ojo crítico: detectas rápido qué verso sobra o qué rima está forzada.",
      "Construcción sólida: tus canciones tienen principio, medio y final claros.",
      "Objetividad: puedes editar tu propio trabajo sin apego excesivo.",
    ],
    workStyle:
      "Rindes mejor cuando puedes analizar la canción como un problema a resolver: estructura, causa y efecto, coherencia interna.",
    block:
      "El riesgo es una letra técnicamente prolija pero fría, que no termina de emocionar a quien la escucha.",
    tip:
      "Después de la parte analítica, haz una pasada preguntando solamente: '¿esto me emociona a mí? ¿por qué?' Deja que esa respuesta edite una última vez.",
  },
  F: {
    letter: "F",
    name: "Sentimiento",
    tagline: "Decides evaluando el impacto humano y emocional.",
    strengths: [
      "Autenticidad: tus letras suenan sentidas, no impostadas.",
      "Empatía: escribes personajes y situaciones creíbles emocionalmente.",
      "Conexión: tu público siente que le hablas directamente a él o ella.",
    ],
    workStyle:
      "Rindes mejor cuando escribes desde una emoción genuina, propia o de un personaje, y dejas que la estructura se acomode después.",
    block:
      "El riesgo es sobre-explicar el sentimiento o caer en el lugar común emocional en lugar de mostrarlo con una imagen concreta.",
    tip:
      "Cuando una línea diga directamente 'estoy triste' o 'te amo', prueba reemplazarla por una imagen o una acción que muestre eso sin nombrarlo.",
  },
  J: {
    letter: "J",
    name: "Método estructurado",
    tagline: "Trabajas mejor con organización y objetivos claros.",
    strengths: [
      "Constancia: sostienes una rutina de escritura sin depender del ánimo.",
      "Cierre: terminas las canciones en lugar de dejarlas a medias.",
      "Planificación: puedes mapear la estructura antes de escribir una palabra.",
    ],
    workStyle:
      "Rindes mejor con un horario fijo, una meta concreta por sesión ('hoy termino el estribillo') y avanzando una canción a la vez.",
    block:
      "El riesgo es cerrar una canción antes de tiempo, por necesidad de terminar, dejando ideas sin madurar.",
    tip:
      "Cuando sientas apuro por cerrar, prueba 'poner un paréntesis' a la parte que no funciona y seguir con otra sección. Vuelve a esa línea al otro día, no en la misma sesión.",
  },
  P: {
    letter: "P",
    name: "Método flexible",
    tagline: "Trabajas mejor con apertura y sin horarios rígidos.",
    strengths: [
      "Adaptabilidad: cambias de rumbo cuando encuentras algo mejor.",
      "Tolerancia a la incertidumbre: puedes sostener una canción sin terminar por semanas.",
      "Espontaneidad: aprovechas la inspiración cuando aparece, venga cuando venga.",
    ],
    workStyle:
      "Rindes mejor sin agenda fija, dejando que varias canciones convivan a la vez y confiando en que vas a volver a cada una cuando corresponda.",
    block:
      "El riesgo es acumular demasiadas canciones abiertas y no terminar ninguna, por exceso de opciones.",
    tip:
      "Una vez por semana, elige una sola canción de tu lista de 'abiertas' y decide: ¿la termino, la archivo o la dejo en pausa? No hace falta decidir sobre todas, alcanza con una.",
  },
};

export type CognitiveStyle = "NT" | "NF" | "ST" | "SF";

export interface CognitiveStyleProfile {
  code: CognitiveStyle;
  name: string;
  description: string;
  lyricTendency: string;
  watchOut: string;
}

export const COGNITIVE_STYLES: Record<CognitiveStyle, CognitiveStyleProfile> = {
  NT: {
    code: "NT",
    name: "Conceptual",
    description:
      "Combinas intuición y pensamiento: te interesan las ideas, los sistemas y el 'por qué' de las cosas. Tiendes a cuestionar antes que a describir.",
    lyricTendency:
      "Tus letras suelen plantear preguntas más que afirmaciones, y buscan un ángulo irónico o crítico sobre un tema. Te va bien con canciones que hacen pensar.",
    watchOut:
      "Cuida que la idea no se vuelva tan abstracta que pierda el gancho emocional. Un buen concepto también necesita un momento humano y concreto.",
  },
  NF: {
    code: "NF",
    name: "Simbólico-emocional",
    description:
      "Combinas intuición y sentimiento: es probablemente el estilo más 'poético' — buscas metáforas que a la vez digan algo verdadero sobre ti o sobre otros.",
    lyricTendency:
      "Tus letras tienden a lo confesional y a inspirar, con imágenes que funcionan como símbolo de una emoción más grande.",
    watchOut:
      "Cuida la línea de tiempo y el punto de vista: es fácil mezclar el 'antes' y el 'ahora', o mezclar quién siente qué, y que quien escucha se pierda.",
  },
  ST: {
    code: "ST",
    name: "Estructural",
    description:
      "Combinas sensación y pensamiento: escribes con distancia objetiva, apoyado en hechos y en una estructura clara de principio, medio y final.",
    lyricTendency:
      "Tus letras suelen tener humor seco, observación filosa de la realidad, y una construcción muy prolija.",
    watchOut:
      "Cuida no quedarte solo en el reporte de hechos: pregúntate qué significan esos hechos y qué quieres que la audiencia sienta al final.",
  },
  SF: {
    code: "SF",
    name: "Narrativo",
    description:
      "Combinas sensación y sentimiento: es el estilo más volcado a contar historias creíbles, con personajes y escenas reconocibles.",
    lyricTendency:
      "Tus letras funcionan muy bien como 'canción-historia', y suelen conectar con valores compartidos o momentos cotidianos.",
    watchOut:
      "Cuida no sobre-dramatizar ni caer en el estereotipo emocional; piensa qué haría y diría una persona real en esa situación, no lo 'esperable'.",
  },
};

export const BRAIN_TECHNIQUES = {
  right: {
    title: "Para activar el hemisferio derecho (lo intuitivo)",
    items: [
      { name: "Lluvia de ideas", desc: "Anota todo lo que se te ocurra sobre el tema, sin filtrar ni juzgar nada todavía." },
      { name: "Escritura libre", desc: "Escribe sin parar durante 2-3 minutos sobre el tema, sin levantar el lápiz ni corregir." },
      { name: "Caminar o moverte", desc: "El movimiento físico suele destrabar ideas que la quietud no logra sacar." },
      { name: "Dormir sobre la idea", desc: "Deja el problema planteado antes de dormir; muchas soluciones aparecen al despertar." },
    ],
  },
  left: {
    title: "Para activar el hemisferio izquierdo (lo estructural)",
    items: [
      { name: "Ordenar por partes", desc: "Separa la canción en verso / estribillo / puente y revisa cada parte por separado." },
      { name: "Leer sin la música", desc: "Lee la letra en voz alta sin cantarla, para juzgarla por lo que dice, no por cómo suena." },
      { name: "Hacer una lista de chequeo", desc: "¿Tiene sentido la historia? ¿Hay una idea por verso? ¿El final cierra algo que abrió el principio?" },
      { name: "Poner un límite de tiempo", desc: "Decide de antemano cuánto tiempo le vas a dedicar a una decisión, para no darle vueltas de más." },
    ],
  },
};
