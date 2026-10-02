 import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#coding', label: 'Coding' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Journey' },
  { href: '#certificates', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
]

const linkStyle = 'font-mono text-xs uppercase tracking-widest text-slate-400 transition hover:text-accent'
const ctaStyle = 'hidden rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110 md:block'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-white">JAY<span className="text-accent">/AI</span></a>

        <ul className="hidden gap-6 lg:flex">
          {links.map((l, i) => (
            <li key={l.href}><a href={l.href} className={linkStyle}><span className="mr-1 text-accent/60">0{i + 1}</span>{l.label}</a></li>
          ))}
        </ul>

        <a href="#contact" className={ctaStyle}>Start a conversation →</a>

        <button className="text-2xl text-white lg:hidden" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </nav>

      {open && (
        <ul className="space-y-4 border-t border-white/10 bg-ink px-6 py-5 lg:hidden">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block text-slate-300">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}