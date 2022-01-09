<template>
  <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
  >
    <el-form-item label="公告主题" prop="title">
      <el-input v-model="ruleForm.subject"></el-input>
    </el-form-item>

    <el-form-item label="公告内容" prop="noticeDetail">
      <el-input v-model="ruleForm.content" :rows="5" type="textarea"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="releaseNotice"
      >发布</el-button
      >
      <el-button @click="goBack">取消</el-button>
    </el-form-item>

  </el-form>
</template>

<script scoped>
import { ElMessage } from 'element-plus'
export default {
  data() {
    return {
      tid:'3952108',
      ruleForm: {
        subject: '',
        content: '',
      },
      rules: {
        subject: [
          {
            required: true,
            message: '请输入主题',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 50,
            message: '标题字符限制为1-50',
            trigger: 'blur',
          },
        ],

        content: [
          {
            required: true,
            message: '请输入公告内容',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 500,
            message: '标题字符限制为1-500',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    releaseNotice() {
      let date=new Date();
      let mon,dat,hou,min,sec
      mon=(date.getMonth()+1).toString()
      dat=date.getDate().toString()
      hou=date.getHours().toString()
      min=date.getMinutes().toString()
      sec=date.getSeconds().toString()
      mon = mon.length < 2 ? '0' + mon : mon //格式化月 09
      dat = dat.length < 2 ? '0' + dat : dat //格式化日 09
      hou = hou.length < 2 ? '0' + hou : hou //格式化时 09
      min = min.length < 2 ? '0' + min : min //格式化分 09
      sec = sec.length < 2 ? '0' + sec : sec //格式化秒 09
      let timestamp=date.getFullYear().toString()+mon+dat+hou+min+sec;
      let tme=date.getFullYear().toString()+'-'+mon+'-'+dat+' '+hou+':'+min+':'+sec
      this.$axios
          .post('/notice/create', {
            content:this.ruleForm.content,
            noticeId:(this.tid+timestamp).toString(),
            subject:this.ruleForm.subject,
            teacherId:this.tid,
            time:tme,
          })
          .then(resp => {
            console.log(resp)
            ElMessage('发布成功')
            this.$router.push('/teacher')
          })
          .catch(failResponse => {

          })
    },
    goBack() {
      ElMessage('取消发布')
      this.$router.push('/teacher')
    },
    submitForm(formName) {
      /*
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
       */
    },
    resetForm(formName) {
      //this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>

</style>