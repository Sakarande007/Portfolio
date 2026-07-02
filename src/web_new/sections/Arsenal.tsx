import { motion } from 'framer-motion'
import { skills } from '../data'
import { Marquee } from '../components/Marquee'

export const Arsenal = () => {
  return (
    <section id="arsenal" className="relative" style={{ background: 'var(--wn-bg-soft)' }}>
      {/* Top ribbon */}
      <div style={{ borderTop: '1px solid var(--wn-line)', borderBottom: '1px solid var(--wn-line)' }}>
        <Marquee speed={24} reverse className="py-3">
          {skills.flatMap((g) => g.items).map((item, i) => (
            <span key={item + i} className="wn-mono-label mx-5 flex items-center" style={{ color: 'var(--wn-ink)' }}>
              {item} <span className="ml-10" style={{ color: 'var(--wn-accent)' }}>●</span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="wn-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <span className="wn-mono-label">04 / Arsenal</span>
            <hr className="wn-hr flex-1" />
          </div>

          <h2 className="wn-display mb-16" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            TECHNOLOGIES <span className="wn-outline">&amp; TOOLS</span>
          </h2>

          <div>
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="wn-row grid grid-cols-1 md:grid-cols-[3rem_16rem_1fr] gap-3 md:gap-8 items-start py-8"
              >
                <span className="wn-mono-label pt-2">0{i + 1}</span>
                <h3 className="wn-display text-2xl md:text-3xl" style={{ color: 'var(--wn-accent)' }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="wn-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
