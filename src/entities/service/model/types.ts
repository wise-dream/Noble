// src/entities/service/model/types.ts

import type { ImageMedia } from '../../../shared/model/media'

export interface Service {
  id: string
  slug: string
  title: string
  description?: string
  tags: string[]
  heroImage?: ImageMedia
  projectIds: string[]
}
