<template>
  <div class="bg-white border border-stroke-gray">
    <ContainerElement
      as="header"
      class="flex items-center justify-between px-4 py-2 lg:px-10 lg:py-5"
    >
      <!-- LOGO -->
      <slot name="logo">
        <ImageElement
          class="h-8"
          src="https://www.digitaldeni.de/_next/static/images/logo-073368f054afc8af2c4d6e487e8812aa.png"
        />
      </slot>

      <!-- DESKTOP NAVIGATION -->
      <div class="hidden lg:block">
        <slot
          name="navigation"
          :selected="selected"
          :handle-select="handleSelect"
        />
        <slot
          name="cta"
          :selected="selected"
          :handle-cta-click="() => handleMenuClick(false)"
        />
      </div>
      <!-- MOBILE MENU ICON -->
      <div class="lg:hidden">
        <slot name="mobile-menu-icon" :handle-menu-click="handleMenuClick"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-stroke-gray"
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
              <slot
                name="navigation"
                :selected="selected"
                :handle-select="handleSelect"
              />
            </div>
            <div class="flex items-end">
              <slot
                name="cta"
                :selected="selected"
                :handle-cta-click="() => handleMenuClick(false)"
              />
            </div>
          </nav>
        </SidebarElement>
      </div>
    </ContainerElement>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContainerElement from '../atoms/ContainerElement.vue'
const emit = defineEmits(['select:nav'])

const isSidebarVisible = ref(true)

function handleSelect() {
  isSidebarVisible.value = false
  emit('select:nav')
}

function handleMenuClick(isOpen) {
  isSidebarVisible.value = isOpen
}
</script>
