// Simula una base de datos con promesas y retardo.

export const categorias = [
  { id: "behavioral", nombre: "Behavioral Science" },
  { id: "analytics", nombre: "Data & Analytics" },
];

export const productos = [
  {
    id: "investigacion-comportamiento",
    titulo: "Investigacion del comportamiento",
    descripcion:
      "Analizamos decisiones de usuarios y consumidores y barreras clave con metodos cualitativos y cuantitativos.",
    nivel: "Servicio especializado",
    duracion: "Proyecto a medida",
    formato: "Consultoria + research",
    precio: 68000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "barreras-comportamiento",
    titulo: "Diagnostico de barreras",
    descripcion:
      "Mapeamos fricciones y sesgos cognitivos que limitan conversion, adherencia o retencion.",
    nivel: "Servicio especializado",
    duracion: "4 semanas",
    formato: "Consultoria",
    precio: 52000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "nudges",
    titulo: "Diseno de intervenciones (nudges)",
    descripcion:
      "Arquitectura de eleccion, incentivos y mensajes persuasivos para guiar decisiones clave.",
    nivel: "Servicio avanzado",
    duracion: "6 semanas",
    formato: "Consultoria + diseno",
    precio: 78000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "evaluacion-experimental",
    titulo: "Evaluacion experimental / A-B testing",
    descripcion:
      "Disenamos y ejecutamos experimentos controlados para medir impacto en conversion y engagement.",
    nivel: "Servicio profesional",
    duracion: "4 semanas",
    formato: "Consultoria + setup",
    precio: 49000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "psicologia-producto",
    titulo: "Psicologia aplicada a producto",
    descripcion:
      "UX basada en sesgos cognitivos, mensajes y arquitectura de eleccion para mejorar experiencia.",
    nivel: "Servicio profesional",
    duracion: "5 semanas",
    formato: "Consultoria",
    precio: 53000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "auditoria-conductual",
    titulo: "Auditoria conductual",
    descripcion:
      "Auditoria integral de journeys, procesos y comunicacion para detectar mejoras conductuales.",
    nivel: "Servicio ejecutivo",
    duracion: "3 semanas",
    formato: "Assessment",
    precio: 42000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "cambio-habitos",
    titulo: "Programas de cambio de habitos",
    descripcion:
      "Diseno de incentivos y recompensas para adherencia, salud financiera o bienestar.",
    nivel: "Servicio especializado",
    duracion: "8 semanas",
    formato: "Consultoria + piloto",
    precio: 64000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "behavioral-politicas",
    titulo: "Behavioral en politicas publicas",
    descripcion:
      "Intervenciones conductuales para programas publicos y cultura organizacional.",
    nivel: "Servicio especializado",
    duracion: "Proyecto a medida",
    formato: "Consultoria",
    precio: 72000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "behavioral-capacitacion",
    titulo: "Capacitacion en behavioral science",
    descripcion:
      "Talleres y formacion para equipos en diseno conductual, nudges y experimentacion.",
    nivel: "Formacion",
    duracion: "Programa segun equipo",
    formato: "Workshops en vivo",
    precio: 38000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "culture-behavior",
    titulo: "Cultura y riesgos conductuales",
    descripcion:
      "Identificamos riesgos conductuales en organizaciones y diseno de programas de mejora cultural.",
    nivel: "Servicio ejecutivo",
    duracion: "5 semanas",
    formato: "Consultoria",
    precio: 56000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "finanzas-conductual",
    titulo: "Productos financieros conductuales",
    descripcion:
      "Disenamos productos financieros aplicando economia conductual para decision y adherencia.",
    nivel: "Servicio especializado",
    duracion: "6 semanas",
    formato: "Consultoria",
    precio: 67000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "journey-decision",
    titulo: "Modelos de decision en journeys",
    descripcion:
      "Modelamos puntos criticos del journey del cliente para mejorar conversion y satisfaccion.",
    nivel: "Servicio profesional",
    duracion: "4 semanas",
    formato: "Consultoria",
    precio: 45000,
    categoria: "behavioral",
    stock: 10,
  },
  {
    id: "estrategia-datos",
    titulo: "Estrategia de datos y analitica",
    descripcion:
      "Definimos vision, roadmap y casos de uso prioritarios para capturar valor con datos.",
    nivel: "Servicio ejecutivo",
    duracion: "4 semanas",
    formato: "Consultoria",
    precio: 65000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "gobierno-datos",
    titulo: "Gobierno y calidad de datos",
    descripcion:
      "Politicas de calidad, catalogo, lineage y controles para decisiones confiables.",
    nivel: "Servicio especializado",
    duracion: "8 semanas",
    formato: "Consultoria",
    precio: 72000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "integracion-arquitectura",
    titulo: "Integracion y arquitectura analitica",
    descripcion:
      "Ingestion, orquestacion y arquitectura moderna con lakes/warehouses y pipelines robustos.",
    nivel: "Servicio avanzado",
    duracion: "Proyecto a medida",
    formato: "Consultoria + delivery",
    precio: 89000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "bi-reporting",
    titulo: "Automatizacion de BI y reporting",
    descripcion:
      "Implementacion de Power BI, Tableau o Looker; dashboards, alertas y KPI accionables.",
    nivel: "Servicio profesional",
    duracion: "6 semanas",
    formato: "Consultoria + capacitacion",
    precio: 58000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "modelos-analiticos",
    titulo: "Modelos estadisticos y predictivos",
    descripcion:
      "Analisis descriptivo, diagnostico y prescriptivo; ML para puntos criticos del journey.",
    nivel: "Servicio especializado",
    duracion: "8 semanas",
    formato: "Consultoria + acompanamiento",
    precio: 76000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "madurez-analitica",
    titulo: "Diagnostico de madurez analitica",
    descripcion:
      "Evaluacion integral de capacidades, KPIs, procesos y cultura de datos.",
    nivel: "Servicio ejecutivo",
    duracion: "3 semanas",
    formato: "Assessment",
    precio: 42000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "plataformas-datos",
    titulo: "Plataformas de datos",
    descripcion:
      "Implementacion de data lakes/warehouses y activacion de datos para analitica avanzada.",
    nivel: "Servicio avanzado",
    duracion: "Proyecto a medida",
    formato: "Consultoria + implementacion",
    precio: 98000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "marketing-analytics",
    titulo: "Analitica de marketing y ventas",
    descripcion:
      "Segmentacion, comportamiento de clientes y optimizacion de conversion con datos.",
    nivel: "Servicio profesional",
    duracion: "6 semanas",
    formato: "Consultoria",
    precio: 54000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "forecast-finanzas",
    titulo: "Analisis financiero y forecast",
    descripcion:
      "Modelos financieros, pronosticos y optimizacion de recursos basada en datos.",
    nivel: "Servicio profesional",
    duracion: "5 semanas",
    formato: "Consultoria",
    precio: 56000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "tiempo-real",
    titulo: "Analitica en tiempo real",
    descripcion:
      "Alertas, monitoreo y sistemas de decision en tiempo real para procesos criticos.",
    nivel: "Servicio avanzado",
    duracion: "Proyecto a medida",
    formato: "Consultoria + delivery",
    precio: 90000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "transformacion-digital",
    titulo: "Transformacion digital basada en datos",
    descripcion:
      "Consultoria integral para modernizar procesos, cultura y stack tecnologico.",
    nivel: "Servicio ejecutivo",
    duracion: "8 semanas",
    formato: "Consultoria",
    precio: 82000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "capacitacion-analytics",
    titulo: "Capacitacion en analitica y BI",
    descripcion:
      "Formacion en analitica, BI, cultura de datos y experimentacion para equipos internos.",
    nivel: "Formacion",
    duracion: "Programa segun equipo",
    formato: "Workshops en vivo",
    precio: 36000,
    categoria: "analytics",
    stock: 10,
  },
  {
    id: "soporte-operacional",
    titulo: "Soporte operacional de analitica",
    descripcion:
      "Equipo extendido para asegurar continuidad, calidad y mejoras continuas en analitica.",
    nivel: "Servicio profesional",
    duracion: "Retainer mensual",
    formato: "Soporte continuo",
    precio: 45000,
    categoria: "analytics",
    stock: 10,
  },
];

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Devuelve todos los productos luego de un breve retardo.
export const pedirProductos = async () => {
  await esperar(600);
  return productos;
};

// Filtra por categoria usando el parametro recibido desde la URL.
export const pedirProductosPorCategoria = async (idCategoria) => {
  await esperar(600);
  return productos.filter((producto) => producto.categoria === idCategoria);
};

// Busca un producto por id usando el parametro recibido desde la URL.
export const pedirProductoPorId = async (idItem) => {
  await esperar(600);
  const producto = productos.find(
    (productoEnLista) => productoEnLista.id === idItem
  );
  if (!producto) throw new Error("Producto no encontrado");
  return producto;
};
