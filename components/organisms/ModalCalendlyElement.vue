<template>
  <ModalElement class="z-modal flex flex-col" @close="handleClose">
    <LoaderElement v-if="!isLoaded" class="m-auto fixed inset-0" />
    <CalendlyElement
      class="flex-1 w-screen md:w-[60vw] h-[25rem]"
      @calendly:loaded="handleLoaded"
    />
  </ModalElement>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits('close')
const isLoaded = ref(false)

function handleLoaded() {
  isLoaded.value = true
}

function handleClose() {
  emit('close')
}
</script>
