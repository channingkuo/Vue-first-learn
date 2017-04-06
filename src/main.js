// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from 'axios';

<<<<<<< HEAD
Vue.use(ElementUI);
Vue.config.productionTip = false;
=======
// element-ui框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
>>>>>>> 568896a09410e39bb27380958108c2d79be491b1

// 开启debug模式
// Vue.config.debug = true
// 配置是否允许vue-devtools 检查代码  默认为true
// Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
