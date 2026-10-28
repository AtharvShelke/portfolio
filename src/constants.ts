// ─────────────────────────────────────────────────────────────
// UNIFIED BUSINESS & TECHNICAL DATA MODELS & CONSTANTS
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

export interface BrochureTier {
  id: string;
  name: string;
  badge: string;
  timeline: string;
  problem: string;
  solution: string;
  deliverables: string[];
  techStack: string[];
  roiMetric: string;
}

// ─────────────────────────────────────────────────────────────
// PROVEN OPERATIONAL SIGNALS (BUSINESS & TECH)
// ─────────────────────────────────────────────────────────────

export const METRICS: MetricItem[] = [
  {
    value: "10k+",
    label: "AI Operations & Lead Invocations",
    sub: "Processed in under 120ms with 0% customer data loss",
  },
  {
    value: "100%",
    label: "Verified Output Accuracy",
    sub: "Strict schema validation with zero AI hallucination",
  },
  {
    value: "< 120ms",
    label: "P95 System Response Time",
    sub: "Edge webhook dispatch & isolated task queue processing",
  },
  {
    value: "99.9%",
    label: "Production Reliability SLA",
    sub: "Continuous uptime with zero unhandled system downtime",
  },
];

// ─────────────────────────────────────────────────────────────
// ENTERPRISE AI SOLUTIONS & PACKAGES
// ─────────────────────────────────────────────────────────────

