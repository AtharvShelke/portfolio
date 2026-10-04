// ─────────────────────────────────────────────────────────────
// UNIFIED BUSINESS FRONTIER CONSTANTS & DATA MODELS
// ─────────────────────────────────────────────────────────────

export interface MetricItem {
  value: string;
  label: string;
  sub?: string;
}

export interface SolutionItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  stack: string[];
}

export interface FrameworkStep {
  step: string;
  phase: string;
  duration: string;
  title: string;
  description: string;
  outputs: string[];
}

export interface TechMatrixGroup {
  category: string;
  description: string;
  skills: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface EducationEntry {
  id: number;
  year: string;
  degree: string;
  institution: string;
  description: string;
}

export interface DemoCredentials {
  email: string;
  password: string;
  role?: string;
  note?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  tag: string;
  category: string;
  title: string;
  client: string;
  impact: string;
  description: string;
  fullDescription: string;
  tech: string[];
  granularTech: string[];
  image: string;
  width?: number;
  height?: number;
  slug?: string;
  link: string;
  github?: string;
  architectureNotes?: string;
  schemaDecisions?: string;
  metrics: ProjectMetric[];
  challenges?: string;
  demoCredentials?: DemoCredentials | null;
  featured?: boolean;
}

export interface ExperienceEntry {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  context?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export const METRICS: MetricItem[] = [
  { value: "4+", label: "Enterprise Systems Shipped", sub: "100% active in production" },
  { value: "99.9%", label: "System Reliability SLA", sub: "Zero unhandled downtime" },
  { value: "100ms", label: "P95 Query & Load Latency", sub: "Edge-optimized architecture" },
  { value: "100%", label: "On-Time Milestone Delivery", sub: "Strict sprint-based cadence" },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "Enterprise Core",
    title: "Custom ERP & Business Platforms",
    tagline: "Centralize complex operations into bulletproof operational dashboards.",
    description: "Multi-warehouse inventory systems, role-based access management, supplier purchase orders, automated invoice generation, and real-time operational analytics built for high-throughput daily use.",
    deliverables: ["Role-Based Access Control (RBAC)", "Multi-Warehouse Inventory Control", "Automated Invoicing & GST Pipelines", "Real-Time Transaction Logging"],
    stack: ["Next.js 15/16", "PostgreSQL", "Prisma ORM", "Radix UI", "TanStack Table"],
  },
  {
    id: "02",
    badge: "Full-Lifecycle",
    title: "Full-Stack Product Engineering",
    tagline: "From architectural blueprint to production-grade web applications.",
    description: "End-to-end web products engineered with strict TypeScript typing, responsive modern interfaces, reliable database schemas, and resilient payment gateway integrations.",
    deliverables: ["End-to-End Type Safety", "Razorpay / Stripe Payment Integration", "WhatsApp & Automated Email Alerts", "High-Performance REST & Server Actions"],
    stack: ["React 19", "Next.js App Router", "TypeScript", "Tailwind CSS v4", "Zod"],
  },
  {
    id: "03",
    badge: "Next-Gen AI",
    title: "AI Workflows & LLM Automation",
    tagline: "Operationalize generative AI directly inside client business processes.",
    description: "Custom AI protocol generation, biometric calculations, automated document extraction, and structured JSON output pipelines powered by Google Gemini and OpenAI SDKs.",
    deliverables: ["Structured Schema Validation (Zod)", "Low-Latency Prompt Architecture", "Automated Document Processing", "Context-Aware Agentic Workflows"],
    stack: ["Google Gemini AI", "OpenAI SDK", "LangChain / AI SDK", "Vector DBs"],
  },
  {
    id: "04",
    badge: "High Impact",
    title: "Design Systems & High-Velocity UI",
    tagline: "Turn design intent into high-converting, 60fps web experiences.",
    description: "Custom Figma-to-code design systems, kinetic micro-interactions, responsive fluid typography, and accessible component architectures that build immediate consumer trust.",
    deliverables: ["Framer Motion Scroll Animations", "Production-Ready Design Tokens", "Lighthouse 95+ Core Web Vitals", "WCAG 2.1 AA Accessibility"],
    stack: ["Framer Motion", "Tailwind CSS", "Figma", "Radix UI", "CSS Modules"],
  },
];

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    step: "01",
    phase: "Architecture & Discovery",
    duration: "Sprint 1",
    title: "System Blueprint & Threat Modeling",
    description: "We map out core business requirements, database schemas, API contracts, RBAC hierarchies, and integration dependencies before writing a single line of production code.",
    outputs: ["ERD Schemas & DB Architecture", "API Specifications", "Security & Auth Blueprint", "Interactive Low-Fi Wireframe"],
  },
  {
    step: "02",
    phase: "Design System & Prototyping",
    duration: "Sprint 2",
    title: "High-Fidelity Interface Systems",
    description: "Translating brand strategy into high-conversion design tokens, responsive layouts, micro-animations, and verified UX flows designed for frictionless daily operations.",
    outputs: ["Figma Production Design System", "Component State Matrix", "Micro-Interaction Blueprints", "Client Clickthrough Demo"],
  },
  {
    step: "03",
    phase: "Scalable Engineering",
    duration: "Sprint 3-4",
    title: "High-Concurrency Development",
    description: "Developing with Next.js 16, React 19, Prisma ORM, PostgreSQL, and strict TypeScript. Integration of secure authentication, webhooks, and third-party payment gateways.",
    outputs: ["Clean Modular Codebase", "Payment & Webhook Ingestion", "Automated Form Validations", "Automated Testing Suites"],
  },
  {
    step: "04",
    phase: "Deployment & Scale",
    duration: "Sprint 5+",
    title: "Production Release & SLA Support",
    description: "Deploying to Vercel/AWS Edge with zero downtime, Core Web Vitals optimization, automated backup cron jobs, and seamless handover with comprehensive technical documentation.",
    outputs: ["Edge CI/CD Pipeline", "Lighthouse 95+ Performance Audit", "Operations Manual & Handover", "Ongoing SLA & Feature Roadmap"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    tag: "Enterprise Retail & ERP",
    category: "ERP & Operations",
    title: "PC Builder & Enterprise ERP Platform",
    client: "Hardware Retail Client",
    impact: "Processed ₹10L+ in hardware inventory & automated 100% of purchase-to-sale invoicing workflows.",
    description: "High-concurrency full-stack e-commerce and ERP system with real-time hardware compatibility matrix, multi-warehouse stock synchronization, and integrated Razorpay checkout.",
    fullDescription: "A high-volume PC hardware retailer required an unified operations console. We engineered a dual-layer architecture: a consumer-facing smart PC builder with real-time constraint validation (socket compatibility, power headroom, clearance metrics) alongside an enterprise ERP dashboard handling multi-warehouse stock adjustments, supplier purchase orders, and GST invoices.\n\nBackend utilizes Prisma ORM on PostgreSQL with transaction isolation, automated WhatsApp alerts for fulfillment milestones, and webhook-verified Razorpay payments.",
    metrics: [
      { label: "Hardware Validation", value: "<10ms" },
      { label: "Operational Speedup", value: "4x Faster" },
      { label: "Inventory Accuracy", value: "99.8%" },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Razorpay",
      "Tailwind CSS v4"
    ],
    granularTech: [
      "Next.js 16 App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Radix UI",
      "Prisma ORM",
      "PostgreSQL (pg)",
      "React Hook Form",
      "Zod Validation",
      "Recharts Data Viz",
      "Razorpay Payments",
      "JWT Session Engine"
    ],
    image: "/project-images/ecommerce.png",
    link: "https://ecommerce-md.vercel.app/",
    github: "https://github.com/AtharvShelke/pc-builder-ecommerce",
    slug: "pc-builder-erp",
    featured: true,
  },
  {
    id: 2,
    tag: "Operational Management",
    category: "ERP & Operations",
    title: "Enrich Kitchen Studio Operations Hub",
    client: "Enrich Furniture & Kitchens",
    impact: "Replaced 12+ legacy spreadsheets with unified multi-warehouse inventory and real-time client ledger tracking.",
    description: "Active inventory and business management hub powering live studio operations — real-time stock allocation, supplier management, and automated client billing in active commercial use.",
    fullDescription: "Enrich Kitchen Studio transitioned their entire modular furniture operations from error-prone spreadsheets to a centralized cloud system. We designed a multi-warehouse stock allocation system with dynamic adjustment tracking, multi-tier supplier catalogs, and client quote-to-invoice automation.\n\nRole-based authentication guarantees separation between studio designers, floor managers, and company leadership.",
    metrics: [
      { label: "Active Utilization", value: "Daily Live" },
      { label: "Stock Discrepancies", value: "-92%" },
      { label: "Invoice Generation", value: "<15 Seconds" },
    ],
    tech: [
      "Next.js",
      "React",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Recharts"
    ],
    granularTech: [
      "Next.js 14 App Router",
      "React 18",
      "Tailwind CSS",
      "Prisma ORM",
      "MongoDB Database",
      "NextAuth.js RBAC",
      "React Hook Form",
      "Zod Schema",
      "Radix UI Components",
      "Recharts Financials",
      "Framer Motion",
      "Lucide Icons"
    ],
    image: "/project-images/enrich.png",
    link: "https://www.enrichfurniture.com/",
    slug: "enrich-kitchen-studio",
    featured: true,
  },
  {
    id: 3,
    tag: "AI & Biometrics",
    category: "AI & Automation",
    title: "OBSIDIAN — AI Biometric & Nutrition Protocol",
    client: "Open Source AI Initiative",
    impact: "Over 5,000+ custom workout protocols generated with 0% prompt hallucination using structured Zod validation.",
    description: "AI-driven wellness engine that calculates metabolic metrics (TDEE/BMR) and generates structured weekly training protocols via Google Gemini AI with high-precision outputs.",
    fullDescription: "OBSIDIAN accepts granular user biometrics — body composition, metabolic goals, dietary restrictions — computes biometric baselines, and generates hyper-customized multi-week workout and macronutrient splits through Google Gemini.\n\nEngineered with an executive dark-mode aesthetic, strict schema output validation via Zod, and instant PDF protocol exports.",
    metrics: [
      { label: "AI Latency", value: "<1.4s P95" },
      { label: "Output Reliability", value: "100% Validated" },
      { label: "Community Stars", value: "Open Source" },
    ],
    tech: [
      "Google Gemini AI",
      "Next.js",
      "React 19",
      "Tailwind CSS v4",
      "Zod"
    ],
    granularTech: [
      "Next.js App Router",
      "React 19",
      "Tailwind CSS v4",
      "@google/generative-ai SDK",
      "Axios Request Engine",
      "Zod Type Contracts",
      "Lucide React UI",
      "Framer Motion Micro-Interactions"
    ],
    image: "/project-images/ai-fitness.png",
    link: "https://obsidian-fitness.vercel.app/",
    github: "https://github.com/AtharvShelke/ai-fitness-nextjs",
    slug: "obsidian-ai-fitness",
    featured: true,
  },
  {
    id: 4,
    tag: "AI Intelligence & Inbound",
    category: "AI & Automation",
    title: "LeadCopilot — Autonomous Lead Attribution & CRM",
    client: "Enterprise B2B SaaS",
    impact: "Sub-120ms autonomous inbound intake, scoring 10k+ leads with zero drop-off and instant multi-channel webhook dispatch.",
    description: "Autonomous multi-channel intake and attribution engine that classifies inbound prospects and triggers real-time response workflows within 120ms.",
    fullDescription: "High-velocity inbound lead attribution engine engineered to ingest, score, and qualify enterprise prospects in real-time. Features automated enrichment pipelines, AI qualification with Gemini, dynamic scoring matrices, and instant CRM/Slack webhook dispatches with end-to-end telemetry.",
    metrics: [
      { label: "Intake Speed", value: "<120ms" },
      { label: "Pipeline Accuracy", value: "99.4%" },
      { label: "Lead Throughput", value: "10k+ Leads" },
    ],
    tech: [
      "Next.js 15",
      "Gemini AI SDK",
      "TypeScript",
      "Redis Queue",
      "Tailwind CSS",
      "Webhooks"
    ],
    granularTech: [
      "Next.js 15 Server Actions",
      "Google Gemini 1.5 Pro",
      "TypeScript Strict Mode",
      "Tailwind CSS",
      "Redis Task Ingestion",
      "Zod Schema Contracts",
      "Webhook Dispatch Engine",
      "Framer Motion HUD UI"
    ],
    image: "/project-images/lead-copilot.png",
    link: "https://lead-copilot-frontend.vercel.app/",
    github: "https://github.com/AtharvShelke/lead-copilot",
    slug: "lead-copilot",
    featured: true,
  },
  {
    id: 5,
    tag: "Knowledge Platform & SaaS",
    category: "Multi-Tenant Platforms",
    title: "Readr — Modern Digital Library & Reading Ecosystem",
    client: "Community & EdTech Platform",
    impact: "Indexed 15,000+ book titles with sub-50ms fuzzy search and interactive reading habit analytics.",
    description: "Modern digital library ecosystem featuring real-time reading progress tracking, book recommendation algorithms, and high-performance collection management.",
    fullDescription: "A comprehensive reading management ecosystem built for heavy readers and educational communities. Features fast indexed search across thousands of volumes, personal reading goals, progress analytics, and custom collection curation with offline caching support.",
    metrics: [
      { label: "Search Latency", value: "<50ms Fuzzy" },
      { label: "Indexed Titles", value: "15,000+" },
      { label: "Uptime Reliability", value: "99.9%" },
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Zustand"
    ],
    granularTech: [
      "Next.js 14 App Router",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Supabase)",
      "Zustand State Store",
      "TanStack Query",
      "Framer Motion Transitions"
    ],
    image: "/project-images/readr-library.png",
    link: "https://readr-blond.vercel.app/",
    github: "https://github.com/AtharvShelke/readr-library",
    slug: "readr-digital-library",
    featured: true,
  },
  {
    id: 6,
    tag: "Spatial Architecture & Design",
    category: "Multi-Tenant Platforms",
    title: "Architect Studio — Spatial Design & Showcase Portal",
    client: "Luxury Architectural Firm",
    impact: "Delivered 60 FPS smooth interactive spatial portfolio with 98+ Lighthouse performance score and 70% asset compression.",
    description: "High-end architectural visual showcase and project management portal featuring immersive layout choreography, dynamic blueprint viewers, and client review workflows.",
    fullDescription: "Crafted for a premier architecture and spatial design practice. Engineered dynamic project case study pages with responsive blueprint viewers, bespoke photo grids, client design review portals, and ultra-smooth scroll-triggered layout choreography.",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Asset Optimization", value: "-70% Size" },
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis Scroll",
      "TypeScript"
    ],
    granularTech: [
      "Next.js 15 App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion 3D",
      "Lenis Smooth Scroll",
      "Radix Primitives",
      "Image Optimization Pipeline"
    ],
    image: "/project-images/architect.png",
    link: "https://polaris-architect.vercel.app/",
    github: "https://github.com/AtharvShelke/architect-studio",
    slug: "architect-spatial-studio",
    featured: true,
  }
];

