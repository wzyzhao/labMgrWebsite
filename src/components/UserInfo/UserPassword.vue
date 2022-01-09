<template>
    <el-header>
      <!--img src="../../assets/TJLogo.png" width=40px height=40px style="position: relative;top:10px"-->
      <span class="heading">同济大学实验教学管理系统</span>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
              <el-menu-item index="1" @click="jumpToProfile();getStudentInformation()">
                <el-icon class="menu"><setting /></el-icon>
                <span class="menu">个人资料设置</span>
              </el-menu-item>
              <el-menu-item index="2" @click="jumpToPassword">
                <el-icon class="menu"><refresh /></el-icon>
                <span class="menu">登录密码重置</span>
              </el-menu-item>
              <el-menu-item index="3" @click="jumpToAppIndex">
                <el-icon class="menu"><back /></el-icon>
                <span class="menu" style="position: relative;left:40px">返回首页</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
    <el-container style="height: 100vh; border: 1px solid #eee">
  <el-main>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" size="medium" style="position: relative;left:400px;top:50px">
    <el-form-item label="邮箱" prop="oldEmail">
      <el-input placeholder="请输入邮箱" style="width: 300px;right:450px" v-model="ruleForm.oldEmail" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="旧密码" prop="oldPass">
      <el-input placeholder="请输入旧密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.oldPass" autocomplete="off" show-password></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="pass">
      <el-input placeholder="请输入新密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.pass" autocomplete="off" show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input placeholder="请再次输入密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.checkPass" autocomplete="off" show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="position:relative;right:450px;" type="primary" @click="update()">确认修改</el-button>
      <el-button style="position:relative;right:450px;" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
  </el-main>
    </el-container>
    </el-container>
</template>

<script>
import { ElNotification} from 'element-plus'
import { Setting,Refresh,Back } from '@element-plus/icons'
import axios from "axios";

export default{
  components:{Setting,Refresh,Back},
  data() {
    var checkOldEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('邮箱不能为空'));
      }
      else callback();
    };
    var checkOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('旧密码不能为空'));
      }
      else callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      dataForm:{
        studentId: '',
        studentEmail: '',
        studentName: '',
        studentFinalScore: '',
        studentPassword: '',
        studentGender: ''
      },
      ruleForm: {
        oldEmail:'',
        oldPass: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        oldEmail: [
          { validator: checkOldEmail, trigger: 'blur' }
        ],
        oldPass: [
          { validator: checkOldPass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    jumpToProfile(){
      this.$router.push('/userProfile')
    },
    jumpToPassword(){
      this.$router.push('/userPassword')
    },
    jumpToAppIndex(){
      switch (localStorage.getItem("currentIdentity")){
        case "1":this.$router.push('/student');break;
        case "2":this.$router.push('/');break;
        case "3":this.$router.push('/');break;
        case "4":this.$router.push('/');break;
        default:break;
      }
    },
    update() {
      this.axios
          .post('/user/update', {
            code: "",
            gender: "",
            newEmail: "",
            newPassword: this.ruleForm.pass,
            oldEmail: this.ruleForm.oldEmail,
            oldPassword:this.ruleForm.oldPass,
            username: ""
          }).then(resp => {
        sessionStorage.clear()
        this.$router.push('/login')
        this.$message({
          message: '密码已修改，请重新登录！',
          type: 'success'
        })
        /*then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)*/
      }).catch(() => {
        this.$message({
          message: '修改失败，请重试',
          type: 'error'
        })
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getStudentInformation() {
      this.axios
          .get('/information/student', {
            params:{
              studentId:localStorage.getItem('studentId')
            }

          }).then(resp => {
        /*then 指成功之后的回调 (注意：使用箭头函数，可以不考虑this指向)*/
        this.dataForm.studentId=localStorage.getItem('studentId'),
            this.dataForm.studentEmail=resp.data.studentEmail,
            this.dataForm.studentGender=resp.data.studentGender,
            this.dataForm.studentName=resp.data.studentName,
            this.dataForm.studentFinalScore=resp.data.studentFinalScore
      }).catch(() => {
        this.$message({
          message: '提交失败，请重试',
          type: 'error'
        })
      })
    },
  }
}
</script>
<style>
.heading{
  color:#ffffff;
  font-weight:bold;
  font-size:20px;
  font-family: "Times New Roman", Times, serif;
}
.el-header {
  border-bottom: 1px solid;
  text-align: left;
  background-color: #3c3c3c;
  font-weight: bold;
  font-size: 40px;
}
.el-aside {
  color: #333;
  text-align: center;
  line-height: 150px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 650px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.menu{
  position: relative;
  left:37px
}
/*侧边栏样式*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo{
  height: 100vh
}
</style>

