<template>
  <div style="position: relative;right: 580px;font-size:20px;">设置头像</div>
  <div style="position: relative;right: 240px">
    <el-icon :size="20"><bell-filled /></el-icon>
    如果您还没有设置自己的头像，系统会显示为默认头像，您需要自己上传一张新照片来作为自己的个人头像</div>
  <div>
    <div>当前头像</div>
    <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false">
      <el-button size="small" type="primary" style="position: relative;top:200px;">上传头像</el-button>
      <div class="el-upload__tip" type="primary" style="position: relative;top:200px;">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import {BellFilled} from "@element-plus/icons";

export default {
  components:{BellFilled},
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
