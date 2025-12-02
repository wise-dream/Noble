<script setup lang="ts">
import { computed } from 'vue'
import { mockMarqueeItems } from '@/entities/home/model/mocks'
import type { MarqueeItem } from '@/entities/home/model/types'

interface MarqueeRow {
  id: string
  items: MarqueeItem[]
  repeatedItems: MarqueeItem[]
}

const splitIntoRows = (items: MarqueeItem[]): MarqueeRow[] => {
  const result: MarqueeRow[] = []
  const n = items.length
  if (n === 0) return result

  const sizes: number[] = []
  let remaining = n

  while (remaining > 0) {
    if (remaining > 7) {
      sizes.push(5)
      remaining -= 5
    } else if (remaining === 7) {
      sizes.push(4, 3)
      remaining = 0
    } else {
      // 3..7, но не 7 (7 уже обработали выше)
      sizes.push(remaining)
      remaining = 0
    }
  }

  let start = 0
  sizes.forEach((len, idx) => {
    const slice = items.slice(start, start + len)
    start += len
    result.push({
      id: `marquee-row-${idx}`,
      items: slice,
      repeatedItems: [...slice, ...slice],
    })
  })

  return result
}

const rows = computed<MarqueeRow[]>(() => splitIntoRows(mockMarqueeItems))
</script>

<template>
  <section
    id="projects"
    class="border-y border-white/10 bg-black/80"
    aria-label="Проекты Noble"
  >
    <div class="relative">
      <div
        v-for="(row, rowIndex) in rows"
        :key="row.id"
        class="marquee-row"
        :data-row="rowIndex"
      >
        <div class="marquee-track">
          <div class="marquee-inner">
            <NuxtLink
              v-for="(item, index) in row.repeatedItems"
              :key="`${row.id}-${item.id}-${index}`"
              :to="`/projects/${item.projectSlug}`"
              class="marquee-card"
            > 
              <img
                :src="item.image.url"
                :alt="item.image.alt"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                class="marquee-card__image"
              />

              <div class="marquee-card__gradient" />

              <div class="marquee-card__meta">
                <h3 class="marquee-card__title">
                  {{ item.title }}
                </h3>
                <p v-if="item.subtitle" class="marquee-card__subtitle">
                  {{ item.subtitle }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-row {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-block: 0.75rem;
}

.marquee-track {
  width: 100%;
  height: 400px;
}

.marquee-inner {
  display: flex;
  flex-wrap: nowrap;
  width: max-content;
  height: 100%;
  gap: 1.5rem;
  will-change: transform;
  animation: marquee-scroll 35s linear infinite;
}

.marquee-row:nth-child(1) .marquee-inner {
  animation-duration: 32s;
}

.marquee-row:nth-child(2) .marquee-inner {
  animation-duration: 28s;
  animation-direction: reverse;
}

.marquee-row:nth-child(3) .marquee-inner {
  animation-duration: 30s;
}

.marquee-card {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  will-change: transform;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}


.marquee-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
}

.marquee-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

.marquee-card__gradient {
  pointer-events: none;
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    transparent 55%,
    rgba(0, 0, 0, 0.4)
  );
}

.marquee-card__meta {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0);
  text-align: left;
  max-width: 80%;
}

.marquee-card__title {
  font-size: 0.6875rem;
  font-weight: 500;
  color: #f9fafb;
  text-transform: uppercase;
  letter-spacing: 0.22em;
}

@media (min-width: 768px) {
  .marquee-card__title {
    font-size: 0.75rem;
  }
}

.marquee-card__subtitle {
  margin-top: 0.15rem;
  font-size: 0.625rem;
  color: #d1d5db;
}

@keyframes marquee-scroll {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-inner {
    animation: none;
  }
}
</style>
