import type { FooterConfig } from '../types'

export const defaultFooter: FooterConfig = {
  description:
    'Doutor em Ciências da Saúde, professor titular e coordenador de pós-graduação. Transformando a complexidade da ciência em estratégias práticas de movimento, saúde e performance.',
  location: 'Brasil',
  columns: [
    {
      title: 'Conteúdo',
      links: [
        { label: 'Início', url: '/' },
        { label: 'Sobre', url: '/#expert' },
        { label: 'Livros', url: '/livros' },
        { label: 'Artigos', url: '/artigos' },
        { label: 'Contato', url: '/contato' },
      ],
    },
    {
      title: 'Aprendizado',
      links: [
        { label: 'Módulos', url: '/#modulos' },
        { label: 'Depoimentos', url: '/#depoimentos' },
        { label: 'Oferta', url: '/#oferta' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { label: 'YouTube', url: 'https://www.youtube.com/@simplificandoafisiologia' },
        { label: 'Artigos Científicos', url: '/artigos' },
        { label: 'Livros Recomendados', url: '/livros' },
      ],
    },
    {
      title: 'Comunidade',
      links: [
        { label: 'WhatsApp', url: 'https://wa.me/5515991136969' },
        { label: 'Instagram', url: '#' },
        { label: 'Facebook', url: '#' },
      ],
    },
  ],
}
