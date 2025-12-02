<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'outline' | 'primary',
  size?: 's' | 'm' | 'l',
  className?: string
}>(),
{
  variant: 'primary',
  size: 'm'
})

const styles = {
  'primary': 'bg-black text-white',
  'outline': 'bg-transparent'
}

const sizes = {
  's': 'text-[14px] px-[8px] py-[4px] rounded-[8px]',
  'm': 'text-[18px] px-[16px] py-[8px] rounded-[8px]',
  'l': 'text-[24px] px-[24px] py-[12px] rounded-[8px]'
}

const activeStyle = computed(() => {
  return styles[props.variant]
})

const activeSize = computed(() => {
  return sizes[props.size]
})

</script>

<template>
  <button class="cursor-pointer" :class="activeStyle + ' ' + className + ' ' + activeSize" >
    <slot />
  </button>
</template>