import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Code2, Briefcase, Download, ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const title = "SANKET KARANDE".split("");

  useEffect(() => {
    // Basic GSAP animation for the hero section on load
    gsap.fromTo(
      ".hero-stagger",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass px-4 py-2 rounded-full mb-8 flex items-center gap-2 hero-stagger"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-sm font-medium tracking-wider text-gray-300">OPEN TO WORK</span>
        </motion.div>

        <h1 ref={textRef} className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 flex overflow-hidden">
          {title.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier
                delay: index * 0.05,
              }}
              className={char === " " ? "mr-4 md:mr-8" : "text-glow"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <h2 className="text-xl md:text-3xl font-bold text-gray-400 mb-6 hero-stagger">
          <span className="text-primary">Full Stack Developer</span> & Enterprise Software Engineer
        </h2>
        
        <p className="text-sm md:text-lg text-gray-500 mb-8 flex items-center gap-3 hero-stagger font-medium">
          <span>React</span> &bull; <span>Node</span> &bull; <span>AI</span> &bull; <span>.NET</span>
        </p>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-12 hero-stagger leading-relaxed">
          "I build enterprise-grade software, AI-powered products, and scalable web applications."
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 hero-stagger">
          <a href="#contact" className="group relative px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform">
            <span className="relative z-10">Hire Me</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
          </a>
          
          <a href="/resume.pdf" target="_blank" className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <div className="flex gap-4 ml-4">
            <a href="https://github.com/Sakarande007" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-all hover:scale-110">
              <Code2 className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanket-karande-6a547a204/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-secondary transition-all hover:scale-110">
              <Briefcase className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Alternative Portfolios Links */}
        <div className="flex flex-col items-center justify-center gap-4 mt-12 hero-stagger w-full">
          <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">Alternative Portfolio Designs</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/web_new" className="px-6 py-2 text-sm font-bold rounded-full transition-all flex items-center gap-2 hover:scale-105 bg-gradient-to-r from-primary to-secondary text-black">
              ✦ Award Edition (New)
            </a>
            <a href="/stitch/sanket_karande_animated_portfolio/index.html" target="_blank" rel="noreferrer" className="px-6 py-2 glass text-sm text-gray-300 font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 hover:text-primary hover:scale-105">
              Animated Theme
            </a>
            <a href="/stitch/sanket_karande_full_stack_portfolio/index.html" target="_blank" rel="noreferrer" className="px-6 py-2 glass text-sm text-gray-300 font-medium rounded-full hover:bg-white/10 transition-colors flex items-center gap-2 hover:text-secondary hover:scale-105">
              Full Stack Theme
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs tracking-widest text-gray-500 uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-gray-500" />
      </div>
    </section>
  );
};
