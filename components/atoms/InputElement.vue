<template>
  <input
    :value="value"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :class="['py-2 px-5 border border-gray-500 rounded-md']"
  />
</template>

<script setup>
defineProps({
  value: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
})
</script>
