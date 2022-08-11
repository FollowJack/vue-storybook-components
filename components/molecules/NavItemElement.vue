<template>
  <LinkElement
    :href="href"
    :border="false"
    size="medium"
    :class="[
      'inline-flex items-center hover:bg-secondary-hover lg:hover:bg-transparent hover:text-primary focus:text-primary focus:bg-secondary-hover lg:focus:bg-transparent rounded cursor-pointer',
      {
        'bg-secondary-hover': isActive,
      },
    ]"
    @click.link="handleClick"
  >
    <slot />
  </LinkElement>
</template>

<script setup>
const emit = defineEmits(['click:nav'])
defineProps({
  href: {
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
