<template>
  <div class="flex justify-between items-center" @click="handleToggle">
    <div
      class="w-12 h-8 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out"
      :class="{ 'bg-green-400': isOn }"
    >
      <div
        class="bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-4': isOn }"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isOn: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:value'])

function handleToggle() {
  emit('update:value', !props.isOn)
}
</script>
