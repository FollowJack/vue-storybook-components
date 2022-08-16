<template>
  <div>
    <ul class="flex flex-col min-w-40 py-1 bg-white rounded shadow">
      <li
        v-for="item in filterdItems"
        :key="item.name"
        :class="[
          'w-full cursor-pointer block py-2 px-4 hover:bg-stroke-gray',
          {
            'bg-primary-active text-font-white hover:bg-primary-active':
              isInValues(item),
          },
        ]"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </li>
      <div v-if="filterdItems.length === 0" class="w-full block py-2 px-4">
        No data available
      </div>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const emit = defineEmits(['select:item'])
const props = defineProps({
  availableItems: {
    type: Array,
    default: () => [],
  },
  selectedValues: {
    type: Array,
    default: () => [],
  },
  searchValue: {
    type: String,
    default: '',
  },
})

const filterdItems = computed(() => {
  if (props.searchValue === '') {
    return props.availableItems
  }
  return props.availableItems.filter((item) =>
    item.name.toLowerCase().includes(props.searchValue.toLowerCase())
  )
})

function handleSelect(item) {
  emit('select:item', item)
}

function isInValues(item) {
  return props.selectedValues.some((value) => value.name === item.name)
}
</script>
