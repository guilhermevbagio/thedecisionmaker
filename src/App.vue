<template>
  <div v-if="welcomed" class="h-screen w-screen flex flex-row">
    <SideBar />
    <div class="p-4">
      <router-view></router-view>
    </div>
  </div>
  <WelcomeView v-else @open="welcomed = true"></WelcomeView>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue'
import WelcomeView from './views/WelcomeView.vue'
import { ref } from 'vue'

const welcomed = ref(false)
</script>
