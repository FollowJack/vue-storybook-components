<template>
  <div class="flex -space-x-4" @click="handleClick">
    <slot />
  </div>
</template>

<script setup>
const emit = defineEmits(['click:avatar-group'])
defineProps({})

function handleClick() {
  emit('click:avatar-group')
}
</script>
