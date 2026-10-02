 import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-8 text-center font-mono text-xs text-slate-500">
      © {new Date().getFullYear()} {profile.name} · Built with React, TypeScript & Tailwind
    </footer>
  )
}