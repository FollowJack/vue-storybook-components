<template>
  <a
    :id="id"
    :href="href"
    :target="target"
    :class="[
      {
        'text-font-gray ': variant === 'gray' && !disabled,
        'text-primary': variant === 'primary' && !disabled,
        'border-b border-transparent hover:text-primary hover:border-primary focus:border-b focus:text-primary focus:border-primary':
          !disabled && border,
        'text-font-disabled': disabled,
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
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['gray', 'primary'].includes(value),
  },
  id: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: true,
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
