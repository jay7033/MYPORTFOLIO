 import { useState } from 'react'
import type { FormEvent } from 'react'

const FORM_ID = 'mwlpdzyr'

const label = 'block font-mono text-xs uppercase tracking-widest text-slate-500'
const field = 'mt-2 w-full border-b border-white/15 bg-transparent py-2 text-white outline-none placeholder:text-slate-600 focus:border-accent'
const button = 'rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:brightness-110 disabled:opacity-60'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/' + FORM_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur">
      <h3 className="mb-8 font-display text-2xl font-semibold text-white">Send me a message</h3>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Your name</label>
          <input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email address</label>
          <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className={field} />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="message" className={label}>Project / Opportunity</label>
        <textarea id="message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me what you are building..." className={field} />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-sm">
          {status === 'idle' && <p className="text-slate-500">I usually reply within 24 hours.</p>}
          {status === 'sending' && <p className="text-slate-400">Sending...</p>}
          {status === 'success' && <p className="text-accent">Message sent ✓ Thank you, I will get back to you soon.</p>}
          {status === 'error' && <p className="text-red-400">Something went wrong. Please try again or email me directly.</p>}
        </div>
        <button type="submit" disabled={status === 'sending'} className={button}>Send message ➤</button>
      </div>
    </form>
  )
}