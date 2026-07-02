import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: "2023",
    role: "Intern",
    company: "Tech Startups",
    description: "Started the journey by building foundational skills in web development, working with React and Node.js.",
  },
  {
    year: "2024",
    role: "React Developer",
    company: "CodingEra Solutions Pvt Ltd",
    description: "Developed enterprise web applications, improved UI/UX, and optimized performance for client projects.",
  },
  {
    year: "2025",
    role: "Freelance Developer",
    company: "Self-Employed",
    description: "Delivered end-to-end full stack solutions for global clients, focusing on scalable architectures.",
  },
  {
    year: "Today",
    role: "Full Stack Developer",
    company: "Enterprise & AI",
    description: "Building production-ready ERP systems, AI integrations, and scalable cloud solutions.",
  }
];

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6 relative z-10 bg-black/50" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-black">Experience</h3>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-primary to-secondary rounded-full" 
              style={{ height: lineHeight }} 
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full -translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-150 group-hover:bg-primary transition-transform duration-300">
                    <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl group-hover:-translate-y-2 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full mb-4">
                        {exp.year}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                      <h5 className="text-lg text-gray-400 font-medium mb-4">{exp.company}</h5>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty div for spacing on the other side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
