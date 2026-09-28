// Todo el contenido editable del sitio vive acá: textos, links e imágenes.
// Los componentes solo se ocupan del diseño.

export const nav = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
  { label: "Sobre Nosotros", href: "/sobrenosotros" },
]

export const contact = {
  whatsapp: "112 287 8899",
  whatsappHref: "https://wa.me/5491122878899",
  email: "techomaxargentina@gmail.com",
  address: "Tucuman 900, Piso 4 F, 1049 CABA",
  mapsHref:
    "https://www.google.com/maps/place/Tucum%C3%A1n+900,+C1049AAR+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6013584,-58.3795221,17z",
}

export const cta = {
  title: "Pedí tu cotización ahora",
  text: "Contactate con nosotros y obtené tu cotización en tiempo record.",
  button: { label: "Contactanos", href: "/contacto" },
}

// ---------------------------------------------------------------- Home

export const home = {
  hero: {
    title: "Impermeabilización Profesional",
    text: "Venta y colocación de membranas asfálticas para casas y comercios.",
    primary: { label: "Contactanos", href: "/contacto" },
    secondary: { label: "Saber más", href: "/proyectos" },
    // Tarjetas del carrusel animado (se repiten en loop)
    ticker: [
      { src: "/images/hero/card-satisfaccion.png", alt: "Satisfacción 99%", w: 186, h: 189 },
      { src: "/images/hero/ingeniero.jpg", alt: "Ingeniero en obra", w: 211, h: 216 },
      { src: "/images/hero/card-clientes-corporativos.png", alt: "Clientes corporativos 75%", w: 174, h: 200 },
      { src: "/images/hero/card-reparaciones.jpg", alt: "Reparaciones en tiempo record", w: 244, h: 276 },
      { src: "/images/hero/tecnico-planos.jpg", alt: "Técnico con planos", w: 186, h: 206 },
      { src: "/images/hero/card-proyectos.png", alt: "Proyectos 500+", w: 147, h: 183 },
      { src: "/images/hero/membrana-colocacion.jpg", alt: "Colocación de membrana asfáltica", w: 211, h: 215 },
    ],
  },
  logos: {
    title: "Los preferidos de los mejores",
    items: [
      { src: "/images/logos/logo-1.svg", w: 103, h: 19 },
      { src: "/images/logos/logo-2.svg", w: 106, h: 20 },
      { src: "/images/logos/logo-3.svg", w: 87, h: 21 },
      { src: "/images/logos/logo-4.svg", w: 60, h: 15 },
      { src: "/images/logos/logo-5.svg", w: 30, h: 21 },
      { src: "/images/logos/logo-6.svg", w: 29, h: 31 },
      { src: "/images/logos/logo-7.svg", w: 116, h: 37 },
      { src: "/images/logos/logo-8.svg", w: 94, h: 23 },
    ],
  },
  intro: {
    tag: "COMO FUNCIONA",
    title: "Con experiencia certificada y profesional",
    text: "Nuestros técnicos tienen la capacitación en todos los tipos de sistemas de techo y están certificados para trabajar en sistemas de todos los fabricantes de techos garantizando nuestras obras por 10 años por escrito.",
  },
  service: {
    tag: "SERVICIOS",
    title: "Evaluación de Nuevos Proyectos",
    text: "Si usted está construyendo desde cero o busca realizar una expansión, es muy importante seleccionar un contratista de techos que pueda ofrecer las mejores condiciones para usted. La colocación del tejado es una parte fundamental de su programa de construcción y es un trabajo que se debe realizar profesionalmente, de forma segura, a tiempo y dentro del presupuesto.",
    button: { label: "Ver Servicios", href: "/servicios" },
    image: { src: "/images/servicios/evaluacion-edificios.png", alt: "Edificios corporativos" },
  },
  features: {
    tag: "PORQUE NOSOTROS",
    title: "Marcamos la Diferencia",
    text: "Características que Marcan la Diferencia",
    items: [
      {
        title: "Experiencia y Profesionalismo",
        text: "Contamos con un equipo de expertos con amplia experiencia en la instalación de membranas asfálticas, garantizando un servicio de alta calidad.",
      },
      {
        title: "Materiales de Alta Calidad",
        text: "Utilizamos solo los mejores materiales en nuestras instalaciones, asegurando una impermeabilización duradera y efectiva.",
      },
      {
        title: "Soluciones Personalizadas",
        text: "Ofrecemos planes de instalación adaptados a las necesidades específicas de cada negocio, proporcionando un enfoque a medida.",
      },
      {
        title: "Rapidez y Eficiencia",
        text: "Nos comprometemos a realizar las instalaciones de manera rápida y eficiente, minimizando cualquier interrupción en tus operaciones comerciales.",
      },
      {
        title: "Innovación y Tecnología",
        text: "Empleamos técnicas avanzadas y tecnologías modernas para asegurar que cada instalación sea precisa y efectiva.",
      },
      {
        title: "Atención al Cliente",
        text: "Proporcionamos un servicio al cliente excepcional, con soporte continuo antes, durante y después de la instalación.",
      },
    ],
  },
  metrics: {
    tag: "METRICAS",
    title: "Los números hablan por sí solos",
    items: [
      { value: "75%", label: "Clientes corporativos" },
      { value: "500+", label: "Clientes satisfechos" },
      { value: "525+", label: "Obras realizadas" },
    ],
  },
  testimonials: {
    tag: "TESTIMONIOS",
    title: "Escuchá lo que dicen nuestros clientes",
    items: [
      {
        quote:
          "TechoMax hizo un trabajo excelente en la impermeabilización de nuestro techo. Profesionalismo y eficacia garantizados.",
        author: "Laura Gómez, AFIP",
        avatar: "/images/testimonios/laura-gomez.jpg",
        color: "var(--c-lilac)",
      },
      {
        quote:
          "Instalación rápida y efectiva por parte de TechoMax. Ahora nuestro techo es completamente impermeable.",
        author: "Sofía Morales, DirecTV",
        avatar: "/images/testimonios/sofia-morales.jpg",
        color: "var(--c-lemon)",
      },
    ],
  },
}

