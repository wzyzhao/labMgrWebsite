<template>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="experimentName" label="实验名称" width="220" />
    <el-table-column prop="reportID" label="报告编号" width="200" />
    <el-table-column prop="studentName" label="学生姓名" width="160" />
    <el-table-column prop="state" label="状态" width="250" />
    <el-table-column prop="finalScore" label="最终成绩" width="120" />
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

<script scope>
export default {
  data() {
    return {
      tableData: [
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950000',
          studentName: 'Albert',
          state: '已批阅',
          finalScore: 'A+',
          tag: 'Home',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950001',
          studentName: 'Jeremy',
          state: '已批阅',
          finalScore: 'A-',
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950002',
          studentName: 'Mia',
          state: '未批阅',
          finalScore: 'A',
          tag: 'Home',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950003',
          studentName: 'Daniel',
          state: '已批阅',
          finalScore: 'B+',
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950004',
          studentName: 'Alex',
          state: '未批阅',
          finalScore: 'A',
          tag: 'Office',
        },
        {
          experimentName: '独立方案评价指标计算实验',
          reportID: '202112011950005',
          studentName: 'Chris',
          state: '已批阅',
          finalScore: 'A-',
          tag: 'Office',
        },
      ],
    }
  },
  methods: {
    handleClick() {
      console.log('click')
    },
    markReport() {
      this.$router.push('')
    },
    downloadReport() {

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