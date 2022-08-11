<template>
  <footer>
    <ContainerElement class="flex flex-col h-full">
      <div class="flex flex-1 flex-col lg:flex-row">
        <div class="lg:w-1/2 flex">
          <slot name="left" />
        </div>
        <div v-if="!!$slots.right" class="lg:w-1/2 flex">
          <slot name="right" />
        </div>
      </div>
      <div v-if="!!$slots.bottom">
        <slot name="bottom" />
      </div>
    </ContainerElement>
  </footer>
</template>

<script setup></script>
