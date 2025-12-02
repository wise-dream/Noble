export interface ImageMedia {
  id: string
  url: string
  alt: string
  width?: number
  height?: number
}

export interface VideoMedia {
  id: string
  url: string
  poster?: string
}

export interface SocialLinks {
  instagram?: string
  telegram?: string
  whatsapp?: string
  website?: string
  behance?: string
  pinterest?: string
}

export interface ContactInfo {
  city?: string
  country?: string
  email?: string
  phone?: string
  addressLine?: string
}
