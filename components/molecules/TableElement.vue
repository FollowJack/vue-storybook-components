<template>
  <div
    :class="[
      'block rounded border-collapse',
      {
        'overflow-x-auto': responsive,
      },
    ]"
  >
    <table
      :class="[
        'w-full',
        {
          'bordered border border-black': bordered,
          striped: striped,
        },
      ]"
    >
      <thead v-if="slots.header">
        <tr class="font-bold">
          <slot name="header" />
        </tr>
      </thead>
      <tbody>
        <slot name="body" />
      </tbody>
    </table>
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
import { useSlots } from 'vue'

const slots = useSlots()

defineProps({
  bordered: {
    type: Boolean,
    default: false,
  },
  responsive: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
th {
  @apply border-b border-black text-left;
}

.bordered td,
.bordered th {
  @apply border border-black;
}

.striped tr {
  @apply even:bg-blue-500;
}
</style>
