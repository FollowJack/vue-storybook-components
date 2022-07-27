<template>
  <textarea
    :name="name"
    :placeholder="placeholder"
    :value="value"
    :class="['h-40 p-2 border rounded-md']"
  />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    required: true,
  },
})
</script>
