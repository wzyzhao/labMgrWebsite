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
      <el-button style="position: relative;left: 1100px;top:10px" @click="getReportList">刷新实验报告列表</el-button>
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
      tableData: [
        {
          reportId: '',
          reportName: '独立方案评价指标计算实验',
          completionState: '完成',
          address: '济事楼000',
          teacherId: '',
          reportScore: '',
          tag: 'Home',
        },
        {
          reportId: '2021-11-02',
          reportName: '软件规模度量实验',
          completionState: '完成',
          address: '济事楼001',
          teacherId: '',
          reportScore: '',
          tag: 'Office',
        },
        {
          reportId: '2021-11-04',
          reportName: '财务分析实验',
          completionState: '完成',
          address: '济事楼002',
          teacherId: '',
          reportScore: null,
          tag: 'Home',
        },
        {
          reportId: '2021-11-01',
          reportName: '风险分析实验',
          completionState: '完成',
          address: '济事楼003',
          teacherId: '',
          reportScore: null,
          tag: 'Office',
        },
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
      window.alert(sid)
      this.$axios
          .get('/report/findAllByStudentId/'+sid.toString(), {

          })
          .then(resp => {
            //window.alert(resp.data.length)
            console.log(resp)
            console.log(resp.data)
            console.log(111)
            //console.log(resp.data)

            for (let i=0;i<4;i++) {
              this.tableData[i].reportId=resp.data[i].reportId
              if (this.tableData[i].reportScore==null) {
                this.tableData[i].reportScore='未批阅'
              }
              else {
                this.tableData[i].reportScore=resp.data[i].reportScore
              }
              this.tableData[i].teacherId=resp.data[i].teacherId
            }
          })
          .catch(failResponse => {

          })
    },
    jumpToReportOne() {
      let date=new Date();
      let hou,min,sec
      hou=date.getHours().toString()
      min=date.getMinutes().toString()
      sec=date.getSeconds().toString()
      hou = hou.length < 2 ? '0' + hou : hou //格式化时 09
      min = min.length < 2 ? '0' + min : min //格式化分 09
      sec = sec.length < 2 ? '0' + sec : sec //格式化秒 09
      let timestamp=date.getFullYear().toString()+(date.getMonth()+1).toString()
          +date.getDate().toString()+hou+min+sec;
      let sid=localStorage.getItem('studentId')
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