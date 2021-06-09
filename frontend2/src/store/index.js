import { createStore } from 'vuex'


export default new createStore({
    state: {
        cart: {
            items: [],
        },
        isAuthenticated: false,
        token: '',
        user: {
            id: 0,
            email: '',
            name: '',
            role: ''
        },

    },
    mutations: {
        initializeStore(state) {
            if (localStorage.getItem('cart')) {
                state.cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
            if (localStorage.getItem('token')) {
                state.token = localStorage.getItem('token')
                state.isAuthenticated = true
                state.user.email = localStorage.getItem('email')
                state.user.id = localStorage.getItem('userid')
                state.user.role = localStorage.getItem('role')
                state.user.name = localStorage.getItem('name')
            } else {
                state.token = ''
                state.isAuthenticated = false
                state.user.id = 0
                state.user.email = ''
                state.user.name = ''
                state.user.role = ''

            }
        },
        addToCart(state, item) {
            const exists = state.cart.items.filter(i => i.product.id === item.product.id)
            if (exists.length) {
                exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
            } else {
                state.cart.items.push(item)
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        setToken(state, token) {
            state.token = token
            state.isAuthenticated = true
        },
        removeToken(state) {
            state.token = ''
            state.isAuthenticated = false
            state.user.id = 0
            state.user.email = ''
            state.user.name = ''
            state.user.role = ''
        },
        clearCart(state) {
            state.cart = { items: [] }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
    },
    actions: {},
    modules: {}
})