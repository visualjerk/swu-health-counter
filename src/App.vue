<script setup lang="ts">
import { useHealth } from './useHealth'
import { useDarkMode } from './useDarkMode'
import HealthCounter from './HealthCounter.vue'
import ReloadIcon from './icons/ReloadIcon.vue'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'

const defaultHealth = 30

const playerOne = useHealth({
  id: 'swu-health-player-one',
  initialHealth: defaultHealth,
})
const playerTwo = useHealth({
  id: 'swu-health-player-two',
  initialHealth: defaultHealth,
})

function reset() {
  playerOne.reset()
  playerTwo.reset()
}

const darkMode = useDarkMode()
</script>

<template>
  <div :class="darkMode.isOn.value && 'dark'">
    <div
      class="min-h-svh grid grid-rows-[1fr_auto_1fr] bg-slate-100 dark:bg-slate-900"
    >
      <HealthCounter
        :health="playerOne.health"
        @heal="playerOne.heal"
        @damage="playerOne.damage"
        class="rotate-180 flex-grow"
      />
      <div class="flex-shrink-0 flex gap-4 justify-center items-center p-3">
        <button
          class="text-slate-900 w-16 h-16 bg-slate-200 grid place-items-center rounded-full dark:text-slate-50 dark:bg-slate-800"
          @click="reset"
        >
          <ReloadIcon />
        </button>
        <button
          class="text-slate-900 w-16 h-16 bg-slate-200 grid place-items-center rounded-full dark:text-slate-50 dark:bg-slate-800"
          @click="darkMode.toggle"
        >
          <SunIcon v-if="darkMode.isOn.value" />
          <MoonIcon v-else />
        </button>
      </div>
      <HealthCounter
        :health="playerTwo.health"
        @heal="playerTwo.heal"
        @damage="playerTwo.damage"
        class="flex-grow"
      />
    </div>
  </div>
</template>
