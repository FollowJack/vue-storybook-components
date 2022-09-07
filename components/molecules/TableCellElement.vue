<template>
  <component :is="as" :class="'p-4'">
    <slot />
  </component>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td

defineProps({
  as: {
    type: String,
    default: 'td',
    validator: (value) => ['td', 'th'].includes(value),
  },
})
</script>
