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
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button" @click="jumpToReportOne">填写报告</el-button>
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
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">填写报告</el-button>
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
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">填写报告</el-button>
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
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">填写报告</el-button>
        </div>
      </div>
    </el-card>
    </el-col>


  </el-row>

</template>

<script scoped>
import { defineComponent, ref } from 'vue'

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
    jumpToReportOne() {
      this.$router.push("/reportOne");
    }
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

