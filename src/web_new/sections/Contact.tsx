import { motion } from 'framer-motion'
import { ArrowUpRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { profile } from '../data'
import { Marquee } from '../components/Marquee'

export const Contact = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="contact" className="relative pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="wn-mono-label">07 / Contact</span>
          <hr className="wn-hr flex-1" />
          <span className="flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.25em] uppercase" style={{ color: 'var(--wn-accent)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--wn-accent)' }} />
            Available for freelance
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="wn-display mb-12"
          style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}
        >
          LET’S <span className="wn-outline-accent">TALK</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          <div>
            <p className="wn-mono-label mb-3">Email</p>
            <button onClick={copyEmail} className="flex items-center gap-3 text-lg md:text-xl font-bold wn-ulink" data-cursor>
              {profile.email}
              {copied ? <Check size={16} style={{ color: 'var(--wn-accent)' }} /> : <Copy size={16} style={{ color: 'var(--wn-ink-dim)' }} />}
            </button>
          </div>
          <div>
            <p className="wn-mono-label mb-3">Phone</p>
            <a href={profile.phoneHref} className="text-lg md:text-xl font-bold wn-ulink">
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="wn-mono-label mb-3">Studio</p>
            <p className="text-lg md:text-xl font-bold">{profile.location}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pb-24">
          <a href={`mailto:${profile.email}`} className="wn-pill wn-pill--solid">
            Start a Project <ArrowUpRight size={14} />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="wn-pill">
            GitHub <ArrowUpRight size={14} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="wn-pill">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="wn-pill">
            Résumé <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--wn-line)' }}>
        <Marquee speed={40} className="py-3 opacity-40">
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className="wn-mono-label mx-8">
              SANKET KARANDE © 2026 — DESIGNED &amp; ENGINEERED WITH OBSESSION —
            </span>
          ))}
        </Marquee>
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-10 py-5" style={{ borderTop: '1px solid var(--wn-line)' }}>
          <span className="wn-mono-label">© 2026 {profile.name}. All rights reserved.</span>
          <a href="/" className="wn-mono-label wn-ulink" style={{ color: 'var(--wn-ink)' }}>
            ← Back to Classic Portfolio
          </a>
          <a href="#top" className="wn-mono-label wn-ulink" style={{ color: 'var(--wn-ink)' }}>
            Back to Top ↑
          </a>
        </div>
      </footer>
    </section>
  )
}
