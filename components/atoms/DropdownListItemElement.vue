<template>
  <div
    :class="[
      'block py-2 px-4',
      {
        'cursor-pointer hover:bg-stroke-gray': !disabled,
        'cursor-not-allowed text-font-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script setup>
const emit = defineEmits(['click:item'])
const props = defineProps({
  value: {
    type: String,
    default: '',
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
  emit('click:item', props.value)
}
</script>
