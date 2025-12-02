import type { ContactInfo, ImageMedia, SocialLinks, VideoMedia } from '../../../shared/model/media'
import type { PartnerRole } from '../../../shared/model/common'

export interface Partner {
  id: string
  slug: string
  role: PartnerRole

  name: string
  shortName?: string

  logo?: ImageMedia
  avatar?: ImageMedia
  coverImage?: ImageMedia
  coverVideo?: VideoMedia

  tagline?: string
  about?: string

  social: SocialLinks
  contacts: ContactInfo

  portfolioProjectIds: string[]
  furnitureProductIds: string[]
  artworkIds: string[]

  isFeatured: boolean
}
