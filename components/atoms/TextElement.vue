<template>
  <component
    :is="as"
    :class="[
      {
        'text-copy-large': variant === 'copy-large',
        'text-copy-medium': variant === 'copy-medium',
        'text-copy-small': variant === 'copy-small',
        'text-headline1': variant === 'headline1',
        'text-headline2': variant === 'headline2',
        'text-headline3': variant === 'headline3',
        'font-bold': weight === 'bold',
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'span',
    validator: (value) =>
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p', 'strong', 'i'].includes(
        value
      ),
  },
  variant: {
    type: String,
    default: 'copy-medium',
    validator: (value) =>
      [
        'copy-large',
        'copy-medium',
        'copy-small',
        'headline1',
        'headline2',
        'headline3',
      ].includes(value),
  },
  weight: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'bold'].includes(value),
  },
})
</script>
