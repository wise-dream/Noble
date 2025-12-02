<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from 'nuxt/app'

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

type RootCategoryId = 'sofas' | 'lighting' | 'tables'

interface RootCategory {
  id: RootCategoryId
  title: string
  subtitle: string
  image: string
}

interface Subcategory {
  id: string
  rootId: RootCategoryId
  title: string
  image: string
}

interface Product {
  id: string
  name: string
  brand: string
  rootId: RootCategoryId
  subcategoryId: string
  image: string
  priceLabel: string
  badge?: string
  supplierSlug: string
}

const rootCategories: RootCategory[] = [
  {
    id: 'sofas',
    title: 'Мягкая мебель',
    subtitle: 'Диваны, кресла, модули',
    image: '/images/home/categories/sofas.jpg',
  },
  {
    id: 'lighting',
    title: 'Свет',
    subtitle: 'Люстры, бра, торшеры',
    image: '/images/home/categories/lighting.jpg',
  },
  {
    id: 'tables',
    title: 'Столы и консоли',
    subtitle: 'Обеденные, журнальные, консоли',
    image: '/images/home/categories/tables.jpg',
  },
]

const subcategories: Subcategory[] = [
  // SOFAS
  {
    id: 'sofas-linear',
    rootId: 'sofas',
    title: 'Прямые диваны',
    image: '/images/home/subcategories/sofas-linear.jpg',
  },
  {
    id: 'sofas-modular',
    rootId: 'sofas',
    title: 'Модульные диваны',
    image: '/images/home/subcategories/sofas-modular.jpg',
  },
  {
    id: 'sofas-armchairs',
    rootId: 'sofas',
    title: 'Кресла',
    image: '/images/home/subcategories/sofas-armchairs.jpg',
  },
  // LIGHTING
  {
    id: 'lighting-chandeliers',
    rootId: 'lighting',
    title: 'Люстры',
    image: '/images/home/subcategories/lighting-chandeliers.jpg',
  },
  {
    id: 'lighting-sconces',
    rootId: 'lighting',
    title: 'Бра',
    image: '/images/home/subcategories/lighting-sconces.jpg',
  },
  {
    id: 'lighting-floor',
    rootId: 'lighting',
    title: 'Торшеры',
    image: '/images/home/subcategories/lighting-floor.jpg',
  },
  // TABLES
  {
    id: 'tables-dining',
    rootId: 'tables',
    title: 'Обеденные столы',
    image: '/images/home/subcategories/tables-dining.jpg',
  },
  {
    id: 'tables-coffee',
    rootId: 'tables',
    title: 'Журнальные столы',
    image: '/images/home/subcategories/tables-coffee.jpg',
  },
  {
    id: 'tables-console',
    rootId: 'tables',
    title: 'Консоли',
    image: '/images/home/subcategories/tables-console.jpg',
  },
]

