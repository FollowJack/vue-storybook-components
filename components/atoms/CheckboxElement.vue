<template>
  <label class="flex space-x-2 cursor-pointer">
    <input
      :id="id"
      :checked="isChecked"
      :value="value"
      type="checkbox"
      :name="name"
      :class="[
        'rounded cursor-pointer',
        {
          'h-4 w-4 mt-1': size === 'sm',
          'h-5 w-5 mt-0.5': size === 'md',
          'h-6 w-6': size === 'lg',
        },
      ]"
      @input="handleInput"
    />
    <slot />
  </label>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
import { ref } from 'vue'
const emit = defineEmits(['input:value'])
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  isInitialChecked: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    default: '',
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

const isChecked = ref(props.isInitialChecked)

function handleInput(event) {
  emit('input:value', event.target.value, event.target.checked)
}
</script>
