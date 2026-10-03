import type { ReactNode } from 'react'
import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaBrain } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiVite, SiMysql, SiPostgresql, SiSupabase, SiFramer, SiVercel } from 'react-icons/si'

interface Tech {
  name: string
  icon: ReactNode
}

const techs: Tech[] = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C', icon: <span className="font-display font-bold">C</span> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Vite', icon: <SiVite /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'Machine Learning', icon: <FaBrain /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'Supabase', icon: <SiSupabase /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Vercel', icon: <SiVercel /> },
]

const item = 'mx-3 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-300 transition hover:border-accent/50 hover:text-accent'

export default function TechMarquee() {
  const loop = [...techs, ...techs]

  return (
    <section className="border-y border-white/10 bg-panel/60 py-8">
      <p className="mb-5 text-center font-mono text-xs uppercase tracking-widest text-slate-500">Tech I work with</p>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((t, i) => (
            <div key={t.name + i} className={item}>
              <span className="text-xl text-accent">{t.icon}</span>
              <span className="whitespace-nowrap font-mono text-sm">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}