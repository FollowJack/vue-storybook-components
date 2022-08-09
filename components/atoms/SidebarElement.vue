<template>
  <div class="fixed inset-0">
    <BackdropElement is-scroll-lock-enabled @click:backdrop="handleClose" />
    <div class="z-modal relative flex flex-col min-h-full bg-white">
      <!-- CLOSE ICON -->
      <div
        class="flex justify-end pt-4 pr-4 text-font-light-gray cursor-pointer"
        @click="handleClose"
      >
        <svg
          class="h-6 w-6"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5 5L15 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { onUnmounted } from 'vue'

const emit = defineEmits(['close:sidebar'])
onUnmounted(() => {
  handleClose()
})

function handleClose() {
  emit('close:sidebar')
}
</script>
