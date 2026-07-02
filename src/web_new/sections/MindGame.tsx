import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, RefreshCcw, Sparkles } from 'lucide-react'

// ─────────────────────────────────────────────────────────────
//  THE MIND READER — a classic psychological illusion.
//  Pick any 2-digit number N, add its digits, subtract the sum
//  from N. The result is ALWAYS a multiple of 9 between 9 & 81.
//  Every such number secretly shares one symbol — so we always
//  "read" the visitor's mind. 🤯
// ─────────────────────────────────────────────────────────────

const SYMBOL_POOL = ['◈', '✦', '☾', '♠', '⚡', '❋', '✺', '☘', '⌘', '♜', '✧', '◉', '⬡', '✿', '♞', '⚙', '♆', '☄', '✵', '⚔', '❖', '♛', '☂', '⚓']

const MAGIC_NUMBERS = new Set([9, 18, 27, 36, 45, 54, 63, 72, 81])

interface Board {
  symbols: string[] // index = number 0..99
  magic: string
}

const buildBoard = (): Board => {
  const shuffled = [...SYMBOL_POOL].sort(() => Math.random() - 0.5)
  const magic = shuffled[0]
  const others = shuffled.slice(1)
  const symbols = Array.from({ length: 100 }, (_, n) =>
    MAGIC_NUMBERS.has(n) ? magic : others[Math.floor(Math.random() * others.length)],
  )
  return { symbols, magic }
}

type Step = 'intro' | 'board' | 'reveal'

export const MindGame = () => {
  const [step, setStep] = useState<Step>('intro')
  const [round, setRound] = useState(0)
  const board = useMemo(buildBoard, [round])

  const playAgain = () => {
    setRound((r) => r + 1)
    setStep('board')
  }

  return (
    <section id="mindgame" className="wn-section overflow-hidden" style={{ background: 'var(--wn-bg-soft)', borderTop: '1px solid var(--wn-line)' }}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-14">
          <span className="wn-mono-label">06 / One Last Thing</span>
          <hr className="wn-hr flex-1" />
        </div>

        <AnimatePresence mode="wait">
          {step === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <Brain size={44} style={{ color: 'var(--wn-accent)' }} className="mb-6" />
              <h2 className="wn-display mb-6" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
                I CAN READ
                <br />
                <span className="wn-outline-accent">YOUR MIND</span>
              </h2>
              <p className="max-w-xl text-lg mb-10" style={{ color: 'var(--wn-ink-dim)' }}>
                Before you go — a 30-second psychological experiment. No tricks, no camera, no data.
                Just you, your mind… and me.
              </p>
              <button onClick={() => setStep('board')} className="wn-pill wn-pill--solid" data-cursor>
                <Sparkles size={15} /> Try It — I Dare You
              </button>
            </motion.div>
          )}

          {step === 'board' && (
            <motion.div
              key={`board-${round}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-2xl mx-auto mb-10 text-left grid gap-3">
                {[
                  ['1', 'Think of any two-digit number. (e.g. 47)'],
                  ['2', 'Add its two digits together. (4 + 7 = 11)'],
                  ['3', 'Subtract that sum from your number. (47 − 11 = 36)'],
                  ['4', 'Find your NEW number below & memorize its symbol.'],
                ].map(([n, text]) => (
                  <motion.p
                    key={n}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: Number(n) * 0.15 }}
                    className="flex items-baseline gap-4"
                  >
                    <span className="wn-display text-xl shrink-0" style={{ color: 'var(--wn-accent)' }}>
                      {n}.
                    </span>
                    <span style={{ color: 'var(--wn-ink)' }}>{text}</span>
                  </motion.p>
                ))}
              </div>

              {/* Symbol board 0–99 */}
              <div className="grid grid-cols-10 gap-1 md:gap-1.5 max-w-3xl mx-auto mb-10 select-none">
                {board.symbols.map((sym, n) => (
                  <div key={n} className="wn-symbol-cell">
                    <span>{n}</span>
                    <span className="sym">{sym}</span>
                  </div>
                ))}
              </div>

              <p className="wn-mono-label mb-6">Got your symbol locked in your mind? Don’t say it out loud.</p>
              <button onClick={() => setStep('reveal')} className="wn-pill wn-pill--solid" data-cursor>
                <Brain size={15} /> Read My Mind
              </button>
            </motion.div>
          )}

          {step === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <p className="wn-mono-label mb-10">Connecting to your neural frequency…</p>

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 90, damping: 12, delay: 0.4 }}
                className="wn-crystal mb-10"
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-7xl"
                  style={{ color: 'var(--wn-accent)', textShadow: '0 0 40px var(--wn-accent)' }}
                >
                  {board.magic}
                </motion.span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="wn-display mb-4"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
              >
                THIS WAS YOUR SYMBOL. 🤯
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="max-w-xl text-lg mb-10"
                style={{ color: 'var(--wn-ink-dim)' }}
              >
                If I can read your mind in 30 seconds —{' '}
                <span style={{ color: 'var(--wn-ink)' }}>imagine what I can build for your business.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a href="#contact" className="wn-pill wn-pill--solid" data-cursor>
                  <Sparkles size={15} /> Let’s Build Magic Together
                </a>
                <button onClick={playAgain} className="wn-pill" data-cursor>
                  <RefreshCcw size={15} /> How?! Play Again
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
