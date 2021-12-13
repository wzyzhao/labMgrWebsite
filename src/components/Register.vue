<template>
  <body id="post">
  <el-form class="register-container" ref="form" :model="formData" label-width="80px">

    <h3 class="login_title">用户注册</h3>

    <el-form-item label="邮箱" class="em" style="position:relative;right:20px">
        <el-input placeholder="请输入邮箱" v-model="formData.email" clearable>
          <template #prefix>
            <el-icon class="el-input__icon"><edit /></el-icon>
          </template>
        </el-input>
    </el-form-item>

    <el-form-item label="验证码" class="cd" style="position:relative;right:20px">
        <el-input v-model="formData.code">
          <template #append>
            <el-button type="primary" @click="getCode">获取验证码</el-button>
          </template>
        </el-input>
    </el-form-item>

    <el-form-item label="ID" class="em" style="position:relative;right:20px">
      <el-input placeholder="请输入ID" v-model="formData.id" class="input-with-select">
        <template #prefix>
          <el-icon class="el-input__icon"><edit /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item label="姓名" class="em" style="position:relative;right:20px">
      <el-input placeholder="请输入姓名" v-model="formData.username" class="input-with-select">
        <template #prefix>
          <el-icon class="el-input__icon"><edit /></el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item label="身份" class="em" style="position:relative;right:20px">
      <el-select v-model="value" placeholder="请选择" class="input-with-select">
        <el-option
            v-for="item in authority"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="密码" class="em" style="position:relative;right:20px">
        <el-input placeholder="请输入密码" v-model="formData.password" class="input-with-select" type="password" show-password clearable>
          <template #prefix>
            <el-icon class="el-input__icon"><edit /></el-icon>
          </template>
        </el-input>
    </el-form-item>

    <el-form-item label="确认密码" class="em" style="position:relative;right:20px">
        <el-input placeholder="请确认密码" v-model="formData.verifyPassword" class="input-with-select" type="password" show-password clearable>
          <template #prefix>
            <el-icon class="el-input__icon"><edit /></el-icon>
          </template>
        </el-input>
    </el-form-item>

    <el-form-item>
      <el-button class="btn" type="primary" @click="register">立即注册</el-button>
      <el-button class="btn" @click="cancel">取消注册</el-button>
    </el-form-item>

  </el-form>
  </body>
</template>

<script>
import axios from 'axios'
import {Edit} from "@element-plus/icons"
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"
//axios.defaults.headers.post['Content-Type'] = "multipart/form-data"
export default {
  components:{Edit},
  data () {
    let id;
    return {
      formData: {
        email: '',
        id,
        username:'',
        password: '',
        code: '',
        verifyPassword: ''

      },
      authority: [{
        value: '1',
        label: '学生'
      }, {
        value: '2',
        label: '教师'
      }, {
        value: '3',
        label: '责任教师'
      }, {
        value: '4',
        label: '助教'
      } ],
      value: ''
    }
  },
  methods: {
    getCode () {
      axios
        .post('/sendEmail/'+this.formData.email.toString(), {
          email: this.formData.email
        })
        .then(() => {
          this.$message({
            message: "验证码发送成功",
            type: 'success'
          })
        })
    },
    register () {
      axios
        .post('/register', {
            email: this.formData.email,
            code: this.formData.code,
            id: parseInt(this.formData.id),
            authority:this.authority,
            username: this.formData.username,
            password: this.formData.password
          },
          // header: ""
        )
        .then(res => {
          // eslint-disable-next-line no-constant-condition
          //验证码的对应在后端实现了

          if ((this.formData.email == '' || this.formData.code == '' || this.formData.password == ''
            || this.formData.id == null || this.authority == '' || this.formData.username == '')) {
            this.$message({
              message: '必要信息不能为空',
              type: 'error'
            })
          } else {
            this.$router.push({path: '/login'})
            this.$message({
              message: '注册成功，请登录',
              type: 'success'
            })
          }

        })
        .catch(() => {
          this.$message({
            message: '注册不成功，请重试',
            type: 'error'
          })
        })
    },
    cancel() {
      this.$router.replace({path: '/login'})
    }

  }
}
</script>

<style>
#post {
  background: url("../assets/img/bg/moutain_bg.jpg") no-repeat center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
.register-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.btn{
  position:relative;
}
</style>

