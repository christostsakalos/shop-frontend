import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


const Router = new VueRouter({


    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
})

/* router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
        next({ name: 'Login', query: { next: to.fullPath } })
    } else {
        next()
    }
}) */
/* router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
        next({ name: 'Login', query: { next: to.fullPath } })
    } else {
        next()
    }
}) */

Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !store.state.isAuthenticated) {
        next('/login')
    } else {
        next()
    }
})


export default Router