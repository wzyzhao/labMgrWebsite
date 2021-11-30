<template>
  <div>
    <navigation-bar></navigation-bar>
    <user-information-nav-menu></user-information-nav-menu>
    <router-view/>
  </div>
</template>

<script>

import UserInformationNavMenu from "./Student/UserInfo/UserInformationNavMenu";
export default {
  name: "UserInfo",
  components:{UserInformationNavMenu},
}
</script>

<style scoped>

</style>
