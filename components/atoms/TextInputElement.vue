<template>
  <input
    :value="value"
    :type="type"
    :name="name"
    :disabled="disabled"
    :maxlength="maxlength"
    :minlength="minlength"
    :pattern="pattern"
    :placeholder="placeholder"
    :readonly="readonly"
    :class="['py-2 px-5 border border-gray-500 rounded-md']"
  />
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) =>
      ['text', 'email', 'number', 'password', 'tel', 'url', ''].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: null,
  },
  maxlength: {
    type: Number,
    default: null,
  },
  minlength: {
    type: Number,
    default: null,
  },
  pattern: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
})
</script>
