import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Depoimentos
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <p className="text-center text-sm font-medium text-amber-600">
          ★ Avaliado com 4.9/5 por mais de 200 alunos e profissionais
        </p>
        <h2 className="font-heading mt-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          O que dizem os alunos e profissionais da saúde
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Depoimentos reais de quem transformou a conduta clínica e a prescrição
          de exercícios com a metodologia do Dr. Otávio Machado.
        </p>

        <div className="relative mt-12 overflow-hidden">
          <div className="flex gap-6 animate-scroll">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                className="w-[340px] shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
