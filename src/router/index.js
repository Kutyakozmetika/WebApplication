import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Szolgaltatasok from '../views/Szolgaltatasok.vue'
import Arlista from '../views/Arlista.vue'
import 'bootstrap/dist/css/bootstrap.min.css'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/szolgaltatas',
    name: 'Szolgaltatasok',
    component: Szolgaltatasok
  },
  {
    path: '/arlista',
    name: 'Arlista',
    component: Arlista

  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