const products: Product[] = [
  // LIGHTING / VETVI
  {
    id: 'prod-plume-vetvi',
    name: 'Люстра PLUME',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-chandeliers',
    image: '/images/home/products/plume-vetvi.jpg',
    priceLabel: 'от 380 000 ₽',
    badge: 'Новый',
    supplierSlug: 'vetvi',
  },
  {
    id: 'prod-line-vetvi',
    name: 'Линейный свет LINE',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-sconces',
    image: '/images/home/products/line-vetvi.jpg',
    priceLabel: 'по запросу',
    badge: 'Проектный',
    supplierSlug: 'vetvi',
  },
  {
    id: 'prod-floor-vetvi',
    name: 'Торшер ARCH',
    brand: 'VETVI',
    rootId: 'lighting',
    subcategoryId: 'lighting-floor',
    image: '/images/home/products/floor-vetvi.jpg',
    priceLabel: 'от 210 000 ₽',
    supplierSlug: 'vetvi',
  },
  // SOFAS
  {
    id: 'prod-sofa-linear-1',
    name: 'Диван LEX',
    brand: 'Noble Select',
    rootId: 'sofas',
    subcategoryId: 'sofas-linear',
    image: '/images/home/products/sofa-lex.jpg',
    priceLabel: 'от 520 000 ₽',
    badge: 'Хит',
    supplierSlug: 'noble-select',
  },
  {
    id: 'prod-sofa-modular-1',
    name: 'Модульная система FRAME',
    brand: 'Noble Select',
    rootId: 'sofas',
    subcategoryId: 'sofas-modular',
    image: '/images/home/products/sofa-frame.jpg',
    priceLabel: 'по запросу',
    supplierSlug: 'noble-select',
  },
  {
    id: 'prod-armchair-1',
    name: 'Кресло ARC',
    brand: 'Local Studio',
    rootId: 'sofas',
    subcategoryId: 'sofas-armchairs',
    image: '/images/home/products/armchair-arc.jpg',
    priceLabel: 'от 190 000 ₽',
    supplierSlug: 'local-studio',
  },
  // TABLES
  {
    id: 'prod-dining-1',
    name: 'Обеденный стол STONE',
    brand: 'Studio Forma',
    rootId: 'tables',
    subcategoryId: 'tables-dining',
    image: '/images/home/products/table-stone.jpg',
    priceLabel: 'от 430 000 ₽',
    supplierSlug: 'studio-forma',
  },
  {
    id: 'prod-coffee-1',
    name: 'Журнальный стол LOOP',
    brand: 'Local Studio',
    rootId: 'tables',
    subcategoryId: 'tables-coffee',
    image: '/images/home/products/table-loop.jpg',
    priceLabel: 'от 95 000 ₽',
    supplierSlug: 'local-studio',
  },
  {
    id: 'prod-console-1',
    name: 'Консоль LINEAR',
    brand: 'Studio Forma',
    rootId: 'tables',
    subcategoryId: 'tables-console',
    image: '/images/home/products/console-linear.jpg',
    priceLabel: 'по запросу',
    supplierSlug: 'studio-forma',
  },
]

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

const productsBySubcategory = computed(() => {
  if (selectedSubcategoryId.value === 'all') return productsByRoot.value
  return productsByRoot.value.filter(
    (p) => p.subcategoryId === selectedSubcategoryId.value,
  )
})

const brandsForFilter = computed(() => {
  const set = new Set<string>()
  productsByRoot.value.forEach((p) => set.add(p.brand))
  return Array.from(set)
})

const visibleProducts = computed(() => {
  let base = productsBySubcategory.value
  if (selectedBrand.value !== 'all') {
    base = base.filter((p) => p.brand === selectedBrand.value)
  }
  return base
})

