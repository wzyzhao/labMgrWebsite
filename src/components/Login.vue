// 向后端 /login 接口发送数据，获得成功的响应后，页面跳转到 /index。因为之前我们设置了默认的 URL，所以请求实际上发到了 http://localhost:8443/api/login。
<template>
  <body id="poster">

    <el-row type="flex" justify="center">

    <el-form class="login-container" ref="formName" :model="formData" :rules="rules" label-width="80px" @keyup.enter="login()">

    <h3 class="login_title">用户登录</h3>

    <el-form-item prop="email" label="邮箱" style="position:relative;right:20px">
      <el-input v-model="formData.email" placeholder="请输入邮箱" clearable>
        <template #prefix>
          <el-icon class="el-input__icon"><edit /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password" label="密码" style="position:relative;right:20px">
      <el-input v-model="formData.password" placeholder="请输入密码" type="password" show-password clearable>
        <template #prefix>
          <el-icon class="el-input__icon"><edit /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" class="btn" @click="login()" icon="el-icon-upload">登录</el-button>
      <el-button class="btn" @click="resetForm">重置</el-button>
    </el-form-item>

    <router-link to="register">没有账号？点击注册</router-link>

  </el-form>

  </el-row>

  </body>

</template>

<script>
import axios from 'axios'
import {Edit} from "@element-plus/icons";
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"

export default {
  components:{Edit},
  data () {
    return {
      formData: {
        email: '',
        password: '',
        id: null,
        username: ''
      },
      rules: {
        email: [{required: true, message: '邮箱不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          email: this.formData.email,
          password: this.formData.password
        })
        .then(resp => {
          if ((resp.data)){
            if ((this.formData.password==''||this.formData.email=='')) {
              this.$message({
                message: '邮箱和密码不能为空',
                type: 'error'
              })
            } else {
              this.$router.replace({path: '/student'})
            }
          } else {
            this.$message({
              message: '邮箱密码错误',
              type: 'error'
            })
          }
          /*if (resp.data) {
            // var data = resp.data.result
            this.$router.replace({path: '/home'})
            // var path = _this.$route.query.redirect
            // _this.$router.replace({path: path === '/' || path === undefined ? '/admin/dashboard' : path})
          } else {
            window.alert('邮箱或密码错误')
          }*/
        })
        .catch(failResponse => {
        })
    },
    resetForm () {
      this.$refs.formName.resetFields()
    }
  }
}
</script>

<style>

#poster {
  background: url("../assets/img/bg/paperwall_1.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  position: relative;
  top: 50px
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.btn{
  position:relative;
  right:48px;
  top:10px
}
</style>
