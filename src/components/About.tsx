import Section from './Section'
import { profile } from '../data/portfolio'

const statBox = 'rounded-xl bg-slate-50 p-5 text-center shadow-sm'

export default function About() {
  return (
    <Section id="about" title="About Me" alt>
      <div className="grid gap-10 md:grid-cols-2">
        <p className="leading-relaxed text-slate-600">{profile.about}</p>
        <div className="grid grid-cols-3 gap-4">
          {profile.stats.map((s) => (
            <div key={s.label} className={statBox}>
              <p className="text-2xl font-bold text-indigo-600">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}