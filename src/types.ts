export interface Project {
  title: string
  description: string
  tech: string[]
  live?: string
  github?: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  duration: string
  points: string[]
}

export interface Education {
  degree: string
  institute: string
  duration: string
  score?: string
}

export interface Certificate {
  title: string
  issuer: string
  date: string
  link?: string
}

export interface Profile {
  name: string
  title: string
  tagline: string
  about: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  stats: { label: string; value: string }[]
}
export interface CodingProfile {
  name: string
  handle: string
  url: string
}