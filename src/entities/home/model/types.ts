import type { ImageMedia } from '../../../shared/model/media'

export interface MarqueeItem {
  id: string
  projectId: string
  projectSlug: string
  title: string
  subtitle?: string
  image: ImageMedia
}

export interface SpecialistCard {
  partnerId: string
  title: string
  subtitle?: string
  thumbnail: ImageMedia
}
