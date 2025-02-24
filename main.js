import App from './App'
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
// uView
import uView from 'uview-ui'
Vue.use(uView)
import store from './store/index.js'  // 导入刚才创建的 Vuex store
// 全局components
import tabbar from './components/tabbar/tabbar.vue'
Vue.component('myTabbar', tabbar)

App.mpType = 'app'
const app = new Vue({
	store,
  ...App
})
app.$mount()
