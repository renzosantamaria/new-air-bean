import Vue from 'vue'
import VueRouter from 'vue-router'
import Menu from '../views/Menu.vue'
import OurCoffee from '../views/OurCoffee.vue'
import MyProfile from '../views/MyProfile.vue'
import OrderStatus from '../views/OrderStatus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/our-coffee',
    name: 'Our-coffee',
    component: OurCoffee
    
  },
  {
    path: '/my-profile',
    name: 'My-profile',
    component: MyProfile
    
  },
  {
    path: '/order-status',
    name: 'Order-status',
    component: OrderStatus
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
