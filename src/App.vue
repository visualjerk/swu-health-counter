<script setup lang="ts">
import { useHealth } from './useHealth'
import HealthCounter from './HealthCounter.vue'
import ReloadIcon from './icons/ReloadIcon.vue'

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
</script>

<template>
  <div class="bg-slate-900 min-h-svh grid grid-rows-[1fr_auto_1fr]">
    <HealthCounter
      :health="playerOne.health"
      @heal="playerOne.heal"
      @damage="playerOne.damage"
      class="rotate-180 flex-grow"
    />
    <div class="flex-shrink-0 grid place-items-center p-3">
      <button
        class="text-slate-50 w-14 h-14 bg-slate-800 grid place-items-center rounded-full"
        @click="reset"
      >
        <ReloadIcon />
      </button>
    </div>
    <HealthCounter
      :health="playerTwo.health"
      @heal="playerTwo.heal"
      @damage="playerTwo.damage"
      class="flex-grow"
    />
  </div>
</template>
