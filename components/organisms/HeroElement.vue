<template>
  <ContainerElement class="flex flex-col">
    <div class="flex flex-1">
      <!-- Only left side displayed on mobile -->
      <div class="w-full lg:w-2/5 flex flex-col justify-center">
        <slot name="left" />
      </div>
      <div
        v-if="!!$slots.right"
        class="hidden lg:flex w-3/5 justify-center flex-col"
      >
        <slot name="right" />
      </div>
    </div>
    <div v-if="!!$slots['bottom']">
      <slot name="bottom" />
    </div>
  </ContainerElement>
</template>

<script setup></script>
