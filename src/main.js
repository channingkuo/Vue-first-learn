// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import './components/assets/css/reset.css'
// 引用element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
// 引用eleme移动框架的导航栏
import { Header, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)

Vue.config.productionTip = false

Vue.prototype.$http = axios
// Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Basic eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYXBwaWQiOiJYY3JtIn0..j07mxhiyg8UtSQab7z284w.XcyyGKYpDar9Im4EPlvRpCqzLTxBPVXfEneqj4ThqKHqv6c5rO5PMWFrC4AOC0ILcrEkv57mPntUaesHYmFTYO6KZEOo_4MJtD0GciHW21CIcxt_HG93elRgR3qP9OuBJtdxCDKSOZbAbkoYAJxOjhVWeq7QyuB6tYX2YSxCDMBiOXahfgPe30h4d8snwBEoNeX4uW0pvmKdQK_MjkAdzQ.OAGrV_AEectvPlY3eXE_Xw'

// 开启debug模式
Vue.config.debug = true
// 配置是否允许vue-devtools 检查代码  默认为true
// Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
