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
                <el-form-item prop="tel" class="margin-bottom-none">
                    <el-input v-model="signInForm.tel" placeholder="手机号或邮箱" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="password" class="margin-bottom-none">
                    <el-input type="password" v-model="signInForm.password" placeholder="密码(不少于8位)" auto-complete="off" ></el-input>
                </el-form-item>
                <el-button type="primary" class="signup-submit" >登录</el-button>
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
                <el-form-item prop="tel" class="margin-bottom-none">
                    <el-input v-model="signInTelForm.tel" placeholder="手机号或邮箱" auto-complete="off" ></el-input>
                </el-form-item>
                <el-form-item prop="captcha" class="margin-bottom-none">
                    <el-input v-model="signInTelForm.captcha" placeholder="验证码" auto-complete="off" >
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
    .signup-submit,
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
</style>

<script>
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
                isSignInShow: true,
                isSignInTelShow: false,

                signInForm: {
                    tel: '',
                    password: '',
                },

                signInRules: {
                    tel: [
                        {required: true, message: '请输入手机号', trigger: 'blur'},
                        {min: 11, max: 11, message: '手机号格式错误'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 8, max: 20, message: '请输入8-20位的密码'},
                    ],
                },

                signInTelForm: {
                    tel: '',
                    captcha: '',
                },

                signInTelRules: {
                    tel: [
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
            }
        },
    }
</script>