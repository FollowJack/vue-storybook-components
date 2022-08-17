<template>
  <div>
    <slot :selected-ids="currentAccordionIds" :handle-select="handleSelect" />
  </div>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
import { ref } from 'vue'

const emit = defineEmits(['toggle:summary'])
const props = defineProps({
  isMultipleAllowed: {
    type: Boolean,
    default: true,
  },
  initialOpenAccordionIds: {
    type: Array,
    default: () => [],
  },
})

const currentAccordionIds = ref(props.initialOpenAccordionIds)

function handleSelect(id, isOpen) {
  if (props.isMultipleAllowed) {
    if (!currentAccordionIds.value.includes(id)) {
      // add
      currentAccordionIds.value.push(id)
    } else {
      // remove
      currentAccordionIds.value.splice(currentAccordionIds.value.indexOf(id), 1)
    }
  } else if (!currentAccordionIds.value.includes(id)) {
    // add
    currentAccordionIds.value = [id]
  } else {
    // remove
    currentAccordionIds.value = []
  }
  emit('toggle:summary', id, isOpen)
}
</script>
