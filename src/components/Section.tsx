import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
  alt?: boolean
}

export default function Section({ id, title, subtitle, children, alt }: Props) {
  const bg = alt ? 'bg-white' : ''
  return (
    <section id={id} className={'py-20 ' + bg}>
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-500">{subtitle}</p>}
        <div className="mt-3 h-1 w-16 rounded bg-indigo-600" />
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}