<template>
  <el-container>
    <el-aside width="auto">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1" @click="jumpToUserProfile">
              <i class="el-icon-document"></i>
              <span slot="title">个人资料设置</span>
            </el-menu-item>
            <el-menu-item index="2" @click="jumpToUserAvatar">
              <i class="el-icon-menu"></i>
              <span slot="title">个人头像设置</span>
            </el-menu-item>
            <el-menu-item index="3" @click="jumpToUserPasswordSetting">
              <i class="el-icon-s-tools"></i>
              <span slot="title">登录密码重置</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: "userInformation",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    jumpToUserAvatar(){
      this.$router.push({path: '/userAvatar'})
    },
    jumpToUserProfile(){
      this.$router.push({path: '/userProfile'})
    },
    jumpToUserPasswordSetting(){
      this.$router.push({path: '/userPasswordSetting'})
    }
  },
}
</script>

<style scoped>
html,body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-menu-vertical-demo{
  height: 100vh;
}
</style>
