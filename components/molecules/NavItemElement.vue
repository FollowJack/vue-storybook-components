<template>
  <LinkElement
    :href="link"
    :border="false"
    :class="[
      'py-3 px-4 hover:bg-secondary-hover focus:bg-secondary-hover rounded cursor-pointer',
      {
        'bg-secondary-hover': isActive,
      },
    ]"
    @click:link="handleClick"
  >
    <slot />
  </LinkElement>
</template>

<script setup>
const emit = defineEmits(['click:nav'])
defineProps({
  link: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

function handleClick() {
  emit('click:nav')
}
</script>
