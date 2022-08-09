<template>
  <div class="fixed inset-0">
    <BackdropElement
      is-scroll-lock-enabled="true"
      @click:backdrop="handleClose"
    />
    <div class="z-modal relative h-full">
      <!-- CLOSE ICON -->
      <div
        class="absolute top-4 right-4 flex flex-col text-font-light-gray cursor-pointer"
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
