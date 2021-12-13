<template>
  <el-header>
    <!--img src="../../assets/TJLogo.png" width=40px height=40px style="position: relative;top:10px"-->
    <span class="heading">同济大学实验教学管理系统</span>
    <span class="demo-type">
        <el-button title="点击进入个人信息页面" circle @click="jumpToUserInfo" style="position: relative;left:1130px;bottom:2px">
          <el-icon><avatar /></el-icon>
        </el-button>
        <el-button title="退出登录" circle @click="logout" style="position: relative;left: 1145px;bottom:2px">
          <el-icon><switch-button /></el-icon>
        </el-button>
      </span>
  </el-header>
</template>

<script>
import {SwitchButton, Avatar} from "@element-plus/icons";
export default {
  components: {SwitchButton,Avatar},
  methods: {
    logout(){

    },
    jumpToUserInfo()
    {
      this.$router.push({path: '/userInformation'})
    }
  }
}
</script>

<style scoped>
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
</style>
