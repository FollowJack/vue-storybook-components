<template>
  <div
    :id="id"
    :class="[
      'p-4 space-x-2 flex border rounded',
      {
        'bg-disabled border-primary': variant === 'info',
        'bg-field-bg-error border-font-error': variant === 'error',
        'bg-field-bg-success border-font-success': variant === 'success',
      },
    ]"
  >
    <!-- INFO ICON -->
    <span
      :class="[
        'mt-0.5',
        {
          'text-primary': variant === 'info',
          'text-font-error': variant === 'error',
          'text-font-success': variant === 'success',
        },
      ]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6024 18.3337 10C18.3337 5.39763 14.6027 1.66667 10.0003 1.66667C5.39795 1.66667 1.66699 5.39763 1.66699 10C1.66699 14.6024 5.39795 18.3333 10.0003 18.3333Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 13.3333V10"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10 6.66667H10.0083"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <div class="flex-1 space-y-1.5 flex-col">
      <slot name="header" />
      <slot name="content" />
    </div>
    <CloseIconElement
      v-if="isClosable"
      :class="[
        'mt-0.5 cursor-pointer h-6 w-6',
        {
          'text-primary': variant === 'info',
          'text-font-error': variant === 'error',
          'text-font-success': variant === 'success',
        },
      ]"
      @click:close="handleClick"
    />
  </div>
</template>

<script setup>
import CloseIconElement from './CloseIconElement.vue'
const emit = defineEmits(['click:close'])
const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'error', 'success'].includes(value),
  },
  isClosable: {
    type: Boolean,
    default: true,
  },
})

function handleClick() {
  emit('click:close', props.id)
}
</script>
