import { useEffect, useRef } from 'react'

/** Blend-mode dot cursor that grows over interactive elements. */
export const Cursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let x = -100
    let y = -100
    let cx = -100
    let cy = -100
    let raf = 0

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor]')
      dot.classList.toggle('is-hover', !!interactive)
    }

    const loop = () => {
      cx += (x - cx) * 0.2
      cy += (y - cy) * 0.2
      dot.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className="wn-cursor" aria-hidden="true" />
}
