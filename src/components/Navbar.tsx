 import { useEffect, useState } from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'coding', label: 'Coding' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Journey' },
  { id: 'certificates', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

const base = 'font-mono text-xs uppercase tracking-widest transition hover:text-accent'
const ctaStyle = 'hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110 md:block'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      if (window.scrollY < 300) setActive('')
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const cls = (id: string) => base + (active === id ? ' text-accent' : ' text-slate-400')

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-white">JAY<span className="text-accent">/AI</span></a>

        <ul className="hidden gap-6 lg:flex">
          {links.map((l, i) => (
            <li key={l.id}>
              <a href={'#' + l.id} className={cls(l.id)}>
                <span className="mr-1 text-accent/60">0{i + 1}</span>{l.label}
                <span className={'mt-1 block h-px bg-accent transition-all ' + (active === l.id ? 'w-full' : 'w-0')} />
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={ctaStyle}>Start a conversation →</a>

        <button className="text-2xl text-white lg:hidden" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-white/10 bg-ink px-6 py-5 lg:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a href={'#' + l.id} onClick={() => setOpen(false)} className={'block ' + (active === l.id ? 'text-accent' : 'text-slate-300')}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}