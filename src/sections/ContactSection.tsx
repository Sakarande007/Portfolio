import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert("Message sent successfully!");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6 relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Availability */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass px-6 py-3 rounded-full mb-8 flex items-center gap-3 border-green-500/30 bg-green-500/5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
            <span className="text-sm font-bold tracking-wider text-green-400 uppercase">Currently Available for Freelance</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Together</span></h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next big project? Drop me a message and let's turn your ideas into reality.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Details */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                  <a href="mailto:sakarande007@gmail.com" className="text-xl font-bold text-white hover:text-primary transition-colors">sakarande007@gmail.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</h4>
                  <a href="tel:+918956818400" className="text-xl font-bold text-white hover:text-primary transition-colors">+91 8956818400</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                  <span className="text-xl font-bold text-white">Pune, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Send a Message</h3>
              
              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="relative z-10 w-full bg-primary hover:bg-primary/90 text-black font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group overflow-hidden mt-4"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out opacity-20"></div>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
