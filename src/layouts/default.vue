<script setup lang="ts">
import { Nav } from '@/widgets/nav';
</script>

<template>
  <UApp>
    <main>
      <slot />
    </main>
    <Nav />
  </UApp>
</template>