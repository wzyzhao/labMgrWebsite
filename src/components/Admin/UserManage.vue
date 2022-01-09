<template>

  <el-button style="position: relative;right: 660px" v-if="this.clicked===true" @click="getReportList">查看用户列表</el-button>
  <el-button style="position: relative;right: 660px" v-if="this.clicked===false" @click="refreshReportList">刷新用户列表</el-button>
  <el-table :cell-class-name="tableCellClassName" @cell-click="markReport" :data="tableData" style="width: 100%">
    <el-table-column fixed prop="no" label="No" width="200" />
    <el-table-column prop="userId" label="用户编号" width="250" />
    <el-table-column prop="userName" label="用户姓名" width="350" />
    <el-table-column prop="state" label="用户状态" width="300" />

    <el-table-column fixed="right" label="操作" width="380">
      <template #default>
        <el-button size="small" type="primary" v-if="tableData" round @click="markReport">编辑用户</el-button>
        <el-button size="small" type="primary" v-if="tableData.state==='已批阅'" round @click="markReport">删除用户</el-button>
        <el-button size="small" type="info" round @click="handleClick">删除用户</el-button>
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
      clicked:true,
      tableData: [
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
      //window.alert(row.index)
      ElMessageBox.prompt('请输入要修改的值', '用户编号:'+this.tableData[row.index].userId.toString(), {

        confirmButtonText: '确认',
        cancelButtonText: '取消',

        inputErrorMessage: '无效的值',
      })
          .then(({ value }) => {
            //window.alert(this.tableData[row.index].userId.toString())
            this.$axios
                .post('/report/score', {
                  assistantId:'',
                  teacherId:'2952108',
                  userId:this.tableData[row.index].userId.toString(),
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
      this.clicked=false;
      this.$axios
          .get('/report/getOverview', {

          })
          .then(resp => {
            console.log(resp)

            for (let i=0;i<4;i++) {
              this.tableData.push({
                no: (i+1).toString(),
                userId: '',
                studentName: 'Chris',
                userName:'nomi'+i.toString(),
                teacherId:'',
                assistantId:'',
                state: '激活',
                reportScore: null,
                tag: 'Office',
              },)
              this.tableData[i].assistantId=resp.data[i].assistantId
              this.tableData[i].userId='195210'+i.toString()
              if (resp.data[i].reportScore==null){
                this.tableData[i].reportScore='NaN'
              }
              else{
                this.tableData[i].reportScore=resp.data[i].reportScore
              }
              this.tableData[i].teacherId=resp.data[i].teacherId

            }
          })
          .catch(failResponse => {

          })
    },
    refreshReportList(){
      this.tableData.dispose();
      this.$axios
          .get('/report/getOverview', {

          })
          .then(resp => {
            console.log(resp)

            for (let i=0;i<6;i++) {
              this.tableData.push({
                no: '独立方案评价指标计算实验',
                userId: '',
                studentName: 'Chris',
                userName:'',
                teacherId:'',
                assistantId:'',
                state: '已批阅',
                reportScore: null,
                tag: 'Office',
              },)
              this.tableData[i].assistantId=resp.data[i].assistantId
              this.tableData[i].userId='195210'+i.toString()
              if (resp.data[i].reportScore==null){
                this.tableData[i].reportScore='NaN'
              }
              else{
                this.tableData[i].reportScore=resp.data[i].reportScore
              }
              this.tableData[i].userName='nomi'+i.toString()
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