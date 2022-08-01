<template>
  <label class="">
    <input class="" type="radio" :name="name" :checked="isChecked" />
    <TextElement><slot /></TextElement>
  </label>
</template>

<script setup>
import TextElement from '../atoms/TextElement.vue'
defineProps({
  name: {
    type: String,
    required: true,
  },
  isChecked: {
    type: Boolean,
    default: false,
  },
})
</script>
