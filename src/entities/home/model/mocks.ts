// src/entities/home/model/mocks.ts

import type { ImageMedia } from '../../../shared/model/media'
import type { MarqueeItem, SpecialistCard } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/${id}.jpg`,
  alt,
})

export const mockMarqueeItems: MarqueeItem[] = [
  {
    id: 'marquee-loft-apartment-1',
    projectId: 'proj-loft-apartment',
    projectSlug: 'loft-apartment',
    title: 'Loft Apartment',
    subtitle: 'Daredzhani & Chris',
    image: placeholderImage(
      'item-1',
      'Loft Apartment · Daredzhani & Chris · общий вид',
    ),
  },
  {
    id: 'marquee-gallery-space-1',
    projectId: 'proj-gallery-space',
    projectSlug: 'gallery-space',
    title: 'Gallery Space',
    subtitle: 'Noble Studio',
    image: placeholderImage(
      'item-2',
      'Gallery Space · Noble Studio · экспозиция',
    ),
  },
  {
    id: 'marquee-loft-apartment-2',
    projectId: 'proj-loft-apartment',
    projectSlug: 'loft-apartment',
    title: 'Loft Apartment',
    subtitle: 'Light & Art mix',
    image: placeholderImage(
      'item-3',
      'Loft Apartment · интерьер с акцентным светом',
    ),
  },
  {
    id: 'marquee-gallery-space-2',
    projectId: 'proj-gallery-space',
    projectSlug: 'gallery-space',
    title: 'Gallery Space',
    subtitle: 'Art & Furniture dialog',
    image: placeholderImage(
      'item-4',
      'Gallery Space · диалог мебели и искусства',
    ),
  },
  {
    id: 'marquee-loft-apartment-3',
    projectId: 'proj-loft-apartment',
    projectSlug: 'loft-apartment',
    title: 'Loft Living Room',
    subtitle: 'Warm texture focus',
    image: placeholderImage(
      'item-5',
      'Loft Apartment · зона гостиной',
    ),
  },
  {
    id: 'marquee-gallery-space-3',
    projectId: 'proj-gallery-space',
    projectSlug: 'gallery-space',
    title: 'Gallery Corridor',
    subtitle: 'Soft light sequence',
    image: placeholderImage(
      'item-6',
      'Gallery Space · галерея с мягким светом',
    ),
  },
  {
    id: 'marquee-loft-apartment-4',
    projectId: 'proj-loft-apartment',
    projectSlug: 'loft-apartment',
    title: 'Dining Area',
    subtitle: 'Vetvi lighting',
    image: placeholderImage(
      'item-7',
      'Loft Apartment · обеденная зона со светильником',
    ),
  },
  {
    id: 'marquee-gallery-space-4',
    projectId: 'proj-gallery-space',
    projectSlug: 'gallery-space',
    title: 'Art Wall',
    subtitle: 'Seitzhan painting',
    image: placeholderImage(
      'item-8',
      'Gallery Space · стена с работой Сейтжана',
    ),
  },
  {
    id: 'marquee-loft-apartment-5',
    projectId: 'proj-loft-apartment',
    projectSlug: 'loft-apartment',
    title: 'Loft Details',
    subtitle: 'Materials & tactility',
    image: placeholderImage(
      'item-9',
      'Loft Apartment · детали материалов и фактур',
    ),
  },
]

export const mockSpecialists: SpecialistCard[] = [
  {
    partnerId: 'partner-designer-daredzhani-chris',
    title: 'Daredzhani & Chris',
    subtitle: 'Интерьеры и мебель на заказ',
    thumbnail: placeholderImage(
      'designer-1',
      'Дизайнеры Daredzhani & Chris',
    ),
  },
  {
    partnerId: 'partner-artist-seitzhan',
    title: 'Сейтжан',
    subtitle: 'Современная живопись для интерьеров',
    thumbnail: placeholderImage('designer-2', 'Художник Сейтжан'),
  },
  {
    partnerId: 'partner-supplier-vetvi',
    title: 'VETVI',
    subtitle: 'Архитектурный свет',
    thumbnail: placeholderImage('designer-3', 'Фабрика VETVI'),
  },
]
