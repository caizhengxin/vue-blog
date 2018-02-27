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
		  		<img src="../../assets/logo.png" alt="logo" height="50px" width="120px">
		  	</a>
		    <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
		  		<el-submenu :index="index + ''" v-if="!item.leaf" :key="index">
		  			<template slot="title">
		  				<i :class="item.iconCls"></i>
		  				<span slot="title">{{ item.name }}</span>
		  			</template>
                    <el-menu-item v-for="child in item.children" :index="item.path + child.path" v-if="!child.hidden" :key="child.path" @click="handleSinUp">
                        <span slot="title">{{ child.name }}</span>
                    </el-menu-item>
		  		</el-submenu>
	  	        <el-menu-item v-if="item.leaf && item.children.length > 0" :index="item.path + item.children[0].path">
                    <i :class="item.iconCls"></i>
                    <span slot="title">{{ item.children[0].name }}</span>
                </el-menu-item>
		    </template>

		    <el-submenu index="avatar" class="avatar" :class=" isBaseShow ? 'display-block' : 'display-none' ">
		    	<template slot='title'>{{user.username}}</template>
		    	<el-menu-item index='1-1'>设置</el-menu-item>
		    	<el-menu-item index='signup' @click="handleSinUp">退出</el-menu-item>
		    </el-submenu>
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

	.nav>li:nth-last-child(2),
	.nav>li:nth-last-child(3),
	.avatar {
	    float: right !important;
	}

	.avatar {
		display: block;
		margin-right: 20px;
	}

	.avatar .el-menu {
		right: 0;
		left: auto !important;
	}

	.el-submenu__title,
	.el-menu-item,
	.el-menu-item i{
		font-size: 18px;
	}
</style>

<script>
	import {getSignStatus, SignUp} from '../../api/api';
	export default {
		data() {
			return {
				activeIndex: '/' + this.$route.path.split('/')[1],
				isBaseShow: false,
				user: {
					username: '',
					avatar: '',
				}
			}
		},
		methods: {
			handleGetSignStatus: function() {
				getSignStatus().then(resp => {
					if (resp['code'] == 200) {
						let data = resp['result']['user'];
						this.user = data;
						this.isBaseShow = true;
				        $('.nav>li:eq(5)').css('display', 'none');
				        $('.nav>li:eq(6)').css('display', 'none');
					}
				})
			},
			handleSinUp: function() {
				SignUp().then(resp => {
					if (resp['code'] == 200) {
						window.location = '/signin';
					}
				})
			},
			init: function() {
				this.handleGetSignStatus();
			},
		},
		mounted() {
			this.init();
		},
	}
</script>