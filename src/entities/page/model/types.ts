// src/entities/page/model/types.ts

export type StaticPageSlug =
  | 'about'
  | 'contacts'
  | 'faq'
  | 'reviews'
  | 'terms'
  | 'privacy'

export interface StaticPage {
  slug: StaticPageSlug
  title: string
  content: string
}
