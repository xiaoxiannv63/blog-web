const routes = [
  {
    path: '/',
    name: 'Home',
    meta:{
      requireAuth:true
    },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

export default routes