<template>
  <div class="fixed inset-0">
    <BackdropElement is-scroll-lock-enabled @click:backdrop="handleClose" />
    <div class="z-modal relative flex flex-col min-h-full bg-white">
      <div class="flex justify-end p-4 text-font-light-gray cursor-pointer">
        <CloseIconElement @click:close="handleClose" />
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
