import type { Book } from '../types'

export const defaultBooks: Book[] = [
  {
    id: '1',
    title: 'Fisiologia do Exercício — Energia, Nutrição e Desempenho Humano',
    author: 'McArdle, Katch & Katch',
    category: 'technical',
    rating: 5,
    amazonLink: '#',
    coverColor: 'green',
    summary:
      'Referência mundial em fisiologia do exercício. Abrange desde os fundamentos bioenergéticos até a prescrição avançada para diferentes populações.',
  },
  {
    id: '2',
    title: 'Fisiologia do Exercício — Teoria e Aplicação ao Condicionamento e ao Desempenho',
    author: 'Powers & Howley',
    category: 'technical',
    rating: 5,
    amazonLink: '#',
    coverColor: 'blue',
    summary:
      'Uma abordagem integrada da fisiologia do exercício com foco na aplicação prática ao condicionamento físico, desempenho esportivo e reabilitação.',
  },
  {
    id: '3',
    title: 'Tratado de Fisiologia Médica',
    author: 'Guyton & Hall',
    category: 'technical',
    rating: 5,
    amazonLink: '#',
    coverColor: 'green',
    summary:
      'Clássico absoluto da fisiologia humana. Base essencial para compreender os mecanismos fisiológicos que fundamentam a prescrição do exercício.',
  },
]
