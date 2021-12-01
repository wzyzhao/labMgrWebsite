<template>

  <el-table :data="tableData" style="width: 100%">
    <el-table-column fixed prop="date" label="日期" width="150" />
    <el-table-column prop="reportName" label="报告名称" width="220" />
    <el-table-column prop="completionState" label="完成状态" width="120" />
    <el-table-column prop="address" label="实验地址" width="300" />
    <el-table-column prop="finalScore" label="最终成绩" width="120" />
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
      tableData: [
        {
          date: '2021-11-03',
          reportName: '独立方案评价指标计算',
          completionState: '完成',
          address: '济事楼000',
          finalScore: 'A+',
          tag: 'Home',
        },
        {
          date: '2021-11-02',
          reportName: '软件规模度量实验',
          completionState: '完成',
          address: '济事楼001',
          finalScore: 'A-',
          tag: 'Office',
        },
        {
          date: '2021-11-04',
          reportName: '财务分析实验',
          completionState: '完成',
          address: '济事楼002',
          finalScore: 'A',
          tag: 'Home',
        },
        {
          date: '2021-11-01',
          reportName: '风险分析实验',
          completionState: '完成',
          address: '济事楼003',
          finalScore: 'B+',
          tag: 'Office',
        },
      ],
    }
  },
  methods: {
    handleClick() {
      console.log('click')
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