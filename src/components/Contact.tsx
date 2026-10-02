import Section from './Section'
import { profile } from '../data/portfolio'

const card = 'rounded-xl border border-slate-200 bg-white p-6 transition hover:border-indigo-600 hover:shadow-md'

export default function Contact() {
  const items = [
    { label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
    { label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone.replace(/\s/g, '') },
    { label: 'LinkedIn', value: 'Connect with me', href: profile.linkedin },
    { label: 'GitHub', value: 'View my code', href: profile.github },
  ]

  return (
    <Section id="contact" title="Contact" subtitle="Open to internships and collaborations. Let's talk.">
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((i) => (
          <a key={i.label} href={i.href} target="_blank" rel="noreferrer" className={card}>
            <p className="text-sm text-slate-500">{i.label}</p>
            <p className="mt-1 font-semibold text-indigo-600">{i.value}</p>
          </a>
        ))}
      </div>
    </Section>
  )
}