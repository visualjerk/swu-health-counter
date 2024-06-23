<script setup lang="ts">
import { useHealth } from './useHealth'
import HealthCounter from './HealthCounter.vue'

const defaultHealth = 30

const playerOne = useHealth({
  id: 'swu-health-player-one',
  initialHealth: defaultHealth,
})
const playerTwo = useHealth({
  id: 'swu-health-player-two',
  initialHealth: defaultHealth,
})
</script>

<template>
  <div class="bg-slate-900 min-h-svh grid gap-1">
    <HealthCounter
      :health="playerOne.health"
      @heal="playerOne.heal"
      @damage="playerOne.damage"
      class="rotate-180"
    />
    <HealthCounter
      :health="playerTwo.health"
      @heal="playerTwo.heal"
      @damage="playerTwo.damage"
    />
  </div>
</template>