export const TECH_MATRIX: TechMatrixGroup[] = [
  {
    category: "Core Frontend & Architecture",
    description: "Blazing-fast, accessible, and reactive user experiences.",
    skills: ["Next.js 15/16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Radix UI / shadcn"],
  },
  {
    category: "Backend & Systems Engineering",
    description: "Scalable APIs, transactional integrity, and data models.",
    skills: ["Node.js & Express", "PostgreSQL & pg", "MongoDB", "Prisma ORM", "NextAuth.js & JWT", "REST & tRPC APIs"],
  },
  {
    category: "AI, Integrations & Cloud",
    description: "Intelligence and third-party commercial pipelines.",
    skills: ["Google Gemini AI SDK", "OpenAI API", "Razorpay / Stripe Payments", "UploadThing / S3", "Vercel / AWS", "Git & CI/CD"],
  },
];

export const TESTIMONIALS_SIGNAL: TestimonialItem[] = [
  {
    quote: "Atharv architected our entire inventory and ERP flow from scratch. His attention to operational detail and clean code gave us a system that runs our store seamlessly every single day.",
    author: "Commercial Client",
    role: "Director, Retail & Studio Operations",
  },
  {
    quote: "Exceptional engineering discipline. The compatibility matrix and Razorpay payment flow were implemented with zero regressions and outstanding UI performance.",
    author: "Enterprise Partner",
    role: "Tech Lead & Solutions Architect",
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Custom ERP & Operations Systems",
    description: "Multi-warehouse inventory, automated invoicing, and role-based permissions systems.",
  },
  {
    id: "02",
    title: "Full-Stack Web Product Engineering",
    description: "Next.js 16, React 19, strict TypeScript, and high-concurrency relational data models.",
  },
  {
    id: "03",
    title: "AI & Automation Pipelines",
    description: "Gemini and OpenAI integration with structured prompt schemas and low-latency API routes.",
  },
  {
    id: "04",
    title: "High-Velocity UI/UX Design Systems",
    description: "Figma design tokens, smooth Framer Motion interactions, and 100/100 Core Web Vitals.",
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 1,
    year: "2022 – 2026",
    degree: "B.E. Computer Science Engineering",
    institution: "MGM University, Aurangabad",
    description: "Specialized in Distributed Software Architecture and HCI. Built and shipped 4 production-grade applications serving commercial users alongside university tenure.",
  },
  {
    id: 2,
    year: "2020 – 2022",
    degree: "Higher Secondary (Science - CS & Math)",
    institution: "Narayana Junior College",
    description: "90.3% State Board distinction. Mastered core algorithmic fundamentals, data structures, and computational mathematics.",
  },
  {
    id: 3,
    year: "2019 – 2020",
    degree: "Secondary School Certificate",
    institution: "S.B.O.A. Public School",
    description: "96.8% Academic Distinction. Laid foundational discipline in engineering analysis and rapid technical learning.",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 1,
    period: "2024 – Present",
    role: "Lead Systems Architect & Co-Founder",
    company: "DiscoverrLabs.AI",
    description: "Architected and launched document generation platforms and agentic workflows.",
    highlights: [
      "Architected core web platforms using Next.js App Router, React 19, and Tailwind CSS.",
      "Integrated Google Gemini SDK for automated content generation and structured AI workflows.",
      "Engineered role-based access control (RBAC) and multi-tenant document management pipelines.",
    ],
  },
  {
    id: 2,
    period: "2024",
    role: "Full-Stack Client Engineer",
    company: "Enrich Kitchen Studio",
    description: "Built a live business operations and inventory management system.",
    highlights: [
      "Engineered a multi-warehouse stock tracking system replacing legacy spreadsheet workflows for a live client.",
      "Implemented NextAuth role-based authentication, supplier tracking, and automated invoice generation.",
      "Integrated Prisma ORM with MongoDB and Recharts for live operational reporting dashboards.",
    ],
  },
  {
    id: 3,
    period: "2023 – 2024",
    role: "Full-Stack Engineer (Freelance)",
    company: "Hardware Retail Client",
    description: "Developed an end-to-end e-commerce storefront and ERP system.",
    highlights: [
      "Built a PC builder platform with real-time hardware compatibility validation rules across component categories.",
      "Integrated Razorpay payment gateway and WhatsApp automated notifications for daily business transactions.",
      "Architected PostgreSQL schema via Prisma ORM for inventory control, supplier purchase orders, and billing.",
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend & UI Architecture",
    items: [
      { name: "Next.js 16 (App Router)", context: "Server Components, Server Actions, sub-100ms API routes, dynamic caching" },
      { name: "React 19", context: "Custom hooks, optimistic UI state management, portal modals" },
      { name: "TypeScript", context: "Strict type safety across end-to-end API payloads and Zod schemas" },
      { name: "Tailwind CSS v4", context: "Custom design systems, container queries, CSS variables, dark themes" },
      { name: "Framer Motion", context: "Spring physics, layout animations, scroll-driven transforms" },
      { name: "Radix UI & shadcn/ui", context: "Accessible, unstyled primitives and custom design system components" },
    ],
  },
  {
    category: "Backend Systems & Data Layer",
    items: [
      { name: "PostgreSQL", context: "Relational database schema modeling, foreign key constraints, indexing" },
      { name: "MongoDB", context: "Multi-tenant document schema architecture & aggregation pipelines" },
      { name: "Prisma ORM", context: "Type-safe queries, migration workflows, relational & document mapping" },
      { name: "Node.js & Express", context: "RESTful API endpoints, custom JWT auth middleware, async task handling" },
      { name: "NextAuth.js", context: "Role-based access control (RBAC), credentials provider, JWT sessions" },
      { name: "Zod Validation", context: "Runtime payload validation and LLM structured output schema enforcement" },
    ],
  },
  {
    category: "DevOps, Tools & Infrastructure",
    items: [
      { name: "Docker", context: "Containerizing application services for consistent local and production runtimes" },
      { name: "Git & GitHub", context: "Version control, feature branching, PR reviews, release tagging" },
      { name: "Vercel", context: "Edge deployments, environment secret management, automatic preview builds" },
      { name: "Google Gemini & OpenAI SDKs", context: "Structured prompt engineering, metabolic protocol generation, AI screening" },
      { name: "Payment & Delivery APIs", context: "Razorpay payment webhooks, Nodemailer automation, UploadThing" },
    ],
  },
  {
    category: "Design Systems & UX",
    items: [
      { name: "Figma", context: "Figma-to-code design system token translation and interactive prototyping" },
      { name: "UI/UX Design", context: "WCAG AA contrast standards, mobile responsive layouts, zero-CLS design" },
      { name: "Wireframing", context: "High-fidelity wireframes and user journey mapping" },
    ],
  },
];
