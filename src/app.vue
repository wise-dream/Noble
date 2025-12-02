<template>
  <NuxtLayout>
    <Transition name="page" mode="out-in">
      <main class="text-white">
        <NuxtPage />
      </main>
    </Transition>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
