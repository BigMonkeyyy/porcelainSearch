import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.ts'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

// 使用VueLazyload并传入相应的配置
Vue.use(VueLazyload, {
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585563623871&di=aaa073041affd3248d051a543578bf3d&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F87%2F84573c665713a85.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585563585597&di=cc8c32eb57013c381d43e8419ebc2158&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_biaoqing%2F25662262.jpeg'// 懒加载使用的图片
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
