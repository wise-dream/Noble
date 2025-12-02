import type { ImageMedia } from '../../../shared/model/media'
import type { CatalogCategory, FurnitureProduct, Artwork } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/placeholder/${id}.jpg`,
  alt,
})

export const mockFurnitureCategories: CatalogCategory[] = [
  {
    id: 'cat-furn-root',
    slug: 'furniture',
    kind: 'furniture',
    name: 'Мебель и свет',
    heroImage: placeholderImage('cat-furn-root', 'Общая витрина мебели'),
    parentId: undefined,
    order: 0,
  },
  {
    id: 'cat-sofas',
    slug: 'sofas',
    kind: 'furniture',
    name: 'Диваны',
    heroImage: placeholderImage('cat-sofas', 'Категория диванов'),
    parentId: 'cat-furn-root',
    order: 1,
  },
  {
    id: 'cat-tables',
    slug: 'tables',
    kind: 'furniture',
    name: 'Столы',
    heroImage: placeholderImage('cat-tables', 'Категория столов'),
    parentId: 'cat-furn-root',
    order: 2,
  },
  {
    id: 'cat-lighting',
    slug: 'lighting',
    kind: 'furniture',
    name: 'Светильники',
    heroImage: placeholderImage('cat-lighting', 'Категория светильников'),
    parentId: 'cat-furn-root',
    order: 3,
  },
  {
    id: 'cat-lighting-chandeliers',
    slug: 'chandeliers',
    kind: 'furniture',
    name: 'Люстры',
    heroImage: placeholderImage('cat-lighting-chandeliers', 'Категория люстр'),
    parentId: 'cat-lighting',
    order: 1,
  },
]

// Категории искусства

export const mockArtCategories: CatalogCategory[] = [
  {
    id: 'cat-art-root',
    slug: 'art',
    kind: 'art',
    name: 'Картины',
    heroImage: placeholderImage('cat-art-root', 'Витрина картин'),
    parentId: undefined,
    order: 0,
  },
  {
    id: 'cat-art-abstract',
    slug: 'abstract',
    kind: 'art',
    name: 'Абстракция',
    heroImage: placeholderImage('cat-art-abstract', 'Категория абстрактных картин'),
    parentId: 'cat-art-root',
    order: 1,
  },
]

// Товары мебели

export const mockFurnitureProducts: FurnitureProduct[] = [
  {
    id: 'furn-plume-vetvi',
    slug: 'plume-vetvi-chandelier',
    kind: 'furniture',
    name: 'Люстра PLUME',
    partnerId: 'partner-supplier-vetvi',
    brand: 'VETVI',
    categoryId: 'cat-lighting',
    subcategoryId: 'cat-lighting-chandeliers',
    price: 380000,
    currency: 'RUB',
    priceOnRequest: false,
    isAvailable: true,
    availabilityNote: 'Срок изготовления 4–6 недель',
    articleCode: 'F-LIGHT-PLUME-2024-11',
    qrCodeUrl: '/qr/F-LIGHT-PLUME-2024-11.svg',
    moderationStatus: 'approved',
    createdAt: '2024-11-20T10:00:00.000Z',
    updatedAt: '2024-11-20T10:00:00.000Z',
    materials: ['латунь', 'стекло'],
    color: 'Тёплая латунь',
    finish: 'Матовый',
    dimensions: {
      widthMm: 1200,
      depthMm: 300,
      heightMm: 450,
    },
    description:
      'Скульптурная люстра PLUME от фабрики VETVI для акцентных зон и обеденных групп.',
    details: [
      'Ручная сборка',
      'Регулируемая высота подвеса',
      'Совместима с диммируемыми источниками света',
    ],
    images: [
      placeholderImage('furn-plume-1', 'Общий вид люстры PLUME'),
      placeholderImage('furn-plume-2', 'Люстра PLUME в интерьере'),
      placeholderImage('furn-plume-3', 'Деталь крепления'),
    ],
    similarProductIds: ['furn-boucle-sofa'],
  },
  {
    id: 'furn-boucle-sofa',
    slug: 'boucle-sofa',
    kind: 'furniture',
    name: 'Диван из букле для салона',
    partnerId: 'partner-designer-daredzhani-chris',
    brand: 'NOBLE Selection',
    categoryId: 'cat-sofas',
    price: 820000,
    currency: 'KZT',
    isAvailable: true,
    priceOnRequest: false,
    availabilityNote: 'Производство под заказ, 5–7 недель',
    articleCode: 'F-SOFA-BOUCLE-2024-10',
    qrCodeUrl: '/qr/F-SOFA-BOUCLE-2024-10.svg',
    moderationStatus: 'approved',
    createdAt: '2024-10-12T09:00:00.000Z',
    updatedAt: '2024-10-12T09:00:00.000Z',
    materials: ['букле', 'массив'],
    color: 'Молочный',
    finish: 'Ткань с выраженной фактурой',
    dimensions: {
      widthMm: 2200,
      depthMm: 950,
      heightMm: 780,
    },
    description:
      'Галерейный диван в обивке из букле с мягкими линиями и низкой посадкой.',
    details: ['Съёмные чехлы', 'Подходит для общественных пространств'],
    images: [
      placeholderImage('furn-boucle-1', 'Диван из букле в интерьере'),
      placeholderImage('furn-boucle-2', 'Деталь текстуры ткани'),
    ],
    similarProductIds: ['furn-plume-vetvi'],
  },
]

// Картины

export const mockArtworks: Artwork[] = [
  {
    id: 'art-golden-hills',
    slug: 'golden-hills',
    kind: 'art',
    name: 'Golden Hills',
    partnerId: 'partner-artist-seitzhan',
    brand: undefined,
    categoryId: 'cat-art-abstract',
    price: 650000,
    currency: 'KZT',
    priceOnRequest: false,
    isAvailable: true,
    availabilityNote: 'Единственный экземпляр',
    articleCode: 'A-ABSTR-GOLDEN-2024-09',
    qrCodeUrl: '/qr/A-ABSTR-GOLDEN-2024-09.svg',
    moderationStatus: 'approved',
    createdAt: '2024-09-05T12:00:00.000Z',
    updatedAt: '2024-09-05T12:00:00.000Z',
    technique: 'Холст, масло',
    genre: 'Абстракция',
    year: 2024,
    size: {
      widthCm: 140,
      heightCm: 100,
      depthCm: 4,
    },
    framed: true,
    description:
      'Крупноформатная абстракция с мягкими золотистыми переливами, вдохновлённая горными ландшафтами.',
    images: [
      placeholderImage('art-golden-hills-1', 'Общий вид картины Golden Hills'),
      placeholderImage('art-golden-hills-2', 'Фрагмент фактуры и мазков'),
    ],
    usedInProjectIds: ['proj-gallery-space'],
    similarArtworkIds: [],
  },
]
