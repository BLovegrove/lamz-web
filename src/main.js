// --- core ---
import { createApp } from 'vue'
import App from './App.vue'

// --- 3rd party ---
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faDiscord, faHeart, faBars)

// custom
import titleChange from './util/titleChange.js'

// init
const app = createApp({
    extends: App
})

// components
app.component('font-awesome-icon', FontAwesomeIcon)

// plugins

// mixins
app.mixin(titleChange)

// mount
app.mount('#app')