 import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/portfolio'

const roles = ['AI & ML Engineer', 'Data Enthusiast', 'Problem Solver', 'Builder']

const stats = [
  { value: '10-15%', label: 'Model accuracy improvement' },
  { value: '1,000+', label: 'Records analyzed' },
  { value: '7.5', label: 'Current CGPA' },
]

const chips = [
  { text: 'Python', pos: 'left-0 top-12', delay: 0 },
  { text: 'Machine Learning', pos: 'right-0 top-24', delay: 0.8 },
  { text: 'React', pos: 'left-4 bottom-16', delay: 1.4 },
  { text: 'DSA', pos: 'right-6 bottom-8', delay: 2 },
]

const primaryBtn = 'rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110'
const ghostBtn = 'rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent'
const chipStyle = 'absolute z-10 rounded-full border border-white/15 bg-ink/80 px-3 py-1 font-mono text-xs text-accent backdrop-blur'
const photoWrap = 'relative h-full w-full overflow-hidden rounded-full border-4 border-accent/50 bg-ink'
const photoImg = 'h-full w-full origin-center scale-[1.3] object-cover object-top'

export default function Hero() {
  const [role, setRole] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % roles.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="grid-bg relative overflow-hidden">
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent2/25 blur-3xl" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">● AI Engineer · Noida, India / 2026</p>

          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.95] text-white md:text-8xl">
            Building
            <span className="text-outline block">intelligent</span>
            <span className="gradient-text block">systems.</span>
          </h1>

          <div className="mt-8 border-l-2 border-accent/40 pl-5">
            <p className="font-display text-2xl text-white">{profile.name}</p>
            <motion.p key={role} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-1 font-mono text-accent">{roles[role]}</motion.p>
            <p className="mt-3 max-w-md text-slate-400">{profile.tagline}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className={primaryBtn}>Explore selected work ↘</a>
            <a href="/resume.pdf.pdf" download className={ghostBtn}>Resume.pdf ⬇</a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 divide-x divide-white/10 border border-white/10 bg-white/5 backdrop-blur">
            {stats.map((s) => (
              <div key={s.label} className="p-4">
                <p className="font-display text-2xl font-bold text-accent">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto h-80 w-80 md:h-[26rem] md:w-[26rem]">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} className="absolute -inset-6 rounded-full border border-dashed border-accent/40" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="absolute -inset-14 rounded-full border border-accent2/30" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-accent2 opacity-40 blur-2xl" />

          <div className={photoWrap}>
            <img src="/profile.jpg.jpeg" alt={profile.name} className={photoImg} />
          </div>

          {chips.map((c) => (
            <motion.span key={c.text} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: c.delay }} className={chipStyle + ' ' + c.pos}>{c.text}</motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}