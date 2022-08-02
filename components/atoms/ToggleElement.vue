<template>
  <div class="flex items-center" @click="handleToggle">
    <input
      :id="id"
      class="hidden"
      type="checkbox"
      :checked="isOn"
      :name="name"
    />
    <div
      :class="[
        ' flex items-center bg-gray-300 rounded-full duration-300 ease-in-out',
        {
          'p-0.5 w-6 h-4': size === 'sm',
          'p-1 w-10 h-6': size === 'md',
          'p-1 w-12 h-8': size === 'lg',
          'bg-green-500': isOn && !disabled,
          'bg-gray-500': disabled,
        },
      ]"
    >
      <div
        :class="[
          'bg-white rounded-full shadow-md transform duration-300 ease-in-out',
          {
            'w-3 h-3': size === 'sm',
            'w-4 h-4': size === 'md',
            'w-6 h-6': size === 'lg',
            'translate-x-2': isOn && size === 'sm',
            'translate-x-4': isOn && (size === 'md' || size === 'lg'),
          },
        ]"
      ></div>
    </div>
    <label v-if="slots.default" :for="id" class="ml-2">
      <slot />
    </label>
  </div>
</template>

<script setup>
import { ref, useSlots } from 'vue'

const emit = defineEmits(['update:value'])
const props = defineProps({
  isInitialOn: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
})
const slots = useSlots()
const isOn = ref(props.isInitialOn)

function handleToggle() {
  if (props.disabled) {
    return
  }
  isOn.value = !isOn.value
  emit('update:value', isOn.value, props.value)
}
</script>
