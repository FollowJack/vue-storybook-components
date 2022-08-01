<template>
  <span class="py-1 px-2 bg-primary space-x-5 cursor-pointer rounded"
    ><TextElement color="white" variant="copy-small"><slot /> </TextElement
    ><ButtonElement :size="null" class="py-1" @click="handleRemove">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          class="text-white"
        >
          <path
            d="M1.00215385,13.0615384 L13.0593846,1 M1,1.00215385 L13.0615384,13.0593846"
            stroke="currentColor"
          ></path>
        </g></svg></ButtonElement
  ></span>
</template>

<script setup>
const props = defineProps({
  isOn: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['click:remove'])

function handleRemove() {
  emit('click:remove', !props.isOn)
}
</script>
