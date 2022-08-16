<template>
  <div ref="refContainer" class="relative inline-block">
    <input
      type="search"
      :value="searchValue"
      :name="name"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :maxlength="maxlength"
      :minlength="minlength"
      :pattern="pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :class="[
        'py-2 px-4 bg-field-form rounded focus:ring-field-stroke-focused focus:outline-field-stroke-focused',
        {
          'text-font-black cursor-pointer hover:outline hover:outline-field-stroke-hover':
            !disabled,
          'text-font-disabled cursor-not-allowed': disabled,
        },
      ]"
      @focus="handleFocus"
      @input="handleInput"
    />
    <AutoCompleteElement
      v-if="isAutoCompleteVisible"
      class="absolute w-full"
      :available-items="availableItems"
      :selected-values="selectedValues"
      :search-value="searchValue"
      @select:item="handleSelect"
    />
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
import { ref } from 'vue'
import { useOnClickOutside } from '~/composables/useOnClickOutside.js'

const emit = defineEmits([
  'select:item',
  'blur:input',
  'focus:input',
  'input:value',
])
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  initialSearchValue: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: null,
  },
  maxlength: {
    type: Number,
    default: null,
  },
  minlength: {
    type: Number,
    default: null,
  },
  pattern: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
    validator: (value) => ['off', 'on'].includes(value),
  },
  availableItems: {
    type: Array,
    default: () => [],
  },
  selectedValues: {
    type: Array,
    default: () => [],
  },
})

const searchValue = ref(props.initialSearchValue)
const isAutoCompleteVisible = ref(false)

const refContainer = ref(null)

useOnClickOutside(refContainer, () => {
  emit('blur:input', props.value)
  isAutoCompleteVisible.value = false
})

function handleInput(event) {
  searchValue.value = event.target.value
  emit('input:value', event.target.value)
}

function handleFocus() {
  emit('focus:input', props.value)
  isAutoCompleteVisible.value = true
}

function handleSelect(item) {
  emit('select:item', item)
  isAutoCompleteVisible.value = false
}
</script>
