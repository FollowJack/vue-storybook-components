<template>
  <div
    class="h-full flex flex-col bg-secondary p-4 rounded-xl cursor-pointer"
    @click="handleClick"
  >
    <div class="overflow-hidden rounded-xl w-full h-40">
      <ImageElement
        class="w-full h-40 mb-2 lg:mb-4 object-cover transition duration-700 ease-in-out hover:scale-110"
        :src="urlImage"
        :alt="alt"
        width="100%"
        loading="lazy"
      />
    </div>
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
