import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

async function startWakeLock() {
  try {
    await navigator.wakeLock.request()
  } catch (err) {
    console.error(err)
  }
}

startWakeLock()
createApp(App).mount('#app')
