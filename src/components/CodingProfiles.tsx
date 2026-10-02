 import Section from './Section'
import Reveal from './Reveal'
import { codingProfiles } from '../data/portfolio'

const card = 'block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,197,0.15)]'

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Coding Profiles" subtitle="Where I practice problem solving and DSA" alt>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <a href={p.url} target="_blank" rel="noreferrer" className={card}>
              <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
              <p className="mt-1 font-mono text-sm text-slate-500">@{p.handle}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-accent">View profile ↗</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}