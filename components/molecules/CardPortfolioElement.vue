<template>
  <div
    class="h-full flex flex-col bg-secondary p-4 rounded-xl transition duration-700 ease-in-out hover:scale-105 cursor-pointer"
    @click="handleClick"
  >
    <ImageElement
      class="w-full mb-2 lg:mb-4 rounded-xl h-40 object-cover"
      :src="urlImage"
      :alt="alt"
      width="100%"
      loading="lazy"
    />
    <div>
      <TextElement as="p" variant="copy-small" color="gray">
        <slot name="title"
      /></TextElement>
      <TextElement as="h3" weight="bold" variant="copy-large"
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
