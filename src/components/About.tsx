 import Section from './Section'
import Reveal from './Reveal'
import { profile } from '../data/portfolio'

const statBox = 'rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur transition hover:border-accent/50'

export default function About() {
  return (
    <Section id="about" title="About Me" alt>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">{profile.about}</p>
          <p className="mt-6 font-mono text-sm text-accent">📍 {profile.location}</p>
        </Reveal>
        <div className="grid grid-cols-3 gap-4">
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className={statBox}>
                <p className="font-display text-3xl font-bold gradient-text">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-wide text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}