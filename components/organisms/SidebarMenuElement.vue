<template>
  <aside
    :class="[
      'absolute top-0 left-0 bottom-0 flex-col px-2 hover:w-40  shadow ease-in-out duration-300 overflow-x-hidden overflow-y-auto',
      {
        'hidden lg:flex lg:w-16': !isOpen,
        'flex w-40': isOpen,
      },
    ]"
  >
    <div v-if="slots.top" class="w-full">
      <slot name="top"> </slot>
      <div class="w-full pb-2 border-b border-font-gray" />
    </div>
    <div class="flex flex-1 flex-col w-full items-center space-y-2 py-2">
      <slot name="middle"> </slot>
    </div>
    <div v-if="slots.bottom" class="w-full flex flex-col items-center">
      <div class="w-full border-t border-font-gray" />
      <slot name="bottom"></slot>
    </div>
  </aside>
</template>

<script setup>
import { useSlots, toRef } from 'vue'
const props = defineProps({
  isInitialOpen: {
    type: Boolean,
    default: false,
  },
})

const isOpen = toRef(props, 'isInitialOpen')
const slots = useSlots()
</script>
