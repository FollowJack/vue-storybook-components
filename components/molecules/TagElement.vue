<template>
  <span
    :class="[
      'inline-flex space-x-5 px-2 bg-primary rounded',
      {
        'py-0.5': size === 'md' || size === 'large',
        'cursor-pointer': isRemovable,
      },
    ]"
  >
    <TextElement :variant="textVariant" class="text-white"
      ><slot />
    </TextElement>
    <ButtonElement
      v-if="isRemovable"
      size=""
      class=""
      @click:button="handleRemove"
    >
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
        </g>
      </svg>
    </ButtonElement>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click:remove'])
const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  isRemovable: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
  },
})

const textVariant = computed(() => {
  if (props.size === 'large') {
    return 'copy-large'
  } else if (props.size === 'medium') {
    return 'copy-medium'
  }
  return 'copy-small'
})

function handleRemove() {
  emit('click:remove')
}
</script>
