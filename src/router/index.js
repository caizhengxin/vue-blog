import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '@/components/SignIn'
import SignBase from '@/components/SignBase'
import SignUp from '@/components/SignUp'
import Reset from '@/components/Reset'

import Base from '@/components/Base'
import Index from '@/components/Index'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/signin',
            name: '',
            hidden: true,
            leaf: true,
            component: SignBase,
            children: [
                {path: '', name: '登录', component: SignIn},
                {path: '/signup', name: '注册', component: SignUp},
                {path: '/reset', name: '重置密码', component: Reset},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-shouye',
            leaf: true,
            component: Base,
            children: [
                {path: '', name: '首页', component: Index, meta: { keepAlive: true }},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-faxian',
            leaf: true,
            component: Base,
            children: [
                {path: 'post', name: '发现', component: Post, meta: { keepAlive: true }},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-xiangce',
            leaf: true,
            component: Base,
            children: [
                {path: 'photo', name: '相册', component: SignIn, meta: { keepAlive: true }},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-liuyan',
            leaf: true,
            component: Base,
            children: [
                {path: 'leave', name: '留言', component: SignIn, meta: { keepAlive: true }},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-guanyu',
            leaf: true,
            component: Base,
            children: [
                {path: 'about', name: '关于', component: SignIn, meta: { keepAlive: true }},
            ]
        },
  	]
})
