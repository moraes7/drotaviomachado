import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/shared/WhatsAppButton'
import { AdminLoginModal } from './components/shared/AdminLoginModal'
import { FooterConfigModal } from './components/shared/FooterConfigModal'
import { Home } from './pages/Home'
import { Sobre } from './pages/Sobre'
import { Books } from './pages/Books'
import { Articles } from './pages/Articles'
import { Contact } from './pages/Contact'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/livros" element={<Books />} />
        <Route path="/artigos" element={<Articles />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <AdminLoginModal />
      <FooterConfigModal />
    </BrowserRouter>
  )
}
