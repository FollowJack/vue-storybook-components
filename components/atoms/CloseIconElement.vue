<template>
  <svg
    class="h-6 w-6"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    @click="handleClick"
  >
    <path
      d="M15 5L5 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 5L15 15"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
const emit = defineEmits(['click:close'])

function handleClick() {
  emit('click:close')
}
</script>
