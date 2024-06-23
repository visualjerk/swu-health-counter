import { useLocalStorage } from '@vueuse/core'
import { computed } from 'vue'

export function useDarkMode() {
  const darkModeOn = useLocalStorage('swu-dark-mode', true)

  function toggle() {
    darkModeOn.value = !darkModeOn.value
    console.log('toggle', darkModeOn.value)
  }

  return {
    isOn: computed(() => darkModeOn.value),
    toggle,
  }
}
