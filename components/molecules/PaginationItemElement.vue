<template>
  <li @click="handleClick">
    <ButtonElement
      size=""
      :variant="variant"
      class="flex items-center justify-center min-w-[1.5rem] h-6 px-0.5"
      :aria-label="ariaLabel"
    >
      <slot />
    </ButtonElement>
  </li>
</template>

<script setup>
import { computed } from 'vue'
const emit = defineEmits(['click:item'])
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: null,
  },
})

const variant = computed(() => {
  return props.isActive ? 'primary' : 'secondary'
})

function handleClick() {
  emit('click:item')
}
</script>
