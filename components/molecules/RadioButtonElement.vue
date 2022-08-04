<template>
  <label :for="id" class="inline-flex" @click="handleClick">
    <input
      :id="id"
      type="radio"
      :name="name"
      :checked="valuePicked === value"
      :value="value"
      class="w-4 h-4 mt-1 mr-1"
    />
    <slot />
  </label>
</template>

<script setup>
// docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  valuePicked: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})

function handleClick() {
  emit('update:value', props.value)
}
</script>
