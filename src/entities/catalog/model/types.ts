import type { CatalogKind, ModerationStatus } from '../../../shared/model/common'
import type { ImageMedia } from '../../../shared/model/media'

export interface CatalogCategory {
  id: string
  slug: string
  kind: CatalogKind
  name: string

  parentId?: string
  heroImage?: ImageMedia
  order: number
}

export interface CatalogItemBase {
  id: string
  slug: string
  kind: CatalogKind
  name: string

  partnerId: string
  brand?: string

  categoryId: string
  subcategoryId?: string

  price?: number
  currency?: 'KZT' | 'RUB' | 'USD' | 'EUR'
  priceOnRequest?: boolean

  isAvailable: boolean
  availabilityNote?: string

  articleCode: string
  qrCodeUrl?: string
  moderationStatus: ModerationStatus

  createdAt: string
  updatedAt: string
}

// Мебель

export interface FurnitureDimensions {
  widthMm?: number
  depthMm?: number
  heightMm?: number
}

export interface FurnitureProduct extends CatalogItemBase {
  kind: 'furniture'
  materials: string[]
  color?: string
  finish?: string
  dimensions?: FurnitureDimensions

  description?: string
  details?: string[]

  images: ImageMedia[]
  similarProductIds: string[]
}

// Картины

export interface ArtworkDimensions {
  widthCm: number
  heightCm: number
  depthCm?: number
}

export interface Artwork extends CatalogItemBase {
  kind: 'art'

  technique?: string
  genre?: string
  year?: number
  size: ArtworkDimensions
  framed?: boolean

  description?: string
  images: ImageMedia[]
  usedInProjectIds: string[]
  similarArtworkIds: string[]
}
