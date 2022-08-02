<template>
  <select
    :id="id"
    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :selected="(option.value = selected.value)"
      @click="handleSelect"
    >
      {{ option.content }}
    </option>
  </select>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  selected: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['update:value'])

function handleSelect(newSelected) {
  emit('update:value', newSelected)
}
</script>
