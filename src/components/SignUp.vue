<template>
	<section>
		<el-form
		  :model="signUpForm"
		  :rules="signUpRules"
		  ref="signUpForm"
		  class="signUp"
		  :show-message="false"
		  status-icon>
		  	<el-form-item prop="name" class="margin-bottom-none">
				<el-input v-model="signUpForm.name" placeholder="姓名" auto-complete="off"></el-input>
		  	</el-form-item>
		  	<el-form-item prop="tel" class="margin-bottom-none">
				<el-input v-model="signUpForm.tel" placeholder="手机号" auto-complete="off" ></el-input>
			</el-form-item>
		  	<el-form-item prop="captcha" class="margin-bottom-none">
				<el-input v-model="signUpForm.captcha" placeholder="验证码" auto-complete="off" >
					<el-button slot="append">获取验证码</el-button>
				</el-input>
			</el-form-item>
			<el-form-item prop="password" class="margin-bottom-none">
				<el-input type="password" v-model="signUpForm.password" placeholder="密码(不少于8位)" auto-complete="off" ></el-input>
			</el-form-item>
			<el-form-item prop="checkpassword" class="margin-bottom-none">
				<el-input type="password" v-model="signUpForm.checkpassword" placeholder="确认密码" auto-complete="off" ></el-input>
			</el-form-item>
            <el-button type="primary" class="signup-submit" >注册</el-button>
		</el-form>
	</section>
</template>

<style>
	.signup-submit {
		width: 100%;
		margin-top: 20px;
	}

	.margin-bottom-none {
		margin-bottom: 0px;
	}
</style>

<script>
	export default {
		data() {
		    let validatePass = (rule, value, callback) => {
		        if (value === '') {
		        	callback(new Error('请输入密码'));
		        }else{
		        	if (this.signUpForm.checkpassword !== '') {
		        		this.$refs.signUpForm.validateField('checkpassword');
		        	}
		        	callback();
		        }
		    }

		    let validatePass2 = (rule, value, callback) => {
		    	if (value === '') {
		    		callback(new Error('请再次输入密码'));
		    	} else if (value !== this.signUpForm.password) {
		    		callback(new Error('两次输入密码不一致！'));
		    	} else {
		    		callback();
		    	}
		    }
			return {

				signUpForm: {
					name: '',
					tel: '',
					captcha: '',
					password: '',
					checkpassword: '',
				},

				signUpRules: {
        			name: [
        				{required: true, message: '请输入姓名', trigger: 'blur'},
        			],
        			tel: [
        				{required: true, message: '请输入手机号', trigger: 'blur'},
        				{min: 11, max: 11, message: '手机号格式错误'}
        			],
        			captcha: [
        				{required: true, message: '请输入验证码', trigger: 'blur'},
        				{min: 4, max: 4, message: '请输入4位的验证码'}
        			],
        			password: [
        				{validator: validatePass, required: true},
        				{min: 8, max: 20, message: '请输入8-20位的密码'},
        			],
        			checkpassword: [
        				{validator: validatePass2, required: true},
        			]
        		},
			}
		}
	}
</script>