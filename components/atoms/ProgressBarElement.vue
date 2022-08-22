<template>
  <div class="shadow w-full bg-black rounded overflow-hidden">
    <div
      class=""
      :class="[
        'leading-none py-1 text-center',
        {
          'bg-primary text-white': color === 'primary',
          'bg-secondary text-font-black': color === 'secondary',
          'bg-font-warning text-white': color === 'warning',
          'bg-font-error text-white': color === 'error',
          'bg-font-success text-white': color === 'success',
        },
      ]"
      :style="`width: ${percent}%`"
    >
      <slot>{{ percent }}%</slot>
    </div>
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
import { computed } from 'vue'
const props = defineProps({
  value: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) =>
      [
        'primary',
        'secondary',
        'disabled',
        'warning',
        'error',
        'success',
      ].includes(value),
  },
})
const percent = computed(() => {
  const value = (props.value / props.max) * 100
  // truncate 0 digits after the comma
  return value.toFixed(0)
})
</script>
