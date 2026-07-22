// ─────────────────────────────────────────────────────────────
// REFINED CONSTANTS — Premium Portfolio Copy & Data Models
// ─────────────────────────────────────────────────────────────

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

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  granularTech: string[];
  image: string;
  width: number;
  height: number;
  slug: string;
  link: string;
  github?: string;
  architectureNotes: string;
  schemaDecisions: string;
  metrics: string[];
  challenges: string;
  demoCredentials: DemoCredentials | null;
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

export const SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'Frontend Architecture',
    description: 'Modular React/Next.js design systems built for 100/100 Core Web Vitals, zero layout shifts, and WCAG AA compliance.',
  },
  {
    id: '02',
    title: 'Backend Systems & APIs',
    description: 'Scalable Node.js, Express, and PostgreSQL backends engineered for type safety, sub-100ms API response times, and clean data modeling.',
  },
  {
    id: '03',
    title: 'Full-Stack Product Engineering',
    description: 'End-to-end product delivery bridging React/Next.js frontends with relational databases, payment gateways, and automated pipelines.',
  },
  {
    id: '04',
    title: 'UI/UX Design Systems',
    description: 'Figma-to-code design systems — accessible, themeable component libraries built to exact engineering specifications.',
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    id: 1,
    year: '2022 – 2026',
    degree: 'B.E. Computer Science Engineering',
    institution: 'MGM University, Aurangabad',
    description: 'Specialised in Software Engineering and HCI. Built 4 production applications during my degree — all shipped, live, and serving real users.',
  },
  {
    id: 2,
    year: '2020 – 2022',
    degree: 'HSC — Science (PCM + CS)',
    institution: 'Narayana Junior College',
    description: '90.3% — State Board. Focused on CS and Mathematics. First exposure to programming fundamentals that directly shaped my engineering approach.',
  },
  {
    id: 3,
    year: '2019 – 2020',
    degree: 'SSC',
    institution: 'S.B.O.A. Public School',
    description: '96.8% — Demonstrated consistent academic performance and the discipline that carries through into every project I take on.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'PC Builder & ERP Platform',
    description: 'Full-stack e-commerce + ERP for a PC hardware retailer — with real-time compatibility checking, multi-warehouse inventory, and integrated Razorpay checkout. Built for daily business use, not a demo.',
    fullDescription: 'A PC hardware retailer needed more than a storefront — they needed their entire operations in one place. This platform handles a full product catalogue with category-specific attributes (CPU, GPU, Motherboard specs), an intelligent PC builder that validates hardware compatibility in real time, and a comprehensive ERP dashboard covering multi-warehouse stock, supplier purchase orders, and invoice generation.\n\nThe frontend runs on Next.js 16 + React 19 with Tailwind CSS v4 and Radix UI. The backend uses Prisma ORM against PostgreSQL, with custom JWT auth, Razorpay payment integration, and WhatsApp order notifications. Built to handle real transaction volume, not just look good in a preview.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'Framer Motion',
    ],
    granularTech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'Radix UI',
      'shadcn/ui',
      'Prisma ORM',
      'PostgreSQL (pg)',
      'React Hook Form',
      'Zod Validation',
      'Recharts',
      'Uploadthing',
      'Nodemailer',
      'JWT (jose)',
      'Bcryptjs',
    ],
    image: '/proj1.webp',
    width: 1896,
    height: 925,
    slug: 'pc-builder-erp',
    link: 'https://pc-ecommerce-demo.vercel.app',
    architectureNotes: 'Built on Next.js 16 (App Router) and React 19. Implemented client-side compatibility evaluation algorithms for PC components (CPU socket matching, motherboard chipset validation, RAM generation & TDP thermal margin checking) paired with serverless PostgreSQL queries via Prisma ORM to eliminate server round-trips during component configuration.',
    schemaDecisions: 'Relational PostgreSQL database schema designed around category-specific attribute tables (CPUs, GPUs, Motherboards, PSUs, Storage). Relational foreign keys manage multi-warehouse inventory levels, supplier purchase orders, and Razorpay transaction records.',
    metrics: [
      'Real-time component compatibility validation engine',
      'Multi-warehouse inventory & supplier purchase order tracking',
      'Integrated Razorpay gateway & automated WhatsApp order notifications',
    ],
    challenges: 'Ensuring instantaneous hardware validation feedback without blocking UI rendering during multi-part PC customization. Solved using optimized client-side state caching with Zod schema validation.',
    demoCredentials: null,
  },
  {
    id: 2,
    title: 'Enrich Kitchen Studio',
    description: 'Inventory and business management system for a live kitchen studio — real-time stock tracking, multi-warehouse control, supplier management, and invoicing. In active use by the client.',
    fullDescription: "Enrich Kitchen Studio needed to move from spreadsheets to a proper system. This is a full-stack Next.js application handling multi-warehouse inventory with stock adjustments, complete supplier management, and automated invoicing — all in one interface.\n\nRole-based access via NextAuth distinguishes admin and standard users. The frontend is fully responsive with Tailwind CSS, Radix UI, and Framer Motion. Data layer is MongoDB via Prisma ORM, with dynamic charting through Recharts for business insights. This isn't a demo — it's the actual system the client uses to run their business.",
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Prisma',
      'MongoDB',
      'NextAuth.js',
    ],
    granularTech: [
      'Next.js 14',
      'React 18',
      'Tailwind CSS',
      'Prisma ORM',
      'MongoDB',
      'NextAuth.js',
      'React Hook Form',
      'Zod',
      'Radix UI',
      'Recharts',
      'Framer Motion',
      'UploadThing',
      'Lucide React',
    ],
    image: '/proj2.webp',
    width: 1898,
    height: 925,
    slug: 'enrich-kitchen-studio',
    link: 'https://enrichfurniture.com/',
    architectureNotes: 'Full-stack Next.js 14 application providing centralized inventory & business management for a live kitchen studio client. Replaced legacy spreadsheet workflows with role-based access control (NextAuth.js) and real-time dashboard analytics using Recharts.',
    schemaDecisions: 'MongoDB database managed via Prisma ORM. Schema utilizes embedded document models for item stock history logs and relational references for multi-location inventory adjustments, supplier profiles, and billing statements.',
    metrics: [
      'Deployed and in active daily operational use by client',
      'Replaced spreadsheet-based tracking with real-time stock control',
      'Multi-location stock movement and automated invoice generation',
    ],
    challenges: 'Handling concurrent inventory stock adjustments from multiple kitchen staff members without data drift. Resolved using atomic database update pipelines and optimistic UI updates.',
    demoCredentials: null,
  },
  {
    id: 3,
    title: 'OBSIDIAN — AI Fitness Protocol',
    description: 'AI-generated weekly training programs and macro-nutrient plans — personalised from biometric inputs and calculated TDEE/BMR. Powered by Google Gemini. Open source.',
    fullDescription: 'OBSIDIAN takes user biometrics — height, weight, age, activity level, and goals — calculates key metabolic metrics (TDEE and BMR), then passes the full context to Google Gemini AI to generate hyper-personalised weekly training schedules and detailed meal plans with macro breakdowns.\n\nBuilt on Next.js with the App Router, React 19, and Tailwind CSS v4. The AI integration uses @google/generative-ai with structured prompts and Zod validation on the response. The aesthetic is deliberately executive — clean typography, controlled motion, no fitness-app clichés. Open source on GitHub.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Gemini AI',
    ],
    granularTech: [
      'Next.js (App Router)',
      'React 19',
      'Tailwind CSS v4',
      '@google/generative-ai',
      'Axios',
      'Zod',
      'Lucide React',
    ],
    image: '/obsidian.webp',
    width: 1919,
    height: 927,
    slug: 'obsidian-ai-fitness',
    link: 'https://obsidian-fitness.vercel.app/',
    github: 'https://github.com/AtharvShelke/ai-fitness-nextjs',
    architectureNotes: 'Next.js App Router application integrating @google/generative-ai (Gemini SDK). User biometrics (height, weight, age, activity level, metabolic goals) calculate TDEE/BMR baselines before passing structured prompt constraints to Gemini AI to generate validated weekly workout protocols and macro plans.',
    schemaDecisions: 'Stateless client architecture with server-side API route handlers enforcing Zod schema validation on structured AI JSON responses to ensure zero runtime parsing errors.',
    metrics: [
      'Sub-second metabolic calculation (TDEE / BMR)',
      'Structured Gemini AI JSON prompt engineering with Zod validation',
      'Open-source codebase on GitHub',
    ],
    challenges: 'Handling non-deterministic LLM text output. Solved by defining strict JSON schema prompts and Zod response validation with graceful fallback retries.',
    demoCredentials: null,
  },
  {
    id: 4,
    title: 'Training & Placement Portal',
    description: 'University-scale T&P platform managing placement drives, student records, and recruiter workflows across multiple colleges — with AI-assisted tools, RBAC, and automated email pipelines.',
    fullDescription: 'Built for multi-college university environments, this platform handles the full placement lifecycle — from posting drives and managing student applications to recruiter coordination and placement outcome tracking. The role-based access system covers 5 distinct roles: University Admin, College Admin, Coordinator, Recruiter, and Student.\n\nAI integrations via OpenAI and Google Generative AI assist with document processing and recommendations. Automated email workflows run through Nodemailer. The frontend uses Next.js 15 App Router with Tailwind CSS, shadcn/ui, and TanStack Query for live data. Backend is MongoDB via Prisma ORM with NextAuth.js credential auth, UploadThing for documents, and jsPDF for certificate generation.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'MongoDB',
      'Prisma',
      'shadcn/ui',
    ],
    granularTech: [
      'Next.js 15 (App Router)',
      'React 18',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'MongoDB',
      'Prisma ORM',
      'NextAuth.js',
      'UploadThing',
      'Nodemailer',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Recharts',
      'jsPDF',
      'OpenAI SDK',
      'Google Generative AI SDK',
    ],
    image: '/proj4.webp',
    width: 1919,
    height: 967,
    slug: 'training-placement-portal',
    link: 'https://tnp-pi.vercel.app/',
    architectureNotes: 'University-scale platform managing placement drives, student applications, and recruiter coordination across multiple colleges. Implements a 5-role RBAC security model (University Admin, College Admin, Coordinator, Recruiter, Student) enforcing 4-layer auth→session→tool→execution authorization guards.',
    schemaDecisions: 'Multi-tenant MongoDB database architecture using Prisma ORM. Models link university placement drives, college-level student registries, company profiles, application tracking pipelines, and certificate generation logs.',
    metrics: [
      '5-role RBAC security & authorization framework',
      'Multi-college university drive management',
      'AI-assisted candidate screening & automated Nodemailer pipelines',
    ],
    challenges: 'Isolating data access between multi-college administrators while granting recruiters unified candidate visibility. Solved using scoped Prisma query middleware and NextAuth role guards.',
    demoCredentials: null,
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 1,
    period: '2024 – Present',
    role: 'Lead Developer & Co-Founder',
    company: 'DiscoverrLabs.AI (InkIT Portal)',
    description: 'Architected and launched the InkIT Portal document generation platform.',
    highlights: [
      'Architected the core InkIT Portal platform using Next.js App Router, React 19, and Tailwind CSS.',
      'Integrated Google Gemini SDK for automated content generation and structured AI workflows.',
      'Engineered role-based access control (RBAC) and multi-tenant document management pipelines.',
    ],
  },
  {
    id: 2,
    period: '2024',
    role: 'Full-Stack Client Engineer',
    company: 'Enrich Kitchen Studio',
    description: 'Built a live business operations and inventory management system.',
    highlights: [
      'Engineered a multi-warehouse stock tracking system replacing legacy spreadsheet workflows for a live client.',
      'Implemented NextAuth role-based authentication, supplier tracking, and automated invoice generation.',
      'Integrated Prisma ORM with MongoDB and Recharts for live operational reporting dashboards.',
    ],
  },
  {
    id: 3,
    period: '2023 – 2024',
    role: 'Full-Stack Engineer (Freelance)',
    company: 'Hardware Retail Client',
    description: 'Developed an end-to-end e-commerce storefront and ERP system.',
    highlights: [
      'Built a PC builder platform with real-time hardware compatibility validation rules across component categories.',
      'Integrated Razorpay payment gateway and WhatsApp automated notifications for daily business transactions.',
      'Architected PostgreSQL schema via Prisma ORM for inventory control, supplier purchase orders, and billing.',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend & UI Architecture',
    items: [
      { name: 'Next.js 16 (App Router)', context: 'Server Components, Server Actions, sub-100ms API routes, dynamic caching' },
      { name: 'React 19', context: 'Custom hooks, optimistic UI state management, portal modals' },
      { name: 'TypeScript', context: 'Strict type safety across end-to-end API payloads and Zod schemas' },
      { name: 'Tailwind CSS v4', context: 'Custom design systems, container queries, CSS variables, dark themes' },
      { name: 'Framer Motion', context: 'Spring physics, layout animations, scroll-driven transforms' },
      { name: 'Radix UI & shadcn/ui', context: 'Accessible, unstyled primitives and custom design system components' },
    ],
  },
  {
    category: 'Backend Systems & Data Layer',
    items: [
      { name: 'PostgreSQL', context: 'Relational database schema modeling, foreign key constraints, indexing' },
      { name: 'MongoDB', context: 'Multi-tenant document schema architecture & aggregation pipelines' },
      { name: 'Prisma ORM', context: 'Type-safe queries, migration workflows, relational & document mapping' },
      { name: 'Node.js & Express', context: 'RESTful API endpoints, custom JWT auth middleware, async task handling' },
      { name: 'NextAuth.js', context: 'Role-based access control (RBAC), credentials provider, JWT sessions' },
      { name: 'Zod Validation', context: 'Runtime payload validation and LLM structured output schema enforcement' },
    ],
  },
  {
    category: 'DevOps, Tools & Infrastructure',
    items: [
      { name: 'Docker', context: 'Containerizing application services for consistent local and production runtimes' },
      { name: 'Git & GitHub', context: 'Version control, feature branching, PR reviews, release tagging' },
      { name: 'Vercel', context: 'Edge deployments, environment secret management, automatic preview builds' },
      { name: 'Google Gemini & OpenAI SDKs', context: 'Structured prompt engineering, metabolic protocol generation, AI screening' },
      { name: 'Payment & Delivery APIs', context: 'Razorpay payment webhooks, Nodemailer automation, UploadThing' },
    ],
  },
  {
    category: 'Design Systems & UX',
    items: [
      { name: 'Figma', context: 'Figma-to-code design system token translation and interactive prototyping' },
      { name: 'UI/UX Design', context: 'WCAG AA contrast standards, mobile responsive layouts, zero-CLS design' },
      { name: 'Wireframing', context: 'High-fidelity wireframes and user journey mapping' },
    ],
  },
];
