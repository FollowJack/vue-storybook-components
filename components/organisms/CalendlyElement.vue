<template>
  <vue-calendly :url="url" @load="handleLoad" />
</template>

<script setup>
// docu: https://calendly.com/
// plugin: https://www.npmjs.com/package/vue-calendly
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
