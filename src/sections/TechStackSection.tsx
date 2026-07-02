import { motion } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: "Frontend",
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "GSAP", "Three.js"],
    color: "from-blue-500 to-cyan-400"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", ".NET", "C#", "Python", "REST API", "JWT"],
    color: "from-green-500 to-emerald-400"
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis", "Vector Search"],
    color: "from-orange-500 to-yellow-400"
  },
  {
    category: "AI & ML",
    items: ["Gemini API", "LangChain", "FAISS", "RAG", "Prompt Engineering"],
    color: "from-purple-500 to-pink-400"
  },
  {
    category: "DevOps",
    items: ["Docker", "Docker Compose", "Linux", "Nginx", "GitHub Actions", "VPS"],
    color: "from-red-500 to-rose-400"
  }
];

export const TechStackSection = () => {
  const containerRef = useRef(null);

  return (
    <section id="tech-stack" className="py-24 px-6 relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-black">Technologies & Tools</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 rounded-2xl border-t-4 border-transparent hover:border-t-primary transition-all duration-300 relative overflow-hidden group`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${skillGroup.color} rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <h4 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors">{skillGroup.category}</h4>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
