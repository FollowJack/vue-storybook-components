<template>
  <footer>
    <ContainerElement class="flex flex-col h-full">
      <div class="flex flex-1">
        <div class="w-1/2 flex items-center">
          <slot name="left" />
        </div>
        <div v-if="!!$slots.right" class="w-1/2 flex items-center">
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
