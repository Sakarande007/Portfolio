import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import type { ProjectType } from './ProjectCaseStudy';

gsap.registerPlugin(ScrollTrigger);

const projectsData: ProjectType[] = [
  {
    id: "vendor-qr",
    title: "Vendor QR Code Management System",
    category: "Enterprise ERP",
    liveUrl: "https://www.erpdigitalbarcode.in/login",
    githubUrl: "https://github.com/Sakarande007/Vendor-QR-Code-Management-System",
    description: "Enterprise Vendor Invoice Portal with Purchase Order validation, encrypted QR generation, SAP Excel integration, Redis caching, and secure gate verification.",
    features: ["Vendor Portal", "Admin Dashboard", "Purchase Orders", "Invoice Workflow", "QR Generation", "QR Verification", "SAP Excel Upload", "Reports", "Dashboard", "Audit Logs", "JWT Authentication", "Redis", "Docker Deployment"],
    tech: ["React", "Node", "Express", "MySQL", "Redis", "Docker", "Nginx", "JWT"],
    image: "/20260126_174938(1).jpg"
  },
  {
    id: "printy5",
    title: "Printy5 - Industrial Label Generator",
    category: "Manufacturing",
    liveUrl: "https://www.printy5.in/login",
    description: "Production-ready industrial label generation platform for warehouse and logistics operations.",
    features: ["PACCAR Labels", "Barcode Generator", "PDF Generator", "Vendor Management", "Parts Management", "User Management", "Role Based Access", "Shipping Labels", "Country Of Origin", "Multi Page PDFs"],
    tech: ["React", "Node", "Express", "PDFKit", "bwip-js", "MySQL", "JWT"],
    image: "/20260126_175338.jpg"
  },
  {
    id: "taskflow",
    title: "TaskFlow - Manufacturing Workflow",
    category: "Workflow Management",
    githubUrl: "https://github.com/Sakarande007/taskflow",
    description: "Enterprise task management system for manufacturing companies to streamline inter-departmental workflows.",
    features: ["Task Assignment", "Department Workflow", "Notifications", "Analytics", "Charts", "Role Based Access", "Forward Workflow", "Dashboard"],
    tech: ["React", "Node", "MongoDB", "Tailwind", "Cloudinary"],
    image: "/20260126_175354.jpg"
  },
  {
    id: "paintshop-ims",
    title: "Paint Shop IMS",
    category: "Desktop Application",
    description: "Offline desktop inventory management software developed for Tata Motors Paint Shop operations.",
    features: ["Barcode Scan", "QR Scan", "Inventory", "Rework", "Excel Reports", "SQLite", "Desktop Interface"],
    tech: [".NET", "C#", "WPF", "SQLite", "Dapper"],
    image: ""
  },
  {
    id: "multi-pdf-chatbot",
    title: "Multi PDF Chatbot",
    category: "AI Application",
    githubUrl: "https://github.com/Sakarande007",
    description: "AI-powered chatbot that allows users to upload multiple PDF documents and ask natural language questions using Google's Gemini API.",
    features: ["Multi PDF Upload", "Gemini AI", "LangChain", "FAISS", "Vector Search", "Chat History", "Document Parsing", "Semantic Search", "Retrieval Augmented Generation", "Prompt Engineering"],
    tech: ["Python", "Streamlit", "Gemini API", "LangChain", "FAISS", "PyPDF2"],
    image: ""
  }
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!section || !scrollContainer) return;

    const ctx = gsap.context(() => {
      // Calculate the percentage to move left
      const movePercent = -100 * (projectsData.length - 1) / projectsData.length;

      // Create horizontal scroll animation
      gsap.to(scrollContainer, {
        x: `${movePercent}%`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          end: () => "+=" + (window.innerWidth * (projectsData.length - 1)),
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative h-screen bg-black overflow-hidden z-20">
      <div 
        ref={scrollContainerRef} 
        className="flex h-full"
        style={{ width: `${projectsData.length * 100}vw` }}
      >
        {projectsData.map((project, index) => (
          <ProjectCaseStudy key={project.id} project={project} index={index} />
        ))}
      </div>
      
      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-10 text-white/50 text-sm font-mono z-30 tracking-widest uppercase flex items-center gap-4">
        <span>Scroll to Explore Projects</span>
        <div className="w-32 h-[1px] bg-white/20 relative">
           <div className="absolute top-0 left-0 h-full bg-primary animate-pulse w-full origin-left scale-x-50"></div>
        </div>
      </div>
    </section>
  );
};
