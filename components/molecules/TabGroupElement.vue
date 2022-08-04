<template>
  <ul class="flex flex-wrap">
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
  if (selected.value === id) {
    selected.value = null
  } else {
    selected.value = id
  }
  emit('select:tab', id, selected.value)
}
</script>
