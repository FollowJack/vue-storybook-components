<template>
  <input
    :id="id"
    :checked="isChecked"
    type="checkbox"
    class="h-4 w-4 cursor-pointer rounded"
  />
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
})
</script>
