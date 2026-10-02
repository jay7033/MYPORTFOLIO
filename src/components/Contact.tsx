 import Section from './Section'
import Reveal from './Reveal'
import ContactForm from './ContactForm'
import { profile } from '../data/portfolio'

const card = 'block rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-accent/50'

export default function Contact() {
  const items = [
    { label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
    { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone.replace(/\s/g, '') },
    { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { label: 'GitHub', value: 'View my code', href: profile.github },
  ]

  return (
    <Section id="contact" title="Let's work together" subtitle="Open to internships and collaborations. Let's talk." alt>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((i, idx) => (
          <Reveal key={i.label} delay={idx * 0.08}>
            <a href={i.href} target="_blank" rel="noreferrer" className={card}>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{i.label}</p>
              <p className="mt-2 font-semibold text-accent">{i.value}</p>
            </a>
          </Reveal>
        ))}
      </div>
      <ContactForm />
    </Section>
  )
}