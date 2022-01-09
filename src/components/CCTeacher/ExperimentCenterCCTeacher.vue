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

            <el-button size="small" type="primary">查看实验</el-button>

            <el-button size="small" type="info" @click="jumpToPDF"
            >上传实验指导书</el-button
            >

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

            <el-button size="small" type="primary">查看实验</el-button>

            <el-button size="small" type="info" @click="jumpToPDF"
            >上传实验指导书</el-button
            >



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

            <el-button size="small" type="primary">查看实验</el-button>

            <el-button size="small" type="info" @click="jumpToPDF"
            >上传实验指导书</el-button
            >



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

            <el-button size="small" type="primary">查看实验</el-button>

            <el-button size="small" type="info" @click="jumpToPDF"
            >上传实验指导书</el-button
            >
          </div>
        </div>
      </el-card>
    </el-col>


  </el-row>

</template>

<script scoped>
import { defineComponent, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
export default defineComponent({
  setup() {
    const currentDate = ref(new Date())
    const dialogVisible = ref(false)
    const handleClose = (done) => {
      ElMessageBox.confirm('是否放弃上传实验指导书?')
          .then(() => {
            done()
          })
          .catch(() => {
            // catch error
          })
    }
    return {
      currentDate,
      dialogVisible,
      handleClose,
    }
  },
  data(){
    //imgUrl:require('../../assets/img/bg/experimentBG.jpeg')
    return {

    }
  },
  methods: {
    jumpToPDF() {
      this.$router.push('/pdf')
    },
  },
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
