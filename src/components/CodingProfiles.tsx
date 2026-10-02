import Section from './Section'
import { codingProfiles } from '../data/portfolio'

const card = 'rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-600 hover:shadow-md'

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Coding Profiles" subtitle="Where I practice problem solving and DSA">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((p) => (
          <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={card}>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-slate-500">@{p.handle}</p>
            <p className="mt-4 text-sm font-semibold text-indigo-600">View Profile ↗</p>
          </a>
        ))}
      </div>
    </Section>
  )
}