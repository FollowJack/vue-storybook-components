<template>
  <vue-calendly :url="url" style="height: 600px" @load="handleLoad" />
</template>

<script setup>
const emit = defineEmits(['calendly:loaded'])
defineProps({
  url: {
    type: String,
    default: 'https://calendly.com/webclan',
  },
})

function handleLoad() {
  emit('calendly:loaded')
}
</script>
