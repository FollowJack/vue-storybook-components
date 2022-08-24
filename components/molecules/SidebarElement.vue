<template>
  <transition
    appear
    enter-class="transform opacity-0 translate-x-full"
    enter-active-class="duration-100 ease-out"
    enter-to-class="opacity-100"
    leave-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-to-class="transform opacity-0 translate-x-full"
  >
    <div
      class="translate-x- fixed top-0 right-0 bottom-0 w-10/12 lg:w-1/3 ease-out delay-150 duration-300"
    >
      <BackdropElement is-scroll-lock-enabled @click:backdrop="handleClose" />
      <div class="z-modal relative flex flex-col min-h-full bg-white">
        <div class="flex justify-end p-4 text-font-light-gray cursor-pointer">
          <CloseIconElement class="h-6 w-6" @click:close="handleClose" />
        </div>
        <slot />
      </div>
    </div>
  </transition>
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
