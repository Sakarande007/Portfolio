import { motion } from 'framer-motion';
import { Cloud, Code2, Database, Layout, Monitor, Cpu } from 'lucide-react';

const services = [
  {
    title: "Full Stack Development",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description: "End-to-end web application development using modern frameworks like React, Node.js, and TypeScript."
  },
  {
    title: "Enterprise ERP Systems",
    icon: <Layout className="w-8 h-8 text-secondary" />,
    description: "Custom ERP and CRM solutions tailored for manufacturing and supply chain operations."
  },
  {
    title: "AI Applications",
    icon: <Cpu className="w-8 h-8 text-pink-500" />,
    description: "Integrating LLMs, Vector Search, and RAG architectures for intelligent enterprise applications."
  },
  {
    title: "Desktop Software",
    icon: <Monitor className="w-8 h-8 text-green-500" />,
    description: "Offline-first inventory management and desktop tools using .NET and C#."
  },
  {
    title: "Database Design",
    icon: <Database className="w-8 h-8 text-yellow-500" />,
    description: "Optimized database architectures with SQL, NoSQL, and high-performance caching (Redis)."
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-8 h-8 text-blue-500" />,
    description: "Scalable deployments using Docker, Nginx, and cloud hosting for production environments."
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary mb-4 uppercase">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-black">Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 inline-block group-hover:bg-white/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
