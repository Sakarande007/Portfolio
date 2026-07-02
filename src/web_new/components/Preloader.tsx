import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data'

/** Counter preloader that wipes upward when done. */
export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [count, setCount] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      // Ease-out counting: big jumps first, crawl at the end
      const step = Math.max(1, Math.round((100 - current) / 9))
      current = Math.min(100, current + step)
      setCount(current)
      if (current >= 100) {
        clearInterval(interval)
        setTimeout(() => setLeaving(true), 350)
        setTimeout(onDone, 1150)
      }
    }, 55)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center"
          style={{ background: 'var(--wn-bg)' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="wn-mono-label mb-6"
          >
            {profile.name} — Portfolio ’26
          </motion.p>
          <span
            className="wn-display"
            style={{ fontSize: 'clamp(4rem, 15vw, 11rem)', color: 'var(--wn-accent)' }}
          >
            {count}
            <span className="wn-outline" style={{ WebkitTextStroke: '1.5px var(--wn-ink-dim)' }}>%</span>
          </span>
          <div className="w-48 h-[2px] mt-8 overflow-hidden rounded-full" style={{ background: 'var(--wn-line)' }}>
            <div
              className="h-full transition-[width] duration-100"
              style={{ width: `${count}%`, background: 'var(--wn-accent)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
