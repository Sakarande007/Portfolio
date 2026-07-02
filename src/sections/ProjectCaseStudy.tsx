import { motion } from 'framer-motion';
import { ExternalLink, Code2, Layers, Target, Trophy, Wrench } from 'lucide-react';

export interface ProjectType {
  id: string;
  title: string;
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
}

export const ProjectCaseStudy = ({ project, index }: { project: ProjectType, index: number }) => {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 lg:p-24 relative overflow-hidden group">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10 backdrop-blur-sm"></div>
        {/* Placeholder for project image, will be replaced with real image */}
        <div 
          className="w-full h-full bg-cover bg-center opacity-30 transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url(${project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070'})` }}
        ></div>
      </div>

      <div className="w-full max-w-7xl h-full flex flex-col lg:flex-row gap-12 z-10 relative mt-20 lg:mt-0">
        
        {/* Left Side: Visuals & Tech */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden glass-card border border-white/10 group/img"
          >
            {project.image ? (
               <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" />
            ) : (
               <div className="w-full h-full bg-gray-900 flex items-center justify-center text-gray-500">Image Placeholder</div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          <div className="glass p-6 rounded-2xl">
            <h4 className="flex items-center gap-2 text-lg font-bold mb-4 text-white"><Wrench className="text-primary w-5 h-5"/> Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full overflow-y-auto no-scrollbar pb-24 lg:pb-0 pr-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm tracking-widest uppercase block mb-2">{String(index + 1).padStart(2, '0')} — {project.category}</span>
            <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{project.title}</h3>
            
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="glass-card p-5 rounded-xl">
                <h5 className="flex items-center gap-2 font-bold mb-3 text-white"><Target className="text-secondary w-4 h-4"/> Core Features</h5>
                <ul className="space-y-2">
                  {project.features.slice(0, 4).map((f, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-5 rounded-xl">
                <h5 className="flex items-center gap-2 font-bold mb-3 text-white"><Layers className="text-secondary w-4 h-4"/> Architecture</h5>
                <ul className="space-y-2">
                   {project.features.slice(4, 8).map((f, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="px-6 py-3 bg-primary text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                  Live Demo <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-6 py-3 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                  Source Code <Code2 className="w-4 h-4" />
                </a>
              )}
              <button className="px-6 py-3 glass text-gray-300 font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 ml-auto sm:ml-0">
                View Full Case Study <Trophy className="w-4 h-4 text-primary" />
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
