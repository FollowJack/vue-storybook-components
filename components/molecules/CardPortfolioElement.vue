<template>
  <div
    class="h-full flex flex-col bg-secondary p-5 rounded-xl transition duration-700 ease-in-out hover:scale-105 cursor-pointer"
    @click="handleClick"
  >
    <ImageElement
      class="w-full mb-5 rounded-xl h-44 object-cover"
      :src="urlImage"
      :alt="alt"
      width="100%"
    />
    <div>
      <TextElement as="p" variant="copy-small" class="mb-1">
        <slot name="title"
      /></TextElement>
      <TextElement as="h3" weight="bold" variant="copy-medium"
        ><slot name="content"
      /></TextElement>
    </div>
  </div>
</template>

<script></script>

<script setup>
const emit = defineEmits(['click:card'])
defineProps({
  urlImage: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})

function handleClick() {
  emit('click:card')
}
</script>
