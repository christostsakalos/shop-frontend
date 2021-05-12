const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue')},
      {path: '/login',name: 'Login', component: () => import('../pages/users/Login.vue')},
      {path: '/register',name: 'Register', component: () => import('../pages/users/Register.vue')},
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/MainLayout.vue'),
    meta:{
      requiresLogin: true
    },
    children: [
      { path: '',name: 'Profile', component: () => import('../pages/users/Profile.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]



export default routes
