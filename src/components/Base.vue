<template>
	<section>
		<el-menu
		  default-active="$route.path"
		  class="nav"
		  background-color="#545c64"
		  text-color="#fff"
		  active-text-color="#ffd04b"
		  :default-active="activeIndex"
		  router
		  mode="horizontal">
		  	<a href="#" class="logo">
		  		<img src="../assets/logo.png" alt="logo" height="50px" width="120px">
		  	</a>
		    <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
		  		<el-submenu :index="index + ''" v-if="!item.leaf">
		  			<template slot="title">
		  				<i :class="child.iconCls"></i>
		  				<span slot="title">{{ child.name }}</span>
		  			</template>
                    <el-menu-item v-for="child in item.children" :index="item.path + child.path" v-if="!child.hidden">
                        <span slot="title">{{ child.name }}</span>
                    </el-menu-item>
		  		</el-submenu>
	  	        <el-menu-item v-if="item.leaf && item.children.length > 0" :index="item.path + item.children[0].path">
                    <i :class="item.iconCls"></i>
                    <span slot="title">{{ item.children[0].name }}</span>
                </el-menu-item>
		    </template>
			<el-menu-item index="/signup" class="signinup">
		    	<i class="iconfont icon-zhuce"></i>
		    	<span slot="title">注册</span>
		    </el-menu-item>
		    <el-menu-item index="/signin" class="signinup">
		    	<i class="iconfont icon-signin"></i>
		    	<span slot="title">登录</span>
		    </el-menu-item>
		</el-menu>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
	</section>
</template>

<style>
	body {
		background-color: #eee;
	}
	.logo {
		float: left;
		margin: 0 20px;
	}

	.el-menu-item,
	.el-menu-item i{
		font-size: 18px;
	}

	.signinup {
		float: right !important;
	}
</style>

<script>
	export default {
		data() {
			return {
				activeIndex: this.$route.path,
			}
		},
		methods: {

		},
		mounted() {

		},
	}
</script>