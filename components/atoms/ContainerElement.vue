<template>
  <component :is="as" class="container mx-auto">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
    // <div>, <article>, <section>, <header>, <footer>, <form>, and more.
  },
})
</script>
