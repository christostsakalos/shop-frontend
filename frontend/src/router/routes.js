const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: '/login',
                name: 'Login',
                component: () =>
                    import ('../pages/users/Login.vue')
            },
            {
                path: '/register',
                name: 'Register',
                component: () =>
                    import ('../pages/users/Register.vue')
            },
        ]
    },

    // Login required routes
    {
        path: '/profile',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            name: 'Profile',
            component: () =>
                import ('../pages/users/Profile.vue'),
        }, ],
        meta: {
            requiresAuth: true
        }


    },

    // Admin routes
    {
        path: '/admin',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('../pages/admin/Dashboard.vue')
        }, ],
        meta: {
            requireLogin: true,
            requireAdmin: true
        }
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]



export default routes