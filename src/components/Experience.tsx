 import Section from './Section'
import Reveal from './Reveal'
import { experiences, education } from '../data/portfolio'

const timeline = 'space-y-10 border-l border-accent/30 pl-8'
const dot = 'absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-ink'
const date = 'font-mono text-xs uppercase tracking-widest text-accent'

export default function Experience() {
  return (
    <Section id="experience" title="Journey" subtitle="Experience and education" alt>
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h3 className="mb-8 font-display text-2xl font-semibold text-white">Experience</h3>
          <div className={timeline}>
            {experiences.map((e) => (
              <Reveal key={e.role + e.company}>
                <div className="relative">
                  <span className={dot} />
                  <p className={date}>{e.duration}</p>
                  <h4 className="mt-1 text-lg font-semibold text-white">{e.role}</h4>
                  <p className="text-slate-500">{e.company}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 font-display text-2xl font-semibold text-white">Education</h3>
          <div className={timeline}>
            {education.map((ed) => (
              <Reveal key={ed.degree}>
                <div className="relative">
                  <span className={dot} />
                  <p className={date}>{ed.duration}</p>
                  <h4 className="mt-1 text-lg font-semibold text-white">{ed.degree}</h4>
                  <p className="text-slate-400">{ed.institute}</p>
                  {ed.score && <p className="mt-1 font-mono text-sm text-slate-500">{ed.score}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}