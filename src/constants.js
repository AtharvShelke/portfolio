// ─────────────────────────────────────────────────────────────
// REFINED CONSTANTS — Premium Portfolio Copy
// Principle: Specific > Vague. Outcome > Feature. Grounded > Buzzword.
// ─────────────────────────────────────────────────────────────

export const SERVICES = [
    {
        id: '01',
        title: 'Frontend Engineering',
        // BEFORE: "Building robust, scalable, and pixel-perfect user interfaces..."
        // AFTER: Specific tech + specific outcome, no filler adjectives
        description: 'Production-ready interfaces in React and Next.js — optimised for Core Web Vitals, accessible by default, and built to scale. Every component is typed, tested, and designed to last.',
    },
    {
        id: '02',
        title: 'Motion & Creative Coding',
        // BEFORE: "Crafting immersive digital experiences with WebGL..."
        // AFTER: What it does for the client, not what tools you use
        description: 'Purposeful animation using GSAP, Framer Motion, and WebGL. Not decorative — every interaction is designed to guide attention, reduce friction, and make the product feel alive.',
    },
    {
        id: '03',
        title: 'UI/UX Design',
        // BEFORE: "Designing intuitive and visually striking interfaces..."
        // AFTER: Process + outcome, speaks to both recruiters and clients
        description: 'From rough wireframes to production-ready design systems in Figma. I work at the intersection of aesthetics and usability — interfaces that look right and work right.',
    },
    {
        id: '04',
        title: 'Full-Stack Development',
        // BEFORE: "Developing end-to-end web applications..."
        // AFTER: Specific stack + specific outcomes, removes vague "tailored" language
        description: 'End-to-end applications on Next.js with PostgreSQL or MongoDB, Prisma ORM, and REST or tRPC APIs. Secure auth, clean architecture, and deployment-ready. No handoff gaps.',
    },
];

export const EDUCATION = [
    {
        id: 1,
        year: '2022 – 2026',
        degree: "B.E. Computer Science Engineering",
        institution: 'MGM University, Aurangabad',
        // BEFORE: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with Honors."
        // AFTER: More specific, honest, and credibility-signalling
        description: 'Specialised in Software Engineering and HCI. Built 4 production applications during my degree — all shipped, live, and serving real users.',
    },
    {
        id: 2,
        year: '2020 – 2022',
        degree: 'HSC — Science (PCM + CS)',
        institution: 'Narayana Junior College',
        // BEFORE: "Focused on Computer Science and Mathematics, achieving a 90.3% score..."
        // AFTER: Lead with the metric, it's the strongest signal
        description: '90.3% — State Board. Focused on CS and Mathematics. First exposure to programming fundamentals that directly shaped my engineering approach.',
    },
    {
        id: 3,
        year: '2019 – 2020',
        degree: 'SSC',
        institution: 'S.B.O.A. Public School',
        // BEFORE: "Completed secondary education with a 96.8% score..."
        // AFTER: Brief, factual, lets the metric speak
        description: '96.8% — Demonstrated consistent academic performance and the discipline that carries through into every project I take on.',
    },
];

