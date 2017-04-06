import Vue from 'vue'
import Router from 'vue-router'

import Application from '@/module/home/application'
import Home from '@/module/home/login'
import ServerAddress from '@/module/home/serverAddress'

Vue.use(Router)

export default new Router({
    routes: [
    	{
            path: '/application',
            name: 'application',
            component: Application
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/serverAddress',
            name: 'ServerAddress',
            component: ServerAddress
        },
        { path: '*', redirect: '/home' }
    ]
})
