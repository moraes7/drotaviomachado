import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 md:order-1">
            <Badge variant="success" className="mb-4">
              ⚡ Atualização Constante
            </Badge>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge>📚 7 Módulos Práticos</Badge>
              <Badge>⏱ +10h de Conteúdo</Badge>
              <Badge>🔄 Atualizações Futuras Inclusas</Badge>
            </div>
            <h1 className="font-heading text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Chega de aplicar condutas sem saber o{' '}
              <span className="text-emerald-600">porquê</span>. Domine a{' '}
              <span className="text-emerald-600">Fisiologia do Exercício</span> de
              forma prática, segura e 100% aplicada ao mundo real.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 md:text-xl">
              Tenha o embasamento científico que você precisa para gerar resultados
              incontestáveis com seus alunos, valorizar a sua hora-aula e se destacar
              no mercado da saúde.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Descubra os fundamentos da{' '}
              <strong>Fisiologia & Musculação & Prescrição do Exercício</strong>.
              Acesso a todo o conteúdo atual + novos módulos, aulas e atualizações
              científicas adicionados continuamente durante a sua assinatura sem
              nenhum custo extra.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button as="link" to="/#oferta" size="lg">
                QUERO ENTRAR PARA O NETFLIX DA FISIOLOGIA
              </Button>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              Fidelidade de 12 meses. Renovação automática. Menos de R$ 1,00 por dia.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-emerald-100/60 blur-3xl" />
              <img
                src="/images/dr_otavio.jpg"
                alt="Dr. Otávio Machado"
                className="relative h-72 w-72 rounded-full object-cover shadow-lg ring-4 ring-white md:h-96 md:w-96"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="%23059669"><rect width="400" height="400" rx="200"/><text x="200" y="220" text-anchor="middle" fill="white" font-size="80" font-family="Inter">OM</text></svg>'
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-white/50 p-6 md:grid-cols-4 md:p-8">
          {[
            { value: 'Doutor', label: 'em Ciências da Saúde' },
            { value: '+25 anos', label: 'de experiência' },
            { value: '7', label: 'Módulos Completos' },
            { value: '4.9/5', label: 'Avaliação dos Alunos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-emerald-600 md:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
