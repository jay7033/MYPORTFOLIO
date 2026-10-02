import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  )
}