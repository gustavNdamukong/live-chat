import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard (call this func whatever you want-it takes 3 arguments)
const requireAuth = (to, from, next) => {
  //detect current user
  let user = projectAuth.currentUser
  // only allow access to chatroom if they are authenticated, else send them to the welcome (login/signup) view 
  if (!user) {
    // the user is not authenticated, so send them to their intended route
    next({ name: 'Welcome' })
  } else {
    // the user is authenticated, so allow them proceed to their intended route
    next()
  }
}

const requireNoAuth = (to, from, next) => {
  //detect current user
  let user = projectAuth.currentUser
  // only allow access to welcome route if they are NOT authenticated, else send them to the Chatroom view 
  if (user) {
    // the user is not authenticated, so send them to their intended route
    next({ name: 'Chatroom' })
  } else {
    // the user is authenticated, so allow them proceed to their intended route
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
