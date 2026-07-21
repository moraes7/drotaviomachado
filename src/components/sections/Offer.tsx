import { Button } from '../ui/Button'

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-20 bg-gradient-to-b from-white to-emerald-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Oferta
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h2 className="font-heading text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Acesso Imediato à Escola de Fisiologia
        </h2>

        <div className="mx-auto mt-10 max-w-lg">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 text-center shadow-lg shadow-emerald-100/50">
            <p className="text-sm font-medium text-gray-500 line-through">
              De R$ 399,00 à vista (valor avulso do curso)
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
              Assinatura Anual da Escola de Fisiologia
            </p>
            <div className="mt-2 flex items-baseline justify-center gap-1">
              <span className="text-2xl font-semibold text-gray-400">R$</span>
              <span className="font-heading text-5xl font-bold text-emerald-600">29,90</span>
              <span className="text-lg text-gray-500">/mês</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Menos de R$ 1,00 por dia • Acesso contínuo com todas as
              atualizações inclusas
            </p>

            <Button as="link" to="#_" size="lg" className="mt-6 w-full">
              QUERO ME INSCREVER AGORA POR R$ 29,90/MÊS
            </Button>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                🔒 Ambiente 100% Seguro via Hotmart
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                ✅ 7 Dias de Garantia Incondicional
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-600">
                🔄 Todas as Atualizações Inclusas
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                📅 Fidelidade de 12 Meses com Renovação Automática
              </span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Ficou com alguma dúvida sobre a assinatura?{' '}
              <a
                href="https://wa.me/5515991136969"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
              >
                Fale comigo no WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
