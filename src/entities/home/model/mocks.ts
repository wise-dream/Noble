// src/entities/home/model/mocks.ts

import type { ImageMedia } from '../../../shared/model/media'
import type { MarqueeItem, RootCategory, SpecialistCard, Subcategory, Product } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/${id}.jpg`,
  alt,
})

export const mockMarqueeItems: MarqueeItem[] = [
  {
    id: 'marquee-loft-apartment-1',
    projectSlug: 'loft-apartment-hero',
    title: 'Loft Apartment',
    subtitle: 'Daredzhani & Chris',
    image: placeholderImage(
      'item-1',
      'Loft Apartment · Daredzhani & Chris · общий вид',
    ),
    gallery: [
      {
        id: 'loft-apartment-hero-1',
        title: 'Loft Living Room',
        subtitle: 'Warm texture focus',
        image: placeholderImage(
          'item-5',
          'Loft Apartment · зона гостиной',
        ),
      },
      {
        id: 'loft-apartment-hero-2',
        title: 'Dining Area',
        subtitle: 'Vetvi lighting',
        image: placeholderImage(
          'item-7',
          'Loft Apartment · обеденная зона со светильником',
        ),
      },
      {
        id: 'loft-apartment-hero-3',
        title: 'Loft Details',
        subtitle: 'Materials & tactility',
        image: placeholderImage(
          'item-9',
          'Loft Apartment · детали материалов и фактур',
        ),
      },
    ],
  },
  {
    id: 'marquee-gallery-space-1',
    projectSlug: 'gallery-space-main',
    title: 'Gallery Space',
    subtitle: 'Noble Studio',
    image: placeholderImage(
      'item-2',
      'Gallery Space · Noble Studio · экспозиция',
    ),
    gallery: [
      {
        id: 'gallery-space-main-1',
        title: 'Gallery Corridor',
        subtitle: 'Soft light sequence',
        image: placeholderImage(
          'item-6',
          'Gallery Space · галерея с мягким светом',
        ),
      },
      {
        id: 'gallery-space-main-2',
        title: 'Art Wall',
        subtitle: 'Seitzhan painting',
        image: placeholderImage(
          'item-8',
          'Gallery Space · стена с работой Сейтжана',
        ),
      },
      {
        id: 'gallery-space-main-3',
        title: 'Gallery Space',
        subtitle: 'Art & Furniture dialog',
        image: placeholderImage(
          'item-4',
          'Gallery Space · диалог мебели и искусства',
        ),
      },
    ],
  },
  {
    id: 'marquee-loft-apartment-2',
    projectSlug: 'loft-apartment-light-art',
    title: 'Loft Apartment',
    subtitle: 'Light & Art mix',
    image: placeholderImage(
      'item-3',
      'Loft Apartment · интерьер с акцентным светом',
    ),
    gallery: [
      {
        id: 'loft-apartment-light-art-1',
        title: 'Loft Living Room',
        subtitle: 'Warm texture focus',
        image: placeholderImage(
          'item-5',
          'Loft Apartment · зона гостиной',
        ),
      },
      {
        id: 'loft-apartment-light-art-2',
        title: 'Loft Details',
        subtitle: 'Materials & tactility',
        image: placeholderImage(
          'item-9',
          'Loft Apartment · детали материалов и фактур',
        ),
      },
    ],
  },
  {
    id: 'marquee-gallery-space-2',
    projectSlug: 'gallery-space-art-furniture',
    title: 'Gallery Space',
    subtitle: 'Art & Furniture dialog',
    image: placeholderImage(
      'item-4',
      'Gallery Space · диалог мебели и искусства',
    ),
    gallery: [
      {
        id: 'gallery-space-art-furniture-1',
        title: 'Gallery Corridor',
        subtitle: 'Soft light sequence',
        image: placeholderImage(
          'item-6',
          'Gallery Space · галерея с мягким светом',
        ),
      },
      {
        id: 'gallery-space-art-furniture-2',
        title: 'Art Wall',
        subtitle: 'Seitzhan painting',
        image: placeholderImage(
          'item-8',
          'Gallery Space · стена с работой Сейтжана',
        ),
      },
    ],
  },
  {
    id: 'marquee-loft-apartment-3',
    projectSlug: 'loft-living-room',
    title: 'Loft Living Room',
    subtitle: 'Warm texture focus',
    image: placeholderImage(
      'item-5',
      'Loft Apartment · зона гостиной',
    ),
    gallery: [
      {
        id: 'loft-living-room-1',
        title: 'Loft Apartment',
        subtitle: 'Daredzhani & Chris',
        image: placeholderImage(
          'item-1',
          'Loft Apartment · Daredzhani & Chris · общий вид',
        ),
      },
      {
        id: 'loft-living-room-2',
        title: 'Dining Area',
        subtitle: 'Vetvi lighting',
        image: placeholderImage(
          'item-7',
          'Loft Apartment · обеденная зона со светильником',
        ),
      },
    ],
  },
  {
    id: 'marquee-gallery-space-3',
    projectSlug: 'gallery-corridor',
    title: 'Gallery Corridor',
    subtitle: 'Soft light sequence',
    image: placeholderImage(
      'item-6',
      'Gallery Space · галерея с мягким светом',
    ),
    gallery: [
      {
        id: 'gallery-corridor-1',
        title: 'Gallery Space',
        subtitle: 'Noble Studio',
        image: placeholderImage(
          'item-2',
          'Gallery Space · Noble Studio · экспозиция',
        ),
      },
      {
        id: 'gallery-corridor-2',
        title: 'Art Wall',
        subtitle: 'Seitzhan painting',
        image: placeholderImage(
          'item-8',
          'Gallery Space · стена с работой Сейтжана',
        ),
      },
    ],
  },
  {
    id: 'marquee-loft-apartment-4',
    projectSlug: 'loft-dining-area',
    title: 'Dining Area',
    subtitle: 'Vetvi lighting',
    image: placeholderImage(
      'item-7',
      'Loft Apartment · обеденная зона со светильником',
    ),
    gallery: [
      {
        id: 'loft-dining-area-1',
        title: 'Loft Living Room',
        subtitle: 'Warm texture focus',
        image: placeholderImage(
          'item-5',
          'Loft Apartment · зона гостиной',
        ),
      },
      {
        id: 'loft-dining-area-2',
        title: 'Loft Details',
        subtitle: 'Materials & tactility',
        image: placeholderImage(
          'item-9',
          'Loft Apartment · детали материалов и фактур',
        ),
      },
    ],
  },
  {
    id: 'marquee-gallery-space-4',
    projectSlug: 'gallery-art-wall',
    title: 'Art Wall',
    subtitle: 'Seitzhan painting',
    image: placeholderImage(
      'item-8',
      'Gallery Space · стена с работой Сейтжана',
    ),
    gallery: [
      {
        id: 'gallery-art-wall-1',
        title: 'Gallery Space',
        subtitle: 'Noble Studio',
        image: placeholderImage(
          'item-2',
          'Gallery Space · Noble Studio · экспозиция',
        ),
      },
      {
        id: 'gallery-art-wall-2',
        title: 'Gallery Corridor',
        subtitle: 'Soft light sequence',
        image: placeholderImage(
          'item-6',
          'Gallery Space · галерея с мягким светом',
        ),
      },
    ],
  },
  {
    id: 'marquee-loft-apartment-5',
    projectSlug: 'loft-details',
    title: 'Loft Details',
    subtitle: 'Materials & tactility',
    image: placeholderImage(
      'item-9',
      'Loft Apartment · детали материалов и фактур',
    ),
    gallery: [
      {
        id: 'loft-details-1',
        title: 'Loft Apartment',
        subtitle: 'Daredzhani & Chris',
        image: placeholderImage(
          'item-1',
          'Loft Apartment · Daredzhani & Chris · общий вид',
        ),
      },
      {
        id: 'loft-details-2',
        title: 'Loft Apartment',
        subtitle: 'Light & Art mix',
        image: placeholderImage(
          'item-3',
          'Loft Apartment · интерьер с акцентным светом',
        ),
      },
    ],
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
  {
    partnerId: 'partner-designer-atelier-noble',
    title: 'Atelier Noble',
    subtitle: 'Премиальные интерьеры квартир и пентхаусов',
    thumbnail: placeholderImage('designer-4', 'Студия Atelier Noble'),
  },
  {
    partnerId: 'partner-designer-minimal-form',
    title: 'Minimal Form',
    subtitle: 'Минималистичные интерьеры и визуальные концепции',
    thumbnail: placeholderImage('designer-5', 'Студия Minimal Form'),
  },
  {
    partnerId: 'partner-artist-kurbanova',
    title: 'Курбанова',
    subtitle: 'Абстрактная живопись и арт-объекты',
    thumbnail: placeholderImage('designer-6', 'Художница Курбанова'),
  },
  {
    partnerId: 'partner-supplier-nordic-living',
    title: 'Nordic Living',
    subtitle: 'Современная скандинавская мебель',
    thumbnail: placeholderImage('designer-7', 'Бренд Nordic Living'),
  },
  {
    partnerId: 'partner-supplier-signature-furniture',
    title: 'Signature Furniture',
    subtitle: 'Авторская мебель и предметы интерьера',
    thumbnail: placeholderImage('designer-8', 'Signature Furniture'),
  },
  {
    partnerId: 'partner-artist-studio-avant',
    title: 'Studio Avant',
    subtitle: 'Галерея современного искусства и принтов',
    thumbnail: placeholderImage('designer-9', 'Studio Avant Art'),
  },
]


export const rootCategories: RootCategory[] = [
  {
    id: 'sofas',
    title: 'Мягкая мебель',
    subtitle: 'Диваны, кресла, модули',
    image: '/images/category-1.jpg',
  },
  {
    id: 'lighting',
    title: 'Свет',
    subtitle: 'Люстры, бра, торшеры',
    image: '/images/category-2.jpg',
  },
  {
    id: 'tables',
    title: 'Столы и консоли',
    subtitle: 'Обеденные, журнальные, консоли',
    image: '/images/category-3.jpg',
  },
]

export const subcategories: Subcategory[] = [
  // SOFAS
  {
    id: 'sofas-linear',
    rootId: 'sofas',
    title: 'Прямые диваны',
    image: '/images/subcategory-1.jpg',
  },
  {
    id: 'sofas-modular',
    rootId: 'sofas',
    title: 'Модульные диваны',
    image: '/images/subcategory-2.jpg',
  },
  {
    id: 'sofas-armchairs',
    rootId: 'sofas',
    title: 'Кресла',
    image: '/images/subcategory-3.jpg',
  },
  // LIGHTING
  {
    id: 'lighting-chandeliers',
    rootId: 'lighting',
    title: 'Люстры',
    image: '/images/home/subcategories/lighting-chandeliers.jpg',
  },
  {
    id: 'lighting-sconces',
    rootId: 'lighting',
    title: 'Бра',
    image: '/images/home/subcategories/lighting-sconces.jpg',
  },
  {
    id: 'lighting-floor',
    rootId: 'lighting',
    title: 'Торшеры',
    image: '/images/home/subcategories/lighting-floor.jpg',
  },
  // TABLES
  {
    id: 'tables-dining',
    rootId: 'tables',
    title: 'Обеденные столы',
    image: '/images/home/subcategories/tables-dining.jpg',
  },
  {
    id: 'tables-coffee',
    rootId: 'tables',
    title: 'Журнальные столы',
    image: '/images/home/subcategories/tables-coffee.jpg',
  },
  {
    id: 'tables-console',
    rootId: 'tables',
    title: 'Консоли',
    image: '/images/home/subcategories/tables-console.jpg',
  },
]

export const products: Product[] = [
  // LIGHTING / VETVI
  {
    id: 'prod-plume-vetvi',
    name: 'Люстра PLUME',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-chandeliers',
    image: '/images/home/products/plume-vetvi.jpg',
    priceLabel: 'от 380 000 ₽',
    badge: 'Новый',
    supplierSlug: 'vetvi',
  },
  {
    id: 'prod-line-vetvi',
    name: 'Линейный свет LINE',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-sconces',
    image: '/images/home/products/line-vetvi.jpg',
    priceLabel: 'по запросу',
    badge: 'Проектный',
    supplierSlug: 'vetvi',
  },
  {
    id: 'prod-floor-vetvi',
    name: 'Торшер ARCH',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-floor',
    image: '/images/home/products/floor-vetvi.jpg',
    priceLabel: 'от 210 000 ₽',
    supplierSlug: 'vetvi',
  },
  // SOFAS
  {
    id: 'prod-sofa-linear-1',
    name: 'Диван LEX',
    brand: 'Noble Select',
    rootId: 'sofas',
    subcategoryId: 'sofas-linear',
    image: '/images/product-1.jpg',
    priceLabel: 'от 3 000 000 ₸',
    badge: 'Хит',
    supplierSlug: 'noble-select',
  },
  {
    id: 'prod-sofa-modular-1',
    name: 'Модульная система FRAME',
    brand: 'Noble Select',
    rootId: 'sofas',
    subcategoryId: 'sofas-modular',
    image: '/images/product-2.png',
    priceLabel: 'по запросу',
    supplierSlug: 'noble-select',
  },
  {
    id: 'prod-armchair-1',
    name: 'Мягкое кресло Versace',
    brand: 'Versace',
    rootId: 'sofas',
    subcategoryId: 'sofas-armchairs',
    image: '/images/product-3.webp',
    priceLabel: 'от 190 000 ₽',
    supplierSlug: 'local-studio',
  },
  // TABLES
  {
    id: 'prod-dining-1',
    name: 'Обеденный стол STONE',
    brand: 'Studio Forma',
    rootId: 'tables',
    subcategoryId: 'tables-dining',
    image: '/images/home/products/table-stone.jpg',
    priceLabel: 'от 430 000 ₽',
    supplierSlug: 'studio-forma',
  },
  {
    id: 'prod-coffee-1',
    name: 'Журнальный стол LOOP',
    brand: 'Local Studio',
    rootId: 'tables',
    subcategoryId: 'tables-coffee',
    image: '/images/home/products/table-loop.jpg',
    priceLabel: 'от 95 000 ₽',
    supplierSlug: 'local-studio',
  },
  {
    id: 'prod-console-1',
    name: 'Консоль LINEAR',
    brand: 'Studio Forma',
    rootId: 'tables',
    subcategoryId: 'tables-console',
    image: '/images/home/products/console-linear.jpg',
    priceLabel: 'по запросу',
    supplierSlug: 'studio-forma',
  },
]