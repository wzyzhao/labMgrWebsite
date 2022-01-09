<template>
  <el-button type="primary" style="position:relative; left: 800px" v-if="this.clicked===true" @click="getStudentList">查看学生列表</el-button>
  <el-button type="primary" style="position:relative; left: 800px" v-if="this.clicked===false" @click="refreshStudentList">刷新学生列表</el-button>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="studentId" label="学生学号" width="180" />
    <el-table-column prop="studentName" label="学生姓名" width="180" />
  </el-table>
</template>

<script scoped>

export default {
  data() {
    return {
      clicked: true,
      tableData: [

      ],
    }
  },
  methods: {
    getStudentList() {
      this.clicked=false
      this.$axios
          .get('/class/studentList', {
            params:{
              classId:'1',
            }
          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                studentId: '',
                studentName: '',
              },)

              this.tableData[resp.data.length-1-i].studentId=resp.data[i].studentId
              this.tableData[resp.data.length-1-i].studentName=resp.data[i].studentName
            }
          })
          .catch(failResponse => {

          })
    },
    refreshStudentList() {
      //window.alert(sid)
      this.clicked=false
      //this.tableData.dispose()
      this.$axios
          .get('/class/studentList', {
            params:{
              classId:'1',
            }
          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            this.tableData.dispose()
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                studentId: '',
                studentName: '',
              },)

              this.tableData[resp.data.length-1-i].studentId=resp.data[i].studentId
              this.tableData[resp.data.length-1-i].studentName=resp.data[i].studentName
            }
          })
          .catch(failResponse => {

          })
    },
  },
}
</script>

<style scoped>

</style>