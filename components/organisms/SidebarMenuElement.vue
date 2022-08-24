<template>
  <div
    class="overflow-x-hidden fixed flex flex-col px-2 h-screen w-16 hover:w-40 bg-white shadow ease-in-out duration-300"
  >
    <div v-if="slots.logo" class="w-full">
      <slot name="logo"> </slot>
      <div class="pb-3 border-b border-gray-700" />
    </div>

    <div class="w-full flex flex-col items-center">
      <slot name="navigation"> </slot>
    </div>
  </div>
</template>

<script setup>
import { useSlots } from 'vue'

const slots = useSlots()
</script>
