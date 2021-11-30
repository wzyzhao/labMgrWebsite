<template>
      <el-breadcrumb separator-class="el-icon-arrow-right" style="position:relative;left:220px;bottom:670px">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/experimentCenter' }">实验中心</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="etitle">独立方案评价指标计算</div>
      <el-table
        :data="tableData"
        border
        class="etable">
        <el-table-column
          prop="number"
          label="序号"
          width="90"
          fixed>
        </el-table-column>
        <el-table-column
          prop="year"
          label="时点(年份)"
          width="180"
          fixed>
        </el-table-column>
        <el-table-column
          prop="0"
          label="0"
          width="90">
        </el-table-column>
        <el-table-column
          prop="1"
          label="1"
          width="90">
        </el-table-column>
        <el-table-column
          prop="2"
          label="2"
          width="90">
        </el-table-column>
        <el-table-column
          prop="3"
          label="3"
          width="90">
        </el-table-column>
        <el-table-column
          prop="4"
          label="4"
          width="90">
        </el-table-column>
        <el-table-column
          prop="5"
          label="5"
          width="90">
        </el-table-column>
        <el-table-column
          prop="6"
          label="6"
          width="90">
        </el-table-column>

        <el-table-column
          prop=""
          label="7"
          width="90">
        </el-table-column>

        <el-table-column
          prop=""
          label="8"
          width="90">
        </el-table-column>

        <el-table-column
          prop=""
          label="9"
          width="90">
        </el-table-column>
        <el-table-column
          prop=""
          label="10"
          width="90">
        </el-table-column>
      </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
        number: '1',
        year: '现金流入',
        0:'',
        1:560,
        2:570,
        3:738,
        4:913,
        5:1097,
        6:1289
       },
       {
        number: '1.1',
        year: '软件产品销售收入',
       },
       {
        number: '1.2',
        year: '软件运营维护收入',
       },
       {
        number: '',
        year: '',
       },
       {
         number: '2',
         year: '现金流出',
         0:1000,
         1:500,
         2:500,
         3:500,
         4:500,
         5:500,
         6:500
       },
        {
          number: '2.1',
          year: '业务运营费用',
        },
        {
          number: '',
          year: '',
        },
        {
          number: '指标',
          year: '净现值NPV(10%)',
        },
        {
          number: '',
          year: '内部收益率IRR',
        },
        {
          number: '',
          year: '动态投资回收期(年)',
        },
      ]
    }
  }
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
  bottom:650px;
  left:40px
}
.etable{
  width: 100% ;
  position:relative;
  left:230px;
  bottom:610px
}
</style>
