<template>
  <LinkElement
    :href="href"
    :border="false"
    :variant="activeVariant"
    :disabled="disabled"
    size="medium"
    :class="[
      'flex items-center w-full px-2 mt-3 whitespace-nowrap rounded cursor-pointer',
      {
        'bg-secondary-hover': isActive && variant.value !== 'white',
        'bg-font-black': isActive && variant.value === 'white',
      },
    ]"
    @click:link="handleClick"
  >
    <span class="min-w-[2rem] min-h-[2rem] w-8 h-8 stroke-current">
      <slot name="icon" />
    </span>
    <span class="ml-4">
      <slot name="text" />
    </span>
  </LinkElement>
</template>

<script setup>
import { computed } from 'vue'
import { toRef } from '@vue/composition-api'

const emit = defineEmits(['click:nav'])
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: null,
  },
})

const variant = toRef(props, 'variant')

const activeVariant = computed(() => {
  return variant.value || (props.isActive ? 'primary' : 'gray')
})

function handleClick() {
  emit('click:nav')
}
</script>
