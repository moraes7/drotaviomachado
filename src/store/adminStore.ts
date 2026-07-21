import { create } from 'zustand'
import type { Book, FooterConfig } from '../types'
import { defaultBooks } from '../data/books'
import { defaultFooter } from '../data/footer'

const BOOKS_KEY = 'otavio_books_db'
const FOOTER_KEY = 'otavio_footer_db'

function loadBooks(): Book[] {
  try {
    const raw = localStorage.getItem(BOOKS_KEY)
    return raw ? JSON.parse(raw) : defaultBooks
  } catch {
    return defaultBooks
  }
}

function loadFooter(): FooterConfig {
  try {
    const raw = localStorage.getItem(FOOTER_KEY)
    return raw ? JSON.parse(raw) : defaultFooter
  } catch {
    return defaultFooter
  }
}

interface AdminState {
  isAuthenticated: boolean
  loginModalOpen: boolean
  footerModalOpen: boolean
  books: Book[]
  footer: FooterConfig
  login: (password: string) => boolean
  logout: () => void
  setLoginModalOpen: (open: boolean) => void
  setFooterModalOpen: (open: boolean) => void
  addBook: (book: Book) => void
  updateBook: (book: Book) => void
  deleteBook: (id: string) => void
  updateFooter: (config: FooterConfig) => void
  exportData: () => string
}

export const useAdminStore = create<AdminState>((set, get) => ({
  isAuthenticated: false,
  loginModalOpen: false,
  footerModalOpen: false,
  books: loadBooks(),
  footer: loadFooter(),

  login: (password: string) => {
    if (password === '654321') {
      set({ isAuthenticated: true, loginModalOpen: false })
      return true
    }
    return false
  },

  logout: () => set({ isAuthenticated: false }),

  setLoginModalOpen: (open) => set({ loginModalOpen: open }),
  setFooterModalOpen: (open) => set({ footerModalOpen: open }),

  addBook: (book) => {
    const books = [...get().books, book]
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books))
    set({ books })
  },

  updateBook: (book) => {
    const books = get().books.map((b) => (b.id === book.id ? book : b))
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books))
    set({ books })
  },

  deleteBook: (id) => {
    const books = get().books.filter((b) => b.id !== id)
    localStorage.setItem(BOOKS_KEY, JSON.stringify(books))
    set({ books })
  },

  updateFooter: (config) => {
    localStorage.setItem(FOOTER_KEY, JSON.stringify(config))
    set({ footer: config })
  },

  exportData: () => {
    const data = {
      books: get().books,
      footer: get().footer,
      exportedAt: new Date().toISOString(),
    }
    return JSON.stringify(data, null, 2)
  },
}))
