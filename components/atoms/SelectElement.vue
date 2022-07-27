<template>
  <select
    :id="id"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
