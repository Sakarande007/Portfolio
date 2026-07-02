// ─────────────────────────────────────────────────────────────
//  SANKET KARANDE — AWARD EDITION · single source of truth
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sanket Karande',
  firstName: 'SANKET',
  lastName: 'KARANDE',
  role: 'Full Stack Developer',
  subRole: 'Enterprise Software Engineer',
  tagline: 'I build enterprise-grade software, AI-powered products, and scalable web applications.',
  email: 'sakarande007@gmail.com',
  phone: '+91 8956818400',
  phoneHref: 'tel:+918956818400',
  location: 'Pune, Maharashtra, India',
  timezone: 'Asia/Kolkata',
  github: 'https://github.com/Sakarande007',
  linkedin: 'https://www.linkedin.com/in/sanket-karande-6a547a204/',
  resume: '/resume.pdf',
  available: true,
}

export const stats = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 25, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '', label: 'Production Systems' },
]

export const manifesto =
  "I'm a Full Stack Developer specializing in enterprise software, ERP systems, manufacturing solutions, AI applications, desktop software, and scalable cloud deployments. I build production-ready applications from concept to deployment — obsessing over performance, scalability, and exceptional user experiences."

export interface WnProject {
  id: string
  index: string
  title: string
  category: string
  year: string
  description: string
  features: string[]
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  accent: string
}

export const projects: WnProject[] = [
  {
    id: 'vendor-qr',
    index: '01',
    title: 'Vendor QR Code Management System',
    category: 'Enterprise ERP',
    year: '2026',
    description:
      'Enterprise Vendor Invoice Portal with Purchase Order validation, encrypted QR generation, SAP Excel integration, Redis caching, and secure gate verification.',
    features: [
      'Vendor Portal', 'Admin Dashboard', 'Purchase Orders', 'Invoice Workflow',
      'QR Generation', 'QR Verification', 'SAP Excel Upload', 'Reports',
      'Dashboard', 'Audit Logs', 'JWT Authentication', 'Redis', 'Docker Deployment',
    ],
    tech: ['React', 'Node', 'Express', 'MySQL', 'Redis', 'Docker', 'Nginx', 'JWT'],
    liveUrl: 'https://www.erpdigitalbarcode.in/login',
    githubUrl: 'https://github.com/Sakarande007/Vendor-QR-Code-Management-System',
    image: '/20260126_174938(1).jpg',
    accent: '#CCFF00',
  },
  {
    id: 'printy5',
    index: '02',
    title: 'Printy5 — Industrial Label Generator',
    category: 'Manufacturing',
    year: '2026',
    description:
      'Production-ready industrial label generation platform for warehouse and logistics operations.',
    features: [
      'PACCAR Labels', 'Barcode Generator', 'PDF Generator', 'Vendor Management',
      'Parts Management', 'User Management', 'Role Based Access', 'Shipping Labels',
      'Country Of Origin', 'Multi Page PDFs',
    ],
    tech: ['React', 'Node', 'Express', 'PDFKit', 'bwip-js', 'MySQL', 'JWT'],
    liveUrl: 'https://www.printy5.in/login',
    image: '/20260126_175338.jpg',
    accent: '#7CDBFF',
  },
  {
    id: 'taskflow',
    index: '03',
    title: 'TaskFlow — Manufacturing Workflow',
    category: 'Workflow Management',
    year: '2025',
    description:
      'Enterprise task management system for manufacturing companies to streamline inter-departmental workflows.',
    features: [
      'Task Assignment', 'Department Workflow', 'Notifications', 'Analytics',
      'Charts', 'Role Based Access', 'Forward Workflow', 'Dashboard',
    ],
    tech: ['React', 'Node', 'MongoDB', 'Tailwind', 'Cloudinary'],
    githubUrl: 'https://github.com/Sakarande007/taskflow',
    image: '/20260126_175354.jpg',
    accent: '#FF9AE0',
  },
  {
    id: 'paintshop-ims',
    index: '04',
    title: 'Paint Shop IMS',
    category: 'Desktop Application',
    year: '2025',
    description:
      'Offline desktop inventory management software developed for Tata Motors Paint Shop operations.',
    features: [
      'Barcode Scan', 'QR Scan', 'Inventory', 'Rework',
      'Excel Reports', 'SQLite', 'Desktop Interface',
    ],
    tech: ['.NET', 'C#', 'WPF', 'SQLite', 'Dapper'],
    accent: '#FFB84D',
  },
  {
    id: 'multi-pdf-chatbot',
    index: '05',
    title: 'Multi PDF Chatbot',
    category: 'AI Application',
    year: '2025',
    description:
      "AI-powered chatbot that allows users to upload multiple PDF documents and ask natural language questions using Google's Gemini API.",
    features: [
      'Multi PDF Upload', 'Gemini AI', 'LangChain', 'FAISS', 'Vector Search',
      'Chat History', 'Document Parsing', 'Semantic Search',
      'Retrieval Augmented Generation', 'Prompt Engineering',
    ],
    tech: ['Python', 'Streamlit', 'Gemini API', 'LangChain', 'FAISS', 'PyPDF2'],
    githubUrl: 'https://github.com/Sakarande007',
    accent: '#B79CFF',
  },
]

