<template>
  <div
    :id="id"
    :class="[
      'inline-block px-4 py-2 border-b-2  bg-white',
      {
        'hover:text-primary cursor-pointer': !disabled,
        'cursor-not-allowed text-font-disabled': disabled,
        'text-primary border-primary': isSelected && !disabled,
        'border-disabled hover:border-primary': !isSelected && !disabled,
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:selected'])
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  selected: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const isSelected = computed(() => props.id === props.selected)

function handleClick() {
  if (props.disabled) {
    return
  }
  emit('update:selected', props.id, isSelected.value)
}
</script>
