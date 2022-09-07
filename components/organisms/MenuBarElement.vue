<template>
  <div
    :class="[
      'flex lg:items-center px-2 lg:px-4 py-2 lg:py-5',
      {
        'fixed top-0 left-0 right-0': isStatic,
      },
    ]"
  >
    <slot name="left" />
    <slot name="middle" />
    <slot name="right" />
  </div>
</template>

<script setup>
defineProps({
  isStatic: {
    type: Boolean,
    default: false,
  },
})
</script>
