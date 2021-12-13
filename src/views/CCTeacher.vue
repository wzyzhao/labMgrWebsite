<template>
  <Header></Header>
  <SideBar></SideBar>
</template>

<script>
import SideBar from "@/components/common/SideBar";
import Header from "@/components/common/Header";
export default {
  components: {Header, SideBar},
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
</style>
