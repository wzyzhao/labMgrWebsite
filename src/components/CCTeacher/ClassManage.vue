<template>

  <el-row gutter="20">

    <el-col span="8">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"

        />
        <div style="padding: 20px">
          <span>一班</span>
          <el-descriptions title="班级信息" :column="2" border>
            <el-descriptions-item
                label="班号"
                label-align="right"
                align="center"
                label-class-name="my-label"
                class-name="my-content"
                width="80px"
            >10001</el-descriptions-item
            >
            <el-descriptions-item label="在修人数" label-align="right" align="center"
            >66</el-descriptions-item
            >
            <el-descriptions-item label="教室" label-align="right" align="center"
            >济事楼000</el-descriptions-item
            >
            <el-descriptions-item label="备注" label-align="right" align="center">
              <el-tag size="small">ClassOne</el-tag>
            </el-descriptions-item>

          </el-descriptions>

          <div class="bottom">

            <el-button size="small" type="primary" @click="checkClass">查看班级</el-button>

            <el-button size="small" type="info" @click="addStudent">添加学生</el-button>


          </div>
        </div>
      </el-card>
    </el-col>

    <el-col span="10">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"
        />
        <div style="padding: 20px">
          <span>二班</span>
          <el-descriptions title="班级信息" :column="2" border>
            <el-descriptions-item
                label="班号"
                label-align="right"
                align="center"
                label-class-name="my-label"
                class-name="my-content"
                width="80px"
            >10002</el-descriptions-item
            >
            <el-descriptions-item label="在修人数" label-align="right" align="center"
            >77</el-descriptions-item
            >
            <el-descriptions-item label="教室" label-align="right" align="center"
            >济事楼010</el-descriptions-item
            >
            <el-descriptions-item label="备注" label-align="right" align="center">
              <el-tag size="small">ClassTwo</el-tag>
            </el-descriptions-item>

          </el-descriptions>

          <div class="bottom">

            <el-button size="small" type="primary">查看班级</el-button>
            <el-button size="small" type="info">添加学生</el-button>


          </div>
        </div>
      </el-card>
    </el-col>

    <el-col span="10">
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <img
            src=""
            class="image"
        />
        <div style="padding: 20px">
          <span>三班</span>
          <el-descriptions title="班级信息" :column="2" border>
            <el-descriptions-item
                label="班号"
                label-align="right"
                align="center"
                label-class-name="my-label"
                class-name="my-content"
                width="80px"
            >10003</el-descriptions-item
            >
            <el-descriptions-item label="在修人数" label-align="right" align="center"
            >88</el-descriptions-item
            >
            <el-descriptions-item label="教室" label-align="right" align="center"
            >济事楼100</el-descriptions-item
            >
            <el-descriptions-item label="备注" label-align="right" align="center">
              <el-tag size="small">ClassThree</el-tag>
            </el-descriptions-item>

          </el-descriptions>

          <div class="bottom">

            <el-button size="small" type="primary">填写报告</el-button>
            <el-button size="small" type="primary">添加学生</el-button>


          </div>
        </div>
      </el-card>
    </el-col>




  </el-row>

</template>

<script scoped>

import { defineComponent, ref } from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'

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
    checkClass(){
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
    jumpToClassOne() {
      this.$router.push()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
          `The limit is 3, you selected ${
              files.length
          } files this time, add up to ${files.length + fileList.length} totally`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`)
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
