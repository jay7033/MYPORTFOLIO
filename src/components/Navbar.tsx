 import { useState } from 'react'
import { profile } from '../data/portfolio'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
    { href: '#coding', label: 'Coding' },
]

const linkStyle = 'text-sm font-medium text-slate-600 hover:text-indigo-600'
const resumeStyle = 'hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white md:block'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-indigo-600">{profile.name.split(' ')[0]}.</a>

        <ul className="hidden gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className={linkStyle}>{l.label}</a></li>
          ))}
        </ul>

        <a href="/resume.pdf" target="_blank" className={resumeStyle}>Resume</a>

        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </nav>

      {open && (
        <ul className="space-y-3 border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block text-slate-700">{l.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}