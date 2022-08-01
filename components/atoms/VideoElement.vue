<template>
  <video :autoplay="autoplay" :muted="muted" :loop="loop" :controls="controls">
    <source :src="src" :type="type" />
    Your browser does not support the video tag.
  </video>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
defineProps({
  src: {
    type: String,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  muted: {
    type: Boolean,
    default: true,
  },
  loop: {
    type: Boolean,
    default: true,
  },
  controls: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'video/mp4',
  },
})
</script>
