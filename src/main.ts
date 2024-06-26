import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import NoSleep from 'nosleep.js'

const noSleep = new NoSleep()

// Enable wake lock.
// (must be wrapped in a user input event handler e.g. a mouse or touch handler)
document.addEventListener(
  'click',
  function enableNoSleep() {
    document.removeEventListener('click', enableNoSleep, false)
    noSleep.enable()
  },
  false
)

createApp(App).mount('#app')
