import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}

/** Infinite marquee — duplicated track for a seamless loop. */
export const Marquee = ({ children, speed = 28, reverse = false, className = '' }: MarqueeProps) => (
  <div className={`wn-marquee ${reverse ? 'wn-marquee--reverse' : ''} ${className}`} aria-hidden="true">
    {[0, 1].map((i) => (
      <div key={i} className="wn-marquee__track" style={{ ['--wn-marquee-speed' as string]: `${speed}s` }}>
        {children}
      </div>
    ))}
  </div>
)
