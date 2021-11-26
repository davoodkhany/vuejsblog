import {
    createRouter,
    createWebHistory
} from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import SingleBlog from './components/SingleBlog.vue'
import NotFound from './components/NotFound.vue'
import HomePagePanel from './components/panel/HomePanelPage.vue'
import Payment from './components/panel/PaymentPage.vue'
import DashboardPanelPage from './components/panel/DashboardPanelPage.vue'


const routes = [{
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
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
        component: SingleBlog,
        props: true

    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '/panel',
        component: HomePagePanel,
        name: 'HomePagePanel',
        children: [{
            path: 'payment',
            component: Payment,
            name: 'payment'
        }, {
            path: 'dashboard',
            component: DashboardPanelPage,
            name: 'dashboard'
        }]

    }


]


export default createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})