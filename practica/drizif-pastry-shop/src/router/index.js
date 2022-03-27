import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Login from '@/components/login.component.vue';
import ShoppingCart from '@/components/shopping-cart.component.vue';
import Form from '@/components/form.component.vue';
import Order from '@/components/order.component.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: ShoppingCart
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
