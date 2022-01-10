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
      <el-button type="primary" class="btn" @click="login()" icon="el-icon-upload">
        <el-icon style="position: relative;right: 15px;" size="15"><upload-filled /></el-icon>
        <span style="position: relative;right: 10px;">登录</span></el-button>
      <el-button class="btn" @click="resetForm">重置</el-button>
    </el-form-item>

    <router-link to="register">没有账号？点击注册</router-link>

  </el-form>

  </el-row>

  </body>

</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
import {Edit,UploadFilled} from "@element-plus/icons";
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"

export default {
  components:{Edit,UploadFilled},
  data () {
    return {
      formData: {
        email: '',
        password: '',
        id: null,
        username: '',
        active: 0
      },
      rules: {
        email: [{required: true, message: '邮箱不能为空', trigger: 'blur'}],
        password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
      }
    }
  },

  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      this.$axios
        .post('/login', {
          email: this.formData.email,
          password: this.formData.password
        })
        .then(resp => {
          if (resp.data.status==1){
            if ((this.formData.password==''||this.formData.email=='')) {
              this.$message({
                message: '邮箱和密码不能为空',
                type: 'error'
              })
            } else {
              sessionStorage.setItem("token", 'true')
              localStorage.setItem('currentIdentity',resp.data.user.authority.toString())

              let identity = resp.data.user.authority.toString()

              switch (identity) {
                case "1":
                  localStorage.setItem('studentId',resp.data.user.id.toString())
                  this.$router.push({path: '/student'});
                  break;
                case "2":
                  localStorage.setItem('teacherId',resp.data.user.id.toString())
                  this.$router.push({path: '/teacher'});
                  break;
                case "3":
                  localStorage.setItem('CCTeacherId',resp.data.user.id.toString())
                  this.$router.push({path: '/teacher'});
                  break;
                case "4":
                  localStorage.setItem('assistantId',resp.data.user.id.toString())
                  this.$router.push({path: '/assistant'});
                  break;
                case "5":
                  //localStorage.setItem('adminId',resp.data.user.id.toString())
                  this.$router.push({path: '/admin'});
                  break;
              }

            }
          } else {
            this.$message({
              message: '邮箱或密码错误',
              type: 'error'
            })
          }
        })
        .catch(failResponse => {
        })
    },
    resetForm () {
      this.$refs.formName.resetFields()
    },
    next() {
      if (this.active++ > 2) this.active = 0
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
  right:47px;
  top:10px
}
</style>
