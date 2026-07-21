export function Expert() {
  const credentials = [
    'Doutor em Ciências da Saúde pela Univ. Cruzeiro do Sul',
    'Mestre em Fisiologia do Exercício pela UNIFESP',
    'Graduação em Educação Física pela FEFISO/ACM (2000)',
    'Professor Titular de Educação Física da FEFISO/ACM',
    'Coordenador do CEFIME (Fisiologia e Metabolismo do Exercício)',
    'Coord. de Pós-Graduação em Musculação e Personal Trainer',
    'Membro de Órgãos Globais (ACSM, NSCA, ISSN, ACN, GSA)',
    'Sócio-fundador da One More Rep (@onemorerep.com.br)',
    'Coord. de Fisiologia na Maple Tree Cancer Alliance Brasil',
    '+25 anos de experiência prática em Fisiologia do Exercício',
  ]

  return (
    <section id="expert" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            O Expert
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h2 className="font-heading text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Quem vai te guiar nessa jornada?
        </h2>

        <div className="mt-12 grid items-start gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2 flex justify-center md:justify-end">
            <img
              src="/images/dr_otavio.jpg"
              alt="Dr. Otávio Machado"
              className="h-64 w-64 rounded-full object-cover shadow-md ring-4 ring-white md:h-80 md:w-80"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" fill="%23059669"><rect width="400" height="400" rx="200"/><text x="200" y="220" text-anchor="middle" fill="white" font-size="80" font-family="Inter">OM</text></svg>'
              }}
            />
          </div>
          <div className="md:col-span-3">
            <h3 className="font-heading text-2xl font-bold text-gray-900">
              Dr. Otávio Machado
            </h3>
            <p className="mt-2 text-lg font-medium text-emerald-600">
              Doutor em Ciências da Saúde
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Doutor em Ciências da Saúde, professor titular e coordenador de
              pós-graduação. Há mais de 25 anos, transformo a complexidade da
              ciência acadêmica em estratégias práticas de movimento, saúde e
              performance.
            </p>
            <p className="mt-3 leading-relaxed text-gray-600">
              Dediquei minha carreira a ensinar profissionais e estudantes de
              Educação Física e áreas da saúde a raciocinarem fisiologicamente.
              Agora, decidi abrir as portas do meu ecossistema de conhecimento
              para que você tenha contato direto com o que há de mais sólido na
              fisiologia do exercício, sem precisar pagar fortunas por isso.
            </p>

            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                Formação & Trajetória Científica
              </h4>
              <div className="grid gap-x-8 gap-y-2 md:grid-cols-2">
                {credentials.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
