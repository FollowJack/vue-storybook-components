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
      <CloseIconElement class="text-white" />
    </ButtonElement>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import CloseIconElement from '../atoms/CloseIconElement.vue'

const emit = defineEmits(['click:remove'])
const props = defineProps({
  id: {
    type: String,
    default: null,
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
  emit('click:remove', props.id)
}
</script>
