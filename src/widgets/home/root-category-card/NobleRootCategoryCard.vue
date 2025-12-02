<script setup lang="ts">
import type { RootCategory, RootCategoryId } from '@entities/home/model/types';

interface Props {
  category: RootCategory
  active?: boolean
}

interface Emits {
  (e: 'select', id: RootCategoryId): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('select', props.category.id)
}
</script>

<template>
  <button
    type="button"
    class="noble-card noble-card--root group relative"
    :class="{
      'noble-card--active': active,
    }"
    @click="handleClick"
  >
    <div class="relative overflow-hidden h-full">
      <div class="w-full h-full overflow-hidden">
        <img
          :src="category.image"
          :alt="category.title"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05] min-h-[100%]"
        >
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />
    </div>
    <div class="flex flex-col gap-1 text-left noble-card__meta">
      <p class="text-md font-medium uppercase tracking-[0.26em]">
        {{ category.title }}
      </p>
      <p class="text-md text-neutral-400">
        {{ category.subtitle }}
      </p>
    </div>
  </button>
</template>
