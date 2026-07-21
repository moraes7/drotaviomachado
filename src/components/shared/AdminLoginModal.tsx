import { useState } from 'react'
import { useAdminStore } from '../../store/adminStore'

export function AdminLoginModal() {
  const { loginModalOpen, setLoginModalOpen, login } = useAdminStore()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  if (!loginModalOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const ok = login(password)
    if (ok) {
      setPassword('')
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-heading text-xl font-bold text-gray-900">
            Acesso Restrito
          </h3>
          <button
            type="button"
            onClick={() => {
              setLoginModalOpen(false)
              setPassword('')
              setError(false)
            }}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="mb-4 text-sm text-gray-500">
          Digite a senha administrativa para acessar as configurações.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Senha"
            className="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            autoFocus
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">Senha incorreta. Tente novamente.</p>
          )}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  )
}
