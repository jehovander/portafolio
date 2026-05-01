export type Lang = "es" | "en";

export const profile = {
  name: "Jehovander Delgado",
  role: { es: "AI Developer & Full Stack Developer", en: "AI Developer & Full Stack Developer" },
  location: { es: "Venezuela", en: "Venezuela" },
  email: "jehovander@gmail.com",
  whatsapp: "+584245678762",
  whatsappDisplay: "+58 424 567 8762",
  github: "https://github.com/jehovander",
  linkedin: "https://www.linkedin.com/in/jehovander-delgado-1147b7154/",
  twitter: "https://twitter.com/jehovander",
  instagram: "https://instagram.com/jehovander",
  avatar: "/jeho3.png",
};

export const ui = {
  nav: {
    home: { es: "Inicio", en: "Home" },
    about: { es: "Sobre mí", en: "About" },
    skills: { es: "Skills", en: "Skills" },
    projects: { es: "Proyectos", en: "Projects" },
    experience: { es: "Experiencia", en: "Experience" },
    chat: { es: "Asistente IA", en: "AI Assistant" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    badge: { es: "Disponible para freelance", en: "Available for freelance" },
    titleA: { es: "Construyo software", en: "I build software" },
    titleB: { es: "potenciado con IA", en: "powered by AI" },
    description: {
      es: "AI Developer & Full Stack. Diseño y construyo aplicaciones web y agentes inteligentes que resuelven problemas reales — integrando modelos como Claude, GPT y Grok.",
      en: "AI Developer & Full Stack. I design and build web applications and intelligent agents that solve real problems — integrating models like Claude, GPT and Grok.",
    },
    ctaPrimary: { es: "Hablar con mi asistente IA", en: "Talk to my AI assistant" },
    ctaSecondary: { es: "Ver proyectos", en: "See projects" },
  },
  about: {
    title: { es: "Sobre mí", en: "About me" },
    p1: {
      es: "Soy desarrollador full stack con foco en integración de IA. Empecé como Fullstack en el bootcamp Henry, donde después fui Teaching Assistant ayudando a otros estudiantes a dominar React, Node y bases de datos.",
      en: "I'm a full stack developer focused on AI integration. I started as Fullstack at Henry bootcamp, where I later became Teaching Assistant helping other students master React, Node and databases.",
    },
    p2: {
      es: "Hoy combino desarrollo web moderno con APIs de IA (Claude, OpenAI, Grok) para construir productos que automatizan tareas, atienden clientes y aceleran negocios. Si necesitas un chatbot, una app full stack o un agente custom — hablemos.",
      en: "Today I combine modern web development with AI APIs (Claude, OpenAI, Grok) to build products that automate tasks, attend customers and accelerate businesses. If you need a chatbot, a full stack app or a custom agent — let's talk.",
    },
  },
  skills: {
    title: { es: "Stack técnico", en: "Tech stack" },
    subtitle: { es: "Tecnologías que uso día a día", en: "Tech I use day to day" },
    groups: {
      ai: { es: "IA & APIs", en: "AI & APIs" },
      languages: { es: "Lenguajes", en: "Languages" },
      frontend: { es: "Frontend", en: "Frontend" },
      backend: { es: "Backend", en: "Backend" },
      database: { es: "Bases de datos", en: "Databases" },
      tools: { es: "Herramientas", en: "Tools" },
    },
  },
  projects: {
    title: { es: "Proyectos", en: "Projects" },
    subtitle: { es: "Selección de trabajos recientes", en: "Selection of recent work" },
    confidential: { es: "Confidencial", en: "Confidential" },
    viewLive: { es: "Ver en vivo", en: "View live" },
    viewCode: { es: "Ver código", en: "View code" },
  },
  experience: {
    title: { es: "Experiencia", en: "Experience" },
    subtitle: { es: "Mi recorrido profesional", en: "My professional journey" },
  },
  chat: {
    title: { es: "Habla con mi asistente IA", en: "Talk to my AI assistant" },
    subtitle: {
      es: "Pregúntale lo que quieras sobre mí: skills, proyectos, tarifas, disponibilidad. Responde en español o inglés.",
      en: "Ask anything about me: skills, projects, rates, availability. Replies in English or Spanish.",
    },
    placeholder: { es: "Escribe tu pregunta…", en: "Type your question…" },
    send: { es: "Enviar", en: "Send" },
    poweredBy: { es: "Potenciado por Groq + Llama 3.3", en: "Powered by Groq + Llama 3.3" },
    welcome: {
      es: "¡Hola! 👋 Soy el asistente IA de Jehovander. Puedo contarte sobre sus proyectos, skills, tarifas y cómo contactarlo. ¿Qué quieres saber?",
      en: "Hi! 👋 I'm Jehovander's AI assistant. I can tell you about his projects, skills, rates and how to contact him. What would you like to know?",
    },
    suggestions: {
      es: ["¿Qué proyectos has hecho?", "¿Cuánto cobras?", "¿Qué tecnologías usas?", "¿Cómo te contacto?"],
      en: ["What projects have you done?", "How much do you charge?", "What technologies do you use?", "How can I contact you?"],
    },
    error: {
      es: "Algo salió mal. Inténtalo de nuevo o escríbele directo a jehovander@gmail.com",
      en: "Something went wrong. Try again or email jehovander@gmail.com directly",
    },
  },
  contact: {
    title: { es: "Hablemos", en: "Let's talk" },
    subtitle: {
      es: "¿Tienes un proyecto en mente? Escríbeme.",
      en: "Got a project in mind? Hit me up.",
    },
    emailLabel: { es: "Correo", en: "Email" },
    whatsappLabel: { es: "WhatsApp", en: "WhatsApp" },
    socialsLabel: { es: "Redes", en: "Socials" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados", en: "All rights reserved" },
    builtWith: { es: "Construido con React, Tailwind y Groq", en: "Built with React, Tailwind and Groq" },
  },
};

export const skills = {
  ai: ["Claude API", "OpenAI API", "Grok (xAI)", "Anthropic SDK", "OpenAI SDK"],
  languages: ["TypeScript", "JavaScript", "Python", "MQL5", "PHP", "HTML", "CSS"],
  frontend: ["React", "React Native", "Next.js", "Expo", "Redux", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Flask", "Socket.IO", "REST APIs", "Serverless"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Drizzle ORM", "Sequelize"],
  tools: ["Git", "GitHub", "Vercel", "Twilio", "Postman", "Vite", "MetaTrader 5"],
};

export type ProjectStatus = "live" | "private" | "freelance";

export interface Project {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  tags: string[];
  status: ProjectStatus;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "ai-chatbot",
    title: {
      es: "Chatbot IA para negocios",
      en: "AI Chatbot for businesses",
    },
    description: {
      es: "Chatbot personalizable cliente por cliente con la API de Claude/OpenAI. Atiende soporte, vende, agenda y se entrena con la información del negocio. Listo para integrarse vía web o WhatsApp.",
      en: "Per-client customizable chatbot using Claude/OpenAI APIs. Handles support, sells, schedules and trains on the business's info. Ready to integrate via web or WhatsApp.",
    },
    tags: ["TypeScript", "Claude API", "OpenAI", "Node.js", "React"],
    status: "private",
    featured: true,
  },
  {
    slug: "flashtrade-pro",
    title: {
      es: "FlashTrade Pro V2.6 — Expert Advisor MT5",
      en: "FlashTrade Pro V2.6 — MT5 Expert Advisor",
    },
    description: {
      es: "Expert Advisor profesional para MetaTrader 5. Ejecución semi-automática con gestión inteligente de riesgo, lotaje calculado por SL en pantalla, TPs parciales (25/50/75/100%), Break Even automático y panel UI custom arrastrable. En camino a MQL5 Marketplace.",
      en: "Professional Expert Advisor for MetaTrader 5. Semi-automated execution with smart risk management, lot size calculated from on-chart SL, partial TPs (25/50/75/100%), automatic Break Even and custom draggable UI panel. On its way to MQL5 Marketplace.",
    },
    tags: ["MQL5", "MetaTrader 5", "Algorithmic Trading", "Risk Management", "Fintech"],
    status: "private",
    featured: true,
  },
  {
    slug: "flashtrade-licensing-bot",
    title: {
      es: "FlashTrade Licensing Bot — Telegram",
      en: "FlashTrade Licensing Bot — Telegram",
    },
    description: {
      es: "Sistema de monetización para FlashTrade Pro: bot de Telegram que gestiona licencias del Expert Advisor con duraciones flexibles (24h, 1w, 30d, 1m, 3m, permanente). Backend en Google Sheets vía gspread, comandos administrativos protegidos, validación cruzada con cuentas MT5 y notificaciones automáticas de expiración.",
      en: "Monetization system for FlashTrade Pro: Telegram bot that manages Expert Advisor licenses with flexible durations (24h, 1w, 30d, 1m, 3m, permanent). Google Sheets backend via gspread, protected admin commands, cross-validation with MT5 accounts and automatic expiration notifications.",
    },
    tags: ["Python", "Telegram Bot", "Google Sheets", "gspread", "Licensing", "Monetization"],
    status: "private",
    featured: true,
  },
  {
    slug: "ridehailing-stealth",
    title: {
      es: "Ride-hailing Platform — Stealth Mode",
      en: "Ride-hailing Platform — Stealth Mode",
    },
    description: {
      es: "Plataforma de transporte tipo Uber en desarrollo activo. App móvil completa (pasajero + conductor) con matching GPS en tiempo real, backend con WebSockets, autenticación OTP por SMS, sistema antifraude, precios dinámicos con conversión multi-moneda, JWT con refresh tokens y panel admin. Auditada con pentest interno. En desarrollo bajo NDA.",
      en: "Ride-hailing platform in active development. Full mobile app (rider + driver) with real-time GPS matching, WebSocket backend, OTP SMS auth, anti-fraud system, dynamic pricing with multi-currency conversion, JWT refresh tokens and admin panel. Internal pentest audited. In development under NDA.",
    },
    tags: ["React Native", "Expo", "Node.js", "Socket.IO", "MongoDB", "Twilio", "JWT", "Anti-fraud"],
    status: "private",
    featured: true,
  },
  {
    slug: "sportsbook-nda",
    title: {
      es: "Sportsbook Multi-deporte — Cliente bajo NDA",
      en: "Multi-sport Sportsbook — Client under NDA",
    },
    description: {
      es: "Plataforma de apuestas deportivas en construcción para cliente privado. 11+ deportes integrados (Fútbol, Basket, MMA, F1, NFL, hípica y más), KYC, sistema de bonos y promociones, juego responsable (RG), flujos de retiro y panel admin. Stack moderno full-TypeScript.",
      en: "Sports betting platform under construction for private client. 11+ sports integrated (Football, Basketball, MMA, F1, NFL, horse racing and more), KYC, bonus and promotions system, Responsible Gaming, withdrawal flows and admin panel. Modern full-TypeScript stack.",
    },
    tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Drizzle ORM", "PostgreSQL", "KYC", "i18n"],
    status: "private",
    featured: true,
  },
  {
    slug: "legaltech-whatsapp",
    title: {
      es: "Agente IA WhatsApp — Legal Tech (NDA)",
      en: "WhatsApp AI Agent — Legal Tech (NDA)",
    },
    description: {
      es: "Sistema multi-agente para bufete de abogados que automatiza atención al cliente vía WhatsApp. Arquitectura dual: agente 'Secretario Virtual' que califica casos y agenda, y agente 'Abogado IA' que se activa contextualmente solo para el dueño del bufete. Transferencia inteligente entre agentes por palabras clave, skills modulares por especialidad, historial persistente y asistencia en trámites legales documentales. Cliente bajo NDA.",
      en: "Multi-agent system for a law firm that automates client attention via WhatsApp. Dual architecture: 'Virtual Secretary' agent that qualifies cases and schedules, plus 'AI Lawyer' agent that activates contextually only for the firm's owner. Smart agent handoff via keywords, modular skills per specialty, persistent history and assistance with legal document procedures. Client under NDA.",
    },
    tags: ["Node.js", "whatsapp-web.js", "Groq", "Multi-agent", "Legal Tech", "AI Agents"],
    status: "private",
    featured: true,
  },
  {
    slug: "bothuntercito",
    title: { es: "BotHuntercito — Bot Multifuncional Discord", en: "BotHuntercito — Discord Multi-purpose Bot" },
    description: {
      es: "Bot freelance multifuncional para servidores Discord. Sistema de tickets, gestión de staff y roles, respuestas automáticas, logs persistentes y scraping en tiempo real de precios con Playwright + BeautifulSoup (browser real, no API). Arquitectura modular con 5 cogs independientes y base de datos integrada.",
      en: "Multi-purpose freelance bot for Discord servers. Ticket system, staff and role management, auto-responses, persistent logs and real-time price scraping with Playwright + BeautifulSoup (real browser, not API). Modular architecture with 5 independent cogs and integrated database.",
    },
    tags: ["Python", "discord.py", "Playwright", "BeautifulSoup", "Web Scraping", "Cogs"],
    status: "freelance",
    featured: true,
  },
  {
    slug: "ai-portfolio",
    title: {
      es: "AI-Powered Portfolio (este sitio)",
      en: "AI-Powered Portfolio (this site)",
    },
    description: {
      es: "Este mismo portafolio. React + TypeScript + Tailwind v4 con asistente IA integrado vía Vercel Serverless Functions y Groq + Llama 3.3. Bilingüe ES/EN, animaciones con Framer Motion, tema oscuro y prompt engineering con reglas de NDA. Código abierto — pruébalo y revísalo.",
      en: "This very portfolio. React + TypeScript + Tailwind v4 with AI assistant integrated via Vercel Serverless Functions and Groq + Llama 3.3. Bilingual ES/EN, Framer Motion animations, dark theme and prompt engineering with NDA rules. Open source — try it and review it.",
    },
    tags: ["Vite", "React", "TypeScript", "Tailwind v4", "Framer Motion", "Vercel Serverless", "Groq", "Llama 3.3"],
    status: "live",
    liveUrl: "https://jehovander.vercel.app",
    codeUrl: "https://github.com/jehovander/portafolio",
    featured: true,
  },
];

export interface ExperienceItem {
  role: { es: string; en: string };
  org: { es: string; en: string };
  period: string;
  description: { es: string; en: string };
  type: "work" | "education";
}

export const experience: ExperienceItem[] = [
  {
    role: { es: "Bot Multifuncional Discord (Freelance)", en: "Discord Multi-purpose Bot (Freelance)" },
    org: { es: "Cliente privado", en: "Private client" },
    period: "Jul 2025",
    description: {
      es: "Bot completo con tickets, ventas, embeds, permisos por rol, transcripciones y modularización con cogs.",
      en: "Full bot with tickets, sales, embeds, role permissions, transcripts and cog modularization.",
    },
    type: "work",
  },
  {
    role: { es: "Full-Stack Teaching Assistant", en: "Full-Stack Teaching Assistant" },
    org: { es: "Bootcamp Henry", en: "Henry Bootcamp" },
    period: "2022 — 2023",
    description: {
      es: "Asistente de enseñanza ayudando a estudiantes de Full-Stack en React, Node, PostgreSQL y MongoDB. Mentorías, code reviews y resolución de bugs.",
      en: "Teaching assistant helping Full-Stack students with React, Node, PostgreSQL and MongoDB. Mentoring, code reviews and bug solving.",
    },
    type: "work",
  },
  {
    role: { es: "Desarrollador Fullstack — Proyecto final", en: "Fullstack Developer — Final project" },
    org: { es: "Bootcamp Henry", en: "Henry Bootcamp" },
    period: "2022 — 2023",
    description: {
      es: "Proyecto final integrando frontend en React, backend en Node + Express y base de datos PostgreSQL. Trabajo en equipo con metodología ágil.",
      en: "Final project integrating React frontend, Node + Express backend and PostgreSQL database. Team work with agile methodology.",
    },
    type: "work",
  },
  {
    role: { es: "Bootcamp Fullstack Development", en: "Fullstack Development Bootcamp" },
    org: { es: "Henry", en: "Henry" },
    period: "2022 — 2023",
    description: {
      es: "Formación intensiva en JavaScript, React, Redux, Node.js, Express, PostgreSQL y MongoDB.",
      en: "Intensive training in JavaScript, React, Redux, Node.js, Express, PostgreSQL and MongoDB.",
    },
    type: "education",
  },
];
