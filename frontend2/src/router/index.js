import { route } from 'quasar/wrappers'
import store from '../store'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function( /* { store, ssrContext } */ ) {
    const createHistory = process.env.SERVER ?
        createMemoryHistory :
        process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory

    const Router = createRouter({
        scrollBehavior: () => ({ left: 0, top: 0 }),
        routes,

        // Leave this as is and make changes in quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        history: createHistory(process.env.MODE === 'ssr' ? void 0 : process.env.VUE_ROUTER_BASE)
    })

    /*     Router.beforeEach((to, from, next) => {
            if (to.matched.some(record => record.meta.requiresLogin) && !store.state.isAuthenticated) {
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                next()
            }

        }) */
    Router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresLogin)) {
            if (store.state.isAuthenticated === false) {
                next({
                    path: '/login',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                let role = localStorage.getItem('role')
                if (to.matched.some(record => record.meta.requiresAdmin)) {
                    if (role === 'Staff') {
                        next()
                    } else {
                        next({ name: '' })
                    }
                } else {
                    next()
                }
            }
        } else {
            next()
        }
    })



    return Router
})