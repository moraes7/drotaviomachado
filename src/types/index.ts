export interface Module {
  id: number
  number: number
  title: string
  duration: string
  lessons: number
  description: string
  isMaster?: boolean
}

export interface Testimonial {
  id: string
  initials: string
  name: string
  role: string
  text: string
}

export interface Book {
  id: string
  title: string
  author: string
  category: 'technical' | 'non-technical'
  rating: number
  amazonLink: string
  coverColor: 'green' | 'blue'
  summary: string
}

export interface Article {
  id: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  views: number
}

export interface FooterLink {
  label: string
  url: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterConfig {
  description: string
  location: string
  columns: FooterColumn[]
}
