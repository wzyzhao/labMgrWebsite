<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="position:relative;left:220px;bottom:730px">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/userInfo' }">个人信息</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/userAvatar' }">个人头像设置</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="position: relative;left:250px;">设置头像</div>
    <div style="position: relative;left:250px;">如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像</div>
    <div style="position: relative;">当前头像</div>
    <img>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :auto-upload="false">
    <el-button size="small" type="primary">上传头像</el-button>
    <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>

  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [

      ]
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>

</style>
