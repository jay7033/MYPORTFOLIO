import Section from './Section'
import { skills } from '../data/portfolio'

const card = 'rounded-xl border border-slate-200 bg-white p-6'
const chip = 'rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700'

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies jinke saath mai kaam karta hu">
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.category} className={card}>
            <h3 className="font-semibold">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className={chip}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}