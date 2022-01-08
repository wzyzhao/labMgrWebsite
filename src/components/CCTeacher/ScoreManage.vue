<template>

  <el-button style="position: relative;right: 660px" @click="getReportList">刷新成绩列表</el-button>
  <el-table :cell-class-name="tableCellClassName" @cell-click="markReport" :data="tableData" style="width: 100%">
    <el-table-column fixed prop="experimentName" label="实验名称" width="200" />
    <el-table-column prop="reportId" label="报告编号" width="200" />
    <el-table-column prop="studentId" label="学生学号" width="120" />
    <el-table-column prop="studentName" label="学生姓名" width="160" />
    <el-table-column prop="state" label="状态" width="250" />
    <el-table-column prop="reportScore" label="最终成绩" width="120" />
    <el-table-column fixed="right" label="操作" width="380">
      <template #default>
        <el-button size="small" type="primary" v-if="tableData" round @click="markReport">批阅报告</el-button>
        <el-button size="small" type="primary" v-if="tableData.state=='已批阅'" round @click="markReport">复核成绩</el-button>
        <el-button size="small" type="info" round @click="handleClick">查看详细成绩</el-button>
        <el-button size="small" round @click="downloadReport">下载报告</el-button>
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

<script scoped>
import ElMessage, {ElMessageBox} from "element-plus";

export default {
  data() {
    return {
      tableData: [
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Albert',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '已批阅',
          reportScore: null,
          tag: 'Home',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Jeremy',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '已批阅',
          reportScore: null,
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Mia',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '未批阅',
          reportScore: null,
          tag: 'Home',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Daniel',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '已批阅',
          reportScore: null,
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Alex',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '未批阅',
          reportScore: null,
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportId: '',
          studentName: 'Chris',
          studentId:'',
          teacherId:'',
          assistantId:'',
          state: '已批阅',
          reportScore: null,
          tag: 'Office',
        },
      ],
    }
  },
  methods: {
    handleClick() {
      console.log('click')
    },
    tableCellClassName({row, rowIndex}) {
      //注意这里是解构
      //利用单元格的 className 的回调方法，给行列索引赋值
      row.index = rowIndex;
    },
    markReport(row, cell, index) {
      window.alert(row.index)
      ElMessageBox.prompt('请输入您的评分', '报告编号:'+this.tableData[row.index].reportId.toString(), {

        confirmButtonText: '确认',
        cancelButtonText: '取消',

        inputErrorMessage: '无效的分数',
      })
          .then(({ value }) => {
            //window.alert(this.tableData[row.index].reportId.toString())
                this.$axios
                    .post('/report/score', {
                      assistantId:'11',
                      teacherId:'1',
                      reportId:this.tableData[row.index].reportId.toString(),
                      reportScore:value,
                    })
                    .then(resp => {
                      console.log(resp)

                    })
                    .catch(failResponse => {

                    })
            ElMessage({
              type: 'success',
              message: `Your email is:${value}`,
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Input canceled',
            })
          })
      this.$router.push('')
    },
    downloadReport() {

    },
    getReportList(){
      this.$axios
        .get('/report/getOverview', {

        })
        .then(resp => {
          console.log(resp)

          for (let i=0;i<6;i++) {
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