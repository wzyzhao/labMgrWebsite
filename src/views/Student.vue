<template>
  <el-header>
    <!--img src="../../assets/TJLogo.png" width=40px height=40px style="position: relative;top:10px"-->
    <span class="heading">同济大学实验教学管理系统</span>
    <span style="margin-top: 15px;">
        <el-input placeholder="请输入搜索内容..." v-model="input4" style="width:20%;position:relative;left:800px;bottom:5px">
        <!--i slot="prefix" class="el-input__icon el-icon-search"-->
        </el-input>
      </span>
    <span class="demo-type">
        <el-button circle @click="jumpToUserInfo" :icon="el-icon-user-solid">
        </el-button>
        <el-button circle @click="logout" icon="el-icon-switch-button">
        </el-button>
      </span>
  </el-header>
  <el-container>
    <el-aside width="auto">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="changeWindow">
            <el-menu-item index="1">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>实验中心</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span>成绩中心</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span>师生互动</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-main>
        <AppIndex v-if="this.choice === 1"></AppIndex>
        <ExperimentCenter v-if="this.choice === 2"></ExperimentCenter>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import ExperimentCenter from "../components/ExperimentCenter";
import AppIndex from "../components/AppIndex";

export default {
  components: { AppIndex,ExperimentCenter },
  data(){
    return {
      choice: 1,
    };
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
    },
    jumpToUserInfo()
    {
      this.$router.push({path: '/userinfo'})
    },
    logout(){

    }

  }
}
</script>

<style scoped>
html,
body{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.heading{
  color:#ffffff;
  font-weight:bold;
  font-size:20px;
  font-family: "Times New Roman", Times, serif;
}
.demo-type{
  position:relative;
  left:820px;
  bottom:5px
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
/*菜单栏展开收起*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo{
  height: 100vh;
}
</style>
