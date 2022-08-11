<template>
  <NuxtLink :to="href">
    <span
      v-bind="$attrs"
      :class="[
        {
          'px-6 inline-flex items-center': size !== '',
          'h-16': size === 'large',
          'h-12': size === 'medium',
          'h-10': size === 'small',
          'text-font-gray hover:text-primary focus:text-primary':
            variant === 'gray' && !disabled,
          'text-primary hover:text-primary focus:text-primary':
            variant === 'primary' && !disabled,
          'border-b border-transparent  hover:border-primary focus:border-b focus:border-primary':
            !disabled && border,
          'text-font-disabled': disabled,
        },
      ]"
      @click="handleClick"
    >
      <slot />
    </span>
  </NuxtLink>
</template>

<script setup>
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
  size: {
    type: String,
    default: '',
    validator: (value) => ['', 'small', 'medium', 'large'].includes(value),
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
