<template>
  <span
    :id="id"
    :class="[
      'inline-flex justify-center rounded-full cursor-pointer',
      {
        'px-1': slots.default,
        'h-2 w-2 block': !slots.default,
        'text-font-white': variant === 'primary' && !disabled,
        'text-font-black': variant === 'secondary' && !disabled,
        'bg-primary box-content outline outline-primary hover:bg-primary-hover focus:bg-primary-active focus:outline-disabled':
          variant === 'primary',
        'bg-white box-content outline outline-primary hover:bg-secondary-hover focus:bg-secondary-active focus:outline-disabled':
          variant === 'secondary',
        'text-white bg-font-error': variant === 'danger',
        'text-white bg-font-success': variant === 'success',
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </span>
</template>

<script setup>
import { useSlots } from 'vue'
const emit = defineEmits(['click:badge'])
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'danger',
    validator: (value) =>
      ['primary', 'secondary', 'success', 'danger'].includes(value),
  },
})
const slots = useSlots()

function handleClick() {
  emit('click:badge', props.id)
}
</script>
