 import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  alt?: boolean
}

export default function Section({ id, title, subtitle, children, alt }: Props) {
  const bg = alt ? 'bg-panel/60' : ''
  return (
    <section id={id} className={'relative py-24 ' + bg}>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">/ {id}</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
          <div className="mt-4 h-1 w-16 rounded bg-gradient-to-r from-accent to-accent2" />
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}