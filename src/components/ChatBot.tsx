import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile, skills, projects, experiences, education, certificates, achievements, codingProfiles } from '../data/portfolio'

interface Msg {
  from: 'bot' | 'user'
  text: string
}

const suggestions = ['Who is Jay?', 'Skills', 'Projects', 'Experience', 'Education', 'Contact']

const fab = 'fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-ink shadow-[0_0_30px_rgba(34,211,197,0.5)] transition hover:scale-110'
const panel = 'fixed bottom-24 right-6 z-50 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel shadow-2xl'
const botBubble = 'max-w-[85%] whitespace-pre-line rounded-2xl rounded-bl-sm bg-white/10 px-4 py-2 text-sm text-slate-200'
const userBubble = 'max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-4 py-2 text-sm font-medium text-ink'
const chip = 'rounded-full border border-accent/40 px-3 py-1 font-mono text-xs text-accent transition hover:bg-accent/10'
const inputStyle = 'flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500'

function has(q: string, words: string[]): boolean {
  return words.some((w) => q.includes(w))
}

// Backup mode: used when the AI service is not reachable
function getReply(input: string): string {
  const q = input.toLowerCase()
  const tokens = q.split(/\W+/)

  if (tokens.includes('hi') || tokens.includes('hello') || tokens.includes('hey')) {
    return "Hello! I can tell you about Jay's skills, projects, experience, education, certificates or how to contact him."
  }
  if (has(q, ['agro', 'crop'])) {
    const p = projects[0]
    return p.title + '\n' + p.description + '\nTech: ' + p.tech.join(', ')
  }
  if (has(q, ['farmdirect', 'marketplace', 'supabase'])) {
    const p = projects[1]
    if (!p) return 'Ask me about the projects and I will list them.'
    return p.title + '\n' + p.description + '\nTech: ' + p.tech.join(', ')
  }
  if (has(q, ['project', 'built', 'build', 'made'])) {
    return 'Projects:\n' + projects.map((p, i) => i + 1 + '. ' + p.title + ' (' + p.tech.slice(0, 3).join(', ') + ')').join('\n')
  }
  if (has(q, ['skill', 'tech', 'language', 'stack', 'tools', 'know'])) {
    return skills.map((s) => s.category + ': ' + s.items.join(', ')).join('\n')
  }
  if (has(q, ['experience', 'intern', 'work', 'job', 'company'])) {
    return experiences.map((e) => e.role + ' at ' + e.company + ' (' + e.duration + ')\n- ' + e.points.slice(0, 3).join('\n- ')).join('\n\n')
  }
  if (has(q, ['education', 'study', 'college', 'university', 'cgpa', 'degree', 'qualification'])) {
    return education.map((e) => e.degree + ', ' + e.institute + ' (' + e.duration + ')' + (e.score ? ' - ' + e.score : '')).join('\n')
  }
  if (has(q, ['certificate', 'certification', 'course'])) {
    return certificates.map((c) => c.title + ' - ' + c.issuer).join('\n')
  }
  if (has(q, ['achievement', 'hackathon', 'nptel', 'award'])) {
    return achievements.join('\n')
  }
  if (has(q, ['leetcode', 'gfg', 'geeks', 'codechef', 'dsa', 'coding profile', 'competitive'])) {
    return codingProfiles.map((c) => c.name + ': @' + c.handle + '\n' + c.url).join('\n')
  }
  if (has(q, ['resume', 'cv'])) {
    return 'You can download the resume using the Resume button at the top of the page.'
  }
  if (has(q, ['contact', 'email', 'mail', 'phone', 'call', 'hire', 'reach', 'linkedin', 'github'])) {
    return 'Email: ' + profile.email + '\nPhone: ' + profile.phone + '\nYou can also use the contact form at the bottom of this page.'
  }
  if (has(q, ['where', 'location', 'city', 'live', 'based'])) {
    return 'Jay is based in ' + profile.location + '.'
  }
  if (has(q, ['who', 'about', 'introduce', 'yourself', 'jay'])) {
    return profile.name + '\n' + profile.about
  }
  return 'I can answer questions about skills, projects, experience, education, certificates, coding profiles and contact details. Try one of the suggestions below.'
}

async function askAI(history: Msg[]): Promise<string> {
  const payload = history.slice(1).map((m) => ({
    role: m.from === 'user' ? 'user' : 'model',
    text: m.text,
  }))
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: payload }),
  })
  if (!res.ok) throw new Error('AI request failed')
  const data = await res.json()
  if (!data.reply) throw new Error('Empty reply')
  return data.reply as string
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([
    { from: 'bot', text: "Hi! I am Jay's AI assistant. Ask me anything about his skills, projects, experience or how to contact him." },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const send = async (text: string) => {
    const t = text.trim()
    if (!t || typing) return
    const next: Msg[] = [...messages, { from: 'user', text: t }]
    setMessages(next)
    setInput('')
    setTyping(true)

    let reply = ''
    try {
      reply = await askAI(next)
    } catch {
      reply = getReply(t)
    }

    setMessages((m) => [...m, { from: 'bot', text: reply }])
    setTyping(false)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} className={fab} aria-label="Chat">{open ? '✕' : '💬'}</button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }} className={panel}>
            <div className="border-b border-white/10 bg-white/5 px-5 py-4">
              <p className="font-display text-lg font-semibold text-white">Ask about Jay</p>
              <p className="font-mono text-xs text-accent">● AI assistant online</p>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={m.from === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div className={m.from === 'user' ? userBubble : botBubble}>{m.text}</div>
                </div>
              ))}
              {typing && <div className="flex justify-start"><div className={botBubble}>Thinking...</div></div>}
              <div ref={endRef} />
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)} className={chip}>{s}</button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="flex border-t border-white/10">
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything about Jay..." className={inputStyle} />
              <button type="submit" className="px-5 font-semibold text-accent">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}