<template>

  <el-row gutter="20">

    <el-col span="8">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"

        />
        <div style="padding: 20px">
          <span>软件工程经济学</span>
          <el-result
              icon="info"
              title="请选择操作"
              sub-title="Please follow the instructions"
          >

          </el-result>
          <div class="bottom">

            <el-button size="small" type="primary" @click="checkCourse">查看课程</el-button>

            <el-button size="small" type="info" @click="closeCourse1('软件工程经济学')">开关课程</el-button>

          </div>
        </div>
      </el-card>
    </el-col>

    <el-col span="8">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"

        />
        <div style="padding: 20px">
          <span>软件工程</span>
          <el-result
              icon="info"
              title="请选择操作"
              sub-title="Please follow the instructions"
          >

          </el-result>
          <div class="bottom">

            <el-button size="small" type="primary" @click="checkCourse">查看课程</el-button>

            <el-button size="small" type="info" @click="closeCourse">开关课程</el-button>

          </div>
        </div>
      </el-card>
    </el-col>

    <el-col span="8">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"

        />
        <div style="padding: 20px">
          <span>计算机组成原理实验</span>
          <el-result
              icon="info"
              title="请选择操作"
              sub-title="Please follow the instructions"
          >
          </el-result>
          <div class="bottom">

            <el-button size="small" type="primary" @click="checkCourse">查看课程</el-button>

            <el-button size="small" type="info" @click="closeCourse">开关课程</el-button>

          </div>
        </div>
      </el-card>
    </el-col>




  </el-row>

</template>

<script scoped>
import { defineComponent, ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import axios from "axios";

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

    return {

    }
  },
  methods: {
    checkCourse(){
      this.$axios
          .get('/course/state/find',{
            params:{
              courseName:'软件工程经济学',
            }
          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            if (resp.data.CourseState===1){
              ElMessage('课程进行中')
            }
            else{
              ElMessage('课程已关闭')
            }

          })
          .catch(failResponse => {

          })
    },
    closeCourse () {
      ElMessageBox.confirm(
          '是否关闭该门课程?',
          'Warning',
          {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
          }
      )
          .then(() => {
            this.closeCourse1('软件工程经济学')
            ElMessage({
              type: 'success',
              message: '已关闭此课程',
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消关闭操作',
            })
          })
    },
    closeCourse1(cname){

      this.$axios
          .post('/course/state/update', {
            courseName:'软件工程经济学',
          })
          .then(resp => {
            console.log(resp)
            console.log(resp.data)
            ElMessage('课程状态已修改')
          })
          .catch(failResponse => {

          })
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
