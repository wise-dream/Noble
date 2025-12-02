import type { ImageMedia } from '../../../shared/model/media'

export interface ProjectGalleryItem {
  id: string
  title: string
  subtitle?: string
  image: ImageMedia
}

export interface MarqueeItem {
  id: string
  projectSlug: string
  title: string
  subtitle?: string
  image: ImageMedia
  gallery?: ProjectGalleryItem[]
}
export interface SpecialistCard {
  partnerId: string
  title: string
  subtitle?: string
  thumbnail: ImageMedia
}

export type RootCategoryId = 'sofas' | 'lighting' | 'tables'

export interface RootCategory {
  id: RootCategoryId
  title: string
  subtitle: string
  image: string
}

export interface Subcategory {
  id: string
  rootId: RootCategoryId
  title: string
  image: string
}

export interface Product {
  id: string
  name: string
  brand: string
  rootId: RootCategoryId
  subcategoryId: string
  image: string
  priceLabel: string
  badge?: string
  supplierSlug: string
}
