import type { ReactNode } from 'react'
import { FaBrain, FaCode, FaChartBar, FaPuzzlePiece } from 'react-icons/fa'
import Section from './Section'
import Reveal from './Reveal'

interface Service {
  title: string
  text: string
  tags: string[]
  icon: ReactNode
}

const services: Service[] = [
  {
    title: 'AI & ML Solutions',
    text: 'Building machine learning models for classification, prediction and decision-making, from data to evaluation.',
    tags: ['Python', 'Model Training', 'Predictive Analysis'],
    icon: <FaBrain />,
  },
  {
    title: 'Full StackWeb Development',
    text: 'Creating fast, responsive and clean web applications with modern frontend tools and cloud databases.',
    tags: ['React', 'Tailwind CSS', 'Supabase', 'html', 'css', 'javascript', 'typescript', 'next.js', 'node.js', 'spring boot'],
    icon: <FaCode />,
  },
  {
    title: 'Data Analysis',
    text: 'Cleaning and preprocessing datasets to find patterns, trends and anomalies that improve model accuracy.',
    tags: ['Data Preprocessing', 'Feature Optimization'],
    icon: <FaChartBar />,
  },
  {
    title: 'Problem Solving',
    text: 'Solving problems with strong Data Structures and Algorithms using C, Java and Python.',
    tags: ['DSA', 'C', 'Java'],
    icon: <FaPuzzlePiece />,
  },
]

const card = 'h-full rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(34,211,197,0.15)]'
const iconBox = 'flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-2xl text-accent'
const tag = 'rounded border border-white/10 bg-white/5 px-2 py-1 font-mono text-xs text-slate-300'

export default function Services() {
  return (
    <Section id="services" title="What I Do" subtitle="Areas where I can add value to your team or project">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className={card}>
              <div className={iconBox}>{s.icon}</div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className={tag}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}