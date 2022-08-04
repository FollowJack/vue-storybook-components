<template>
  <label
    :class="[
      'flex space-x-2',
      {
        'cursor-pointer': !disabled,
        'cursor-not-allowed': disabled,
      },
    ]"
  >
    <input
      :id="id"
      :checked="isChecked"
      :value="value"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :class="[
        'w-4 h-4 text-blue-600 accent-primary rounded border border-stroke-gray hover:border-primary ',
        {
          'h-4 w-4 mt-1': size === 'small',
          'h-5 w-5 mt-0.5': size === 'medium',
          'h-6 w-6': size === 'large',
          'cursor-not-allowed': disabled,
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
  value: {
    type: String,
    default: '',
  },
  isInitialChecked: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'large',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isChecked = ref(props.isInitialChecked)

function handleInput(event) {
  emit('input:value', event.target.value, event.target.checked)
}
</script>
