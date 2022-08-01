<template>
  <textarea
    :name="name"
    :placeholder="placeholder"
    :value="value"
    :class="['h-40 p-2 border rounded']"
  />
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
</script>
