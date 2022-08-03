<template>
  <div
    :id="id"
    :class="[
      'inline-block p-4 text-primary bg-gray-100 rounded-t-lg',
      {
        'cursor-pointer': !disabled,
        'cursor-not-allowed': disabled,
        'bg-red-500': id === selected,
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup>
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

function handleClick() {
  if (props.disabled) {
    return
  }
  emit('update:selected', props.id)
}
</script>
