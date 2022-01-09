<template>
  <el-container>
    <el-aside width="auto">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              @select="changeWindow">
            <el-menu-item index="1">
              <el-icon class="menu" color="#FFFF00"><Menu /></el-icon>
              <span style="position: relative;left:50px">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon class="menu"><document /></el-icon>
              <span class="menu">用户管理</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-main>
        <AdminIndex v-if="this.choice === 1"></AdminIndex>
        <UserManage v-if="this.choice === 2"></UserManage>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>


import AdminIndex from "@/components/Admin/AdminIndex";
import UserManage from "@/components/Admin/UserManage"

import {Menu,ChatLineRound,Document,Link} from "@element-plus/icons";
export default {
  components: { AdminIndex,UserManage,Menu,Document },
  data(){
    return{
      choice: 1,
      identity: 1,
    }
  },
  methods: {
    changeWindow(index, indexPath) {
      console.log(1, indexPath);
      console.log(2, index);
      switch (index) {
        case "1":
          this.choice = 1;
          break;
        case "2":
          this.choice = 2;
          break;
        case "3":
          this.choice = 3;
          break;
        case "4":
          this.choice = 4;
          break;
        case "0":
          this.$router.push("/");
          break;
      }
    }
  }
}
</script>

<style scoped>
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
