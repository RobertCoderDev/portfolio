// Single source of truth for portfolio content.
// Update copy, experience, stack and projects here — components only render this data.

export const profile = {
  name: "Roberto Vázquez",
  role: "Technical Project Manager & AI Solutions Architect",
  handle: "@RobertCoder",
  tagline:
    "Diseño y lidero productos de IA de extremo a extremo. En 12 años pasé de resolver problemas de negocios locales a construir plataformas de nivel internacional, premiadas y en uso por empresas como Telcel.",
  about:
    "Llevo 12 años construyendo software. Empecé resolviendo problemas para negocios locales y nunca dejé de hacerlo. Hoy, como Project Manager en Itelisoft, dirijo un equipo y la arquitectura detrás de plataformas de IA como Ozaru One, reconocida en los GESA Awards. También me gusta crear desde cero: Prisma, un motor de RAG híbrido, empezó como una idea y hoy es un producto en producción. Doce años después lo tengo claro: el mejor software es el que se usa sin pensar, porque simplemente funciona.",
  location: "México",
  email: "roberto@itelisoft.mx",
  cv: "/CV.pdf",
  photo: "/yoNew.jpg",
} as const;

export const socials = {
  github: "https://github.com/RobertCoderDev",
  x: "https://twitter.com/robertcoderdev",
  instagram: "https://www.instagram.com/robertcoderdev",
} as const;

export type Metric = {
  value: string;
  label: string;
};

export const metrics: Metric[] = [
  { value: "12", label: "años creando software" },
  { value: "2", label: "plataformas de IA en producción" },
  { value: "GESA '25", label: "premio internacional" },
  { value: "SOC 2", label: "seguridad enterprise" },
];

// Marcas enterprise con las que se ha trabajado (vía Ozaru One).
export const clients: string[] = ["Telcel", "Nadro", "Lamosa", "Citrofrut"];

export type ExperienceItem = {
  year: string;
  role: string;
  org: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    year: "2014",
    role: "Desarrollador Freelance",
    org: "Negocios locales",
    description:
      "Una década resolviendo problemáticas reales: sistemas de gestión, apps y soluciones de software a medida para empresas locales.",
  },
  {
    year: "2024",
    role: "Desarrollador → Project Manager",
    org: "Itelisoft",
    description:
      "Entré como desarrollador y ascendí a Project Manager en poco tiempo. Hoy lidero un equipo que diseña y lleva productos de IA a producción a nivel internacional.",
  },
  {
    year: "2025",
    role: "Ozaru One, reconocido internacionalmente",
    org: "GESA Awards · Norteamérica",
    description:
      "El producto que arquitecturé y lideré gana el GESA Award, con clientes enterprise como Telcel, Nadro, Lamosa y Citrofrut.",
  },
  {
    year: "Hoy",
    role: "Creador de Prisma",
    org: "Motor RAG Híbrido",
    description:
      "Prisma empezó como una idea propia: un motor de RAG híbrido que llevé de concepto a una plataforma SaaS en producción.",
  },
];

export type StackCategory = {
  label: string;
  command: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    label: "DevOps & Infraestructura",
    command: "infra --ls",
    items: [
      "Docker Swarm",
      "EasyPanel",
      "VPS / Linux",
      "CI/CD Pipelines",
      "Datadog (Logs · APM)",
    ],
  },
  {
    label: "IA & Datos",
    command: "ai --orchestrate",
    items: [
      "Orquestación de LLMs (OpenAI · Anthropic · Gemini)",
      "n8n avanzado",
      "RAG / Pinecone",
      "Visión Artificial",
      "Bases de datos vectoriales",
    ],
  },
  {
    label: "Fullstack",
    command: "stack --core",
    items: [
      "Next.js (SSR/SSG)",
      "React",
      "Tailwind CSS",
      "Node.js / Express",
      "PostgreSQL / Supabase",
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
  badges?: string[];
  clients?: string[];
  image?: string;
  diagram?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Ozaru One",
    kind: "Plataforma Enterprise · AI Supervisor",
    role: "Project Manager & Arquitecto de la solución",
    summary:
      "AI Supervisor para frontline workers, operado vía WhatsApp y web. Empodera a managers operativos con asistencia, entrenamiento e insights en tiempo real.",
    highlights: [
      "Visión artificial para verificación de tareas: foto reportada contra referencia.",
      "Push de tareas, políticas e información crítica a los frontline workers en tiempo real.",
      "AI Copilot disponible 24/7 que responde según las políticas de cada empresa.",
      "Sincronización con Google Drive vía RAG (Pinecone) para consulta de documentos.",
    ],
    tags: ["WhatsApp API", "Computer Vision", "Pinecone RAG", "LLM", "Node.js"],
    badges: ["🏆 GESA Awards 2025", "SOC 2"],
    clients: ["Telcel", "Nadro", "Lamosa", "Citrofrut"],
    image: "/projects/ozaru.png",
    diagram: "/diagrams/ozaru-one.svg",
    href: "https://ozaru.io",
  },
  {
    name: "Prisma",
    kind: "Plataforma SaaS · Motor RAG Híbrido",
    role: "Idea original · Arquitectura · Liderazgo técnico",
    summary:
      "Mi idea hecha producto: nació como un motor de RAG híbrido y fue creciendo hasta la plataforma que es hoy. Convierte documentos (PDF, Excel, CSV) en un asistente de IA que responde con evidencia citada vía chat, WhatsApp y API, 24/7.",
    highlights: [
      "Motor de RAG híbrido: combina recuperación vectorial y semántica para respuestas precisas con evidencia real.",
      "De una idea propia a producción: concepto, arquitectura y escalado.",
      "Multi-tenant con aislamiento de datos a nivel organización.",
      "Generación automática de análisis, reportes y gráficas.",
      "Integración vía API con el CRM, ERP o sitio web del cliente.",
    ],
    tags: ["RAG Híbrido", "Vector DB", "LLM", "WhatsApp API", "Multi-tenant"],
    image: "/projects/prisma.png",
    href: "https://console.prismarag.com",
  },
];

export const nav = [
  { label: "Trayectoria", href: "#experience" },
  { label: "Proyectos", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contact" },
] as const;
