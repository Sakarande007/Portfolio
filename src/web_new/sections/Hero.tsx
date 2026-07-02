import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { profile, marqueeWords } from '../data'
import { Marquee } from '../components/Marquee'

const letterAnim = {
  hidden: { y: '110%', rotate: 4 },
  show: (i: number) => ({
    y: '0%',
    rotate: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.05 * i },
  }),
}

const KineticWord = ({ word, outline = false, startDelay = 0 }: { word: string; outline?: boolean; startDelay?: number }) => (
  <span className="flex overflow-hidden">
    {word.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i + startDelay}
        variants={letterAnim}
        initial="hidden"
        animate="show"
        whileHover={{ y: -14, color: 'var(--wn-accent)', transition: { duration: 0.25 } }}
        className={`inline-block ${outline ? 'wn-outline' : ''}`}
        style={{ willChange: 'transform' }}
      >
        {char}
      </motion.span>
    ))}
  </span>
)

export const Hero = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-24">
      {/* Giant background role text */}
      <motion.span
        style={{ y }}
        aria-hidden
        className="wn-display wn-outline absolute top-[16vh] left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.07] pointer-events-none select-none"
      >
        <span style={{ fontSize: 'clamp(6rem, 22vw, 20rem)' }}>DEVELOPER</span>
      </motion.span>

      <motion.div style={{ opacity }} className="px-5 md:px-10 relative z-10">
        {/* Intro line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
        >
          <p className="wn-mono-label max-w-xs leading-relaxed">
            {profile.role} / {profile.subRole} — crafting enterprise software, AI products &amp; scalable systems from {profile.location.split(',')[0]}.
          </p>
          <div className="flex gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="wn-pill">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="wn-pill">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="wn-pill wn-pill--solid">
              Résumé
            </a>
          </div>
        </motion.div>

        {/* Name — kinetic type */}
        <h1 className="wn-display" style={{ fontSize: 'clamp(3.2rem, 13.5vw, 13rem)' }}>
          <KineticWord word={profile.firstName} />
          <span className="flex items-baseline gap-[2vw]">
            <KineticWord word={profile.lastName} outline startDelay={6} />
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.3, type: 'spring', stiffness: 200, damping: 14 }}
              className="hidden md:inline-block rounded-full"
              style={{ width: 'clamp(1.5rem, 4vw, 4rem)', height: 'clamp(1.5rem, 4vw, 4rem)', background: 'var(--wn-accent)' }}
            />
          </span>
        </h1>

        {/* Tagline row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-wrap items-end justify-between gap-6 mt-8 pb-10"
        >
          <p className="text-lg md:text-2xl max-w-xl font-light" style={{ color: 'var(--wn-ink-dim)' }}>
            “{profile.tagline}”
          </p>
          <a href="#work" className="flex items-center gap-3 wn-mono-label" style={{ color: 'var(--wn-ink)' }}>
            Scroll — Selected Works
            <span className="w-10 h-10 rounded-full flex items-center justify-center animate-bounce" style={{ border: '1px solid var(--wn-line)' }}>
              <ArrowDown size={16} />
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Skill marquee ribbon */}
      <div style={{ borderTop: '1px solid var(--wn-line)', borderBottom: '1px solid var(--wn-line)' }}>
        <Marquee speed={30} className="py-4">
          {marqueeWords.map((w) => (
            <span key={w} className="wn-display flex items-center text-xl md:text-3xl mx-6" style={{ color: 'var(--wn-ink)' }}>
              {w}
              <span className="ml-12 text-base" style={{ color: 'var(--wn-accent)' }}>✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
