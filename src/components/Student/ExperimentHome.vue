<template>
  <el-row gutter="20">

    <el-col span="10">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src="../../assets/img/bg/experiment1BG.png"
            class="image"
        />
        <div style="padding: 20px">
          <span>独立方案评价指标实验</span>
          <div class="bottom">
            <el-button size="small" type="primary" @click="jumpToExperimentList">填写报告</el-button>
            <el-button size="small" type="info">下载实验指导书</el-button>
          </div>
        </div>
      </el-card>
    </el-col>

    <el-col span="10">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img
          src="../../assets/img/bg/experiment1BG.png"
          class="image"
      />
      <div style="padding: 20px">
        <span>软件规模度量实验</span>
        <div class="bottom">
          <el-button size="small" type="primary">填写报告</el-button>
          <el-button size="small" type="info">下载实验指导书</el-button>
        </div>
      </div>
    </el-card>
    </el-col>

    <el-col span="10">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img
          src="../../assets/img/bg/experiment1BG.png"
          class="image"
      />
      <div style="padding: 20px">
        <span>财务分析实验</span>
        <div class="bottom">
          <el-button size="small" type="primary">填写报告</el-button>
          <el-button size="small" type="info">下载实验指导书</el-button>
        </div>
      </div>
    </el-card>
    </el-col>

    <el-col span="10">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img
          src="../../assets/img/bg/experiment1BG.png"
          class="image"
      />
      <div style="padding: 20px">
        <span>风险分析实验</span>
        <div class="bottom">
          <el-button size="small" type="primary">填写报告</el-button>
          <el-button size="small" type="info">下载实验指导书</el-button>
        </div>
      </div>
    </el-card>
    </el-col>


  </el-row>

</template>

<script scoped>
import { defineComponent, ref } from 'vue'
import axios from "axios";
export default defineComponent({

  setup() {
    const currentDate = ref(new Date())

    return {
      currentDate,

    }
  },

  data() {

  },
  methods: {
    jumpToExperimentList() {
      this.$router.push('/experimentList')
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
  }
})
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 70%;
  display: block;
}
</style>

