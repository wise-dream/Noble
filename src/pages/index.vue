<script setup lang="ts">
const message = 'Nuxt + PWA + FSD scaffold'
</script>

<template>
  <div class="space-y-4">
    <h2 class="text-2xl font-semibold">
      {{ message }}
    </h2>

    <p>
      Стартовая страница. Дальше реализуешь FSD-слои: entities, features, widgets, shared.
    </p>

    <ul class="list-disc list-inside text-sm text-slate-300">
      <li>src/entities - модели и API для доменных сущностей</li>
      <li>src/features - «фичи» уровня пользовательских сценариев</li>
      <li>src/widgets - комплексные блоки страниц</li>
      <li>src/shared - переиспользуемые примитивы и инфраструктура</li>
    </ul>
  </div>
</template>
