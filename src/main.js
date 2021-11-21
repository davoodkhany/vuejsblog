import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'

import HomePage  from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/', component:HomePage},
        {path:'/about', component:AboutPage}

    ]
}) 

let app = createApp(App)

app.use(router)

app.mount('#app')

