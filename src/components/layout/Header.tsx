import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

const navItems = [
  {
    label: 'Início',
    to: '/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Sobre',
    to: '/sobre',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: 'Livros',
    to: '/livros',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
        <path d="M6 6h10M6 10h10M6 14h10" />
      </svg>
    ),
  },
  {
    label: 'Artigos',
    to: '/artigos',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    label: 'Contato',
    to: '/contato',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { isAuthenticated, setLoginModalOpen, setFooterModalOpen, logout } = useAdminStore()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (to: string) => {
    setMobileOpen(false)
    if (to === '/' && location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (to.startsWith('/#')) {
      const id = to.slice(2)
      if (location.pathname === '/') {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname === to
  }

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-dotted py-1 transition-all duration-[0.4s]"
      style={{
        borderColor: 'rgba(224,224,224,0.4)',
        background: scrolled
          ? 'rgba(255,255,255,0.95)'
          : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3 no-underline" onClick={() => handleNavClick('/')}>
          <img src="/images/logo_dark.png" alt="Dr. Otávio Machado" className="h-8 w-auto rounded-[6px]" />
          <span className="font-heading text-[1.3rem] font-extrabold tracking-[-0.01em] text-[#0f172a] uppercase leading-[1.1]">
            <span className="font-normal text-[#64748b]">Dr.</span> Otávio Machado
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav
            className="hidden items-center gap-1 rounded-full border border-[#047857] p-1 md:flex"
            style={{
              background: 'rgba(5, 150, 105, 0.05)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 4px 15px rgba(5, 150, 105, 0.08)',
            }}
          >
            {navItems.map((item) => {
              const active = isActive(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => handleNavClick(item.to)}
                  className={`group flex items-center no-underline rounded-full transition-all duration-[0.4s] text-[13px] font-bold leading-none h-9 ${
                    active
                      ? 'bg-[#047857] text-white gap-2 px-4'
                      : 'text-[#475569] hover:bg-white/5 hover:text-[#0f172a] gap-0 px-2.5 hover:gap-2'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                >
                  <span className="shrink-0 flex items-center justify-center w-[18px] h-[18px]">
                    {item.icon}
                  </span>
                  <span
                    className={`whitespace-nowrap overflow-hidden transition-all duration-[0.4s] ${
                      active
                        ? 'max-w-[100px] opacity-100'
                        : 'max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100'
                    }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            })}

            <div className="h-4 w-px bg-[#cbd5e1]/60 shrink-0" />

            <a
              href="https://www.youtube.com/@simplificandoafisiologia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-full p-1.5 text-[#475569] transition-all duration-[0.4s] hover:text-red-600 hover:scale-110"
              aria-label="YouTube"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </nav>

          {isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                onClick={() => setFooterModalOpen(true)}
                className="rounded-full border border-[#cbd5e1] bg-transparent px-2.5 py-1 text-[11px] font-bold text-[#475569] transition-all duration-[0.4s] hover:border-[#059669] hover:text-[#059669]"
              >
                CMS
              </button>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-[#cbd5e1] bg-transparent px-2.5 py-1 text-[11px] font-bold text-[#475569] transition-all duration-[0.4s] hover:border-red-400 hover:text-red-500"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setLoginModalOpen(true)}
              className="hidden rounded-full border border-[#cbd5e1] bg-transparent px-2.5 py-1 text-[11px] font-bold text-[#475569] transition-all duration-[0.4s] hover:border-[#059669] hover:text-[#059669] md:block"
            >
              Admin
            </button>
          )}

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center rounded-full p-1.5 text-[#475569] transition-all duration-[0.4s] hover:bg-gray-100 md:hidden"
            aria-label="Menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[rgba(0,0,0,0.08)] bg-white px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = isActive(item.to)
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => handleNavClick(item.to)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-[0.4s] no-underline ${
                    active
                      ? 'bg-[#047857] text-white'
                      : 'text-[#475569] hover:bg-gray-100 hover:text-[#0f172a]'
                  }`}
                >
                  <span className="shrink-0">{item.icon}</span>
                  {item.label}
                </Link>
              )
            })}
            <a
              href="https://www.youtube.com/@simplificandoafisiologia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-bold text-[#475569] transition-all duration-[0.4s] hover:bg-gray-100 no-underline"
            >
              <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
