<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <slot :selected="selected" :handle-select="handleSelect" />
  </ul>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['select:tab'])
const props = defineProps({
  initialSelected: {
    type: String,
    default: null,
  },
})
const selected = ref(props.initialSelected)

function handleSelect(id) {
  selected.value = id
  emit('select:tab', id)
}
</script>
