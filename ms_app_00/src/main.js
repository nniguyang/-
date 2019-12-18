import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/Abb/MyHeader'
import MyFooter from './components/Abb/MyFooter'
import userHeader from './views/user-header'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
//加载第三方模块qs使用post请求
import qs from 'qs'
//配置qs模块,qs成为vue属性
Vue.prototype.qs = qs

Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);
Vue.component("user-header",userHeader);
//将axios对象强行添加到Vue对象的原型对象中

//引入elementUI
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from './axios'
//要求在node-modules下载v-viewer
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Viewer)
//懒加载
Vue.use(VueLazyload)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

