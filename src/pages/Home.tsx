import { Hero } from '../components/sections/Hero'
import { Expert } from '../components/sections/Expert'
import { Modules } from '../components/sections/Modules'
import { Testimonials } from '../components/sections/Testimonials'
import { Offer } from '../components/sections/Offer'

export function Home() {
  return (
    <main>
      <Hero />
      <Expert />
      <Modules />
      <Testimonials />
      <Offer />
    </main>
  )
}
