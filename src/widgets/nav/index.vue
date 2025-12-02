<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import type { LocaleCode } from '@shared/model/common'

const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

const handleNavigate = () => {
  isOpen.value = false
}

const { locale } = useI18n()

interface LangOption {
  code: string
  label: string
}

const LANG_OPTIONS: LangOption[] = [
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' },
  { code: 'kk', label: 'Қазақша' },
  { code: 'zh', label: '中文' },
]

const changeLanguage = (code: LocaleCode) => {
  locale.value = code
}
</script>

<template>
  <div>
    <button
      type="button"
      class="nav-toggle"
      :class="{ 'nav-toggle--open': isOpen }"
      @click="toggleNav"
      aria-label="Открыть меню навигации"
      :aria-expanded="isOpen"
    >
      <span class="nav-toggle__icon" />
    </button>

    <transition name="nav-overlay">
      <div
        v-if="isOpen"
        class="nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Меню навигации сайта"
        @click.self="toggleNav"
      >
        <nav class="nav-overlay__content">
          <ul class="nav-overlay__list">
            <li class="nav-overlay__item">
              <NuxtLink
                to="/#projects"
                class="nav-overlay__link text-2xl"
                @click="handleNavigate"
              >
                NOBLE STUDIO
              </NuxtLink>
            </li>
            <li class="nav-overlay__item">
              <NuxtLink
                to="/home"
                class="nav-overlay__link text-2xl"
                @click="handleNavigate"
              >
                NOBLE HOME
              </NuxtLink>
            </li>
            <li class="nav-overlay__item">
              <NuxtLink
                to="/gallery"
                class="nav-overlay__link text-2xl"
                @click="handleNavigate"
              >
                NOBLE ART GALLERY
              </NuxtLink>
            </li>
          </ul>

          <!-- переключатель языка -->
          <div
            class="nav-lang-switcher"
            aria-label="Переключение языка"
          >
            <button
              v-for="lang in LANG_OPTIONS"
              :key="lang.code"
              type="button"
              class="nav-lang-chip"
              :class="{ 'nav-lang-chip--active': locale === lang.code }"
              @click="changeLanguage(lang.code as LocaleCode)"
            >
              {{ lang.label }}
            </button>
          </div>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.nav-toggle {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 60;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: none;
  padding: 0;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transition:
    transform 200ms ease-out,
    box-shadow 200ms ease-out,
    background-color 200ms ease-out;
}

.nav-toggle:hover {
  transform: translateY(-1px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
}

.nav-toggle:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.9);
  outline-offset: 4px;
}

.nav-toggle__icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  transition: transform 200ms ease-out;
}

.nav-toggle__icon::before,
.nav-toggle__icon::after {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  background-color: #000;
  border-radius: 999px;
}

.nav-toggle__icon::before {
  width: 2px;
  height: 18px;
}

.nav-toggle__icon::after {
  width: 18px;
  height: 2px;
}

.nav-toggle--open .nav-toggle__icon {
  transform: rotate(45deg);
}

.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background:
    radial-gradient(circle at top, rgba(255, 255, 255, 0.04), transparent 55%),
    rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(18px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-overlay__content {
  text-align: center;
  padding: 24px;
}

.nav-overlay__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-overlay__item + .nav-overlay__item {
  margin-top: 24px;
}

.nav-overlay__link {
  text-decoration: none;
  color: #f9fafb;
  text-transform: uppercase;
  letter-spacing: 0.45em;
  font-weight: 400;
  display: inline-block;
  padding-bottom: 6px;
  border-bottom: 1px solid transparent;
  transition:
    color 200ms ease-out,
    border-color 200ms ease-out,
    transform 200ms ease-out;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif;
}

.nav-overlay__link:hover {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.45);
  transform: translateY(-2px);
}

/* переключатель языка */
.nav-lang-switcher {
  margin-top: 40px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.nav-lang-chip {
  border-radius: 999px;
  border: 1px solid rgba(249, 250, 251, 0.35);
  padding: 6px 14px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: transparent;
  color: #e5e7eb;
  cursor: pointer;
  transition:
    background-color 180ms ease-out,
    color 180ms ease-out,
    border-color 180ms ease-out,
    transform 180ms ease-out;
}

.nav-lang-chip:hover {
  background-color: rgba(249, 250, 251, 0.06);
  border-color: rgba(249, 250, 251, 0.6);
  transform: translateY(-1px);
}

.nav-lang-chip--active {
  background-color: #f9fafb;
  color: #000000;
  border-color: #f9fafb;
}

.nav-overlay-enter-active,
.nav-overlay-leave-active {
  transition:
    opacity 220ms ease-out,
    transform 220ms ease-out;
}

.nav-overlay-enter-from,
.nav-overlay-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (prefers-reduced-motion: reduce) {
  .nav-toggle,
  .nav-toggle__icon,
  .nav-overlay,
  .nav-overlay__link,
  .nav-lang-chip {
    transition: none;
    transform: none !important;
  }
}
</style>
