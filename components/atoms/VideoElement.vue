<template>
  <video autoplay muted loop>
    <source :src="src" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
})
</script>
