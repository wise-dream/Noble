<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Button } from '@shared/ui/button'
import { useHead } from 'nuxt/app'

const videoSrc = '/video/video.mp4'

useHead({
  title: 'Noble — премиальный агрегатор дизайна, искусства и мебели',
  meta: [
    {
      name: 'description',
      content:
        'Noble — премиальный агрегатор услуг дизайнеров, художников и поставщиков мебели с уникальными портфолио и коллекциями.',
    },
  ],
})

const videoEl = ref<HTMLVideoElement | null>(null)

let observer: IntersectionObserver | null = null
let isInView = false

const handleEnded = () => {
  const el = videoEl.value
  if (!el) return

  if (!isInView) return

  el.currentTime = 0
  const p = el.play()
  if (p && typeof p.catch === 'function') {
    p.catch(() => {})
  }
}

onMounted(() => {
  const el = videoEl.value
  if (!el) return

  el.addEventListener('ended', handleEnded)

  observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      const video = videoEl.value
      if (!video || !entry) return

      isInView = entry.isIntersecting && entry.intersectionRatio > 0.2

      if (isInView) {
        if (video.paused) {
          const p = video.play()
          if (p && typeof p.catch === 'function') {
            p.catch(() => {})
          }
        }
      } else {
        if (!video.paused) {
          video.pause()
        }
      }
    },
    {
      threshold: [0, 0.2, 0.5, 0.8, 1],
    },
  )

  observer.observe(el)

  const p = el.play()
  if (p && typeof p.catch === 'function') {
    p.catch(() => {})
  }
})

onBeforeUnmount(() => {
  const el = videoEl.value
  if (el) {
    el.removeEventListener('ended', handleEnded)
  }
  if (observer && el) {
    observer.unobserve(el)
  }
  observer?.disconnect()
  observer = null
})
</script>

<template>
  <section
    class="relative w-full h-[100vh] overflow-hidden"
    aria-labelledby="hero-title"
  >
    <video
      ref="videoEl"
      :src="videoSrc"
      autoplay
      muted
      playsinline
      aria-hidden="true"
      tabindex="-1"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div
      class="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"
      aria-hidden="true"
    />

    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 md:px-8 text-center"
    >
      <p
        class="hero-kicker mb-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-neutral-200/80"
      >
        Curated design · art · furniture
      </p>

      <h1
        id="hero-title"
        class="hero-title max-w-4xl text-balance font-light text-neutral-50 leading-tight tracking-[0.22em] text-3xl md:text-5xl lg:text-6xl uppercase"
      >
        Noble
        <span
          class="hero-subtitle-line mt-3 block text-[10px] md:text-xs tracking-[0.5em] text-neutral-300/80"
        >
          Studio · Home · Art Gallery
        </span>
      </h1>

      <p
        class="hero-subtitle mt-6 max-w-2xl text-sm md:text-base text-neutral-100/90"
      >
        Премиальный агрегатор услуг дизайнеров, художников и поставщиков мебели
        с уникальными портфолио и коллекциями
      </p>

      <div
        class="hero-buttons mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <NuxtLink to="#projects">
          <Button type="button" class="hero-cta whitespace-nowrap">
            NOBLE STUDIO
          </Button>
        </NuxtLink>
        <NuxtLink to="/home">
          <Button
            type="button"
            class="hero-cta hero-cta-outline whitespace-nowrap"
          >
            NOBLE HOME
          </Button>
        </NuxtLink>
        <NuxtLink to="/art-gallery">
          <Button
            type="button"
            class="hero-cta hero-cta-outline whitespace-nowrap"
          >
            NOBLE ART GALLERY
          </Button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-kicker {
  opacity: 0;
  transform: translateY(8px);
  animation: hero-fade-up 0.8s ease-out 0.15s forwards;
}

.hero-title {
  opacity: 0;
  transform: translateY(14px);
  animation: hero-fade-up 0.9s ease-out 0.3s forwards;
}

.hero-subtitle-line {
  opacity: 0;
  transform: translateY(6px);
  animation: hero-fade-up 0.8s ease-out 0.45s forwards;
}

.hero-subtitle {
  opacity: 0;
  transform: translateY(16px);
  animation: hero-fade-up 0.9s ease-out 0.5s forwards;
}

.hero-buttons {
  opacity: 0;
  transform: translateY(20px);
  animation: hero-fade-up 0.9s ease-out 0.7s forwards;
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  font-size: 0.625rem;
  line-height: 1;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: #000000;
  background-color: #ffffff;
  border: 1px solid transparent;
  transition:
    transform 220ms ease-out,
    box-shadow 220ms ease-out,
    background-color 220ms ease-out,
    border-color 220ms ease-out;
}

@media (min-width: 768px) {
  .hero-cta {
    padding-inline: 2.5rem;
    font-size: 0.75rem;
  }
}

.hero-cta:hover {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.45);
}

.hero-cta-outline {
  background-color: rgba(255, 255, 255, 0.05);
  color: #f9fafb;
  border-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.hero-cta-outline:hover {
  border-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(255, 255, 255, 0.06);
}

.hero-cta:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .hero-kicker,
  .hero-title,
  .hero-subtitle-line,
  .hero-subtitle,
  .hero-buttons {
    animation: none;
    transform: none;
    opacity: 1;
  }
}

@keyframes hero-fade-up {
  0% {
    opacity: 0;
    transform: translateY(22px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
