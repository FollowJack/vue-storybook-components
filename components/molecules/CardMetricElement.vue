<template>
  <div
    class="flex bg-white items-center h-16 space-x-4 px-4 rounded"
    @click="handleClick"
  >
    <div class="bg-primary rounded p-1 text-font-white">
      <slot name="icon" />
    </div>
    <div class="flex-1 flex flex-col">
      <TextElement weight="bold" variant="copy-large">{{ top }}</TextElement>
      <TextElement color="gray">{{ bottom }}</TextElement>
    </div>
    <div
      :class="[
        {
          'text-font-success': percent > 0,
          'text-font-error': percent < 0,
        },
      ]"
    >
      {{ sign }}{{ percent }}%
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click:stat'])
const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
  top: {
    type: String,
    required: true,
  },
  bottom: {
    type: String,
    required: true,
  },
})

const sign = computed(() => {
  if (props.percent === 0) {
    return
  }
  return [props.percent] > 0 ? '+' : ''
})

function handleClick() {
  emit('click:stat')
}
</script>
