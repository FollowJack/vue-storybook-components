<template>
  <img
    :src="src"
    :loading="loading"
    :width="width"
    :height="height"
    :alt="alt"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: null,
  },
  loading: {
    type: String,
    default: null,
  },
})
</script>
