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

            <el-button size="small" type="primary">填写报告</el-button>

            <el-button size="small" type="info" @click="dialogVisible = true"
            >上传实验指导书</el-button
            >

            <el-dialog
                v-model="dialogVisible"
                title="上传实验指导书"
                width="30%"
                :before-close="handleClose"
            >
              <span>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      将文件拖至此 或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件格式应为pdf
      </div>
    </template>
  </el-upload>
              </span>
              <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button
        >
      </span>
              </template>
            </el-dialog>

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

            <el-button size="small" type="info" @click="dialogVisible = true"
            >上传实验指导书</el-button
            >

            <el-dialog
                v-model="dialogVisible"
                title="上传实验指导书"
                width="30%"
                :before-close="handleClose"
            >
              <span>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      将文件拖至此 或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件格式应为pdf
      </div>
    </template>
  </el-upload>
              </span>
              <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button
        >
      </span>
              </template>
            </el-dialog>

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

            <el-button size="small" type="info" @click="dialogVisible = true"
            >上传实验指导书</el-button
            >

            <el-dialog
                v-model="dialogVisible"
                title="上传实验指导书"
                width="30%"
                :before-close="handleClose"
            >
              <span>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      将文件拖至此 或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件格式应为pdf
      </div>
    </template>
  </el-upload>
              </span>
              <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button
        >
      </span>
              </template>
            </el-dialog>

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

            <el-button size="small" type="info" @click="dialogVisible = true"
            >上传实验指导书</el-button
            >

            <el-dialog
                v-model="dialogVisible"
                title="上传实验指导书"
                width="30%"
                :before-close="handleClose"
            >
              <span>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      将文件拖至此 或者 <em>点击上传</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        文件格式应为pdf
      </div>
    </template>
  </el-upload>
              </span>
              <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
        >确认</el-button
        >
      </span>
              </template>
            </el-dialog>

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
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    }
  },
  methods: {
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
