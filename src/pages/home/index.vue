<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from 'nuxt/app'

import { RootCategoryCard, SubcategoryCard, ProductCard } from '@widgets/home'
import type { RootCategoryId } from '~/entities/home/model/types'
import {
  rootCategories,
  subcategories,
  products,
} from '~/entities/home/model/mocks'

useHead({
  title: 'Noble Home — мебель, свет и предметы интерьера',
  meta: [
    {
      name: 'description',
      content:
        'Раздел NOBLE HOME: премиальная мебель, свет и предметы интерьера. Категории, бренды, детальные карточки товаров и переходы к поставщикам.',
    },
  ],
})

const selectedRootId = ref<RootCategoryId>('sofas')
const selectedSubcategoryId = ref<string | 'all'>('all')
const selectedBrand = ref<'all' | string>('all')

const currentRoot = computed(() =>
  rootCategories.find((c) => c.id === selectedRootId.value),
)

const visibleSubcategories = computed(() =>
  subcategories.filter((s) => s.rootId === selectedRootId.value),
)

const productsByRoot = computed(() =>
  products.filter((p) => p.rootId === selectedRootId.value),
)

const productsBySubcategory = computed(() =>
  selectedSubcategoryId.value === 'all'
    ? productsByRoot.value
    : productsByRoot.value.filter(
        (p) => p.subcategoryId === selectedSubcategoryId.value,
      ),
)

const brandsForFilter = computed(() => {
  const set = new Set<string>()
  productsByRoot.value.forEach((p) => set.add(p.brand))
  return [...set]
})

const visibleProducts = computed(() =>
  selectedBrand.value === 'all'
    ? productsBySubcategory.value
    : productsBySubcategory.value.filter(
        (p) => p.brand === selectedBrand.value,
      ),
)

const breadcrumb = computed(() => {
  const root = currentRoot.value?.title ?? ''
  if (selectedSubcategoryId.value === 'all') return root
  const sub = visibleSubcategories.value.find(
    (s) => s.id === selectedSubcategoryId.value,
  )?.title
  return sub ? `${root} · ${sub}` : root
})

const handleSelectRoot = (id: RootCategoryId) => {
  if (selectedRootId.value === id) return
  selectedRootId.value = id
  selectedSubcategoryId.value = 'all'
  selectedBrand.value = 'all'
}

const handleSelectSubcategory = (id: string) => {
  selectedSubcategoryId.value =
    selectedSubcategoryId.value === id ? 'all' : id
}
</script>

<template>
  <section class="border-b border-white/10">
    <div class="mx-auto flex flex-col gap-8 px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-3xl space-y-3 text-white">
          <p class="text-md uppercase tracking-[0.4em]">
            Noble Home · мебель и свет
          </p>
          <h1 class="text-2xl font-light uppercase tracking-[0.18em] md:text-3xl lg:text-4xl">
            Витрина мебели для частных и&nbsp;общественных интерьеров
          </h1>
          <p class="text-sm text-neutral-300 md:text-base">
            Каталог премиальной мебели и света с привязкой к реальным проектам Noble.
            Категории, бренды и товары связаны с профилями поставщиков и страницами проектов.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="border-b border-white/10">
    <div class="mx-auto px-4 py-8 md:px-6 md:py-10">
      <div class="mb-5 flex items-center justify-between gap-4">
        <h2 class="text-md uppercase tracking-[0.35em]">
          Категории мебели
        </h2>
      </div>

      <div class="flex gap-4 ">
        <RootCategoryCard
          v-for="root in rootCategories"
          :key="root.id"
          :category="root"
          :active="root.id === selectedRootId"
          @select="handleSelectRoot"
        />
      </div>
    </div>
  </section>

  <section class="border-b border-white/10 bg-black">
    <div class="mx-auto px-4 py-8 md:px-6 md:py-9">
      <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div class="space-y-1">
          <p class="text-md uppercase tracking-[0.35em]">
            {{ breadcrumb }}
          </p>
        </div>
      </div>

      <div class="flex gap-3">
        <SubcategoryCard
          v-for="sub in visibleSubcategories"
          :key="sub.id"
          :subcategory="sub"
          :active="sub.id === selectedSubcategoryId"
          @toggle="handleSelectSubcategory"
        />
      </div>
    </div>
  </section>

  <section class="bg-black">
    <div class="mx-auto px-4 pb-10 pt-6 md:px-6 md:pb-14 md:pt-8">
      <div class="mb-5 flex items-center justify-between gap-4">
        <h2 class="text-xs uppercase tracking-[0.35em] text-neutral-400">
          Товары в подборке
        </h2>
        <NuxtLink
          to="/partners"
          class="text-[11px] uppercase tracking-[0.26em] text-neutral-500 hover:text-neutral-200"
        >
          Перейти к брендам
        </NuxtLink>
      </div>

      <div
        v-if="visibleProducts.length"
        class="flex gap-3"
      >
        <ProductCard
          v-for="product in visibleProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <p
        v-else
        class="mt-6 text-sm text-neutral-400"
      >
        Для выбранной комбинации категории и бренда товары пока не добавлены. Попробуйте сбросить фильтры.
      </p>
    </div>
  </section>
</template>

<style scoped>
:global(.noble-card) {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.14);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  border: 1px solid #fff;
  min-height: 280px;
  max-height: 280px;
  max-width: 400px;
  transition:
    transform 0.2s ease-out,
    box-shadow 0.2s ease-out,
    border-color 0.2s ease-out,
    background-color 0.2s ease-out;
}

:global(.noble-card__meta) {
  position: absolute;
  background-color: rgb(0, 0, 0);
  text-align: left;
  max-width: 80%;
  left: 12px;
  bottom: 12px;
  padding: 8px 12px;
}

:global(.noble-card--active) {
  box-shadow: 0 0 16px #fff;
}
</style>
