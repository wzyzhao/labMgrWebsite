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
      <el-button style="position: relative;left: 1100px;top:10px" v-if="this.clicked===true" @click="getReportList">获取实验报告列表</el-button>
      <el-button style="position: relative;left: 1100px;top:10px" v-if="this.clicked===false" @click="refreshReportList">刷新实验报告列表</el-button>
    </el-col>
  </el-row>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="reportId" label="报告编号" width="190" />
    <el-table-column prop="reportName" label="报告名称" width="220" />
    <el-table-column prop="completionState" label="完成状态" width="120" />
    <el-table-column prop="address" label="实验地址" width="200" />
    <el-table-column prop="teacherId" label="批改教师编号" width="190" />
    <el-table-column prop="reportScore" label="最终成绩" width="120" />
    <el-table-column fixed="right" label="" width="350">
      <template #default>

      </template>
    </el-table-column>
  </el-table>
  <br/>
  <br/>
  <br/>

  <el-button @click="jumpToReportOne">新建报告</el-button>

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
import axios from "axios";

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
      //window.alert(this.searchReportId)
      this.$axios
          .post('/report/findByReportId/'+this.searchReportId.toString(), {
            reportId:this.searchReportId.toString(),
          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            this.$router.push('/reportOne')
          })
          .catch(failResponse => {

          })
    },
    getReportList() {
      this.clicked=false
      let sid=localStorage.getItem('studentId')
      this.$axios
          .get('/report/findAllByStudentId/'+'1952108', {
            params:{
              studentId:'1952108',
            }
          })
          .then(resp => {
            //window.alert(resp.data.length)
            console.log(resp)
            console.log(resp.data)
            //console.log(resp.data)

            for (let i=0;i<resp.data.length;i++) {
              this.tableData.push({
                reportId: '',
                reportName: '独立方案评价指标计算实验',
                completionState: '完成',
                address: '济事楼0'+i.toString(),
                teacherId: '',
                reportScore: null,
                tag: 'Home',
              },)
              this.tableData[i].assistantId=resp.data[i].assistantId
              this.tableData[i].reportId=resp.data[i].reportId
              if (resp.data[i].reportScore==null){
                this.tableData[i].reportScore='未批改'
                this.tableData[i].teacherId='/'
              }
              else{
                this.tableData[i].reportScore=resp.data[i].reportScore
                this.tableData[i].teacherId=resp.data[i].teacherId
              }
              this.tableData[i].studentId=resp.data[i].studentId


            }
          })
          .catch(failResponse => {

          })
    },
    refreshReportList() {
      this.clicked=false
      this.tableData.dispose()
      let sid=localStorage.getItem('studentId')
      this.$axios
          .get('/report/findAllByStudentId/'+'1952108', {
            params:{
              studentId:'1952108',
            }
          })
          .then(resp => {
            //window.alert(resp.data.length)
            console.log(resp)
            console.log(resp.data)
            //console.log(resp.data)

            for (let i=0;i<resp.data.length;i++) {
              this.tableData.push({
                reportId: '',
                reportName: '独立方案评价指标计算实验',
                completionState: '完成',
                address: '济事楼003',
                teacherId: '',
                reportScore: null,
                tag: 'Home',
              },)
              this.tableData[i].assistantId=resp.data[i].assistantId
              this.tableData[i].reportId=resp.data[i].reportId
              if (resp.data[i].reportScore==null){
                this.tableData[i].reportScore='NaN'
              }
              else{
                this.tableData[i].reportScore=resp.data[i].reportScore
              }
              this.tableData[i].studentId=resp.data[i].studentId
              this.tableData[i].teacherId=resp.data[i].teacherId

            }
          })
          .catch(failResponse => {

          })
    },
    jumpToReportOne() {
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
      let sid=localStorage.getItem('studentId')
      //sid='1952108'
      localStorage.setItem('reportId',sid+timestamp)
      //window.alert(timestamp)
      window.alert("reportId:"+sid+timestamp)
      axios
          .post('/report/generate', {

            reportId:sid+timestamp,
            studentId:sid,

          }).then(resp => {
        let result = resp.data;
        console.log(resp);
        console.log(result);
      }).catch(() => {
        this.$message({
          message: '提交失败，请重试',
          type: 'error'
        })
      })
      this.$router.push("/reportOne");
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