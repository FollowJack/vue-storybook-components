<template>
  <footer>
    <component :is="tag" class="flex flex-col h-full">
      <div class="flex flex-1 flex-col lg:flex-row">
        <div class="lg:w-1/2 flex">
          <slot name="left" />
        </div>
        <div v-if="!!$slots.right" class="lg:w-1/2 flex">
          <slot name="right" />
        </div>
      </div>
      <div v-if="!!$slots.bottom">
        <slot name="bottom" />
      </div>
    </component>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  hasContainer: {
    type: Boolean,
    default: true,
  },
})

const tag = computed(() => {
  return props.hasContainer ? 'ContainerElement' : 'div'
})
</script>
