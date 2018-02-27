import Vue from 'vue'
import Router from 'vue-router'

import SignIn from '../components/front/user/SignIn.vue'
import SignBase from '../components/front/user/SignBase.vue'
import SignUp from '../components/front/user/SignUp.vue'
import Reset from '../components/front/user/Reset.vue'

import Base from '../components/front/Base.vue'
import Index from '../components/front/index/Index.vue'

import Post from '../components/front/post/Post.vue'
import PostDetail from '../components/front/post/PostDetail.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-shouye',
            leaf: true,
            component: Base,
            children: [
                {path: '', name: '首页', component: Index, meta: { keepAlive: true, title: '首页'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-faxian',
            leaf: true,
            component: Base,
            children: [
                {path: 'post', name: '发现', component: Post, meta: { keepAlive: true, title: '发现'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-xiangce',
            leaf: true,
            component: Base,
            children: [
                {path: 'photo', name: '相册', component: SignIn, meta: { keepAlive: true, title: '相册'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-liuyan',
            leaf: true,
            component: Base,
            children: [
                {path: 'leave', name: '留言', component: SignIn, meta: { keepAlive: true, title: '留言'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-guanyu',
            leaf: true,
            component: Base,
            children: [
                {path: 'about', name: '关于', component: SignIn, meta: { keepAlive: true, title: '关于'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: '',
            leaf: false,
            hidden: true,
            component: Base,
            children: [
                {path: 'settings', name: '设置', component: SignIn, meta: { keepAlive: true, title: '设置'}},
                {path: '', name: '退出', component: SignIn, meta: { keepAlive: true, title: '退出'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-zhuce',
            leaf: true,
            // hidden: true,
            component: SignBase,
            children: [
                {path: 'signup', name: '注册', component: SignUp, meta: {title: '注册'}},
            ]
        },
        {
            path: '/',
            name: '',
            iconCls: 'iconfont icon-signin',
            leaf: true,
            // hidden: true,
            component: SignBase,
            children: [
                {path: 'signin', name: '登录', component: SignIn, meta: {title: '登录'}},
            ]
        },
        {
            path: '/',
            name: '',
            hidden: true,
            leaf: true,
            component: SignBase,
            children: [
                {path: 'reset', name: '重置密码', component: Reset, meta: {title: '重置密码'}},
            ]
        },
        {
            path: '/',
            name: '',
            hidden: true,
            component: Base,
            children: [
                {path: 'post/:id', name: '文章详情', component: PostDetail, meta: { keepAlive: true, title: '文章详情'}},
            ]
        },
  	]
})
