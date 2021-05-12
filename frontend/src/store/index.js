
import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default new Vuex.Store({
    state: {
      isAuthenticated: false,
      token: '',
      user: {
        id: 0,
        email: '',
      },
  
    },
    mutations: {
      initializeStore(state) {
        if (localStorage.getItem('token')) {
          state.token = localStorage.getItem('token')
          state.isAuthenticated = true
          state.user.email = localStorage.getItem('email')
          state.user.id = localStorage.getItem('userid')
        } else {
          state.token = ''
          state.isAuthenticated = false
          state.user.id = 0
          state.user.email = ''
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
    actions: {
    },
    modules: {
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

