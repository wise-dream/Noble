<script setup lang="ts">
import type { Product } from '@entities/home/model/types';

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="`/home/product/${product.id}`"
    class="noble-card noble-card--product group"
  >
    <div class="relative overflow-hidden h-full">
      <div class="w-full overflow-hidden h-full">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        >
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/0" />

      <div class="noble-card__meta flex flex-col gap-1">
        <div class="flex items-center gap-2">
          <p class="uppercase text-sm">
            {{ product.name }}
          </p>
          <span
            v-if="product.badge"
            class="bg-white/10 px-2 py-0.5 uppercase text-sm"
          >
            {{ product.badge }}
          </span>
        </div>
        <p class="text-sm">
          {{ product.brand }} · {{ product.priceLabel }}
        </p>
        <p class="text-sm">
          Смотреть детальную карточку товара
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
