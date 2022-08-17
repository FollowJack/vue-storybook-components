<template>
  <details class="py-2 px-4" :open="isOpen.value ? 'open' : null">
    <summary
      class="flex items-center justify-between cursor-pointer"
      @click.prevent="handleClick"
    >
      <slot name="header" />
      <svg
        :class="[
          'fill-current w-4 h-4 mr-1',
          {
            rotate: !isOpen.value,
            'rotate-90': isOpen.value,
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
    <transition
      appear
      enter-class="transform opacity-0 -translate-y-full"
      enter-active-class="duration-100 ease-out"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-to-class="transform opacity-0 -translate-y-full"
    >
      <div v-if="isOpen.value" class="mt-2">
        <slot name="content" />
      </div>
    </transition>
  </details>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
import { toRef } from '@vue/composition-api'

const emit = defineEmits(['toggle:summary'])
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  isInitialOpen: {
    type: Boolean,
    default: false,
  },
})

const isOpen = toRef(props, 'isInitialOpen')

function handleClick() {
  isOpen.value = !isOpen.value
  emit('toggle:summary', props.id, isOpen.value)
}
</script>
