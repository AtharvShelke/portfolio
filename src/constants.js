export const SERVICES = [
    {
        id: '01',
        title: 'Frontend Development',
        description: 'Building robust, scalable, and pixel-perfect user interfaces using modern frameworks like React and Next.js. I ensure high performance, accessibility, and seamless interactions across all devices.',
    },
    {
        id: '02',
        title: 'Creative Coding',
        description: 'Crafting immersive digital experiences with WebGL, Three.js, and advanced animation libraries like GSAP and Framer Motion. I turn static designs into dynamic, interactive journeys.',
    },
    {
        id: '03',
        title: 'UI/UX Design',
        description: 'Designing intuitive and visually striking interfaces. From wireframes to high-fidelity prototypes, I focus on user-centric design principles to create engaging and effective digital products.',
    },
    {
        id: '04',
        title: 'Full-Stack Solutions',
        description: 'Developing end-to-end web applications with secure backends, efficient databases, and seamless API integrations. I provide comprehensive solutions tailored to your business needs.',
    },
];

export const EDUCATION = [
    {
        id: 1,
        year: '2022 - 2026',
        degree: "Bachelor's in Computer Science Engineering",
        institution: 'MGM University',
        description: 'Specialized in Software Engineering and Human-Computer Interaction. Graduated with Honors.',
    },
    {
        id: 2,
        year: '2020-2022',
        degree: 'HSC in Science Stream',
        institution: 'Narayana Academy',
        description: 'Focused on Computer Science and Mathematics, achieving a 90.3% score in the state board exams.',
    },
    {
        id: 3,
        year: '2019-2020',
        degree: 'SSC',
        institution: 'S.B.O.A. Public School',
        description: 'Completed secondary education with a 96.8% score, demonstrating strong academic performance and a solid foundation in core subjects.',
    },
];

export const PROJECTS = [
    {
  id: 1,
  title: "PC System Builder & ERP Platform",
  description: "A comprehensive full-stack e-commerce and ERP platform for PC components, featuring an intelligent PC builder with hardware compatibility checking and advanced inventory management.",
  fullDescription: "This PC System Builder Platform is a robust full-stack application catered towards PC hardware retailers and enthusiasts. It offers an advanced product catalog capable of handling category-specific attributes (CPUs, GPUs, Motherboards, etc.) and features an intelligent PC building engine that actively verifies hardware compatibility. Beyond the storefront, it includes a powerful administrative ERP dashboard to manage complex multi-warehouse inventory, stock movements, supplier purchase orders, and detailed invoice generation. The frontend is a highly responsive, modern interface powered by Next.js 16, React 19, and styled with the latest Tailwind CSS v4 and Radix UI. The backend utilizes Next.js server capabilities and Prisma ORM to interface securely with a structured PostgreSQL database, featuring custom JWT authentication, Razorpay payments, and WhatsApp integrations.",
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

        description: "A full-stack application designed to streamline business operations, track inventory real-time, and manage warehouses, invoices, and suppliers.",
        fullDescription: "Inventory Management System is a modern, high-performance Next.js application built to handle complex business inventory needs. Designed with a scalable MongoDB database and Prisma ORM, it features complete multi-warehouse management, tracking of stock adjustments, supplier management, and comprehensive invoicing. The system is secured using NextAuth-based role access control, distinguishing between standard users and administrators. The frontend is fully responsive, leveraging Tailwind CSS with dynamic charting via Recharts and polished interactive UI components powered by Radix UI and Framer Motion.",
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
        link: 'https://enrichfurniture.com/ ',
        // github: '#',
    },
    {
        id: 3,
        title: "AI Story Generator",
        description: "An AI-powered application that generates creative stories, featuring user profiles and a competitive leaderboard.",
        fullDescription: "AI Story Generator is a modern full-stack application that leverages Large Language Models (LLMs) via LangChain to generate creative, personalized stories from user prompts. It includes a secure JWT-based authentication system, allowing users to build a personal history of generated stories on their profiles and earn points to rank on a dynamic leaderboard. The frontend is a responsive, highly polished React application utilizing Framer Motion for sleek micro-animations. The backend is powered by a high-performance FastAPI server with a PostgreSQL database managed via SQLAlchemy.",
        tech: [
            "React",
            "Tailwind CSS",
            "Framer Motion",
            "FastAPI",
            "Python",
            "PostgreSQL"
        ],
        granularTech: [
            "React 19",
            "Vite",
            "Zustand",
            "Framer Motion",
            "Axios",
            "Tailwind CSS",
            "FastAPI",
            "Python 3",
            "SQLAlchemy",
            "PostgreSQL (psycopg2)",
            "LangChain",
            "PyJWT",
            "Passlib (bcrypt)",
            "Uvicorn"
        ],
        image: '/proj3.png',
        link: 'ai-story-generator-theta.vercel.app ',
        github: 'https://github.com/AtharvShelke/ai-story-generator',
    },
    {
    id: 4,
    title: "Training & Placement Portal",
    description: "A comprehensive Training & Placement management system for universities featuring multi-college management, role-based access control, and automated placement drives.",
    fullDescription: "Training & Placement Portal is a robust, full-stack application designed to streamline the management of university placement drives, students, and departmental activities. It features a highly granular role-based access control (RBAC) system accommodating University Admins, College Admins, Coordinators, Recruiters, and Students. The platform integrates AI-powered functionalities via OpenAI and Google Generative AI SDKs, handles secure file uploads with UploadThing, and automates email notifications workflows via Nodemailer. The frontend is built on the Next.js 15 App Router, delivering a responsive, polished UI with Tailwind CSS, shadcn/ui, and dynamic data fetching with TanStack Query. The backend is powered by MongoDB mapped via Prisma ORM, utilizing NextAuth.js for secure, credential-based authentication.",
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
  { category: 'Design', items: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Wireframing', 'Stitch'] },
  { category: 'Tools', items: ['Git','Github','Vercel'] },
];

