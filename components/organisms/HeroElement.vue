<template>
  <div>
    <ContainerElement class="flex flex-col h-full">
      <div class="flex flex-1">
        <div class="w-1/2 flex items-center">
          <slot name="left-column" />
        </div>
        <div v-if="!!$slots['right-column']" class="w-1/2 flex items-center">
          <slot name="right-column" />
        </div>
      </div>
      <div v-if="!!$slots['bottom']">
        <slot name="bottom" />
      </div>
    </ContainerElement>
  </div>
</template>

<script setup></script>
