// src/entities/project/model/mocks.ts

import type { ImageMedia } from '../../../shared/model/media'
import type { Project } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/placeholder/${id}.jpg`,
  alt,
})

export const mockProjects: Project[] = [
  {
    id: 'proj-loft-apartment',
    slug: 'loft-apartment',
    title: 'Loft Apartment with Noble Light',
    partnerId: 'partner-designer-daredzhani-chris',
    description:
      'Квартира с открытым пространством, акцентными светильниками и коллекцией локального искусства.',
    heroImage: placeholderImage(
      'proj-loft-apartment-hero',
      'Интерьер в стиле лофт с акцентным освещением',
    ),
    gallery: [
      placeholderImage('proj-loft-apartment-1', 'Гостиная'),
      placeholderImage('proj-loft-apartment-2', 'Обеденная зона'),
    ],
    year: 2024,
    location: 'Москва',
    services: ['Концепция', 'Авторский надзор'],
    isFeatured: true,
  },
  {
    id: 'proj-gallery-space',
    slug: 'gallery-space',
    title: 'Gallery Space for Local Artists',
    partnerId: 'partner-studio-noble',
    description:
      'Галерейное пространство, где мебель и искусство работают как единая экспозиция.',
    heroImage: placeholderImage(
      'proj-gallery-space-hero',
      'Галерея с картинами и скульптурной мебелью',
    ),
    gallery: [
      placeholderImage('proj-gallery-space-1', 'Общий вид зала'),
      placeholderImage('proj-gallery-space-2', 'Фрагмент экспозиции'),
    ],
    year: 2023,
    location: 'Алматы',
    services: ['Концепция', 'Экспозиционный дизайн'],
    isFeatured: true,
  },
]
