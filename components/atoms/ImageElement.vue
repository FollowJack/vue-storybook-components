<template>
  <img :src="src" :alt="alt" :loading="loading" />
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: null,
  },
  loading: {
    type: String,
    default: 'eager',
    validator: (value) => ['eager', 'lazy'].includes(value),
    // Further info: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading
  },
})
</script>
