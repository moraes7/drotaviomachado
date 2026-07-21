import { useState, useEffect } from 'react'
import { useAdminStore } from '../../store/adminStore'
import type { FooterConfig, FooterColumn } from '../../types'

export function FooterConfigModal() {
  const { footerModalOpen, setFooterModalOpen, footer, updateFooter } = useAdminStore()
  const [config, setConfig] = useState<FooterConfig>(footer)

  useEffect(() => {
    if (footerModalOpen) setConfig(footer)
  }, [footerModalOpen, footer])

  if (!footerModalOpen) return null

  const handleSave = () => {
    updateFooter(config)
    setFooterModalOpen(false)
  }

  const updateColumn = (index: number, field: keyof FooterColumn, value: string | { label: string; url: string }[]) => {
    const cols = [...config.columns]
    cols[index] = { ...cols[index], [field]: value }
    setConfig({ ...config, columns: cols })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-heading text-xl font-bold text-gray-900">
            Configurar Rodapé
          </h3>
          <button
            type="button"
            onClick={() => setFooterModalOpen(false)}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Descrição do Perfil</label>
            <textarea
              value={config.description}
              onChange={(e) => setConfig({ ...config, description: e.target.value })}
              rows={3}
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Localização</label>
            <input
              type="text"
              value={config.location}
              onChange={(e) => setConfig({ ...config, location: e.target.value })}
              className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          {config.columns.map((col, ci) => (
            <div key={ci} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
              <label className="block text-sm font-medium text-gray-700">
                Título Coluna {ci + 2}
              </label>
              <input
                type="text"
                value={col.title}
                onChange={(e) => updateColumn(ci, 'title', e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
              <p className="mt-3 text-xs font-medium text-gray-500">Links (Nome | Link, um por linha)</p>
              <textarea
                value={col.links.map((l) => `${l.label} | ${l.url}`).join('\n')}
                onChange={(e) => {
                  const links = e.target.value
                    .split('\n')
                    .filter((l) => l.trim())
                    .map((l) => {
                      const [label = '', url = ''] = l.split('|').map((s) => s.trim())
                      return { label, url }
                    })
                  updateColumn(ci, 'links', links)
                }}
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => setFooterModalOpen(false)}
            className="flex-1 rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="flex-1 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
          >
            SALVAR CONFIGURAÇÕES
          </button>
        </div>
      </div>
    </div>
  )
}
