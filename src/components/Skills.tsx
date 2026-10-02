 import Section from './Section'
import Reveal from './Reveal'
import { skills } from '../data/portfolio'

const card = 'h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,197,0.15)]'
const chip = 'rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-xs text-accent'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className={card}>
              <h3 className="font-display text-lg font-semibold text-white">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={chip}>{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}