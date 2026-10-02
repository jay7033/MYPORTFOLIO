import Section from './Section'
import { projects } from '../data/portfolio'

const card = 'flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'
const tag = 'rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600'
const linkPrimary = 'text-indigo-600 hover:underline'
const linkSecondary = 'text-slate-700 hover:underline'

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of the things I have built" alt>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className={card}>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 text-slate-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className={tag}>{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-4 text-sm font-semibold">
              {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={linkPrimary}>Live Demo ↗</a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer" className={linkSecondary}>GitHub ↗</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}