<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="inline-flex items-center">
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="breadcrumb.text"
        class="inline-flex items-center space-x-1 md:space-x-3"
      >
        <span v-if="hasDivider(index)" class="text-font-gray ml-1 md:ml-3">
          <slot name="divider">
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </slot>
        </span>

        <TextElement v-if="isActive(breadcrumb)" color="primary">
          {{ breadcrumb.text }}
        </TextElement>
        <LinkElement
          v-else
          :href="breadcrumb.link"
          class="inline-flex items-center"
          variant="gray"
        >
          <!-- HOME Icon -->
          <svg
            v-if="index === 0"
            :class="[
              'w-4 h-4',
              {
                'mr-2': breadcrumb.text,
              },
            ]"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          {{ breadcrumb.text }}
        </LinkElement>
      </li>
    </ol>
  </nav>
</template>

<script setup>
// docu: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
const props = defineProps({
  breadcrumbs: {
    type: Array,
    default: () => [],
  },
  current: {
    type: Object,
    default: () => {},
  },
})

function isActive(breadcrumb) {
  return (
    breadcrumb.text === props.current.text &&
    breadcrumb.link === props.current.link
  )
}

function hasDivider(index) {
  return index > 0 && index <= props.breadcrumbs.length
}
</script>
