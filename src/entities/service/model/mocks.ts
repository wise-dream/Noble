// src/entities/service/model/mocks.ts

import type { ImageMedia } from '../../../shared/model/media'
import type { Service } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/placeholder/${id}.jpg`,
  alt,
})

export const mockServices: Service[] = [
  {
    id: 'service-interior-design',
    slug: 'interior-design',
    title: 'Дизайн интерьера под ключ',
    description:
      'Полный цикл: от концепции и планировочного решения до комплектации мебелью и искусством.',
    tags: ['Noble Studio', 'Интерьеры', 'Комплектация'],
    heroImage: placeholderImage(
      'service-interior-design',
      'Интерьер с мебелью и картинами Noble',
    ),
    projectIds: ['proj-loft-apartment'],
  },
  {
    id: 'service-art-curation',
    slug: 'art-curation',
    title: 'Арт-кураторство для интерьеров',
    description:
      'Подбор локальных художников и коллекций под конкретный проект и архитектуру.',
    tags: ['Noble Studio', 'Art', 'Коллекции'],
    heroImage: placeholderImage('service-art-curation', 'Экспозиция картин'),
    projectIds: ['proj-gallery-space'],
  },
]
