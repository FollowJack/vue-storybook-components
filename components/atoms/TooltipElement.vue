<template>
  <span class="relative group">
    <span @mouseover="handleHover">
      <slot name="tooltip-anchor" />
    </span>
    <div
      class="absolute bottom-0 flex-col items-center hidden mb-4 group-hover:flex"
    >
      <span
        class="relative z-tooltip p-2 bg-white whitespace-no-wrap shadow rounded"
        ><slot name="tooltip-content"
      /></span>
      <div class="z-tooltip-anchor w-3 h-3 -mt-2 bg-white rotate-45"></div>
    </div>
  </span>
</template>

<script setup>
const emit = defineEmits(['toggle'])

function handleHover() {
  emit('toggle')
}
</script>