export const SOLUTIONS: SolutionItem[] = [
  {
    id: "01",
    badge: "Flagship AI Pipeline",
    title: "Autonomous Inbound Lead Intake & Scoring",
    tagline: "Capture, qualify, and route high-value sales leads in under 120ms so no customer is lost.",
    description: "Captures inbound inquiries from websites, forms, and ads instantly. An AI model scores buyer intent, enriches customer profiles in the background, and alerts sales reps directly in Slack and CRM within 120 milliseconds.",
    deliverables: [
      "Instant lead capture from any form or webhook (<120ms)",
      "AI buyer intent qualification using Google Gemini 2.0",
      "Direct sales notifications sent to Slack & CRM systems",
      "Guaranteed zero lead loss with Redis retry queues",
    ],
    stack: ["Google Gemini 2.0", "Next.js 16", "Redis Queue", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "02",
    badge: "Zero Hallucination",
    title: "Deterministic AI Document & Workflow Automation",
    tagline: "Put Generative AI into core business workflows with 100% verified, error-free outputs.",
    description: "Generates custom health protocols, executive reports, and structured documents automatically. Unlike standard chatbots that guess or hallucinate, every AI response is verified against strict schema rules before saving to databases or exporting to PDF.",
    deliverables: [
      "100% rule-verified output validation (zero hallucination)",
      "Automated generation of compliant PDF reports & protocols",
      "Low-latency streaming responses with prompt caching",
      "Automatic error recovery and fallback safeguards",
    ],
    stack: ["Google Gemini SDK", "OpenAI API", "Next.js App Router", "Zod", "Axios"],
  },
  {
    id: "03",
    badge: "Enterprise Knowledge",
    title: "Intelligent Knowledge Search & AI Copilots (RAG)",
    tagline: "Help teams find instant, cited answers across thousands of company documents in under 50ms.",
    description: "Organizes company manuals, product specifications, and documentation into a lightning-fast vector search database. Team members and customers ask questions in natural language and receive instant, source-backed answers with strict department privacy.",
    deliverables: [
      "Sub-50ms instant search across 15,000+ company documents",
      "Accurate AI answers with clickable citations to original sources",
      "Secure department data isolation and role-based permissions",
      "Natural language conversational assistant for daily operations",
    ],
    stack: ["Vector DBs", "LangChain / AI SDK", "PostgreSQL pgvector", "Supabase", "Redis"],
  },
  {
    id: "04",
    badge: "Operational Scale",
    title: "Custom Business Operations & ERP Platforms",
    tagline: "Replace chaotic spreadsheets with a unified system for inventory, billing, and order tracking.",
    description: "Connects warehouse inventory, supplier orders, and customer billing into one live web dashboard. Features automated GST invoice generation, real-time stock balance synchronization, and product rule checks that stop human ordering mistakes.",
    deliverables: [
      "Real-time multi-warehouse stock tracking & reconciliation",
      "Automated GST tax invoice generation & PDF dispatch",
      "Instant hardware compatibility & order rule checks",
      "Role-based staff permissions and audit history logs",
    ],
    stack: ["Next.js 16", "PostgreSQL", "Prisma ORM", "Radix UI", "TanStack Table"],
  },
];

// ─────────────────────────────────────────────────────────────
// SPRINT-BASED DELIVERY FRAMEWORK
// ─────────────────────────────────────────────────────────────

export const FRAMEWORK_STEPS: FrameworkStep[] = [
  {
    step: "01",
    phase: "Architecture & Discovery",
    duration: "Sprint 1",
    title: "Business Discovery & Architecture Blueprint",
    description: "We translate your commercial goals into clear technical specifications, database schemas, security rules, and user journeys before writing a single line of production code.",
    outputs: [
      "Business Requirements & Technical Spec",
      "Database Architecture & ERD Models",
      "Security & Access Permission Blueprint",
      "Interactive Low-Fidelity Wireframes",
    ],
  },
  {
    step: "02",
    phase: "Design System & Prototyping",
    duration: "Sprint 2",
    title: "High-Fidelity Interface & Interactive Prototype",
    description: "We design intuitive, high-converting screens and micro-interactions tested for rapid daily workflows across desktop and mobile devices.",
    outputs: [
      "Complete Figma Production Design System",
      "Interactive Clickable Prototype",
      "Mobile & Desktop UX Component Library",
      "Client Feedback & Review Sign-Off",
    ],
  },
  {
    step: "03",
    phase: "Scalable Engineering",
    duration: "Sprint 3-4",
    title: "High-Performance Development & Integration",
    description: "We build your system using Next.js 16, TypeScript, and PostgreSQL, integrating automated tests, secure payments, background queues, and third-party APIs.",
    outputs: [
      "Clean, Modular & Type-Safe Codebase",
      "Payment Gateway & Webhook Integrations",
      "Strict Data Validation & Form Rules",
      "Automated CI/CD Quality & Security Tests",
    ],
  },
  {
    step: "04",
    phase: "Deployment & Scale",
    duration: "Sprint 5+",
    title: "Production Release, Documentation & SLA Support",
    description: "We deploy your system to edge cloud servers with zero downtime, deliver full technical operations documentation, and provide ongoing rapid-response SLA support.",
    outputs: [
      "Zero-Downtime Edge Cloud Deployment",
      "Lighthouse 95+ Performance & SEO Audit",
      "System Operations Manual & Admin Guide",
      "Guaranteed Response SLA & Feature Roadmap",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// PRODUCTION CASE STUDIES & COMMERCIAL SYSTEMS
// ─────────────────────────────────────────────────────────────

export const PROJECTS: Project[] = [
  {
    id: 1,
    tag: "Autonomous AI Intelligence",
    category: "AI & Autonomous Systems",
    title: "LeadCopilot — Autonomous Inbound Lead Attribution & CRM",
    client: "Enterprise B2B SaaS",
    impact: "Scores 10,000+ customer leads in under 120ms, routing qualified buyers directly to sales teams with 0% lead loss.",
    description: "Autonomous sales intake system that captures incoming customer inquiries, scores buyer intent using AI, and alerts sales teams within 120ms.",
    fullDescription: "Commercial Problem: High-growth B2B companies lose up to 40% of prospective buyers when lead response takes longer than 5 minutes, while sales reps waste hours manually qualifying spreadsheet inquiries.\n\nEngineered Solution: LeadCopilot automatically ingests multi-channel form inquiries, runs semantic intent analysis with Google Gemini 2.0 Flash, enriches company background data, and routes qualified deals straight to Slack and CRM in under 120 milliseconds. Redis queues prevent lost submissions during traffic spikes.",
    metrics: [
      { label: "Intake Speed", value: "<120ms P95" },
      { label: "Lead Qualification", value: "99.4% Accurate" },
      { label: "Leads Handled", value: "10,000+" },
    ],
    tech: [
      "Google Gemini 2.0",
      "Next.js 16",
      "TypeScript",
      "Redis Queue",
      "Tailwind CSS",
      "Webhooks",
    ],
    granularTech: [
      "Next.js 16 Server Actions",
      "Google Gemini 2.0 Flash SDK",
      "TypeScript Strict Mode",
      "Tailwind CSS v4",
      "Redis Task Ingestion",
      "Zod Schema Contracts",
      "Webhook Dispatch Engine",
      "Framer Motion HUD UI",
    ],
    image: "/project-images/lead-copilot.png",
    link: "https://leadcopilot.vercel.app/",
    github: "https://github.com/AtharvShelke/lead-copilot",
    slug: "lead-copilot",
    featured: true,
  },
  {
    id: 2,
    tag: "Deterministic LLM Engine",
    category: "AI & Autonomous Systems",
    title: "OBSIDIAN — AI Biometric & Nutrition Protocol Engine",
    client: "HealthTech & Open Source AI",
    impact: "Generated 5,000+ customized health and nutrition plans with 100% verified accuracy and zero AI errors.",
    description: "AI health engine that analyzes personal biometrics (TDEE/BMR) and generates structured, weekly workout and meal plans verified against strict health rules.",
    fullDescription: "Commercial Problem: Wellness platforms that rely on generic chatbot prompts produce inaccurate or unsafe dietary suggestions, creating liability risks and breaking user trust.\n\nEngineered Solution: OBSIDIAN computes precise metabolic baselines from user biometrics, then prompts Google Gemini under strict Zod runtime schema validation. Output regimens adhere 100% to medical and caloric constraints and can be downloaded immediately as formatted PDFs.",
    metrics: [
      { label: "Generation Speed", value: "<1.4s P95" },
      { label: "Output Reliability", value: "100% Verified" },
      { label: "Protocols Created", value: "5,000+" },
    ],
    tech: [
      "Google Gemini AI",
      "Next.js App Router",
      "React 19",
      "Tailwind CSS v4",
      "Zod",
    ],
    granularTech: [
      "Next.js App Router",
      "React 19",
      "Tailwind CSS v4",
      "@google/generative-ai SDK",
      "Axios Request Engine",
      "Zod Type Contracts",
      "Lucide React UI",
      "Framer Motion Micro-Interactions",
    ],
    image: "/project-images/ai-fitness.png",
    link: "https://obsidian-fitness.vercel.app/",
    github: "https://github.com/AtharvShelke/ai-fitness-nextjs",
    slug: "obsidian-ai-fitness",
    featured: true,
  },
  {
    id: 3,
    tag: "Enterprise Retail & Operations",
    category: "ERP & Operations",
    title: "PC Builder & Enterprise ERP Platform",
    client: "Hardware Retail Client",
    impact: "Managed ₹10L+ in retail inventory and automated 100% of invoicing workflows from supplier order to customer checkout.",
    description: "Dual-sided e-commerce and ERP platform with real-time component compatibility validation (<10ms), multi-warehouse stock sync, and automated GST billing.",
    fullDescription: "Commercial Problem: A high-volume computer retailer was losing sales due to complex manual order checks (customers buying incompatible computer parts) and suffering from stock discrepancies between warehouses.\n\nEngineered Solution: We developed an integrated two-part system: a customer-facing PC builder that validates socket, wattage, and clearance constraints in real time (<10ms), connected to a back-office operations console managing multi-depot inventory, supplier purchase orders, Razorpay payments, and automated WhatsApp delivery updates.",
    metrics: [
      { label: "Compatibility Check", value: "<10ms Real-Time" },
      { label: "Order Processing", value: "4x Faster" },
      { label: "Inventory Accuracy", value: "99.8%" },
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Prisma ORM",
      "Razorpay",
      "Tailwind CSS v4",
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
      "JWT Session Engine",
    ],
    image: "/project-images/ecommerce.png",
    link: "https://ecommerce-md.vercel.app/",
    github: "https://github.com/AtharvShelke/pc-builder-ecommerce",
    slug: "pc-builder-erp",
    featured: true,
  },
  {
    id: 4,
    tag: "Operational Management",
    category: "ERP & Operations",
    title: "Enrich Kitchen Studio Operations Hub",
    client: "Enrich Furniture & Kitchens",
    impact: "Replaced 12+ messy spreadsheets with a live cloud system, eliminating 92% of inventory errors for a commercial furniture studio.",
    description: "Live commercial operations hub managing daily studio inventory, supplier orders, and client billing across multiple warehouses in active daily use.",
    fullDescription: "Commercial Problem: An expanding custom furniture and kitchen studio managed raw materials, client project orders, and billing across fragmented Excel files, leading to stock discrepancies, delayed client quotes, and invoicing errors.\n\nEngineered Solution: Built a centralized cloud hub that tracks multi-warehouse hardware allocations in real time. Features quote-to-invoice automation (<15 seconds), dynamic supplier management, and role-based permissions separating designers, floor managers, and executives.",
    metrics: [
      { label: "Active Utilization", value: "Daily Live Use" },
      { label: "Stock Discrepancies", value: "-92% Drop" },
      { label: "Invoice Creation", value: "<15 Seconds" },
    ],
    tech: [
      "Next.js",
      "React",
      "MongoDB",
      "Prisma",
      "NextAuth.js",
      "Recharts",
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
      "Lucide Icons",
    ],
    image: "/project-images/enrich.png",
    link: "https://www.enrichfurniture.com/",
    slug: "enrich-kitchen-studio",
    featured: true,
  },
  {
    id: 5,
    tag: "Knowledge Platform & SaaS",
    category: "Multi-Tenant Platforms",
    title: "Readr — Modern Digital Library & Reading Ecosystem",
    client: "Community & EdTech Platform",
    impact: "Indexed 15,000+ book titles with sub-50ms instant search and interactive reading habit analytics.",
    description: "Digital library platform featuring instant search across 15,000+ titles, reading progress tracking, and offline-ready personal collections.",
    fullDescription: "Commercial Problem: Digital reading communities and educational platforms struggle with slow search performance and poor engagement when catalogs exceed thousands of titles.\n\nEngineered Solution: Powered by Next.js and PostgreSQL (Supabase), Readr delivers sub-50ms fuzzy search across 15,000+ volumes, interactive goal progress analytics, and smooth offline caching, maintaining 99.9% platform availability.",
    metrics: [
      { label: "Search Speed", value: "<50ms Instant" },
      { label: "Catalog Size", value: "15,000+ Titles" },
      { label: "Platform Uptime", value: "99.9%" },
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Zustand",
    ],
    granularTech: [
      "Next.js 14 App Router",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL (Supabase)",
      "Zustand State Store",
      "TanStack Query",
      "Framer Motion Transitions",
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
    impact: "Delivered an ultra-smooth 60 FPS interactive showcase with a 98+ Lighthouse performance score and 70% faster image loading.",
    description: "Immersive architectural portfolio and client review portal featuring interactive blueprint viewers and ultra-smooth visual storytelling.",
    fullDescription: "Commercial Problem: Luxury architectural firms need a digital presence that reflects their physical craftsmanship, but heavy high-resolution media usually causes slow page loads and sluggish animations.\n\nEngineered Solution: Crafted a web experience using Next.js 15, React 19, and smooth scroll physics. Implemented a custom asset pipeline that compressed photography by 70% without visible quality loss, achieving a 98/100 Lighthouse score and fluid 60 FPS navigation with dedicated client review workflows.",
    metrics: [
      { label: "Animation Smoothness", value: "60 FPS" },
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Image Optimization", value: "-70% File Size" },
    ],
    tech: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis Scroll",
      "TypeScript",
    ],
    granularTech: [
      "Next.js 15 App Router",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion 3D",
      "Lenis Smooth Scroll",
      "Radix Primitives",
      "Image Optimization Pipeline",
    ],
    image: "/project-images/architect.png",
    link: "https://polaris-architect.vercel.app/",
    github: "https://github.com/AtharvShelke/architect-studio",
    slug: "architect-spatial-studio",
    featured: true,
  },
];

// ─────────────────────────────────────────────────────────────
// TECHNICAL SYSTEMS & ARCHITECTURE MATRIX
// ─────────────────────────────────────────────────────────────

export const TECH_MATRIX: TechMatrixGroup[] = [
  {
    category: "Applied AI & Autonomous Systems",
    description: "Production AI pipelines that eliminate manual work, prevent hallucinations, and automate workflows safely.",
    skills: [
      "Google Gemini 2.0 & OpenAI SDKs",
      "Strict Output Validation (Zod)",
      "Autonomous Task Queues (Redis)",
      "Fast Semantic Search & RAG",
      "Automated Webhooks & Integrations",
      "Function Calling & AI Agents",
    ],
  },
  {
    category: "Backend Systems & Secure Data",
    description: "Rock-solid cloud backends and databases built for high security, zero data loss, and sub-100ms response times.",
    skills: [
      "Next.js 16 Server Architecture",
      "PostgreSQL Relational Databases",
      "Prisma ORM (Data Safety)",
      "Node.js High-Performance APIs",
      "Role-Based Staff Access (RBAC)",
      "Multi-Tenant Data Isolation",
    ],
  },
  {
    category: "Frontend Architecture & High-Conversion UI",
    description: "Fast-loading, accessible, and intuitive web interfaces designed to maximize customer conversion and delight users.",
    skills: [
      "Next.js 16 & React 19",
      "Strict TypeScript (Bug Prevention)",
      "Tailwind CSS v4 (Modern Styling)",
      "Framer Motion (Smooth UX)",
      "Accessible UI (Radix & shadcn)",
      "Core Web Vitals & 95+ Lighthouse",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// CLIENT TESTIMONIALS & OPERATIONAL FEEDBACK
// ─────────────────────────────────────────────────────────────

export const TESTIMONIALS_SIGNAL: TestimonialItem[] = [
  {
    quote: "Atharv architected our entire multi-warehouse inventory and operations system from scratch. His attention to real-world business workflows and clean engineering gave us a reliable system that runs our store seamlessly every single day.",
    author: "Commercial Client",
    role: "Director, Retail & Studio Operations",
  },
  {
    quote: "Exceptional engineering discipline. The real-time parts compatibility matrix and payment workflows were implemented with zero regressions, rock-solid stability, and outstanding UI performance.",
    author: "Enterprise Partner",
    role: "Tech Lead & Solutions Architect",
  },
];

// ─────────────────────────────────────────────────────────────
// CORE CORE SERVICES CATALOG
// ─────────────────────────────────────────────────────────────

export const SERVICES: ServiceItem[] = [
  {
    id: "01",
    title: "Autonomous Inbound Lead Intake & Scoring",
    description: "Captures leads in under 120ms, scores buyer intent with Google Gemini, and notifies sales teams on Slack & CRM instantly.",
  },
  {
    id: "02",
    title: "Deterministic AI Document & Workflow Automation",
    description: "Generates verified, error-free customer plans and PDF reports with 100% strict rule adherence and zero hallucinations.",
  },
  {
    id: "03",
    title: "Instant Company Search & AI Knowledge Copilots",
    description: "Sub-50ms search across 15,000+ internal documents, giving teams instant answers with exact citations and secure department permissions.",
  },
  {
    id: "04",
    title: "Custom Business Operations & ERP Platforms",
    description: "Replaces messy spreadsheets with live multi-warehouse inventory, real-time product rule validation, and automated GST billing.",
  },
];

// ─────────────────────────────────────────────────────────────
// BROCHURE PACKAGES & DELIVERY SPECIFICATIONS
// ─────────────────────────────────────────────────────────────

export const BROCHURE_TIERS: BrochureTier[] = [
  {
    id: 'autonomous-inbound',
    name: 'Inbound Data Intake and Deal Routing Pipeline',
    badge: 'RAPID DEPLOYMENT SPECIFICATION',
    timeline: '1–2 Weeks Deployment',
    problem: 'Sales teams lose more than 40% of customer leads because manual intake causes slow response times and missed opportunities.',
    solution: 'The system captures leads from all forms in under 120ms, evaluates buyer intent using Google Gemini AI, and alerts sales reps instantly on Slack and CRM.',
    deliverables: [
      'Instant lead capture from websites and forms in under 120ms',
      'AI buyer intent analysis and lead scoring using Google Gemini',
      'Direct deal notifications sent to Slack channels and CRM systems',
      'Zero lead loss guaranteed through Redis background queue retry handlers',
    ],
    techStack: ['Google Gemini 2.0', 'Next.js 16 Server Actions', 'Redis Queues', 'TypeScript', 'Webhooks'],
    roiMetric: '10,000+ leads processed at under 120ms latency with 0% data loss',
  },
  {
    id: 'deterministic-llm',
    name: 'Deterministic AI Document & Report Automation',
    badge: 'STRICT SCHEMA ENFORCEMENT',
    timeline: '2 Weeks Deployment',
    problem: 'Standard AI models make mistakes, produce malformed data, and cannot be trusted with critical customer documents or compliance reports.',
    solution: 'The architecture verifies all AI outputs against strict business rules (Zod schemas) before generating professional, exportable PDF documents.',
    deliverables: [
      '100% verified AI outputs with strict business schema rules (zero hallucinations)',
      'Fast response times with prompt caching and low-latency token streaming',
      'Automated generation of compliant PDF reports, plans, and protocols',
      'Automatic error recovery and fallback safeguards for unbroken reliability',
    ],
    techStack: ['Google Gemini SDK', 'OpenAI API', 'Next.js App Router', 'Zod', 'Tailwind CSS'],
    roiMetric: '100% verified accuracy across 5,000+ generated documents',
  },
  {
    id: 'agentic-rag',
    name: 'Vector Knowledge Retrieval and AI Search (RAG)',
    badge: 'INDEXED RETRIEVAL SYSTEM',
    timeline: '2–3 Weeks Deployment',
    problem: 'Employees and customers waste hours digging through disorganized PDFs, product manuals, and spreadsheets to find simple answers.',
    solution: 'The system indexes all company documents into a high-speed search database, delivering accurate answers with exact source citations in under 50ms.',
    deliverables: [
      'Fast document indexing pipeline for thousands of manuals and files',
      'Hybrid natural language and exact keyword search',
      'Accurate AI answers with clickable citations to original sources',
      'Strict privacy controls with role-based permissions between departments',
    ],
    techStack: ['Vector DBs', 'PostgreSQL pgvector', 'LangChain / AI SDK', 'Supabase', 'TypeScript'],
    roiMetric: 'Sub-50ms search speed across 15,000+ indexed company documents',
  },
  {
    id: 'intelligent-erp',
    name: 'Operations Management & Custom ERP Systems',
    badge: 'HIGH-CONCURRENCY RUNTIME',
    timeline: '3–4 Weeks Deployment',
    problem: 'Growing physical businesses suffer from stock count discrepancies, manual invoicing bottlenecks, and miscommunication between warehouses.',
    solution: 'A unified web operations hub synchronizes multi-warehouse stock in real time, validates order rules automatically, and generates GST invoices in seconds.',
    deliverables: [
      'Real-time stock tracking and reconciliation across all warehouse locations',
      'Instant product compatibility and rule checking to prevent ordering mistakes',
      'Automated GST tax invoice generation and instant customer PDF dispatch',
      'Granular staff roles and permissions for studio designers, floor managers, and executives',
    ],
    techStack: ['Next.js 16', 'PostgreSQL', 'Prisma ORM', 'Razorpay', 'TanStack Table'],
    roiMetric: 'Eliminated 12+ manual spreadsheets and reduced inventory errors by 92%',
  },
];

// ─────────────────────────────────────────────────────────────
// ACADEMIC & ENGINEERING BACKGROUND
// ─────────────────────────────────────────────────────────────

export const EDUCATION: EducationEntry[] = [
  {
    id: 1,
    year: "2022 – 2026",
    degree: "B.E. Computer Science Engineering",
    institution: "MGM University, Aurangabad",
    description: "Specialized in Distributed Software Architecture and Human-Computer Interaction (HCI). Architected and deployed 4 production-grade web applications serving commercial clients alongside university studies.",
  },
  {
    id: 2,
    year: "2020 – 2022",
    degree: "Higher Secondary (Science - CS & Math)",
    institution: "Narayana Junior College",
    description: "Achieved 90.3% State Board distinction with a deep focus on core data structures, algorithms, and computational mathematics.",
  },
  {
    id: 3,
    year: "2019 – 2020",
    degree: "Secondary School Certificate",
    institution: "S.B.O.A. Public School",
    description: "Achieved 96.8% Academic Distinction. Developed foundational discipline in analytical problem-solving and rapid software learning.",
  },
];

// ─────────────────────────────────────────────────────────────
// PROFESSIONAL ENGINEERING EXPERIENCE
// ─────────────────────────────────────────────────────────────

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 1,
    period: "2024 – Present",
    role: "AI Solutions & Full-Stack Engineer",
    company: "DiscoverrLabs.AI",
    description: "Leading the engineering of production AI document generation platforms, verified LLM workflows, and enterprise automation tools.",
    highlights: [
      "Engineered automated document generation pipelines using Google Gemini AI with strict rule verification to eliminate hallucinations.",
      "Built fast, responsive web interfaces with sub-100ms render speeds using Next.js 16, React 19, and Tailwind CSS.",
      "Implemented secure multi-tenant data boundaries and automated background processing for enterprise clients.",
    ],
  },
  {
    id: 2,
    period: "2024",
    role: "Full-Stack Software Engineer",
    company: "Enrich Kitchen Studio",
    description: "Engineered a centralized cloud operations system replacing manual spreadsheets for a commercial interior and furniture business.",
    highlights: [
      "Designed a real-time multi-warehouse inventory system that eliminated 92% of stock discrepancies for daily studio operations.",
      "Implemented secure role-based staff access, supplier order tracking, and automated client invoice generation (<15 seconds).",
      "Integrated PostgreSQL and MongoDB with interactive reporting dashboards for company leadership.",
    ],
  },
  {
    id: 3,
    period: "2023 – 2024",
    role: "Full-Stack Engineer (Commercial Contract)",
    company: "Hardware Retail Client",
    description: "Architected a dual-sided e-commerce storefront and enterprise management system for a computer hardware retailer.",
    highlights: [
      "Created a real-time PC builder that automatically validates component compatibility in under 10ms, preventing customer purchase mistakes.",
      "Integrated Razorpay payment processing and automated WhatsApp order notifications for daily retail transactions.",
      "Built multi-warehouse inventory control, supplier purchase orders, and automated GST billing handling over ₹10L in merchandise.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// GRANULAR SKILLS INVENTORY (TECH & BUSINESS VALUE)
// ─────────────────────────────────────────────────────────────

export const SKILLS: SkillGroup[] = [
  {
    category: "Frontend & High-Conversion UI",
    items: [
      {
        name: "Next.js 16 (App Router)",
        context: "Server-rendered pages that load in under 100ms for high user conversion and top Google SEO ranking.",
      },
      {
        name: "React 19",
        context: "Modern interactive user experiences with instant button feedback, optimistic UI, and smooth transitions.",
      },
      {
        name: "TypeScript",
        context: "Strict end-to-end type verification that catches and eliminates bugs before code reaches production.",
      },
      {
        name: "Tailwind CSS v4",
        context: "Consistent brand design systems and high-speed responsive styling optimized for mobile and desktop screens.",
      },
      {
        name: "Framer Motion",
        context: "Smooth physics-based micro-animations and scroll effects that give web applications a premium executive feel.",
      },
      {
        name: "Radix UI & shadcn/ui",
        context: "Accessible, keyboard-navigable UI components that comply with global WCAG accessibility standards.",
      },
    ],
  },
  {
    category: "Backend Systems & Secure Data Layer",
    items: [
      {
        name: "PostgreSQL",
        context: "Enterprise relational database engineered for transactional integrity, foreign key security, and zero data loss.",
      },
      {
        name: "MongoDB",
        context: "Flexible document database ideal for multi-tenant product catalogs, dynamic schemas, and fast aggregations.",
      },
      {
        name: "Prisma ORM",
        context: "Type-safe database bridge ensuring reliable data queries and seamless database schema migrations.",
      },
      {
        name: "Node.js & Express",
        context: "High-throughput API backend handling concurrent client requests and background tasks efficiently.",
      },
      {
        name: "NextAuth.js",
        context: "Secure staff authentication with Role-Based Access Control (RBAC) protecting sensitive company data.",
      },
      {
        name: "Zod Schema Validation",
        context: "Strict data verification that guarantees AI outputs and user form submissions never corrupt databases.",
      },
    ],
  },
  {
    category: "Applied AI, Cloud & Infrastructure",
    items: [
      {
        name: "Google Gemini & OpenAI SDKs",
        context: "Integration of state-of-the-art language models for document synthesis, lead qualification, and intelligent search.",
      },
      {
        name: "Docker",
        context: "Containerized environments ensuring the application runs identically and reliably in local development and live cloud production.",
      },
      {
        name: "Git & GitHub",
        context: "Professional version control, branch management, code review workflows, and traceable release history.",
      },
      {
        name: "Vercel & AWS Edge",
        context: "Worldwide edge server deployment ensuring lightning-fast page loading from any global location with zero downtime.",
      },
      {
        name: "Payment & Webhook APIs",
        context: "End-to-end integration with Razorpay, automated customer notifications, and instant webhook dispatches.",
      },
    ],
  },
  {
    category: "Design Systems & Product Strategy",
    items: [
      {
        name: "Figma Design Systems",
        context: "Translating brand strategy and wireframes into pixel-perfect, mobile-friendly interactive web applications.",
      },
      {
        name: "UI/UX & Conversion Design",
        context: "Designing intuitive user journeys that reduce friction, cut customer drop-offs, and speed up daily employee workflows.",
      },
      {
        name: "Wireframing & Prototyping",
        context: "Rapid clickable prototypes allowing business stakeholders to test and validate ideas before engineering begins.",
      },
    ],
  },
];
