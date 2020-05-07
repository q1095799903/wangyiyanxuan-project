import Vue from 'vue'
//引入flexibleflexible
import 'lib-flexible/flexible'
import App from './App.vue'
Vue.config.productionTip = false

//1.注册路由器
import router from './router/index'
//2.注册store
import store from './store/index'
//3.引入iconfont
import './static/iconfont/iconfont.css'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
