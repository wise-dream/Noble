// src/entities/project/model/types.ts

import type { ImageMedia } from '../../../shared/model/media'

export interface Project {
  id: string
  slug: string
  title: string
  partnerId: string
  description?: string

  heroImage: ImageMedia
  gallery: ImageMedia[]

  year?: number
  location?: string
  services?: string[]
  isFeatured: boolean
}
