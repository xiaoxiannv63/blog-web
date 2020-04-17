import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import {getToken} from '../libs/utils'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(res => res.meta.requireAuth)){
    if(getToken()){
      next()
    }else{
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }else{
    next()
  }
})

export default router
