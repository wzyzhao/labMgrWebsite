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
              <span class="menu">实验中心</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon class="menu"><Link /></el-icon>
              <span class="menu">成绩中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon class="menu"><chat-line-round /></el-icon>
              <span class="menu">师生互动</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-main>
        <AppIndex v-if="this.choice === 1"></AppIndex>
        <ExperimentHome v-if="this.choice === 2"></ExperimentHome>
        <ScoreCenter v-if="this.choice === 3"></ScoreCenter>
        <Interaction v-if="this.choice === 4"></Interaction>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>


import ScoreCenter from "@/components/Student/ScoreCenter";
import AppIndex from "@/components/Student/AppIndex";
import Interaction from "@/components/Student/Interaction";
import ExperimentHome from "@/components/Student/ExperimentHome";
import {Menu,ChatLineRound,Document,Link} from "@element-plus/icons";
export default {
  components: { AppIndex,ScoreCenter,Interaction,ExperimentHome,Menu,ChatLineRound,Document,Link },
  data(){
    return{
      choice: 1,
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
