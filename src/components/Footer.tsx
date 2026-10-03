 import type { ReactNode } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si'
import { profile, codingProfiles } from '../data/portfolio'

interface Social {
  label: string
  href: string
  icon: ReactNode
}

const iconBtn = 'flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(34,211,197,0.3)]'
const topBtn = 'flex items-center gap-2 rounded-full border border-accent/40 px-4 py-2 font-mono text-xs uppercase tracking-widest text-accent transition hover:bg-accent/10'

function urlOf(name: string): string {
  const found = codingProfiles.find((p) => p.name === name)
  return found ? found.url : '#'
}

export default function Footer() {
  const socials: Social[] = [
    { label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedinIn /> },
    { label: 'GitHub', href: profile.github, icon: <FaGithub /> },
    { label: 'LeetCode', href: urlOf('LeetCode'), icon: <SiLeetcode /> },
    { label: 'GeeksforGeeks', href: urlOf('GeeksforGeeks'), icon: <SiGeeksforgeeks /> },
    { label: 'CodeChef', href: urlOf('CodeChef'), icon: <SiCodechef /> },
    { label: 'Email', href: 'mailto:' + profile.email, icon: <FaEnvelope /> },
  ]

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-bold text-white">JAY<span className="text-accent">/AI</span></p>
          <p className="mt-1 text-sm text-slate-500">AI & ML Engineer · Noida, India</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label} className={iconBtn}>{s.icon}</a>
          ))}
        </div>

        <button onClick={goTop} className={topBtn}>Back to top <FaArrowUp /></button>
      </div>

      <div className="border-t border-white/10 py-5 text-center font-mono text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript & Tailwind
      </div>
    </footer>
  )
}