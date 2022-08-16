<template>
  <details class="py-2 px-4" :open="isOpen">
    <summary
      class="flex items-center justify-between cursor-pointer"
      @click.prevent="handleClick"
    >
      <slot name="header" />
      <svg
        :class="[
          'fill-current w-4 h-4 mr-1',
          {
            rotate: !isOpen,
            'rotate-90': isOpen,
          },
        ]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
        />
      </svg>
    </summary>

    <div class="mt-4">
      <slot name="content" />
    </div>
  </details>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
import { ref } from 'vue'

const emit = defineEmits(['toggle:summary'])
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'error', 'success'].includes(value),
  },
  isInitialOpen: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(props.isInitialOpen)

function handleClick() {
  isOpen.value = !isOpen.value
  emit('toggle:summary', isOpen.value)
}
</script>
