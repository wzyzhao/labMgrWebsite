<template>
  <div>
    <div>
      <label style="font-weight: bold;margin-right: 10px;">文件:</label>
      <el-input v-model="addForm.fileName" size="mini" style="width:52%; margin-left: 18px"></el-input>
      <el-upload
          class="upload-demo"
          ref="upload"
          action="/instruction/"
          :show-file-list="false"
          :before-upload="beforeUpload">
        <template v-slot:trigger>
        <el-button size="mini" type="danger">选取文件</el-button></template>
      </el-upload>

      <div style="margin-top: 10px">备注：仅限上传一个PDF文件</div>
    </div>

    <div style="text-align: center;">
      <el-button size="mini" @click="viewfile">预览</el-button>
      <el-button size="mini" type="primary" @click="upLoadpdf()">上传</el-button>
      <el-button size="mini">取 消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      pdfUrl: '', // pdf文件地址
      addForm: {
        file: null,
        fileName: '',
        fileData: null
      },
    }
  },
  methods: {
    //上传PDF文件之前
    beforeUpload(file) {
      console.log("文件", file);
      this.file = file;
      this.fileName = file.name;
      // this.fileSize = file.size;
      const extension = file.name.split('.').slice(-1) == 'pdf'
      if (!extension) {
        this.$message.warning('上传模板只能是pdf格式!')
        return
      }
      let reader = new FileReader();
      reader.readAsDataURL(file);
      let that = this;
      reader.onload = function () {
        that.fileData = reader.result;
      };
      return false; // 返回false不会自动上传
    },
    //预览文件
    viewfile() {
      console.log("viewFile");
      var win = window.open();
      win.document.write(
          '<body style="margin:0px;"><object data="' +
          this.fileData +
          '" type="application/pdf" width="100%" height="100%"><iframe src="' +
          this.fileData +
          '" scrolling="no" width="100%" height="100%" frameborder="0" ></iframe></object></body>'
      );
      // win.document.write(
      //   '<body style="margin:0px;"><iframe src="' +
      //     this.fileData +
      //     '" scrolling="no" width="100%" height="100%" frameborder="0" ></iframe></body>'
      // );
    },
    //上传文件
    upLoadpdf() {
      // 后端只需一个参数  添加
      //  let requestConfig = {
      //headers: {
      // 'Content-Type': 'multipart/form-data'
      //},
      //}
      //this.axios.post('/market/upload',formData,requestConfig).then((res)=>

      let fileFormData = new FormData();
      fileFormData.append("file", this.file);
      this.axios.post('/admin/uploadUserFile', fileFormData).then(res => {
        if (res.data.status === 1) {
          this.$message({
            message: res.data.msg,
            type: 'success',
            duration: 3000,
          });
        } else {
          this.messageLabel = this.$message({
            message: res.data.msg,
            type: 'error',
            showClose: true,
            duration: 0,
          });
        }
      })
    }
  }
}

</script>

<style scoped>

</style>
