import type { Module } from '../types'

export const modules: Module[] = [
  {
    id: 1,
    number: 1,
    title: 'Atividade Física e Saúde',
    duration: '21 min',
    lessons: 2,
    description:
      'Fundamentos de fisiologia aplicados à promoção da saúde, longevidade e os mecanismos de proteção primária e secundária do exercício físico.',
  },
  {
    id: 2,
    number: 2,
    title: 'Prescrição do Exercício para Indivíduos com Câncer',
    duration: '2h 29 min',
    lessons: 10,
    description:
      'Fisiologia oncológica aplicada, controle da fadiga crônica, segurança, biomarcadores e protocolos de treino durante e pós-tratamento.',
  },
  {
    id: 3,
    number: 3,
    title: 'Prescrição do Exercício para Gestantes',
    duration: '1h 32 min',
    lessons: 3,
    description:
      'Adaptações fisiológicas no período gestacional, controle hemodinâmico, exercícios indicados por trimestre e contraindicações absolutas.',
  },
  {
    id: 4,
    number: 4,
    title: 'Prescrição do Exercício para Hipertensos',
    duration: '1h 35 min',
    lessons: 6,
    description:
      'Fisiologia cardiovascular, regulação da pressão arterial, duplo produto, hipotensão pós-exercício e segurança no treino de força e aeróbio.',
  },
  {
    id: 5,
    number: 5,
    title: 'Fisiologia Humana: Sistema Gastrointestinal',
    duration: '36 min',
    lessons: 4,
    description:
      'Digestão, absorção de nutrientes, microbioma, eixo intestino-cérebro e o impacto do estresse do exercício na saúde trato-gastrointestinal.',
  },
  {
    id: 6,
    number: 6,
    title: 'Prescrição do Exercício Físico para Diabéticos',
    duration: '1h 05 min',
    lessons: 5,
    description:
      'Captação de glicose independente de insulina via GLUT4, monitoramento glicêmico, prevenção de hipoglicemia e protocolos para Tipo 1 e Tipo 2.',
  },
  {
    id: 7,
    number: 7,
    title: 'Fisiologia da Elaboração do Treino de Força e Hipertrofia Muscular',
    duration: '2h 26 min',
    lessons: 14,
    description:
      'Mecanismos moleculares de hipertrofia, manipulação de volume/intensidade, tipos de hipertrofia, miostatina, contração muscular, treinos concorrentes e estratégias para fisiculturismo.',
    isMaster: true,
  },
]