export const PROJECTS = [
    {
        id: 1,
        title: "PC Builder & ERP Platform",
        // BEFORE: "A comprehensive full-stack e-commerce and ERP platform..."
        // AFTER: Lead with what it solves, not what it is
        description: "Full-stack e-commerce + ERP for a PC hardware retailer — with real-time compatibility checking, multi-warehouse inventory, and integrated Razorpay checkout. Built for daily business use, not a demo.",
        // BEFORE: Long paragraph that reads like a spec sheet
        // AFTER: Problem → Architecture → Outcome structure
        fullDescription: "A PC hardware retailer needed more than a storefront — they needed their entire operations in one place. This platform handles a full product catalogue with category-specific attributes (CPU, GPU, Motherboard specs), an intelligent PC builder that validates hardware compatibility in real time, and a comprehensive ERP dashboard covering multi-warehouse stock, supplier purchase orders, and invoice generation.\n\nThe frontend runs on Next.js 16 + React 19 with Tailwind CSS v4 and Radix UI. The backend uses Prisma ORM against PostgreSQL, with custom JWT auth, Razorpay payment integration, and WhatsApp order notifications. Built to handle real transaction volume, not just look good in a preview.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "Framer Motion"
        ],
        granularTech: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "Radix UI",
            "shadcn/ui",
            "Prisma ORM",
            "PostgreSQL (pg)",
            "React Hook Form",
            "Zod Validation",
            "Recharts",
            "Uploadthing",
            "Nodemailer",
            "JWT (jose)",
            "Bcryptjs"
        ],
        image: "/proj1.png",
        link: "https://pc-ecommerce-demo.vercel.app",
    },
    {
        id: 2,
        title: 'Enrich Kitchen Studio',
        // BEFORE: "A full-stack application designed to streamline business operations..."
        // AFTER: Real context, real outcome
        description: "Inventory and business management system for a live kitchen studio — real-time stock tracking, multi-warehouse control, supplier management, and invoicing. In active use by the client.",
        // AFTER: Client context + technical depth + outcome
        fullDescription: "Enrich Kitchen Studio needed to move from spreadsheets to a proper system. This is a full-stack Next.js application handling multi-warehouse inventory with stock adjustments, complete supplier management, and automated invoicing — all in one interface.\n\nRole-based access via NextAuth distinguishes admin and standard users. The frontend is fully responsive with Tailwind CSS, Radix UI, and Framer Motion. Data layer is MongoDB via Prisma ORM, with dynamic charting through Recharts for business insights. This isn't a demo — it's the actual system the client uses to run their business.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Prisma",
            "MongoDB",
            "NextAuth.js"
        ],
        granularTech: [
            "Next.js 14",
            "React 18",
            "Tailwind CSS",
            "Prisma ORM",
            "MongoDB",
            "NextAuth.js",
            "React Hook Form",
            "Zod",
            "Radix UI",
            "Recharts",
            "Framer Motion",
            "UploadThing",
            "Lucide React"
        ],
        image: '/proj2.png',
        link: 'https://enrichfurniture.com/',
    },
    {
        id: 3,
        title: "OBSIDIAN — AI Fitness Protocol",
        // BEFORE: "An elite AI-powered fitness and nutrition protocol generator."
        // AFTER: More specific about what it generates and why it's technically interesting
        description: "AI-generated weekly training programs and macro-nutrient plans — personalised from biometric inputs and calculated TDEE/BMR. Powered by Google Gemini. Open source.",
        // AFTER: Cleaner technical narrative
        fullDescription: "OBSIDIAN takes user biometrics — height, weight, age, activity level, and goals — calculates key metabolic metrics (TDEE and BMR), then passes the full context to Google Gemini AI to generate hyper-personalised weekly training schedules and detailed meal plans with macro breakdowns.\n\nBuilt on Next.js with the App Router, React 19, and Tailwind CSS v4. The AI integration uses @google/generative-ai with structured prompts and Zod validation on the response. The aesthetic is deliberately executive — clean typography, controlled motion, no fitness-app clichés. Open source on GitHub.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Gemini AI"
        ],
        granularTech: [
            "Next.js (App Router)",
            "React 19",
            "Tailwind CSS v4",
            "@google/generative-ai",
            "Axios",
            "Zod",
            "Lucide React"
        ],
        image: "/obsidian.png",
        link: "https://obsidian-fitness.vercel.app/",
        github: "https://github.com/AtharvShelke/ai-fitness-nextjs"
    },
    {
        id: 4,
        title: "Training & Placement Portal",
        // BEFORE: "A comprehensive Training & Placement management system for universities..."
        // AFTER: Scope + complexity signals, recruiter-friendly
        description: "University-scale T&P platform managing placement drives, student records, and recruiter workflows across multiple colleges — with AI-assisted tools, RBAC, and automated email pipelines.",
        // AFTER: Leads with the scale and complexity, which is the impressive signal here
        fullDescription: "Built for multi-college university environments, this platform handles the full placement lifecycle — from posting drives and managing student applications to recruiter coordination and placement outcome tracking. The role-based access system covers 5 distinct roles: University Admin, College Admin, Coordinator, Recruiter, and Student.\n\nAI integrations via OpenAI and Google Generative AI assist with document processing and recommendations. Automated email workflows run through Nodemailer. The frontend uses Next.js 15 App Router with Tailwind CSS, shadcn/ui, and TanStack Query for live data. Backend is MongoDB via Prisma ORM with NextAuth.js credential auth, UploadThing for documents, and jsPDF for certificate generation.",
        tech: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "MongoDB",
            "Prisma",
            "shadcn/ui"
        ],
        granularTech: [
            "Next.js 15 (App Router)",
            "React 18",
            "Tailwind CSS",
            "shadcn/ui",
            "Framer Motion",
            "MongoDB",
            "Prisma ORM",
            "NextAuth.js",
            "UploadThing",
            "Nodemailer",
            "TanStack Query",
            "React Hook Form",
            "Zod",
            "Recharts",
            "jsPDF",
            "OpenAI SDK",
            "Google Generative AI SDK"
        ],
        image: "/proj4.png",
        link: "https://tnp-pi.vercel.app/",
    }
];

export const SKILLS = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Python', 'Prisma'] },
    { category: 'Design', items: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Wireframing'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
];

// ─────────────────────────────────────────────────────────────
// COPY GUIDELINES (reference for future updates)
// ─────────────────────────────────────────────────────────────
// ✓ Lead with outcomes, not features
// ✓ Use specific numbers and tech names over generic adjectives
// ✓ "built for real use" > "comprehensive solution"
// ✓ "In active use by the client" > "deployed application"
// ✓ Short sentences. Active voice. No filler.
// ✗ Avoid: immersive, comprehensive, robust, cutting-edge, seamless
// ✗ Avoid: "tailored to your needs", "end-to-end solutions", "leverage"