const breadcrumb = computed(() => {
  const root = currentRoot.value?.title ?? ''
  if (selectedSubcategoryId.value === 'all') return root
  const sub = visibleSubcategories.value.find(
    (s) => s.id === selectedSubcategoryId.value,
  )?.title
  if (!sub) return root
  return `${root} · ${sub}`
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
  <main class="min-h-screen bg-black text-neutral-50">
    <section class="border-b border-white/10">
      <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:px-6 md:py-14 lg:py-16">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl space-y-3">
            <p class="text-[10px] uppercase tracking-[0.4em] text-neutral-400">
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
          <div class="text-xs text-neutral-400 md:text-right">
            <p>Навигация по категориям · первый слой</p>
            <p>Глубина: категории → виды → карточки товаров</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Root categories (первый слой) -->
    <section class="border-b border-white/10">
      <div class="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div class="mb-5 flex items-center justify-between gap-4">
          <h2 class="text-xs uppercase tracking-[0.35em] text-neutral-400">
            Категории мебели
          </h2>
          <p class="hidden text-xs text-white md:block">
            Сначала выбираем блок мебели · затем уточняем вид
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          <button
            v-for="root in rootCategories"
            :key="root.id"
            type="button"
            class="category-card group"
            :class="{
              'category-card--active': root.id === selectedRootId,
            }"
            @click="handleSelectRoot(root.id)"
          >
            <div class="relative overflow-hidden">
              <div
                class="h-32 w-full overflow-hidden md:h-40"
              >
                <img
                  :src="root.image"
                  :alt="root.title"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                >
              </div>
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
            </div>
            <div class="flex flex-col gap-1 px-3.5 pb-3.5 pt-3 text-left">
              <p class="text-[11px] font-medium uppercase tracking-[0.26em]">
                {{ root.title }}
              </p>
              <p class="text-[11px] text-neutral-400">
                {{ root.subtitle }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Subcategories (второй слой) + фильтры -->
    <section class="border-b border-white/10 bg-black">
      <div class="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-9">
        <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div class="space-y-1">
            <p class="text-[11px] uppercase tracking-[0.35em] text-neutral-400">
              {{ breadcrumb }}
            </p>
            <p class="text-xs text-neutral-500">
              Выберите вид внутри категории, затем сузьте по брендам
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-xs">
            <div class="flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5">
              <span class="text-[11px] uppercase tracking-[0.26em] text-neutral-300">Бренд</span>
              <select
                v-model="selectedBrand"
                class="bg-transparent text-xs text-neutral-100 outline-none"
              >
                <option value="all">
                  Все
                </option>
                <option
                  v-for="brand in brandsForFilter"
                  :key="brand"
                  :value="brand"
                >
                  {{ brand }}
                </option>
              </select>
            </div>
            <p class="text-[11px] text-neutral-500">
              Товаров: {{ visibleProducts.length }}
            </p>
          </div>
        </div>

        <div class="grid gap-3 md:grid-cols-3">
          <button
            v-for="sub in visibleSubcategories"
            :key="sub.id"
            type="button"
            class="subcategory-card group"
            :class="{
              'subcategory-card--active': sub.id === selectedSubcategoryId,
            }"
            @click="handleSelectSubcategory(sub.id)"
          >
            <div class="relative overflow-hidden">
              <div class="h-20 w-full overflow-hidden md:h-24">
                <img
                  :src="sub.image"
                  :alt="sub.title"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                >
              </div>
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />
            </div>
            <div class="px-3 pb-2 pt-2.5 text-left">
              <p class="text-[11px] uppercase tracking-[0.22em] text-neutral-100">
                {{ sub.title }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>

    <!-- Products grid -->
    <section class="bg-black">
      <div class="mx-auto max-w-6xl px-4 pb-10 pt-6 md:px-6 md:pb-14 md:pt-8">
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
          class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <NuxtLink
            v-for="product in visibleProducts"
            :key="product.id"
            :to="`/home/product/${product.id}`"
            class="product-card group"
          >
            <div class="relative overflow-hidden">
              <div class="h-56 w-full overflow-hidden md:h-64">
                <img
                  :src="product.image"
                  :alt="product.name"
                  loading="lazy"
                  decoding="async"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                >
              </div>
              <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/0" />

              <div class="product-card__meta">
                <div class="flex items-center gap-2">
                  <p class="text-[10px] uppercase tracking-[0.26em] text-neutral-100">
                    {{ product.name }}
                  </p>
                  <span
                    v-if="product.badge"
                    class="bg-white/10 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-neutral-100"
                  >
                    {{ product.badge }}
                  </span>
                </div>
                <p class="mt-1 text-[10px] text-neutral-300">
                  {{ product.brand }} · {{ product.priceLabel }}
                </p>
                <p class="mt-1 text-[10px] text-neutral-400">
                  Смотреть детальную карточку товара
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>

        <p
          v-else
          class="mt-6 text-sm text-neutral-400"
        >
          Для выбранной комбинации категории и бренда товары пока не добавлены. Попробуйте сбросить фильтры.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.category-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgb(0, 0, 0);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  transition:
    transform 0.2s ease-out,
    box-shadow 0.2s ease-out,
    border-color 0.2s ease-out,
    background-color 0.2s ease-out;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
}

.category-card--active {
  border-color: rgba(248, 250, 252, 0.7);
  background-color: rgba(255, 255, 255, 0.06);
}


.subcategory-card {
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(0, 0, 0);
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  transition:
    transform 180ms ease-out,
    border-color 180ms ease-out,
    background-color 180ms ease-out,
    box-shadow 180ms ease-out;
}

.subcategory-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
  border-color: rgba(248, 250, 252, 0.4);
}

.subcategory-card--active {
  border-color: rgba(248, 250, 252, 0.9);
  background-color: rgb(0, 0, 0);
}

.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgba(255, 255, 255, 0.14);
  overflow: hidden;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
}

.product-card__meta {
  position: absolute;
  left: 1.25rem;
  bottom: 1.25rem;
  padding: 0.4rem 0.75rem;
  background-color: rgba(0, 0, 0);
  text-align: left;
  max-width: 80%;
}

</style>
