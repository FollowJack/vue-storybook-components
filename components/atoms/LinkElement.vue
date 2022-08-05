<template>
  <a
    :id="id"
    :href="href"
    :target="target"
    :class="[
      {
        'text-primary hover:border-b hover:border-primary focus:border-b focus:border-primary':
          !disabled,
        'text-font-disabled cursor-not-allowed': disabled,
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </a>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
const emit = defineEmits(['click:link'])
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: '_self',
    validator: (value) =>
      ['_self', '_blank', '_parent', '_top'].includes(value),
  },
})

function handleClick() {
  if (props.disabled) {
    return
  }
  emit('click:link', props.href)
}
</script>
