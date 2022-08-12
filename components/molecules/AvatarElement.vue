<template>
  <span
    :class="[
      'rounded-full overflow-hidden block border',
      {
        'h-12 w-12': size === 'large',
        'h-10 w-10': size === 'medium',
        'h-8 w-8': size === 'small',
      },
    ]"
    @click="handleClick"
  >
    <ImageElement
      v-if="urlImage"
      :src="urlImage"
      class="w-full h-full object-center object-cover"
    />
    <span
      v-else
      :class="[
        'flex rounded-full bg-secondary h-full w-full items-center justify-center',
        {
          'p-2': size === 'large' || size === 'medium',
          'p-1': size === 'small',
        },
      ]"
    >
      <TextElement v-if="slots.default" :variant="variantText">
        <slot />
      </TextElement>
      <svg
        v-else
        class="h-full w-full"
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 5C6.38071 5 7.5 3.88071 7.5 2.5C7.5 1.11929 6.38071 0 5 0C3.61929 0 2.5 1.11929 2.5 2.5C2.5 3.88071 3.61929 5 5 5ZM5.00007 6C2.98251 6 1.24405 7.19497 0.453853 8.91576C1.55415 10.192 3.18275 11 5.00007 11C6.81738 11 8.44599 10.1921 9.54628 8.91576C8.75608 7.19497 7.01762 6 5.00007 6Z"
          fill="#242427"
        />
      </svg>
    </span>
  </span>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const slots = useSlots()
const emit = defineEmits(['toggle', 'click:avatar'])
const props = defineProps({
  size: {
    type: String,
    default: 'large',
    validator: (value) => ['large', 'medium', 'small'].includes(value),
  },
  urlImage: {
    type: String,
    default: '',
  },
})

const variantText = computed(() =>
  props.size === 'large' ? 'copy-medium' : 'copy-small'
)

function handleClick() {
  emit('click:avatar')
}
</script>
