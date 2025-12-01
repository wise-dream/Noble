<template>
  <div class="min-h-screen flex flex-col bg-slate-950 text-slate-50">
    <header class="border-b border-slate-800 px-4 py-3 flex items-center justify-between">
      <h1 class="font-semibold">
        Nuxt PWA FSD Starter
      </h1>
      <nav class="flex gap-4 text-sm">
        <NuxtLink to="/">Главная</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </nav>
    </header>

    <main class="flex-1 px-4 py-6">
      <slot />
    </main>

    <footer class="border-t border-slate-800 px-4 py-3 text-xs text-slate-400">
      Nuxt + PWA + FSD · generated scaffold
    </footer>
  </div>
</template>
