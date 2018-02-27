// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueParticles from 'vue-particles'
import ElementUI from 'element-ui'
import moment from "moment"
import Mock from './mock'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'font-awesome/css/font-awesome.min.css'
import 'jquery'

Vue.use(ElementUI)
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$moment = moment

// Mock.AnalogData()

router.beforeEach((to, from, next) => {
	// if(to.path == '/login') {
	// 	sessionStorage.removeItem('user');
	// }

	// let user = JSON.parse(sessionStorage.getItem('user'));
	// if (!user && to.path != '/login') {
	// 	next({path: '/login'})
	// } else {
	// 	next()
	// }

	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
