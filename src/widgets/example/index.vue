<script setup lang="ts">
import { useExampleStore } from '@shared/stores/example'

const store = useExampleStore()
</script>

<template>
  <div class="border border-slate-800 rounded-lg p-3 space-y-2">
    <div class="text-sm font-medium">
      Пример виджета
    </div>
    <div class="text-sm">
      Счётчик: {{ store.count }}
    </div>
    <button
      class="px-3 py-1 text-xs rounded bg-slate-700 hover:bg-slate-600"
      type="button"
      @click="store.increment"
    >
      Увеличить
    </button>
  </div>
</template>
