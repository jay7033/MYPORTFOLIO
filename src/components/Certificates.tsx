import Section from './Section'
import { certificates, achievements } from '../data/portfolio'

const card = 'rounded-xl border border-slate-200 bg-slate-50 p-6'

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates & Achievements" alt>
      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((c) => (
          <div key={c.title} className={card}>
            <p className="text-xs text-indigo-600">{c.date}</p>
            <h3 className="mt-1 font-semibold">{c.title}</h3>
            <p className="text-slate-500">{c.issuer}</p>
            {c.link && <a href={c.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-indigo-600 hover:underline">View Certificate ↗</a>}
          </div>
        ))}
      </div>

      <h3 className="mb-4 mt-12 text-xl font-semibold">Achievements</h3>
      <ul className="list-disc space-y-2 pl-5 text-slate-600">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </Section>
  )
}