import Section from './Section'
import { experiences, education } from '../data/portfolio'

const timeline = 'space-y-8 border-l-2 border-indigo-200 pl-6'
const date = 'text-sm font-medium text-indigo-600'

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-6 text-xl font-semibold">Experience</h3>
          <div className={timeline}>
            {experiences.map((e) => (
              <div key={e.role + e.company}>
                <p className={date}>{e.duration}</p>
                <h4 className="font-semibold">{e.role}</h4>
                <p className="text-slate-500">{e.company}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl font-semibold">Education</h3>
          <div className={timeline}>
            {education.map((ed) => (
              <div key={ed.degree}>
                <p className={date}>{ed.duration}</p>
                <h4 className="font-semibold">{ed.degree}</h4>
                <p className="text-slate-600">{ed.institute}</p>
                {ed.score && <p className="text-sm text-slate-500">{ed.score}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}