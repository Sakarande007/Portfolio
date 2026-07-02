import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data'

export const ServicesList = () => {
  return (
    <section id="services" className="wn-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="wn-mono-label">05 / Capabilities</span>
          <hr className="wn-hr flex-1" />
        </div>

        <h2 className="wn-display mb-16" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          WHAT I <span className="wn-outline-accent">DELIVER</span>
        </h2>

        <div>
          {services.map((service, i) => (
            <motion.a
              key={service.index}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.04 }}
              className="wn-row group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[5rem_20rem_1fr_auto] items-center gap-4 md:gap-8 py-8"
            >
              <span className="wn-mono-label">{service.index}</span>
              <h3 className="wn-display text-xl md:text-3xl group-hover:translate-x-2 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="hidden md:block leading-relaxed pr-8" style={{ color: 'var(--wn-ink-dim)' }}>
                {service.description}
              </p>
              <span
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:rotate-45"
                style={{ border: '1px solid var(--wn-line)', color: 'var(--wn-accent)' }}
              >
                <ArrowUpRight size={18} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