// ----------------------------------------------------------- Servicios

export const servicios = {
  hero: {
    title: "Todo lo que necesitas para la Protección de tu Techo",
    // TODO: texto de plantilla, reemplazar por copy real
    text: "Hirevision is utilized by numerous businesses, institutions, and recruiters to significantly enhance their screening and recruitment procedures.",
  },
  items: [
    {
      tag: "SERVICIOS",
      title: "Reparaciones",
      text: "La filtración del agua puede poner en peligro la estructura interna de un edificio, destruir inventario y equipo, y puede crear superficies resbaladizas, poniendo a las personas en riesgo de lesión. Usted necesita un profesional que puede arreglar su problema de techado de la forma más rápida económica y segura.",
      image: { src: "/images/servicios/reparaciones.png", alt: "Reparaciones de techos" },
    },
    {
      tag: "SERVICIOS",
      title: "Evaluación de Nuevos Proyectos",
      text: "Si usted está construyendo desde cero o busca realizar una expansión, es muy importante seleccionar un contratista de techos que pueda ofrecer las mejores condiciones para usted. La colocación del tejado es una parte fundamental de su programa de construcción y es un trabajo que se debe realizar profesionalmente, de forma segura, a tiempo y dentro del presupuesto.",
      image: { src: "/images/servicios/evaluacion-nuevos-proyectos.png", alt: "Evaluación de nuevos proyectos" },
    },
    {
      tag: "SERVICIOS",
      title: "Mantenimiento Programado",
      // TODO: texto de plantilla, reemplazar por copy real
      text: "Let AI analyze and rank applicants based on qualifications, experience, and skills, ensuring you focus on the most promising candidates first.",
      image: { src: "/images/servicios/mantenimiento.png", alt: "Mantenimiento programado" },
    },
    {
      tag: "SERVICIOS",
      title: "Soluciones Ambientales",
      text: 'Los techos verdes, que combinan suelo y vegetación, están en auge debido a sus beneficios ambientales y fiscales. Ayudan a reducir aguas pluviales, absorben contaminantes, mitigan el efecto "isla de calor", mejoran el aislamiento y proporcionan hábitats para la fauna. Además, ofrecemos soluciones fotovoltaicas, incluyendo diseño, instalación y mantenimiento de sistemas solares, para reducir costos energéticos y promover la sostenibilidad.',
      image: { src: "/images/servicios/soluciones-ambientales.png", alt: "Techo verde" },
    },
    {
      tag: "SERVICIOS",
      title: "Informes",
      text: "Nuestros técnicos capacitados examinan el sistema de techo exterior, al tiempo que observa las condiciones de los paneles de pared, separadores de área, parapetos y penetraciones del techo y la documentación de las condiciones de control aplicables en el futuro.",
      image: { src: "/images/servicios/informes.png", alt: "Informes técnicos" },
    },
  ],
  button: { label: "Ver Servicios", href: "/servicios" },
}

