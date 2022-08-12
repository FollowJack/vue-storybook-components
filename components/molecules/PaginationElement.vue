<template>
  <nav aria-label="Pagination">
    <ul class="flex space-x-2 items-center">
      <PaginationItemElement
        v-if="currentPage > 1"
        aria-label="Previous page"
        @click:item="handleClick(currentPage - 1)"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.12132 0.292893C8.51184 0.683417 8.51184 1.31658 8.12132 1.70711L2.82843 7L8.12132 12.2929C8.51184 12.6834 8.51184 13.3166 8.12132 13.7071C7.7308 14.0976 7.09763 14.0976 6.70711 13.7071L0 7L6.70711 0.292893C7.09763 -0.0976311 7.7308 -0.0976311 8.12132 0.292893Z"
            fill="currentColor"
          />
        </svg>
      </PaginationItemElement>

      <PaginationItemElement
        v-for="page in pages"
        :key="page"
        aria-label="Page 3"
        :is-active="page === currentPage"
        @click:item="handleClick(page)"
      >
        {{ page }}
      </PaginationItemElement>

      <PaginationItemElement
        v-if="currentPage < totalPages"
        aria-label="Next page"
        @click:item="handleClick(currentPage + 1)"
      >
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.87868 13.7071C0.488155 13.3166 0.488155 12.6834 0.87868 12.2929L6.17157 7L0.87868 1.70711C0.488155 1.31658 0.488155 0.683417 0.87868 0.292893C1.2692 -0.0976315 1.90237 -0.0976315 2.29289 0.292893L9 7L2.29289 13.7071C1.90237 14.0976 1.2692 14.0976 0.87868 13.7071Z"
            fill="currentColor"
          />
        </svg>
      </PaginationItemElement>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
const emit = defineEmits(['click:pagination'])
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
})

function handleClick(newCurrentPage) {
  emit('click:pagination', newCurrentPage)
}
const startPage = computed(() => {
  // When on the first page
  if (props.currentPage === 1) {
    return 1
  }

  // When on the last page
  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons
  }

  // When inbetween
  return props.currentPage - 1
})

const pages = computed(() => {
  const range = []

  for (
    let pageIndex = startPage.value;
    pageIndex <=
    Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    pageIndex++
  ) {
    range.push(pageIndex)
  }
  debugger

  return range
})
</script>
