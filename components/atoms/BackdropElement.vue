<template>
  <div
    :class="[
      'z-backdrop fixed inset-0 opacity-50 transition-opacity',
      {
        'bg-black': !isTransparent,
      },
    ]"
    @click="handleClick"
  />
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useDisableScroll } from '@/composables/useDisableScroll'
const { setDisableScroll } = useDisableScroll()
const emit = defineEmits(['click:backdrop'])
const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false,
  },
  isScrollLockEnabled: {
    type: Boolean,
    default: false,
  },
})

onMounted(() => {
  if (props.isScrollLockEnabled) {
    setDisableScroll(true)
  }
})

onUnmounted(() => {
  if (props.isScrollLockEnabled) {
    setDisableScroll(false)
  }
})

function handleClick() {
  if (props.isScrollLockEnabled) {
    setDisableScroll(false)
  }
  emit('click:backdrop')
}
</script>