// ----------------------------------------------------------- Proyectos

export const proyectos = {
  hero: {
    tag: "PROYECTOS",
    title: "Conocé nuestro trabajo",
    text: "Listado de trabajos hechos por TechoMax",
  },
  featured: [
    {
      title: "Tinglados Industriales",
      text: "La impermeabilización de tinglados industriales es crucial para proteger equipos y mercancías. Utilizamos membranas asfálticas de alta resistencia para asegurar una protección duradera contra filtraciones y condiciones climáticas adversas.",
      image: "/images/proyectos/tinglados-industriales.png",
    },
    {
      title: "Grandes Superficies",
      text: "Nuestro equipo se especializa en proyectos de gran escala, asegurando eficiencia y calidad en cada instalación.",
      image: "/images/proyectos/grandes-superficies.png",
    },
  ],
  grid: [
    {
      title: "Losas Transitables",
      text: "Implementamos sistemas robustos que no solo protegen contra la humedad, sino que también ofrecen una superficie segura y duradera para el tránsito constante.",
      image: "/images/proyectos/losas-transitables.jpg",
    },
    {
      title: "Solados Continuos",
      text: "Los solados continuos necesitan una impermeabilización que evite filtraciones sin interrupciones en la superficie.",
      image: "/images/proyectos/solados-continuos.jpg",
    },
  ],
}

// ------------------------------------------------------------ Contacto

export const contacto = {
  hero: {
    tag: "CONTACTO",
    title: "Escribinos tu mensaje",
    text: "¿Tenes dudas sobre tu proyecto? Envianos un mensaje explicándonos como podemos ayudarte",
  },
  form: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    submit: "Enviar mensaje",
    sending: "Enviando…",
    success: "¡Gracias! Te respondemos a la brevedad.",
    error: "No se pudo enviar. Probá de nuevo o escribinos por WhatsApp.",
  },
}

// -------------------------------------------------------- Sobre Nosotros

export const sobreNosotros = {
  hero: {
    tag: "CONOCENOS",
    title: "Sobre Nosotros",
    text: "TechoMax Argentina es el contratista de impermeabilización para techos más importante de Argentina, con operaciones tanto en Capital y GBA así como en el interior del país. Nuestro compromiso inquebrantable con la calidad, experiencia y profesionalismo es lo que nos hace el líder del sector. La instalación, la reparación, la respuesta ante daños en casos de emergencia, así como las opciones de sustentabilidad que usted o su empresa necesiten. Le ofrecemos la capacidad de respuesta de un contratista de techos de su zona respaldada por los recursos financieros, el tamaño y la estabilidad que necesita de una solución para techos comerciales de gran envergadura.",
  },
  image: { src: "/images/sobre-nosotros.jpg", alt: "Edificio corporativo con fachada vidriada" },
}
