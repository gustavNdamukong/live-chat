import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'

// import firebase auth config
import { projectAuth } from './firebase/config'

 
// listen and recreate (remount) the app each time the user's auth status changes
let app
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})



