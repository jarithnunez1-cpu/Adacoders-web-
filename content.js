/* ============================================================
   EDITA SOLO ESTE ARCHIVO para cambiar textos, links y datos.
   - Si un link queda vacío ("") su botón se oculta solo.
   - Para ocultar una sección, déjala vacía: [] o activa:false
   ============================================================ */
window.SITE = {
  nombre: "Ada Coders",
  badge: "Comunidad tech abierta para todos",
  titulo: "Código, comunidad y",
  tituloResaltado: "futuro",
  descripcion: "Aprende, construye y conecta con ingenieros, estudiantes y creadores. Ada Coders está de vuelta, y empezamos con una hackatón.",

  enlaces: {
    whatsapp: "",   // https://chat.whatsapp.com/XXXX
    discord: "",    // https://discord.gg/XXXX
    instagram: "",
    tiktok: "",
    linkedin: "",
    correo: ""      // hola@adacoders.com
  },

  estadisticas: [
    { n: "+100", t: "Contactos de la red" },
    { n: "1", t: "Hackatón en camino" },
    { n: "∞", t: "Ganas de aprender" }
  ],

  quienesSomos: "Ada Coders es una comunidad tech donde cualquier persona con curiosidad por la tecnología tiene un lugar: desde quien escribe su primera línea de código hasta ingenieros con años de experiencia. Nos juntamos para aprender, construir proyectos y abrir oportunidades.",
  valores: ["Aprender haciendo", "Compartir conocimiento", "Diversidad e inclusión", "Construir en comunidad"],

  actividades: [
    { icono: "💡", titulo: "Talleres", texto: "Sesiones prácticas de programación, diseño y herramientas." },
    { icono: "🎤", titulo: "Charlas", texto: "Profesionales y otras comunidades comparten su experiencia." },
    { icono: "🚀", titulo: "Hackatones", texto: "Equipos que construyen soluciones reales en pocas horas." },
    { icono: "🤝", titulo: "Networking", texto: "Conoce gente, encuentra equipo y abre oportunidades." },
    { icono: "🧑‍🏫", titulo: "Mentorías", texto: "Guía de personas con más experiencia para crecer más rápido." },
    { icono: "📚", titulo: "Recursos", texto: "Rutas de estudio, tutoriales y proyectos para practicar." }
  ],

  hackaton: {
    activa: true,
    etiqueta: "Próximamente",
    titulo: "Primera",
    resaltado: "Hackatón Ada Coders",
    texto: "Nuestro gran evento de relanzamiento. Un día para construir, aprender y conocer a la comunidad.",
    fecha: "Por anunciar",
    lugar: "Por anunciar",
    formato: "1 día · Equipos de 3 a 4 personas",
    inscripcion: "",   // link del formulario de inscripción
    chips: ["⏱ 1 día", "👥 Equipos de 3–4", "🧑‍🏫 Mentores", "🏆 Premios"],
    temas: ["Educación", "Salud", "Comercio y emprendimiento", "Impacto social"],
    cronograma: [
      { hora: "08:00", act: "Registro y bienvenida" },
      { hora: "09:00", act: "Presentación del reto y formación de equipos" },
      { hora: "10:00", act: "¡Comienza el hacking!" },
      { hora: "13:00", act: "Almuerzo y mentorías" },
      { hora: "17:00", act: "Cierre de proyectos y pitch" },
      { hora: "18:30", act: "Premiación y networking" }
    ],
    premios: [
      { puesto: "1.º lugar", detalle: "Por definir" },
      { puesto: "2.º lugar", detalle: "Por definir" },
      { puesto: "3.º lugar", detalle: "Por definir" }
    ]
  },

  eventos: [
    { fecha: "Próximamente", titulo: "Lanzamiento de la comunidad", texto: "Reencuentro y presentación del nuevo equipo." },
    { fecha: "Próximamente", titulo: "Primer taller", texto: "Tema por definir según la encuesta a la comunidad." }
  ],

  equipo: [
    { nombre: "Yara", rol: "Presidenta", link: "" },
    { nombre: "Tu nombre aquí", rol: "Logística", link: "" },
    { nombre: "Tu nombre aquí", rol: "Comunicación", link: "" },
    { nombre: "Tu nombre aquí", rol: "Alianzas", link: "" }
  ],

  aliados: [],   // ["Universidad X", "Empresa Y"]  → la sección aparece sola

  faq: [
    { p: "¿Quién puede unirse?", r: "Cualquier persona interesada en tecnología, sin importar su nivel." },
    { p: "¿Tiene costo?", r: "Nuestras actividades son gratuitas, salvo que se indique lo contrario." },
    { p: "¿Necesito saber programar para la hackatón?", r: "No necesariamente: también buscamos diseño, ideas y gestión de proyectos." },
    { p: "¿Cómo me entero de los eventos?", r: "Únete a nuestro grupo y sigue nuestras redes sociales." }
  ]
};
