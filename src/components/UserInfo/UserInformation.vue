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
  </el-container>
</template>

<script scoped>
import {Setting,Refresh,Back} from '@element-plus/icons'
export default {
  components: { Setting, Refresh, Back},
  data() {
    return {
      dataForm: {
        studentId: '',
        studentEmail: '',
        studentName: '',
        studentFinalScore: '',
        studentPassword: '',
        studentGender: ''
      }
    }
  },
  methods: {
    jumpToProfile() {
      this.$router.push('/userProfile')
    },
    jumpToPassword() {
      this.$router.push('/userPassword')
    },
    jumpToAppIndex() {
      switch (localStorage.getItem("currentIdentity")) {
        case "1":
          this.$router.push('/student');
          break;
        case "2":
          this.$router.push('/');
          break;
        case "3":
          this.$router.push('/');
          break;
        case "4":
          this.$router.push('/');
          break;
        default:
          break;
      }
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
