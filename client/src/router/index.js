
import Vue from 'vue'
import VueRouter from 'vue-router'
import jwt from 'jsonwebtoken'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: () => import('../views/home.vue')
  },
  {
    path: '/regulations',
    name: 'regulations',
    meta: {layout: 'main'},
    component: () => import('../views/regulations.vue')
  },
  {
    path: '/request',
    name: 'request',
    meta: {layout: 'main'},
    component: () => import('../views/request')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {layout: 'main'},
    component:() => import('../views/contacts')
  },
  {
    path: '/timetable',
    name: 'timetable',
    meta: {layout: 'main'},
    component: () => import('../views/timetable')
  },
  {
    path: '/feedbacks',
    name: 'feedbacks',
    meta: {layout: 'main'},
    component: () => import('../views/feedbacks')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('../views/record')
  },
  {
    path: '/aboutus',
    name: 'about',
    meta: {layout: 'main'},
    component: () => import('../views/About')
  },
  {
    path: '/media',
    name: 'media',
    meta: {layout: 'main'},
    component: () => import('../views/media')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/login')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let expireTime = ''
  let currentTime = ''
  let token = localStorage.getItem('auth-token')
  if(token) {
    token = token.replace('Bearer', '')
    const decoded = jwt.decode(token.trim(), {complete: true})
    expireTime = decoded.payload.exp
    currentTime = Math.floor(Date.now() / 1000)
  }
  if (to.name !== 'login' && currentTime >= expireTime) {
    localStorage.clear()
    next('/login?message=error')
  } else {
    next()
  }
})

export default router
