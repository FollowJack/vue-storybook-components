<template>
  <ContainerElement
    as="header"
    :class="[
      'flex items-center justify-between px-4 xl:px-0 py-2 lg:py-5',
      {
        'fixed top-0 left-0 right-0': isStatic,
      },
    ]"
  >
    <!-- LOGO -->
    <slot name="logo">
      <LinkElement href="/" :border="false">
        <ImageElement class="h-8" src="https://via.placeholder.com/130x32" />
      </LinkElement>
    </slot>

    <!-- DESKTOP NAVIGATION -->
    <div class="hidden lg:block">
      <slot name="navigation" :handle-select="handleSelect" />
      <slot name="cta" :handle-cta-click="() => handleCtaClick()" />
    </div>
    <!-- MOBILE (hidden on desktop) -->
    <div class="lg:hidden">
      <!-- MOBILE MENU ICON -->
      <slot name="mobile-menu-icon" :handle-menu-click="handleMenuClick"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-stroke-gray cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="handleMenuClick(true)"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </slot>

      <!-- MOBILE SIDEBAR -->
      <SidebarElement
        v-if="isSidebarVisible"
        class="lg:hidden"
        @close:sidebar="handleMenuClick(false)"
      >
        <nav class="flex flex-col flex-1 space-y-2 px-4 pt-12 pb-6 bg-white">
          <div class="flex flex-col flex-1">
            <slot name="navigation" :handle-select="handleSelect" />
          </div>
          <div class="flex items-end">
            <slot name="cta" :handle-cta-click="handleCtaClick" />
          </div>
        </nav>
      </SidebarElement>
    </div>
  </ContainerElement>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['select:nav', 'click:cta'])
defineProps({
  isStatic: {
    type: Boolean,
    default: false,
  },
})

const isSidebarVisible = ref(false)

function handleSelect() {
  isSidebarVisible.value = false
  emit('select:nav')
}

function handleCtaClick() {
  handleMenuClick(false)
  emit('click:cta')
}

function handleMenuClick(isOpen) {
  isSidebarVisible.value = isOpen
}
</script>
