const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        meta: {
            guest: true
        },
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
                    import ('../pages/users/Register.vue'),
            },
            {
                path: '/:category_slug',
                name: 'Parentcategory',
                component: () =>
                    import ('../pages/categories/Parentcategory')
            },
            {
                path: '/:category_slug/:subcategory_slug',
                name: 'Subcategory',
                component: () =>
                    import ('../pages/categories/Subcategory')
            },
            {
                path: '/:category_slug/:subcategory_slug/:product_slug',
                name: 'Productdetail',
                component: () =>
                    import ('../pages/products/Productdetail')
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () =>
                    import ('../pages/Cart')
            },



        ]
    },

    {
        path: '/profile',
        component: () =>
            import ('layouts/MainLayout.vue'),
        meta: {
            requiresLogin: true
        },
        children: [{
            path: '',
            name: 'Profile',
            component: () =>
                import ('../pages/users/Profile.vue')
        }, ],
    },
    {
        path: '/logout',
        component: () =>
            import ('../pages/users/Logout.vue'),
        meta: {
            requiresLogin: true
        },
    },
    {
        path: '/admin',
        component: () =>
            import ('layouts/AdminLayout.vue'),
        meta: {
            requiresLogin: true,
            requiresAdmin: true
        },
        children: [{
            path: '',
            name: 'Admin',
            component: () =>
                import ('../pages/admin/Dashboard.vue')
        }, ],
    },

    // Always leave this as last one,
    // but you can also remove it

    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes