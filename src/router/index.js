import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/module/home/login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            name: 'Hello',
            component: Hello
        }, {
            path: '/home',
            name: 'Home',
            component: Home
        },
        { path: '*', redirect: '/home' }
    ]
})
