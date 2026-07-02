import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import { manifesto, stats, experiences } from '../data'

/** Word-by-word scroll reveal of the manifesto text. */
const RevealText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'start 0.35'] })
  const words = text.split(' ')

  return (
    <p ref={ref} className="flex flex-wrap gap-x-[0.35em] gap-y-2 text-2xl md:text-4xl lg:text-[2.75rem] font-medium leading-snug">
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  )
}

const Word = ({ children, progress, range }: { children: string; progress: ReturnType<typeof useScroll>['scrollYProgress']; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {children}
    </motion.span>
  )
}

/** Animated counter stat. */
const Stat = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = useState(0)

  useMotionValueEvent(spring, 'change', (v) => setDisplay(Math.round(v)))

  useEffect(() => {
    if (inView) spring.set(value)
  }, [inView, value, spring])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col gap-2 py-8 px-2"
      style={{ borderTop: '1px solid var(--wn-line)' }}
    >
      <span className="wn-display" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--wn-accent)' }}>
        {display}
        {suffix}
      </span>
      <span className="wn-mono-label">{label}</span>
    </motion.div>
  )
}

export const Manifesto = () => {
  return (
    <section id="about" className="wn-section">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="wn-mono-label">01 / About</span>
          <hr className="wn-hr flex-1" />
        </div>

        <RevealText text={manifesto} />

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 mt-24">
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} />
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mt-28">
          <div className="flex items-center gap-4 mb-10">
            <span className="wn-mono-label">02 / Journey</span>
            <hr className="wn-hr flex-1" />
          </div>
          <div>
            {experiences.map((exp) => (
              <motion.div
                key={exp.year + exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="wn-row grid grid-cols-1 md:grid-cols-[8rem_1fr_1.5fr] gap-2 md:gap-8 items-baseline py-7"
              >
                <span className="wn-display text-2xl" style={{ color: 'var(--wn-accent)' }}>
                  {exp.year}
                </span>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold">{exp.role}</h4>
                  <p className="wn-mono-label mt-1">{exp.company}</p>
                </div>
                <p style={{ color: 'var(--wn-ink-dim)' }} className="leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
