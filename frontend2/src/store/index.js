import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default new createStore({
    state: {
        isAuthenticated: false,
        token: '',
        user: {
            id: 0,
            email: '',
            role: ''
        },

    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true
                state.user.email = localStorage.getItem('email')
                state.user.id = localStorage.getItem('userid')
                state.user.role = localStorage.getItem('role')
            } else {
                state.token = ''
                state.isAuthenticated = false
                state.user.id = 0
                state.user.email = ''
                state.user.role = ''

            }
        },
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
        },
        setUser(state, user) {
            state.user = user
        },
    },
    actions: {},
    modules: {},
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
})