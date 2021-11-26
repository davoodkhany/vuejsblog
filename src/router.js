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

import LoginPage from './components/pages/LoginPage.vue'

const routes = [{
        path: '/',
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/login',
        component: LoginPage
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
        meta: {
            requiredAuth: true
        },
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



function checkUserIsAuth() {
    return false;
}


const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active"
})


router.beforeEach(function (to, from, next) {

    if (to.meta.requiredAuth && !checkUserIsAuth())
        next('/login')
    else next()

    // if (/^\/panel/.test(to.path) && !checkUserIsAuth()) {
    //     return next('/login');
    // }
    // next()
})



export default router