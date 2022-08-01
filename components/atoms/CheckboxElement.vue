<template>
  <div class="flex space-x-2 cursor-pointer">
    <input
      :id="id"
      :checked="isChecked"
      :value="value"
      type="checkbox"
      :class="[
        'rounded cursor-pointer',
        {
          'h-4 w-4': size === 'sm',
          'h-5 w-5': size === 'md',
          'h-6 w-6': size === 'lg',
        },
      ]"
      @input="handleInput"
    />
    <slot />
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
defineProps({
  id: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
})
const emit = defineEmits(['input:value'])

function handleInput(event) {
  emit('input:value', event.target.value, event.target.checked)
}
</script>
