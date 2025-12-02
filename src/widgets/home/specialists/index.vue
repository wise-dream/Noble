<script setup lang="ts">
import { computed } from 'vue'
import { mockSpecialists } from '@/entities/home/model/mocks'
import { mockPartners } from '@/entities/partner/model/mocks'

const specialists = computed(() =>
  mockSpecialists.map((card) => {
    const partner = mockPartners.find((p) => p.id === card.partnerId)
    return {
      ...card,
      tagline: partner?.tagline ?? '',
      city: partner?.contacts.city,
      role: partner?.role,
    }
  }),
)
</script>

<template>
  <section
    class="bg-black px-4 md:px-8 py-16 md:py-24"
    aria-labelledby="specialists-title"
  >
    <div class="mx-auto max-w-6xl">
      <header
        class="mb-10 md:mb-14 flex flex-col items-start gap-4 md:flex-row md:justify-between "
      >
        <div>
          <p
            class="text-[10px] md:text-xs uppercase tracking-[0.35em] text-neutral-400"
          >
            Curated partners
          </p>
          <h2
            id="specialists-title"
            class="mt-2 text-2xl md:text-3xl text-neutral-50 uppercase tracking-[0.22em]"
          >
            Дизайнеры · художники · бренды
          </h2>
        </div>
        <p class="max-w-md text-xs md:text-sm text-neutral-300 md:mt-[calc(16px+0.5rem)]">
          Кураторский пул студий, художников и поставщиков, с которыми мы
          создаём интерьеры и коллекции для NOBLE.
        </p>
      </header>

      <div class="grid gap-8 md:grid-cols-3">
        <article
          v-for="spec in specialists"
          :key="spec.partnerId"
          class="group rounded-3xl border border-white/5 bg-white/5  backdrop-blur-md transition-transform duration-200 ease-out hover:-translate-y-1 hover:bg-white/8 overflow-hidden pb-4 md:pb-5"
        >
          <img
            :src="spec.thumbnail.url"
            :alt="spec.thumbnail.alt"
            class="h-44 w-full object-cover md:h-52 mb-4"
            loading="lazy"
          >

          <div class="flex flex-col gap-1 text-left px-4 md:px-5">
            <h3 class="text-sm md:text-base font-medium text-neutral-50">
              {{ spec.title }}
            </h3>
            <p class="text-[11px] text-neutral-300">
              {{ spec.subtitle }}
            </p>
            <p
              v-if="spec.city"
              class="mt-1 text-[10px] uppercase tracking-[0.25em] text-neutral-500"
            >
              {{ spec.city }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
/* при желании сюда тоже можно добавить @apply для карточек */
</style>
