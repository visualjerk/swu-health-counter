<script setup lang="ts">
import { ComputedRef } from 'vue'

defineProps<{
  health: ComputedRef<number>
}>()

const emit = defineEmits<{
  (e: 'damage'): void
  (e: 'heal'): void
}>()
</script>

<template>
  <div
    class="relative grid bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50"
  >
    <div class="grid place-items-center text-8xl">
      {{ health }}
    </div>
    <div class="absolute inset-0 grid grid-cols-2 gap-24 text-4xl p-4">
      <button @click="emit('damage')" class="cursor-pointer">-</button>
      <button @click="emit('heal')" class="cursor-pointer">+</button>
    </div>
  </div>
</template>
