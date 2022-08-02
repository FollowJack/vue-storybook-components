<template>
  <select
    :id="id"
    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
    :disabled="disabled"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :selected="(option.value = selectedValue.value)"
      @click="handleSelect"
    >
      {{ option.content }}
    </option>
  </select>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
const emit = defineEmits(['update:value'])
defineProps({
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  selectedValue: {
    type: Object,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
})

function handleSelect(newSelected) {
  emit('update:value', newSelected)
}
</script>
