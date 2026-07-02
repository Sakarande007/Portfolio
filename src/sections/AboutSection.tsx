import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ value, label, suffix = "+" }: { value: number, label: string, suffix?: string }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const el = countRef.current;
    if (!el) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { innerHTML: 0 }, 
        { 
          innerHTML: value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function() {
            el.innerHTML = Math.round(Number(this.targets()[0].innerHTML)) + suffix;
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <div className="flex flex-col items-center justify-center p-6 glass-card rounded-2xl hover:scale-105 transition-transform duration-300">
      <span ref={countRef} className="text-5xl md:text-6xl font-black text-primary mb-2">0</span>
      <span className="text-sm md:text-base text-gray-400 font-medium text-center uppercase tracking-wider">{label}</span>
    </div>
  );
};

export const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          stagger: 0.2, 
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
          }
        }
      );
    }, el);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase about-text">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight about-text">
              Building Enterprise <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Solutions</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed about-text font-light">
              I'm a Full Stack Developer specializing in enterprise software, ERP systems, manufacturing solutions, AI applications, desktop software, and scalable cloud deployments.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed about-text font-light border-l-4 border-primary pl-6 py-2 bg-white/5 rounded-r-lg">
              I build production-ready applications from concept to deployment, focusing on performance, scalability, and exceptional user experiences.
            </p>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 about-text">
            <Counter value={2} label="Years Experience" />
            <Counter value={25} label="Projects" />
            <Counter value={10} label="Happy Clients" />
            <Counter value={5} label="Production Systems" suffix="" />
          </div>

        </div>
      </div>
    </section>
  );
};
