import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'

type UseHealthProps = {
  id: string
  initialHealth: number
}

export function useHealth({ id, initialHealth }: UseHealthProps) {
  const health = useLocalStorage(id, initialHealth)

  function damage() {
    health.value--
  }

  function heal() {
    health.value++
  }

  function reset() {
    health.value = initialHealth
  }

  return {
    health: computed(() => health.value),
    damage,
    heal,
    reset,
  }
}
