// 导入全局模块
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入全局样式
import '@/assets/css/reset.css'
import '@/assets/css/border.css'
import '@/assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import axios from 'axios'

Vue.config.productionTip = false
Vue.config.devtools = true

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
