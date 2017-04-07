import Vue from 'vue'
import Router from 'vue-router'

import App from '../app'
import Application from '@/module/home/application'
import Home from '@/module/home/login'
import ServerAddress from '@/module/home/serverAddress'
import AccountList from '@/module/account/accountList'
import AccountDetail from '@/module/account/accountDetail'
import NoticeList from '@/module/notice/noticeList'
import Channing from '@/module/channing/channingList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            meta: { keepAlive: true },
            component: App
        },
        {
            path: '/home',
            name: 'Home',
            meta: { keepAlive: true },
            component: Home
        },
        {
            path: '/application',
            name: 'Application',
            meta: { keepAlive: true },
            component: Application
        },
        {
            path: '/serverAddress',
            name: 'ServerAddress',
            meta: { keepAlive: true },
            component: ServerAddress
        },
        {
            path: '/account/list',
            name: 'account/list',
            meta: { keepAlive: true },
            component: AccountList
        },
        {
            path: '/accountDetail/:accountId',
            name: '_accountDetail',
            meta: { keepAlive: false },
            component: AccountDetail
        },
        {
            path: '/notice/noticeView',
            name: 'notice/noticeView',
            meta: { keepAlive: true },
            component: NoticeList
        },
        {
            path: '/channing/list',
            name: 'channing/list',
            meta: { keepAlive: true },
            component: Channing
        },
        { path: '*', redirect: '/home' }
    ]
})
