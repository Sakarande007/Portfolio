import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

const LocalTime = () => {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
          timeZone: profile.timezone,
        }),
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{time} IST</span>
}

export const Nav = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md"
      style={{ borderBottom: '1px solid var(--wn-line)', background: 'rgba(10,10,10,0.6)' }}
    >
      <nav className="flex items-center justify-between px-5 md:px-10 h-16">
        <a href="#top" className="wn-display text-sm md:text-base tracking-tight">
          SK<span style={{ color: 'var(--wn-accent)' }}>©</span>26
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="wn-ulink text-xs font-semibold tracking-[0.2em] uppercase">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <span className="wn-mono-label hidden lg:flex items-center gap-2">
            Pune, IN — <LocalTime />
          </span>
          <a href="/" className="wn-mono-label wn-ulink hidden sm:inline" style={{ color: 'var(--wn-ink)' }}>
            ← Classic Site
          </a>
          <span className="flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.25em] uppercase" style={{ color: 'var(--wn-accent)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--wn-accent)' }} />
            Open to work
          </span>
        </div>
      </nav>
    </motion.header>
  )
}
