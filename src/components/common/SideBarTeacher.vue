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
              <span class="menu">课程管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <el-icon class="menu"><document /></el-icon>
              <span class="menu">班级管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon class="menu"><document /></el-icon>
              <span class="menu">实验中心</span>
            </el-menu-item>
            <el-menu-item index="5">
              <el-icon class="menu"><Link /></el-icon>
              <span class="menu">成绩管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <el-icon class="menu"><chat-line-round /></el-icon>
              <span class="menu">公告中心</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-main>
        <CCTeacherIndex v-if="this.choice === 1"></CCTeacherIndex>
        <CourseManage v-if="this.choice === 2"></CourseManage>
        <ClassManage v-if="this.choice === 3"></ClassManage>
        <ExperimentCenterCCTeacher v-if="this.choice === 4"></ExperimentCenterCCTeacher>
        <ScoreManage v-if="this.choice === 5"></ScoreManage>
        <Billboard v-if="this.choice === 6"></Billboard>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import {Menu,ChatLineRound,Document,Link} from "@element-plus/icons";
import ClassManage from "@/components/CCTeacher/ClassManage";
import CCTeacherIndex from "@/components/CCTeacher/CCTeacherIndex";
import Billboard from "@/components/CCTeacher/Billboard";
import ScoreManage from "@/components/CCTeacher/ScoreManage";
import ExperimentCenterCCTeacher from "@/components/CCTeacher/ExperimentCenterCCTeacher";
import CourseManage from "@/components/CCTeacher/CourseManage";

export default {
  components: {ExperimentCenterCCTeacher, CCTeacherIndex,Billboard,ClassManage,ScoreManage,CourseManage,Menu,ChatLineRound,Document,Link },
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
        case "5":
          this.choice = 5;
          break;
        case "6":
          this.choice = 6;
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
