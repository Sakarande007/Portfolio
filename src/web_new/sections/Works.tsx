import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { projects, type WnProject } from '../data'

const WorkCard = ({ project, total }: { project: WnProject; total: number }) => {
  return (
    <article className="wn-work-card" style={{ zIndex: Number(project.index) }}>
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — info */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="wn-display text-5xl md:text-6xl" style={{ color: project.accent }}>
                {project.index}
              </span>
              <span className="wn-mono-label">/ {String(total).padStart(2, '0')}</span>
              <span className="wn-chip" style={{ borderColor: project.accent, color: project.accent }}>
                {project.category}
              </span>
              <span className="wn-mono-label">{project.year}</span>
            </div>

            <h3 className="wn-display mb-6" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.4rem)' }}>
              {project.title}
            </h3>

            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--wn-ink-dim)' }}>
              {project.description}
            </p>

            {/* Features — full list */}
            <p className="wn-mono-label mb-3">Key Features</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.features.map((f) => (
                <span key={f} className="wn-chip">
                  {f}
                </span>
              ))}
            </div>

            {/* Tech stack */}
            <p className="wn-mono-label mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-x-5 gap-y-1 mb-10">
              {project.tech.map((t) => (
                <span key={t} className="text-sm font-semibold uppercase tracking-wider" style={{ color: project.accent }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="wn-pill wn-pill--solid">
                  Live Project <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="wn-pill">
                  <Code2 size={14} /> Source Code
                </a>
              )}
              {!project.liveUrl && !project.githubUrl && (
                <span className="wn-mono-label self-center">Private / Client Deployment</span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right — visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden aspect-[4/3] group"
          style={{ border: '1px solid var(--wn-line)', background: 'var(--wn-bg-soft)' }}
          data-cursor
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative overflow-hidden">
              <span
                aria-hidden
                className="wn-display absolute opacity-[0.06] select-none whitespace-nowrap"
                style={{ fontSize: '11rem', color: project.accent }}
              >
                {project.index}
              </span>
              <span className="wn-display text-3xl md:text-4xl text-center px-8" style={{ color: project.accent }}>
                {project.category}
              </span>
              <span className="wn-mono-label">{project.tech.slice(0, 4).join(' · ')}</span>
            </div>
          )}
          {/* Accent glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(60% 60% at 50% 100%, ${project.accent}22, transparent)` }}
          />
        </motion.div>
      </div>
    </article>
  )
}

export const Works = () => {
  return (
    <section id="work" className="relative">
      {/* Section header */}
      <div className="wn-section pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="wn-mono-label">03 / Selected Works</span>
            <hr className="wn-hr flex-1" />
            <span className="wn-mono-label">2023 — 2026</span>
          </div>
          <h2 className="wn-display" style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}>
            SELECTED
            <span className="wn-outline-accent"> WORKS</span>
          </h2>
        </div>
      </div>

      {/* Sticky stack */}
      <div className="relative mt-16">
        {projects.map((p) => (
          <WorkCard key={p.id} project={p} total={projects.length} />
        ))}
      </div>
    </section>
  )
}
