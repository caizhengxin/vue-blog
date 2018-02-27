<template>
    <section>
        <div
          :class=" isSignInShow ? 'display-block' : 'display-none' ">
            <el-form
              :model="signInForm"
              :rules="signInRules"
              ref="signInForm"
              :show-message="false"
              status-icon>
                <el-form-item prop="telephone" class="margin-bottom-none">
                    <el-input v-model="signInForm.telephone" placeholder="手机号" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="password" class="margin-bottom-none">
                    <el-input type="password" v-model="signInForm.password" placeholder="密码(不少于6位)" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="captcha" class="margin-bottom-none">
                    <el-input v-model="signInForm.captcha" placeholder="请输入验证码" auto-complete="off" @keyup.enter.native="handleSignIn">
                        <template slot="append" class="captcha-t"><img :src="captchaImg" class="captcha-img" @click="handleCaptchaImg"></template>
                    </el-input>
                </el-form-item>
                <el-button type="primary" class="signin-submit" @click="handleSignIn" :loading="loading">登录</el-button>
            </el-form>
            <div class="sign-father">
                <a href="#" @click="handleCaptcha">手机验证码登录</a>
                <router-link :to="{ path: 'reset' }" >重置密码</router-link>
            </div>
        </div>
        <div
          :class=" isSignInTelShow ? 'display-block' : 'display-none' ">
            <el-form
              :model="signInTelForm"
              :rules="signInTelRules"
              ref="signInTelForm"
              :show-message="false"
              status-icon>
                <el-form-item prop="telephone" class="margin-bottom-none">
                    <el-input v-model="signInTelForm.telephone" placeholder="手机号" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="captcha" class="margin-bottom-none">
                    <el-input v-model="signInTelForm.captcha" placeholder="验证码" auto-complete="off">
                        <el-button slot="append">获取验证码</el-button>
                    </el-input>
                </el-form-item>
                <el-button type="primary" class="signuptel-submit" >登录</el-button>
            </el-form>
            <div class="sign-tel-father">
                <a href="#" @click="handleMiMa">密码登录(手机号或邮箱)</a>
            </div>
        </div>
    </section>
</template>

<style>
    .signin-submit,
    .signuptel-submit {
        width: 100%;
        margin-top: 20px;
    }

    .margin-bottom-none {
        margin-bottom: 0px;
    }

    .sign-father {
        margin-top: 20px;
    }

    .sign-father a {
        text-decoration: none;
        float: left;
        color: #3a8ee6;
    }

    .sign-father a:last-child {
        float: right;
        color: #757575;
    }

    .sign-tel-father a{
        margin-top: 20px;
        text-decoration: none;
        float: left;
        color: #3a8ee6;
    }

    .el-input-group__append {
        margin: 0px;
        padding: 0px;
    }

    .captcha-img {
        height: 35px;
        cursor: pointer;
    }
</style>

<script>
    import {SignIn} from '../../../api/api';

    export default {
        data() {
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else{
                    if (this.signInForm.checkpassword !== '') {
                        this.$refs.signInForm.validateField('checkpassword');
                    }
                    callback();
                }
            }

            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.signInForm.password) {
                    callback(new Error('两次输入密码不一致！'));
                } else {
                    callback();
                }
            }
            return {
                loading: false,

                isSignInShow: true,
                isSignInTelShow: false,

                captchaImg: '',

                signInForm: {
                    telephone: '',
                    password: '',
                    captcha: '',
                },

                signInRules: {
                    telephone: [
                        {required: true, message: '请输入手机号！', trigger: 'blur'},
                        {min: 11, max: 11, message: '手机号格式错误'}
                    ],
                    password: [
                        {required: true, message: '请输入密码！', trigger: 'blur'},
                        {min: 6, max: 16, message: '请输入8-20位的密码'},
                    ],
                    captcha: [
                        {required: true, message: '请输入验证码！', trigger: 'blur'},
                        {min: 4, max: 4, message: '请输入4位的验证码'},
                    ]
                },

                signInTelForm: {
                    telephone: '',
                    captcha: '',
                },

                signInTelRules: {
                    telephone: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {min: 11, max: 11, message: '手机号格式错误'}
                    ],
                    captcha: [
                        {required: true, message: '请输入验证码', trigger: 'blur'},
                        {min: 4, max: 4, message: '请输入4位的验证码'}
                    ],
                }
            }
        },
        methods: {
            handleMiMa: function() {
                this.isSignInShow = true;
                this.isSignInTelShow = false;
            },
            handleCaptcha: function() {
                this.isSignInShow = false;
                this.isSignInTelShow = true;
            },
            handleCaptchaImg: function() {
                this.captchaImg = 'api/captcha' + '?captcha' + Math.random();
            },
            handleSignIn: function() {
                this.$refs.signInForm.validate((valid) => {
                    if(valid) {
                        SignIn(this.signInForm).then(resp => {
                            this.loading = false;
                            if (resp['code'] == 200) {
                                window.location = '/';
                            }else{
                                this.$message.error(resp['message']);
                            }
                        }).catch(error => {
                            console.log(error);
                        })
                    }
                })
            },
            init: function() {
                this.handleCaptchaImg();
            }
        },
        mounted() {
            this.init();
        }
    }
</script>