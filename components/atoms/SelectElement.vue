<template>
  <div class="relative">
    <select
      :id="id"
      :class="[
        'py-4 pl-5 pr-11 w-full appearance-none bg-field-form rounded  focus:ring-field-stroke-focused focus:outline-field-stroke-focused',
        {
          'text-font-black cursor-pointer hover:outline hover:outline-field-stroke-hover':
            !disabled,
          'text-font-disabled cursor-not-allowed': disabled,
        },
      ]"
      :disabled="disabled"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :selected="(option.value = selectedValue.value)"
        @click="handleSelect"
      >
        {{ option.content }}
      </option>
    </select>
    <div
      class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none"
    >
      <svg
        :class="[
          'w-5 h-5 ',
          {
            'stroke-font-black': !disabled,
            'stroke-font-disabled': disabled,
          },
        ]"
        stroke="currentColor"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- stroke="#212121" -->
        <path
          d="M6 9L12 15L18 9"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
const emit = defineEmits(['update:value'])
defineProps({
  id: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  selectedValue: {
    type: Object,
    default: () => {},
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
})

function handleSelect(newSelected) {
  emit('update:value', newSelected)
}
</script>
