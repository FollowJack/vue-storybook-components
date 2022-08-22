<template>
  <div
    :class="[
      'flex items-center',
      {
        'cursor-pointer': !disabled,
        'cursor-not-allowed': disabled,
      },
    ]"
    @click="handleToggle"
  >
    <input
      :id="id"
      class="hidden"
      type="checkbox"
      :checked="isOn"
      :name="name"
    />
    <div
      :class="[
        'flex items-center rounded-full duration-300 ease-in-out',
        {
          'p-0.5 w-6 h-4': size === 'small',
          'p-1 w-10 h-6': size === 'medium',
          'p-1 w-12 h-8': size === 'large',
          'hover:shadow': !disabled,
          'bg-font-light-gray': !isOn && !disabled,
          'bg-primary': isOn && !disabled,
          'bg-disabled': disabled,
        },
      ]"
    >
      <div
        :class="[
          'bg-white rounded-full transform duration-300 ease-in-out',
          {
            'w-3 h-3': size === 'small',
            'w-4 h-4': size === 'medium',
            'w-6 h-6': size === 'large',
            'translate-x-2': isOn && size === 'small',
            'translate-x-4': isOn && (size === 'medium' || size === 'large'),
          },
        ]"
      ></div>
    </div>
    <label
      v-if="slots.default"
      :for="id"
      :class="[
        'ml-2',
        {
          'cursor-pointer': !disabled,
          'cursor-not-allowed': disabled,
        },
      ]"
    >
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
    default: 'large',
    validator: (value) => ['small', 'medium', 'large'].includes(value),
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
