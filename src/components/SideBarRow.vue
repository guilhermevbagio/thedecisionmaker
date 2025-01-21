<template>
  <div :class="isOpen ? 'bg-primary bg-opacity-10' : ''" class="transition-all duration-200">
    <button
      class="flex items-center justify-between w-full p-4 cursor-pointer opacity-70 hover:opacity-100"
      @click="toggle"
    >
      <div class="flex flex-row text-white items-center gap-4">
        <slot name="icon" class="text-white" />
        <p>{{ label }}</p>
      </div>
      <div class="text-white">
        <ChevronRight
          v-if="hasChildren"
          :class="{ 'rotate-90': isOpen }"
          class="transition-all duration-100"
        />
      </div>
    </button>
    <div
      v-if="hasChildren"
      class="pl-8 overflow-hidden transition-all duration-200"
      :style="{ maxHeight: isOpen ? '1000px' : '0px' }"
    >
      <slot name="children"> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  label: {
    type: String,
    required: true,
  },
  hasChildren: {
    type: Boolean,
    default: false,
  },
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>
