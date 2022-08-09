<template>
  <div class="relative inline-block">
    <ButtonElement
      :id="id"
      :variant="variant"
      class="inline-flex items-center"
      @click:button="handleToggle(!isDropdownVisible)"
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
          v-if="!isDropdownVisible"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
        <path
          v-else
          d="M18 15L12 9L6 15"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </ButtonElement>
    <BackdropElement
      v-if="isDropdownVisible"
      is-transparent
      is-scroll-lock-enabled="false"
      @click:backdrop="handleToggle(!isDropdownVisible)"
    />
    <div
      v-if="isDropdownVisible"
      class="z-modal absolute right-0 min-w-44 py-1 bg-white rounded shadow"
    >
      <slot name="content" :handle-click-item="handleClickItem" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BackdropElement from '../atoms/BackdropElement.vue'
const emit = defineEmits(['toggle', 'click:item'])
const props = defineProps({
  isDefaultOpen: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: 'primary',
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

function handleClickItem(value) {
  isDropdownVisible.value = false
  emit('click:item', value)
}
</script>
