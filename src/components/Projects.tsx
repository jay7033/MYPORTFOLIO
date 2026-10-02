 import Section from './Section'
import Reveal from './Reveal'
import { projects } from '../data/portfolio'

const card = 'flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(34,211,197,0.15)]'
const tag = 'rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-slate-300'
const linkA = 'text-accent hover:underline'
const linkB = 'text-slate-300 hover:text-white'

export default function Projects() {
  return (
    <Section id="projects" title="Selected Work" subtitle="Projects where I applied AI and full-stack skills">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <article className={card}>
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 flex-1 text-slate-400">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className={tag}>{t}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-5 text-sm font-semibold">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={linkA}>Live Demo ↗</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={linkB}>GitHub ↗</a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}