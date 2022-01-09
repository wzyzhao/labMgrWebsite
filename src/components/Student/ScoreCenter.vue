<template>

  <el-row :gutter="20">
    <el-col span="8">
      <el-input
          v-model="searchReportId"
          placeholder="请输入实验报告单编号"
          :prefix-icon="Search"

      />
    </el-col>
    <el-col span="8">
      <el-button @click="jumpToTargetReport">搜索</el-button>
    </el-col>
    <el-col span="8">
      <el-button style="position: relative;left: 1100px" v-if="this.clicked===true" @click="getReportList">获取实验报告列表</el-button>
      <el-button style="position: relative;left: 1100px" v-if="this.clicked===false" @click="refreshReportList">刷新实验报告列表</el-button>
    </el-col>
  </el-row>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="reportId" label="报告编号" width="190" />
    <el-table-column prop="reportName" label="报告名称" width="220" />
    <el-table-column prop="completionState" label="完成状态" width="120" />
    <el-table-column prop="address" label="实验地址" width="200" />
    <el-table-column prop="teacherId" label="批改教师编号" width="190" />
    <el-table-column prop="reportScore" label="最终成绩" width="120" />
    <el-table-column fixed="right" label="操作" width="350">
      <template #default>
        <el-button size="small" type="info" round @click="handleClick">查看详细成绩</el-button>
        <el-button size="small" type="primary" round>下载报告</el-button>
        <el-button size="small" type="success" round>查看答案</el-button>
      </template>
    </el-table-column>
  </el-table>
  <br/>
  <br/>
  <br/>

  <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
  >
  </el-pagination>

</template>

<script scope>
export default {
  data() {
    return {
      clicked:true,
      tableData: [
      ],
      searchReportId:'',
    }
  },
  methods: {
    handleClick() {
      console.log('click')
    },
    jumpToTargetReport() {
      window.alert(this.searchReportId)
      this.$axios
          .get('/report/findByReportId/'+this.searchReportId.toString(), {

          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
          })
          .catch(failResponse => {

          })
    },
    getReportList() {
      let sid=localStorage.getItem('studentId')
      this.clicked=false
      //window.alert(sid)
      this.$axios
          .get('/report/findAllByStudentId/'+sid.toString(), {

          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            //window.alert(resp.data.length)
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                reportId: '',
                reportName: '软件规模度量实验',
                completionState: '完成',
                address: '济事楼001',
                teacherId: '',
                reportScore: '',
                tag: 'Office',
              },)
              this.tableData[resp.data.length-1-i].reportId=resp.data[i].reportId
              if (resp.data[i].reportScore==null) {
                this.tableData[resp.data.length-1-i].reportScore='未批阅'
                this.tableData[resp.data.length-1-i].teacherId='暂无'
              }
              else {
                this.tableData[resp.data.length-1-i].reportScore=resp.data[i].reportScore
                this.tableData[resp.data.length-1-i].teacherId=resp.data[i].teacherId
              }
            }
          })
          .catch(failResponse => {

          })
    },
    refreshReportList() {
      let sid=localStorage.getItem('studentId')
      this.clicked=false
      //window.alert(sid)
      this.$axios
          .get('/report/findAllByStudentId/'+sid.toString(), {

          })
          .then(resp => {
            //window.alert(resp.data.length)
            console.log(resp)
            console.log(resp.data)
            //window.alert(resp.data.length)
            this.tableData.dispose()
            for (let i=resp.data.length-1;i>=0;i--) {
              this.tableData.push({
                reportId: '',
                reportName: '软件规模度量实验',
                completionState: '完成',
                address: '济事楼001',
                teacherId: '',
                reportScore: '',
                tag: 'Office',
              },)
              this.tableData[resp.data.length-1-i].reportId=resp.data[i].reportId
              if (resp.data[i].reportScore==null) {
                this.tableData[resp.data.length-1-i].reportScore='未批阅'
                this.tableData[resp.data.length-1-i].teacherId='暂无'
              }
              else {
                this.tableData[resp.data.length-1-i].reportScore=resp.data[i].reportScore
                this.tableData[resp.data.length-1-i].teacherId=resp.data[i].teacherId
              }
            }
          })
          .catch(failResponse => {

          })
    },
  },
}
</script>

<style scoped>
html, body
{
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
.etitle{
  color:black;
  font-weight:bold;
  font-size:20px;
  font-family: "Times New Roman", Times, serif;
  position: relative;
  left:20px
}
.etable{
  width: 100% ;
  position:relative;
  left:30px;
}
</style>