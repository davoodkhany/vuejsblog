
import {createRouter,createWebHistory} from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import SingleBlog from './components/SingleBlog.vue'



const routes = [{
    path: '/',
    component: HomePage
},
{
    path: '/about',
    component: AboutPage
}
,
{
    path: '/contact/',
    component: ContactPage
},
{
    path: '/contact/:id',
    component: ContactPage
},
{
    path: '/singleblog/:id',
    component: SingleBlog
}

]


export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})