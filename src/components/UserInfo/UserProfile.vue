<template>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="position:relative;left:220px;">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userInfo' }">个人信息</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userProfile' }">个人资料设置</el-breadcrumb-item>
      </el-breadcrumb>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="medium" style="position:relative;left:230px;right:230px;">
        <el-form-item label="1">
          <el-input style="width: 100px" v-model="sizeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="2">
          <el-select v-model="sizeForm.region" placeholder="请选择区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item size="large">
          <el-button type="primary" @click="onSubmit">立即修改</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
  export default {
  data() {
  return {
  sizeForm: {
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
}
};
},
  methods: {
  onSubmit() {
  console.log('submit!');
}
}
};
</script>

<style scoped>

</style>
