<template>
  <button
    :id="id"
    :class="[
      // 'transition duration-700 ease-in-out',
      {
        // size
        'px-6 h-16': size === 'large',
        'px-6 h-12': size === 'medium',
        'px-6 h-10': size === 'small',
        // font color
        'text-font-white': variant === 'primary' && !disabled,
        'text-primary': variant === 'secondary' && !disabled,
        // variations
        'text-font-black hover:text-font-gray':
          variant === 'ghost' && !disabled,
        'bg-primary box-content outline outline-primary hover:bg-primary-hover focus:bg-primary-active focus:outline-disabled':
          variant === 'primary' && !disabled,
        'bg-white box-content outline outline-primary hover:bg-secondary-hover focus:bg-secondary-active focus:outline-disabled':
          variant === 'secondary' && !disabled,
        'text-white bg-font-error hover:bg-field-stroke-error':
          variant === 'danger' && !disabled,
        // disabled
        'bg-disabled text-font-disabled cursor-not-allowed': disabled,
        rounded: rounded,
      },
    ]"
    :aria-label="ariaLabel"
    :disabled="disabled"
    :name="name"
    :type="type"
    :value="value"
    @click="$emit('click:button')"
  >
    <slot />
  </button>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
defineEmits(['click:button'])
defineProps({
  variant: {
    type: String,
    default: '',
    validator: (value) =>
      ['', 'primary', 'secondary', 'ghost', 'danger'].includes(value),
  },
  rounded: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['', 'small', 'medium', 'large'].includes(value),
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'reset', 'submit'].includes(value),
  },
  id: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
})
</script>
