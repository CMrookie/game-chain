import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引用mint组件库
import Mint from 'mint-ui'
// import { Tabbar, TabItem } from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// style
import '@/assets/init.scss'
import '@/assets/style.css'
// vue-awesome-swiper 需要单独应用swiper的样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// 注册组件
Vue.use(Mint)
// Vue.use(Tabbar)
// Vue.use(TabItem)
Vue.use(VueAwesomeSwiper)
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
