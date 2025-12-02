// src/entities/partner/model/mocks.ts

import type { ImageMedia, VideoMedia } from '../../../shared/model/media'
import type { Partner } from './types'

const placeholderImage = (id: string, alt: string): ImageMedia => ({
  id,
  url: `/images/placeholder/${id}.jpg`,
  alt,
})

const videoHero: VideoMedia = {
  id: 'hero-main',
  url: '/video/hero-noble.mp4',
  poster: '/images/hero/poster.jpg',
}

export const mockPartners: Partner[] = [
  {
    id: 'partner-studio-noble',
    slug: 'noble-studio',
    role: 'studio',
    name: 'NOBLE Studio',
    shortName: 'Noble',
    logo: placeholderImage('logo-noble', 'Логотип Noble'),
    coverVideo: videoHero,
    tagline: 'Премиальная студия интерьера и арт-кураторства',
    about:
      'NOBLE объединяет дизайнеров, художников и локальные бренды мебели в единой премиальной платформе. Мы собираем проекты, в которых важны тактильность, материалы и архитектура пространства.',
    social: {
      instagram: 'https://instagram.com/noble.studio',
      website: 'https://noble.example.com',
    },
    contacts: {
      city: 'Алматы',
      country: 'Казахстан',
      email: 'hello@noble.example.com',
      phone: '+7 777 000 00 00',
    },
    portfolioProjectIds: ['proj-loft-apartment', 'proj-gallery-space'],
    furnitureProductIds: ['furn-plume-vetvi', 'furn-boucle-sofa'],
    artworkIds: ['art-golden-hills'],
    isFeatured: true,
  },
  {
    id: 'partner-designer-daredzhani-chris',
    slug: 'daredzhani-chris',
    role: 'designer',
    name: 'Daredzhani & Chris',
    tagline: 'Авторские интерьеры с акцентом на свет и фактуру',
    avatar: placeholderImage('designer-dc', 'Портрет Daredzhani & Chris'),
    coverImage: placeholderImage(
      'designer-dc-cover',
      'Интерьер с мягким светом и скульптурной мебелью',
    ),
    about:
      'Дует дизайнеров, работающих с современными интерьерами в духе галерейного минимализма. В портфолио — квартиры, шоурумы и частные арт-пространства.',
    social: {
      instagram: 'https://instagram.com/daredzhani.chris',
    },
    contacts: {
      city: 'Москва',
      country: 'Россия',
    },
    portfolioProjectIds: ['proj-loft-apartment'],
    furnitureProductIds: ['furn-boucle-sofa'],
    artworkIds: ['art-golden-hills'],
    isFeatured: true,
  },
  {
    id: 'partner-artist-seitzhan',
    slug: 'artist-seitzhan',
    role: 'artist',
    name: 'Сейтжан',
    tagline: 'Живопись на стыке природы и архитектуры',
    avatar: placeholderImage('artist-seitzhan', 'Художник Сейтжан'),
    coverImage: placeholderImage(
      'artist-seitzhan-cover',
      'Картина с мягким туманом и горами',
    ),
    about:
      'Современный художник, работающий с крупными форматами для интерьеров и публичных пространств. Работы часто используются в проектах Noble Studio.',
    social: {
      instagram: 'https://instagram.com/seitzhan.art',
    },
    contacts: {
      city: 'Алматы',
      country: 'Казахстан',
    },
    portfolioProjectIds: ['proj-gallery-space'],
    furnitureProductIds: [],
    artworkIds: ['art-golden-hills'],
    isFeatured: true,
  },
  {
    id: 'partner-supplier-vetvi',
    slug: 'supplier-vetvi',
    role: 'furniture_supplier',
    name: 'Фабрика VETVI',
    shortName: 'VETVI',
    logo: placeholderImage('brand-vetvi', 'Логотип фабрики VETVI'),
    coverImage: placeholderImage(
      'brand-vetvi-cover',
      'Коллекция светильников VETVI',
    ),
    about:
      'Российский бренд архитектурного света и мебели. Специализируется на выразительных светильниках для интерьерных проектов.',
    social: {
      website: 'https://vetvi.example.com',
    },
    contacts: {
      city: 'Москва',
      country: 'Россия',
    },
    portfolioProjectIds: ['proj-loft-apartment'],
    furnitureProductIds: ['furn-plume-vetvi'],
    artworkIds: [],
    isFeatured: true,
  },
]
