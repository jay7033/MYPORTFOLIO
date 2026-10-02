 import Section from './Section'
import Reveal from './Reveal'
import { certificates, achievements } from '../data/portfolio'

const card = 'h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50'

export default function Certificates() {
  return (
    <Section id="certificates" title="Credentials" subtitle="Certifications and achievements">
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <div className={card}>
              <p className="font-mono text-xs text-accent">{c.date}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-slate-400">{c.issuer}</p>
              {c.link && <a href={c.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-accent hover:underline">View certificate ↗</a>}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-5 mt-14 font-display text-2xl font-semibold text-white">Achievements</h3>
        <ul className="space-y-3">
          {achievements.map((a) => (
            <li key={a} className="flex gap-3 text-slate-300"><span className="text-accent">◆</span>{a}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}