<template>
  <div class="relative">
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
      :class="[
        'py-4 px-5 bg-field-form rounded focus:ring-field-stroke-focused focus:outline-field-stroke-focused',
        {
          'text-font-black cursor-pointer hover:outline hover:outline-field-stroke-hover':
            !disabled,
          'text-font-disabled cursor-not-allowed': disabled,
        },
      ]"
    />
  </div>
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
