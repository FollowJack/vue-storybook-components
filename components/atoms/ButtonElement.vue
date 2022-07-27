<template>
  <button
    :class="[
      'px-6 py-3 transition duration-700 ease-in-out',
      {
        'rounded-full ': rounded,
        'text-white border border-primary bg-primary hover:text-black hover:border-gray-900 hover:bg-white':
          primary,
        'text-white border border-secondary bg-secondary hover:text-black hover:border-gray-900 hover:bg-white':
          secondary,
        'text-white border bg-gray-900 hover:text-black hover:border-gray-900 hover:bg-white':
          outline,
        'text-black border-transparent hover:text-black hover:border hover:border-gray-900 hover:bg-white':
          ghost,
        'text-white border border-red-500 bg-red-500 hover:text-black hover:border-gray-900 hover:bg-white':
          danger,
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
  primary: Boolean,
  secondary: Boolean,
  outline: Boolean,
  ghost: Boolean,
  danger: Boolean,
  rounded: {
    type: Boolean,
    default: false,
  },
})
</script>
