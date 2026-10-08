import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/portfolio'

const SCRIPT: string[] = [
  'Hello, and welcome to my portfolio.',
  'I am Jay Kumar Mishra, a B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning.',
  'Building intelligent systems. Technology that solves real-world problems.',
  'I recently completed an AI internship at CODTECH IT Solutions, and I have built projects like AgroVision AI and FarmDirect.',
  'I work with Python, Java, React and Tailwind CSS, and I am open to internships and collaborations.',
  'Please explore my work, or ask my AI chatbot anything. Thank you for visiting.',
]

const KEY = 'intro-seen'
const MALE_HINTS = ['Google UK English Male', 'Ravi', 'David', 'Mark', 'Prabhat', 'Daniel', 'Rishi', 'Aaron', 'Guy', 'Alex', 'Male']

type Phase = 'idle' | 'speaking' | 'done'

function pickVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.toLowerCase().startsWith('en'))
  for (const hint of MALE_HINTS) {
    const found = voices.find((v) => v.name.includes(hint))
    if (found) return found
  }
  return voices.length > 0 ? voices[0] : null
}

function markSeen() {
  try {
    sessionStorage.setItem(KEY, '1')
  } catch {
    // ignore
  }
}

const bigBtn = 'rounded-lg bg-accent px-8 py-3 font-semibold text-ink transition hover:brightness-110'
const ghostBtn = 'rounded-lg border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-accent hover:text-accent'
const replayBtn = 'fixed bottom-6 left-6 z-50 rounded-full border border-accent/40 bg-ink/80 px-4 py-2 font-mono text-xs text-accent backdrop-blur transition hover:bg-accent/10'
const photoWrap = 'relative h-full w-full overflow-hidden rounded-full border-4 border-accent/60 bg-ink'
const photoImg = 'h-full w-full origin-center scale-[1.3] object-cover object-top'

export default function VoiceIntro() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  const [show, setShow] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(KEY) !== '1'
    } catch {
      return true
    }
  })
  const [phase, setPhase] = useState<Phase>('idle')
  const [line, setLine] = useState(0)
  const active = useRef(false)

  useEffect(() => {
    if (!supported) return
    window.speechSynthesis.getVoices()
    return () => {
      active.current = false
      window.speechSynthesis.cancel()
    }
  }, [supported])

  const finish = () => {
    active.current = false
    markSeen()
    setPhase('done')
    setTimeout(() => setShow(false), 1500)
  }

  const speakLine = (i: number) => {
    if (!active.current) return
    if (i >= SCRIPT.length) {
      finish()
      return
    }
    setLine(i)
    const u = new SpeechSynthesisUtterance(SCRIPT[i])
    const voice = pickVoice()
    if (voice) {
      u.voice = voice
      u.lang = voice.lang
    } else {
      u.lang = 'en-IN'
    }
    u.rate = 0.95
    u.pitch = 0.9
    u.onend = () => speakLine(i + 1)
    u.onerror = () => speakLine(i + 1)
    window.speechSynthesis.speak(u)
  }

  const start = () => {
    window.speechSynthesis.cancel()
    active.current = true
    setPhase('speaking')
    speakLine(0)
  }

  const close = () => {
    active.current = false
    window.speechSynthesis.cancel()
    markSeen()
    setPhase('idle')
    setShow(false)
  }

  const reopen = () => {
    setPhase('idle')
    setLine(0)
    setShow(true)
  }

  if (!supported) return null

  const speaking = phase === 'speaking'

  return (
    <>
      {!show && <button onClick={reopen} className={replayBtn}>🔊 Replay intro</button>}

      <AnimatePresence>
        {show && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink/95 px-6 py-10 backdrop-blur-xl">
            <div className="grid-bg absolute inset-0 opacity-60" />
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent2/25 blur-3xl" />

            <div className="relative grid w-full max-w-5xl items-center gap-10 md:grid-cols-2">
              <div className="flex flex-col items-center">
                <div className="relative h-60 w-60 md:h-80 md:w-80">
                  <motion.div animate={speaking ? { scale: [1, 1.18, 1], opacity: [0.6, 0, 0.6] } : { scale: 1, opacity: 0.3 }} transition={{ duration: 1.6, repeat: Infinity }} className="absolute -inset-4 rounded-full border-2 border-accent" />
                  <motion.div animate={speaking ? { scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] } : { scale: 1, opacity: 0.2 }} transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }} className="absolute -inset-8 rounded-full border border-accent2" />
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute -inset-12 rounded-full border border-dashed border-accent/30" />
                  <motion.div animate={speaking ? { opacity: [0.35, 0.7, 0.35] } : { opacity: 0.3 }} transition={{ duration: 1.4, repeat: Infinity }} className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-accent2 blur-2xl" />
                  <motion.div animate={speaking ? { scale: [1, 1.025, 1] } : { scale: 1 }} transition={{ duration: 1.4, repeat: Infinity }} className="relative h-full w-full">
                    <div className={photoWrap}>
                      <img src="/profile.jpg.jpeg" alt={profile.name} className={photoImg} />
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center backdrop-blur">
                  <p className="font-display text-lg font-semibold text-white">{profile.name}</p>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">AI & ML Engineer</p>
                </div>
              </div>

              <div className="text-center md:text-left">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {speaking ? '● Speaking' : 'Welcome'}
                </p>

                {phase === 'idle' && (
                  <>
                    <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">Welcome to my portfolio</h2>
                    <p className="mt-4 text-slate-400">Listen to a short AI-voiced introduction about my work, skills and projects. Please turn your volume on.</p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                      <button onClick={start} className={bigBtn}>▶ Start intro</button>
                      <button onClick={close} className={ghostBtn}>Skip</button>
                    </div>
                  </>
                )}

                {speaking && (
                  <>
                    <div className="mt-4 flex h-8 items-end justify-center gap-1 md:justify-start">
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((n) => (
                        <motion.span key={n} animate={{ height: [6, 28, 10, 22, 6] }} transition={{ duration: 0.9, repeat: Infinity, delay: n * 0.1 }} className="w-1.5 rounded bg-accent" />
                      ))}
                    </div>

                    <motion.p key={line} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 min-h-[8rem] text-xl leading-relaxed text-white md:text-2xl">
                      {SCRIPT[line]}
                    </motion.p>

                    <div className="mt-4 flex justify-center gap-2 md:justify-start">
                      {SCRIPT.map((_, i) => (
                        <span key={i} className={'h-1.5 rounded-full transition-all ' + (i === line ? 'w-8 bg-accent' : i < line ? 'w-3 bg-accent/60' : 'w-3 bg-white/15')} />
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                      <button onClick={close} className={ghostBtn}>Stop and continue ›</button>
                    </div>
                  </>
                )}

                {phase === 'done' && (
                  <p className="mt-6 font-display text-3xl text-accent">Enjoy exploring the portfolio ✓</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}