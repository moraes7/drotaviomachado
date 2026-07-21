import { useState } from 'react'
import { useAdminStore } from '../store/adminStore'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import type { Book } from '../types'

export function Books() {
  const { books, isAuthenticated, addBook, updateBook, deleteBook } = useAdminStore()
  const [showForm, setShowForm] = useState(false)
  const [editing, setEditing] = useState<Book | null>(null)
  const [form, setForm] = useState({
    title: '',
    author: '',
    category: 'technical' as 'technical' | 'non-technical',
    rating: 5,
    amazonLink: '',
    coverColor: 'green' as 'green' | 'blue',
    summary: '',
  })

  const resetForm = () => {
    setForm({
      title: '',
      author: '',
      category: 'technical',
      rating: 5,
      amazonLink: '',
      coverColor: 'green',
      summary: '',
    })
    setEditing(null)
    setShowForm(false)
  }

  const handleEdit = (book: Book) => {
    setForm({
      title: book.title,
      author: book.author,
      category: book.category,
      rating: book.rating,
      amazonLink: book.amazonLink,
      coverColor: book.coverColor,
      summary: book.summary,
    })
    setEditing(book)
    setShowForm(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const bookData = {
      ...form,
      id: editing?.id || crypto.randomUUID(),
    }
    if (editing) {
      updateBook(bookData)
    } else {
      addBook(bookData)
    }
    resetForm()
  }

  return (
    <main className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" />
          <span className="rounded-full bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-600">
            Catálogo
          </span>
          <span className="h-px flex-1 bg-gray-200" />
        </div>
        <h1 className="font-heading text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Livros Recomendados
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Obras essenciais selecionadas pelo Dr. Otávio Machado para aprofundar
          seus conhecimentos em fisiologia do exercício e áreas correlatas.
        </p>

        {isAuthenticated && (
          <div className="mt-8 flex justify-center gap-2">
            <Button variant="secondary" onClick={() => setShowForm(true)}>
              + Adicionar Livro
            </Button>
            <Button variant="ghost" onClick={() => {
              localStorage.removeItem('otavio_books_db')
              window.location.reload()
            }}>
              Restaurar Padrões
            </Button>
          </div>
        )}

        {showForm && (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-gray-900">
              {editing ? 'Editar Livro' : 'Adicionar Livro'}
            </h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Título</label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Autor</label>
                  <input
                    type="text"
                    required
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Link Amazon</label>
                  <input
                    type="text"
                    value={form.amazonLink}
                    onChange={(e) => setForm({ ...form, amazonLink: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Avaliação (1-5)</label>
                  <input
                    type="number"
                    min={1}
                    max={5}
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Categoria</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value as 'technical' | 'non-technical' })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="technical">Técnico</option>
                    <option value="non-technical">Não Técnico</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cor da Capa</label>
                  <select
                    value={form.coverColor}
                    onChange={(e) => setForm({ ...form, coverColor: e.target.value as 'green' | 'blue' })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  >
                    <option value="green">Verde</option>
                    <option value="blue">Azul</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Resumo</label>
                <textarea
                  required
                  rows={3}
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>
              <div className="flex gap-3">
                <Button type="submit">
                  {editing ? 'Atualizar' : 'Adicionar'}
                </Button>
                <Button variant="ghost" type="button" onClick={resetForm}>
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div
                className={`flex h-40 items-center justify-center rounded-xl ${
                  book.coverColor === 'green' ? 'bg-emerald-600' : 'bg-blue-600'
                } mb-4`}
              >
                <div className="p-4 text-center text-white">
                  <div className="font-heading text-sm font-bold leading-tight">
                    {book.title}
                  </div>
                  <div className="mt-2 text-xs opacity-80">{book.author}</div>
                </div>
              </div>
              <Badge variant={book.category === 'technical' ? 'success' : 'default'}>
                {book.category === 'technical' ? 'Técnico' : 'Não Técnico'}
              </Badge>
              <h3 className="mt-3 font-heading font-semibold text-gray-900">
                {book.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{book.author}</p>
              <p className="mt-2 text-sm text-gray-600">{book.summary}</p>
              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < book.rating ? 'text-amber-400' : 'text-gray-200'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-xl bg-amber-50 px-4 py-2 text-center text-xs font-semibold text-amber-700 transition-colors hover:bg-amber-100"
                >
                  📖 Ver na Amazon
                </a>
                {isAuthenticated && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleEdit(book)}
                      className="rounded-xl border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteBook(book.id)}
                      className="rounded-xl border border-red-200 px-3 py-2 text-xs font-medium text-red-600 transition-colors hover:bg-red-50"
                    >
                      Excluir
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {books.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500">Nenhum livro no catálogo.</p>
            {isAuthenticated && (
              <Button variant="secondary" className="mt-4" onClick={() => setShowForm(true)}>
                Adicionar Primeiro Livro
              </Button>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
