<template>
  <div class="h-screen w-screen flex flex-col justify-center text-secondary">
    <h1 class="text-4xl text-center font-bold">The world isn't fair</h1>
    <h2 class="text-2xl text-center">but maybe you should be</h2>

    <button
      class="mt-10 bg-primary text-white p-4 w-fit self-center rounded"
      @click="emits('open')"
    >
      Make a decision
    </button>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['open'])
</script>
