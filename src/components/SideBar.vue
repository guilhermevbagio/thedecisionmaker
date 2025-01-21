<script setup lang="ts">
import SideBarRow from './SideBarRow.vue'
import { House, CircleHelp } from 'lucide-vue-next'
</script>

<template>
  <div class="h-full w-64 rounded-md rounded-l-none bg-secondary flex flex-col">
    <header
      class="p-4 flex flex-row items-center gap-1 shadow-lg border-primary w-full text-white tracking-tighter"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4.616 19.5h10q.213 0 .356.143q.144.143.144.357t-.144.357t-.356.143h-10q-.214 0-.357-.143T4.115 20t.144-.357t.356-.143m4.322-5.602l-2.69-2.69q-.46-.46-.473-1.124t.447-1.143l.302-.322l5.008 4.958l-.321.321q-.46.46-1.137.46t-1.136-.46m6.64-4.367l-4.958-5.008l.322-.302q.478-.46 1.143-.447q.664.012 1.124.472l2.69 2.69q.46.46.46 1.137t-.46 1.137zm4.67 9.423L8.241 6.95l.708-.708l12.004 12.004q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16"
        />
      </svg>
      THE DECISION MAKER.
    </header>

    <ul class="flex flex-col gap-1 transition-all duration-200">
      <SideBarRow label="Home" hasChildren
        ><template #icon>
          <House :size="20" />
        </template>

        <template #children> <SideBarRow label="Homey"></SideBarRow> </template>
      </SideBarRow>

      <SideBarRow label="About"
        ><template #icon><CircleHelp :size="20" /></template>
      </SideBarRow>
    </ul>
  </div>
</template>

<style scoped></style>
