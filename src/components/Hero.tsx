import { profile } from '../data/portfolio'

const primaryBtn = 'rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700'
const outlineBtn = 'rounded-lg border border-slate-300 px-6 py-3 font-semibold hover:border-indigo-600 hover:text-indigo-600'
const photoStyle = 'h-72 w-72 rounded-full border-4 border-indigo-100 object-cover shadow-xl md:h-96 md:w-96'

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div>
        <p className="font-medium text-indigo-600">Hello, I'm</p>
        <h1 className="mt-2 text-5xl font-bold leading-tight md:text-6xl">{profile.name}</h1>
        <h2 className="mt-3 text-2xl font-semibold text-slate-600">{profile.title}</h2>
        <p className="mt-5 max-w-lg text-lg text-slate-500">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className={primaryBtn}>View Projects</a>
          <a href="#contact" className={outlineBtn}>Contact Me</a>
        </div>
      </div>

      <div className="flex justify-center">
        <img src="/profile.jpg.jpeg" alt={profile.name} className={photoStyle} />
      </div>
    </section>
  )
}