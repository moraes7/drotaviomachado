import { useState } from 'react'
import { modules } from '../../data/modules'
import { Badge } from '../ui/Badge'

export function Modules() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section id="modulos" className="scroll-mt-20 bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Grade Oficial
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h2 className="font-heading text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Fisiologia & Musculação & Prescrição do Exercício
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Grade completa atual com 7 módulos e +10h de aulas práticas. O curso
          está em constante evolução: todas as futuras aulas, novos módulos e
          atualizações científicas já estão inclusos na sua assinatura sem custo
          extra!
        </p>

        <div className="mx-auto mt-4 flex max-w-lg flex-wrap justify-center gap-2">
          <Badge>7 Módulos Atuais</Badge>
          <Badge>+10h Conteúdo em Vídeo</Badge>
          <Badge>44+ Aulas Objetivas</Badge>
          <Badge variant="warning">🔄 100% Atualizações Inclusas</Badge>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`rounded-2xl border bg-white transition-all duration-300 ${
                mod.isMaster
                  ? 'border-emerald-400 shadow-md shadow-emerald-100/50'
                  : 'border-gray-100 hover:border-gray-200'
              } ${openId === mod.id ? 'shadow-md' : 'hover:shadow-sm'}`}
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === mod.id ? null : mod.id)}
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      mod.isMaster
                        ? 'bg-emerald-600 text-white'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {String(mod.number).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading font-semibold text-gray-900">
                        {mod.title}
                      </h3>
                      {mod.isMaster && (
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-700">
                          🔥 Módulo Master
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                      <span>⏱ {mod.duration}</span>
                      <span>•</span>
                      <span>{mod.lessons} Aulas</span>
                    </div>
                  </div>
                </div>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                    openId === mod.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openId === mod.id && (
                <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {mod.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
