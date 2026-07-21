import { Link } from 'react-router-dom'
import { useAdminStore } from '../../store/adminStore'

export function Footer() {
  const { footer, isAuthenticated, setLoginModalOpen, setFooterModalOpen, exportData } =
    useAdminStore()

  const handleFooterAdminClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'SPAN' && target.textContent?.includes('.')) {
      const text = target.textContent || ''
      const periods = [...text.matchAll(/\./g)].map((m) => m.index)
      const lastPeriod = periods[periods.length - 1]
      if (lastPeriod !== undefined) {
        setLoginModalOpen(true)
      }
    }
  }

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                OM
              </div>
              <span className="font-heading text-lg font-semibold text-white">
                Dr. Otávio Machado
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {footer.description}
            </p>
            <p className="mt-3 text-sm text-gray-500">{footer.location}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.url.startsWith('http') ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.url}
                        className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500"
          onClick={handleFooterAdminClick}
        >
          <p>
            © {new Date().getFullYear()} Dr. Otávio Machado. Todos os direitos
            reservados<span className="cursor-default">.</span>
          </p>
        </div>

        {isAuthenticated && (
          <div className="mt-6 flex flex-wrap justify-center gap-2 border-t border-gray-800 pt-6">
            <button
              type="button"
              onClick={() => setFooterModalOpen(true)}
              className="rounded-full border border-gray-700 px-4 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-emerald-600 hover:text-emerald-400"
            >
              Configurar Rodapé
            </button>
            <button
              type="button"
              onClick={() => {
                const data = exportData()
                const blob = new Blob([data], { type: 'application/json' })
                const url = URL.createObjectURL(blob)
                const a = document.createElement('a')
                a.href = url
                a.download = `otavio-backup-${new Date().toISOString().slice(0, 10)}.json`
                a.click()
                URL.revokeObjectURL(url)
              }}
              className="rounded-full border border-gray-700 px-4 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:border-emerald-600 hover:text-emerald-400"
            >
              Exportar JSON
            </button>
          </div>
        )}
      </div>
    </footer>
  )
}
