<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="medium" style="position: relative;left:400px;top:50px">
    <el-form-item label="1">
      <el-input style="width: 300px;right:450px" v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="2">
      <el-select v-model="sizeForm.region" placeholder="请选择区域" style="width: 300px;right:450px">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit" style="position:relative;right:450px;">立即修改</el-button>
      <el-button style="position:relative;right:450px;">取消</el-button>
    </el-form-item>
  </el-form>
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
