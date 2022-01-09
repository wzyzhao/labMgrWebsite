<template>


  <el-button style="position: relative;left: 700px" v-if="this.clicked===true" @click="getNoticeList">获取公告列表</el-button>
  <el-button style="position: relative;left: 700px" v-if="this.clicked===false" @click="refreshNoticeList">刷新公告列表</el-button>

  <el-button type="primary" style="position: relative;right: 800px" @click="createNotice">新建公告</el-button>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="time" label="日期" width="150" />
    <el-table-column prop="subject" label="公告标题" width="150" />
    <el-table-column prop="teacherName" label="发布教师名称" width="130" />
    <el-table-column prop="content" label="公告内容" width="1100" />
    <el-table-column fixed="right" label="操作" width="160">
      <template #default>
        <el-button type="text" size="small" @click="showContent"
        >查看详细内容</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script scoped>
import { ElMessageBox, ElMessage } from 'element-plus'
export default {
  data() {
    return {
      clicked: true,
      nid:'',
      ruleForm: {
        subject: '',
        feedbackType: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        feedbackDetail: '',
      },
      tableData: [

      ],
    }
  },
  methods: {
    createNotice() {
      this.$router.push("/releaseNotice")

    },
    getNoticeList() {
      this.clicked=false
      //window.alert(sid)
      this.$axios
          .get('/notice/find', {

          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            //window.alert(resp.data.length)
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                time: '',
                subject: '',
                teacherName: '',
                content: '',
              },)

              this.tableData[resp.data.length-1-i].time=resp.data[i].time
              this.tableData[resp.data.length-1-i].subject=resp.data[i].subject
              this.tableData[resp.data.length-1-i].teacherName=resp.data[i].teacherName
              this.tableData[resp.data.length-1-i].content=resp.data[i].content
            }
          })
          .catch(failResponse => {

          })
    },
    refreshNoticeList() {
      this.clicked=false
      this.tableData.dispose()
      this.$axios
          .get('/notice/find', {

          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            //window.alert(resp.data.length)
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                time: '',
                subject: '',
                teacherName: '',
                content: '',
              },)

              this.tableData[resp.data.length-1-i].time=resp.data[i].time
              this.tableData[resp.data.length-1-i].subject=resp.data[i].subject
              this.tableData[resp.data.length-1-i].teacherName=resp.data[i].teacherName
              this.tableData[resp.data.length-1-i].content=resp.data[i].content
            }
          })
          .catch(failResponse => {

          })
    },

    showContent() {

      ElMessageBox.confirm(
          'proxy will permanently delete the file. Continue?',
          'Warning',
          {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
          }
      )
          .then(() => {
            ElMessage({
              type: 'success',
              message: 'Delete completed',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Delete canceled',
            })
          })
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