export const skills = [
  { category: 'Frontend', items: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'GSAP', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Express', '.NET', 'C#', 'Python', 'REST API', 'JWT'] },
  { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Redis', 'Vector Search'] },
  { category: 'AI & ML', items: ['Gemini API', 'LangChain', 'FAISS', 'RAG', 'Prompt Engineering'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'Linux', 'Nginx', 'GitHub Actions', 'VPS'] },
]

export const experiences = [
  {
    year: '2023',
    role: 'Intern',
    company: 'Tech Startups',
    description: 'Started the journey by building foundational skills in web development, working with React and Node.js.',
  },
  {
    year: '2024',
    role: 'React Developer',
    company: 'CodingEra Solutions Pvt Ltd',
    description: 'Developed enterprise web applications, improved UI/UX, and optimized performance for client projects.',
  },
  {
    year: '2025',
    role: 'Freelance Developer',
    company: 'Self-Employed',
    description: 'Delivered end-to-end full stack solutions for global clients, focusing on scalable architectures.',
  },
  {
    year: 'Today',
    role: 'Full Stack Developer',
    company: 'Enterprise & AI',
    description: 'Building production-ready ERP systems, AI integrations, and scalable cloud solutions.',
  },
]

export const services = [
  {
    index: '01',
    title: 'Full Stack Development',
    description: 'End-to-end web application development using modern frameworks like React, Node.js, and TypeScript.',
  },
  {
    index: '02',
    title: 'Enterprise ERP Systems',
    description: 'Custom ERP and CRM solutions tailored for manufacturing and supply chain operations.',
  },
  {
    index: '03',
    title: 'AI Applications',
    description: 'Integrating LLMs, Vector Search, and RAG architectures for intelligent enterprise applications.',
  },
  {
    index: '04',
    title: 'Desktop Software',
    description: 'Offline-first inventory management and desktop tools using .NET and C#.',
  },
  {
    index: '05',
    title: 'Database Design',
    description: 'Optimized database architectures with SQL, NoSQL, and high-performance caching (Redis).',
  },
  {
    index: '06',
    title: 'Cloud & DevOps',
    description: 'Scalable deployments using Docker, Nginx, and cloud hosting for production environments.',
  },
]

export const marqueeWords = [
  'FULL STACK', 'ERP SYSTEMS', 'AI ENGINEERING', 'REACT', 'NODE.JS',
  '.NET', 'PYTHON', 'DOCKER', 'MANUFACTURING TECH', 'CLOUD DEPLOYMENT',
]
