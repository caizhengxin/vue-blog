<template>
    <section>
        <vue-particles>
        </vue-particles>
        <el-row>
            <el-col :xs="{span: 24}" :sm="{span: 8, offset: 8}" :md="{span: 8, offset: 8}" :lg="{span: 4, offset: 10}" :xl="{span: 4, offset: 10}" class="logo-base">
                <h1 class="hide-text">菜心</h1>
                <div class="tab-navs">
                    <router-link :to="{ path: 'signin' }" >登录</router-link>
                    <b>·</b>
                    <router-link :to="{ path: 'signup'}" >注册</router-link>
                </div>
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
    </section>
 </template>
        

<style>
	body {
		background-color: #f7fafc;
	}

    .logo-base {
        margin-top: 100px;
    }

    .logo-header {
        text-align: center;
    }

    h1 {
        margin: 0 auto;
        width: 235px;
        height: 110px;
        background-size: contain;
        background: url(../assets/sign.png) no-repeat;
        text-align: center;
    }

    .hide-text {
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }

    .tab-navs {
        font-size: 20px;
        margin-bottom: 20px;
    }

    .tab-navs a {
        width: 4em;
        line-height: 35px;
        color: #337ab7;
        text-decoration: none;
        opacity: .7;
        -ms-filter: "alpha(Opacity=70)";
        -webkit-transition: opacity .15s,color .15s;
        transition: opacity .15s,color .15s;
    }

    #particles-js {
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>