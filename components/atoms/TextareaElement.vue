<template>
  <textarea
    :name="name"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    :maxlength="maxLength"
    :class="[
      'h-40 py-2 px-4 bg-field-form rounded focus:ring-field-stroke-focused focus:outline-field-stroke-focused',
      {
        'text-font-black cursor-pointer hover:outline hover:outline-field-stroke-hover':
          !disabled,
        'text-font-disabled cursor-not-allowed': disabled,
        'text-copy-large': variant === 'copy-large',
        'text-copy-medium': variant === 'copy-medium',
        'text-copy-small': variant === 'copy-small',
        'font-bold': weight === 'bold',
      },
    ]"
  />
</template>

<script setup>
// docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
defineProps({
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'copy-medium',
    validator: (value) =>
      ['copy-large', 'copy-medium', 'copy-small'].includes(value),
  },
  weight: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'bold'].includes(value),
  },
  maxLength: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>
