<template>
  <div class="relative inline-block">
    <ButtonElement
      :id="id"
      :variant="variant"
      class="inline-flex items-center"
      @click-button="handleToggle(!isDropdownVisible)"
    >
      Dropdown button
      <svg
        class="ml-2 w-4 h-4"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </ButtonElement>
    <div
      v-if="isDropdownVisible"
      class="z-modal absolute right-0 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['toggle'])
const props = defineProps({
  isDefaultOpen: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: '',
    validator: (value) =>
      ['', 'primary', 'secondary', 'outline', 'ghost', 'danger'].includes(
        value
      ),
  },
  id: {
    type: String,
    default: '',
  },
})

const isDropdownVisible = ref(props.isDefaultOpen)

function handleToggle(newIsVisible) {
  isDropdownVisible.value = newIsVisible
  emit('toggle', newIsVisible)
}
</script>
