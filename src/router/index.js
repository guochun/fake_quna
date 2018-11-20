import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home/Home.vue'
import City from '../views/City/City.vue'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'City',
    path: '/city',
    component: City
  }
]

export default new Router({
  routes
})
