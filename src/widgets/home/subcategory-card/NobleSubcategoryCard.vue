<script setup lang="ts">
import type { Subcategory } from '@entities/home/model/types';

interface Props {
  subcategory: Subcategory
  active?: boolean
}

interface Emits {
  (e: 'toggle', id: string): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const handleClick = () => {
  emit('toggle', props.subcategory.id)
}
</script>

<template>
  <button
    type="button"
    class="noble-card noble-card--subcategory group"
    :class="{
      'noble-card--active': active,
    }"
    @click="handleClick"
  >
    <div class="relative overflow-hidden h-full">
      <div class="w-full overflow-hidden h-full">
        <img
          :src="subcategory.image"
          :alt="subcategory.title"
          loading="lazy"
          decoding="async"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        >
      </div>
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/0" />
    </div>
    <div class="noble-card__meta">
      <p class="text-md uppercase tracking-[0.22em] text-neutral-100">
        {{ subcategory.title }}
      </p>
    </div>
  </button>
</template>
