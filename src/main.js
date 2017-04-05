// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

// element-ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

// 开启debug模式
// Vue.config.debug = true
// 配置是否允许vue-devtools 检查代码  默认为true
// Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
