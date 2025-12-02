<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, useHead } from 'nuxt/app'
import { mockMarqueeItems } from '@/entities/home/model/mocks'
import type { MarqueeItem, ProjectGalleryItem } from '@/entities/home/model/types'

const route = useRoute()
const router = useRouter()

const slug = computed(() => route.params.slug as string)

const mainItem = computed<MarqueeItem | null>(() =>
  mockMarqueeItems.find((item) => item.projectSlug === slug.value) ?? null,
)

const galleryItems = computed<ProjectGalleryItem[]>(() =>
  mainItem.value?.gallery ?? [],
)

const projectTitle = computed(() => mainItem.value?.title ?? 'Проект Noble')
const projectSubtitle = computed(
  () => mainItem.value?.subtitle ?? 'Проект Noble · интерьер и свет',
)

useHead(() => ({
  title: `${projectTitle.value} — проект Noble`,
  meta: [
    {
      name: 'description',
      content: `Проект ${projectTitle.value}: подборка кадров, световых сценариев и мебели из Noble.`,
    },
  ],
}))

const handleBack = () => {
  router.back()
}
</script>

<template>
  <section class="border-b border-white/10 flex w-full">
    <div class="mx-auto flex flex-col gap-6 px-4 py-4 md:px-6 w-[40%] ml-0">
      <button
        type="button"
        class="flex items-center gap-2 text-md uppercase tracking-[0.26em] cursor-pointer w-40 h-12"
        @click="handleBack"
      >
        <UIcon name="lucide:arrow-left" />
        <span>
          Назад
        </span>
      </button>

      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="space-y-3 md:max-w-2xl">
          <p class="text-md uppercase tracking-[0.4em]">
            Noble Projects · интерьеры и свет
          </p>
          <h1 class="text-2xl font-light uppercase tracking-[0.18em] md:text-3xl lg:text-4xl">
            {{ projectTitle }}
          </h1>
          <p class="text-sm text-neutral-300 md:text-base">
            {{ projectSubtitle }}
          </p>
          <p class="text-md">
            Подборка кадров, где видно работу со светом, материалами и композицией пространства.
            В дальнейшем сюда можно подтянуть реальные описания проекта и планировки.
          </p>
        </div>
      </div>
    </div>

    <section
      v-if="!mainItem"
      class="border-b border-white/10 bg-black"
    >
      <div class="mx-auto px-4 py-16 md:px-6">
        <p class="text-sm text-neutral-400">
          Проект не найден. Возможно, карточка ещё не добавлена в витрину.
        </p>
      </div>
    </section>

    <section
      v-else
      class="border-b border-white/10 bg-black w-[60%]"
    >
      <div>
        <div class="relative overflow-hidden border border-white/10">
          <div class="w-full overflow-hidden">
            <img
              :src="mainItem.image.url"
              :alt="mainItem.image.alt"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover"
            >
          </div>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0" />

          <div class="absolute bottom-5 left-5 max-w-[80%] bg-black/90 px-4 py-3 text-left">
            <p class="text-sm uppercase tracking-[0.26em]">
              Основной кадр проекта
            </p>
            <p class="mt-1 text-md">
              {{ mainItem.image.alt }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section
    v-if="mainItem"
  >
    <div class="mx-auto px-4 pb-14 md:px-6">
      <div class="my-6 flex items-center justify-between gap-4">
        <h2 class="text-md uppercase tracking-[0.35em]">
          Кадры проекта
        </h2>
        <p class="text-md">
          {{ galleryItems.length ? 'Дополнительные ракурсы и сцены' : 'Пока добавлен только один кадр' }}
        </p>
      </div>

      <div
        v-if="galleryItems.length"
        class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="item in galleryItems"
          :key="item.id"
          class="group overflow-hidden border border-white/10"
        >
          <div class="relative h-72 w-full overflow-hidden md:h-72">
            <img
              :src="item.image.url"
              :alt="item.image.alt"
              loading="lazy"
              decoding="async"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            >
            <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/0" />
            <div class="absolute bottom-4 left-4 right-4 bg-black/90 px-3 py-2 text-left">
              <p class="text-[10px] uppercase tracking-[0.22em] text-neutral-100">
                {{ item.title }}
              </p>
              <p
                v-if="item.subtitle"
                class="mt-1 text-md text-neutral-300"
              >
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <div
        v-else
        class="rounded-xl border border-white/10 bg-black/40 px-4 py-6 text-sm text-neutral-400"
      >
        Пока для этого проекта добавлен только один кадр из бегущей строки.
        Позже сюда можно будет подтянуть планировки, текстовое описание и связанные товары из NOBLE HOME.
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
