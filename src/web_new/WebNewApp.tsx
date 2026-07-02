import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import './webnew.css'
import { Cursor } from './components/Cursor'
import { Preloader } from './components/Preloader'
import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Works } from './sections/Works'
import { Arsenal } from './sections/Arsenal'
import { ServicesList } from './sections/ServicesList'
import { MindGame } from './sections/MindGame'
import { Contact } from './sections/Contact'

/**
 * AWARD EDITION — /web_new
 * Editorial, brutalist-luxury redesign of the full portfolio.
 */
const WebNewApp = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    document.title = 'Sanket Karande — Award Edition ✦'
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="wn-root">
      <div className="wn-grain" aria-hidden="true" />
      <Cursor />
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Works />
        <Arsenal />
        <ServicesList />
        <MindGame />
        <Contact />
      </main>
    </div>
  )
}

export default WebNewApp
