<template>
  <component
    :is="tag"
    :class="[
      'text-title font-jost',
      {
        'text-h1': tag === 'h1',
        'text-h2': tag === 'h2',
        'text-h3': tag === 'h3',
        'text-h4': tag === 'h4',
        'text-h5': tag === 'h5',
        'text-h6': tag === 'h6',
        'lg:text-h1': tagLarge === 'h1',
        'lg:text-h2': tagLarge === 'h2',
        'lg:text-h3': tagLarge === 'h3',
        'lg:text-h4': tagLarge === 'h4',
        'lg:text-h5': tagLarge === 'h5',
        'font-bold': bold,
      },
    ]"
    ><slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
    },
    tagLarge: {
      type: String,
    },
    bold: Boolean,
  },
}
</script>
