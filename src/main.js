// core
import { createApp } from 'vue'
import App from './App.vue'

// 3rd party
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// custom
import titleChange from './util/titleChange.js'

// init
const app = createApp({
    extends: App
})

// plugins

// mixins
app.mixin(titleChange)

// mount
app.mount('#app')