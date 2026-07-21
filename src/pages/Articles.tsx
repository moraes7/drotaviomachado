import { useState } from 'react'
import { defaultArticles, articleCategories } from '../data/articles'
import { Badge } from '../components/ui/Badge'
import type { Article } from '../types'

type SortBy = 'date' | 'title'

export function Articles() {
  const [articles] = useState<Article[]>(defaultArticles)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos os Artigos')
  const [sortBy, setSortBy] = useState<SortBy>('date')

  const filtered = articles
    .filter((a) => {
      const matchSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'Todos os Artigos' || a.category === category
      return matchSearch && matchCategory
    })
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(b.date).getTime() - new Date(a.date).getTime()
      return a.title.localeCompare(b.title)
    })

  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Artigos Científicos
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h1 className="font-heading text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Artigos Científicos Recomendados
        </h1>

        <section className="mt-10">
          <h2 className="font-heading text-xl font-bold text-gray-900">
            3 Artigos Mais Recentes
          </h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {recentArticles.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <Badge variant="success">{a.category}</Badge>
                <h3 className="mt-3 font-heading font-semibold text-gray-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                  <span>{a.readTime}</span>
                  <span>•</span>
                  <span>{new Date(a.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative flex-1 max-w-md">
              <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
              className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option value="date">Mais Recentes</option>
              <option value="title">Ordem Alfabética</option>
            </select>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {articleCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  category === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="text-gray-500">Nenhum artigo encontrado.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setCategory('Todos os Artigos')
                }}
                className="mt-2 text-sm font-medium text-emerald-600 underline underline-offset-2 hover:text-emerald-700"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {filtered.map((a) => (
                <div
                  key={a.id}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <Badge variant="success">{a.category}</Badge>
                    <span className="text-xs text-gray-400">
                      {a.views.toLocaleString()} views
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading font-semibold text-gray-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{a.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                    <span>📖 {a.readTime}</span>
                    <span>•</span>
                    <span>{new Date(a.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}
