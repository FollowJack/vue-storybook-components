<template>
  <button
    :class="[
      'transition duration-700 ease-in-out',
      {
        'px-6 py-3': size === 'sm',
        'px-8 py-4': size === 'md',
        'px-10 py-5': size === 'lg',
        rounded: rounded,
        'text-white border border-primary bg-primary hover:text-black hover:border-gray-900 hover:bg-white':
          variant === 'primary',
        'text-white border border-secondary bg-secondary hover:text-black hover:border-gray-900 hover:bg-white':
          variant === 'secondary',
        'text-white border bg-gray-900 hover:text-black hover:border-gray-900 hover:bg-white':
          variant === 'outline',
        'text-black border-transparent hover:text-black hover:border hover:border-gray-900 hover:bg-white':
          variant === 'ghost',
        'text-white border border-red-500 bg-red-500 hover:text-black hover:border-gray-900 hover:bg-white':
          variant === 'danger',
      },
    ]"
    @click="$emit('click-button')"
  >
    <slot />
  </button>
</template>

<script setup>
defineEmits(['click-button'])
defineProps({
  variant: {
    type: String,
    default: '',
    validator: (value) =>
      ['', 'primary', 'secondary', 'outline', 'ghost', 'danger'].includes(
        value
      ),
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
})
</script>
