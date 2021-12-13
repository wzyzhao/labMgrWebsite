<template>
  <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
  >
    <el-form-item label="公告主题" prop="title">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="公告类型" prop="noticeType">
      <el-select position="left" v-model="ruleForm.noticeType" placeholder="请选择公告类型">
        <el-option label="实验发布" value="1"></el-option>
        <el-option label="日程提醒" value="2"></el-option>
        <el-option label="事务通知" value="3"></el-option>
        <el-option label="其他" value="4"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="时间选择" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
              v-model="ruleForm.date1"
              type="date"
              placeholder="日期"
              style="width: 100%"
          ></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col class="line" :span="5">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
              v-model="ruleForm.date2"
              placeholder="时间"
              style="width: 100%"
          ></el-time-picker>
        </el-form-item>
      </el-col>
    </el-form-item>

    <el-form-item label="选择" prop="delivery">
      <el-switch v-model="ruleForm.delivery" active-color="#13ce66"></el-switch>
    </el-form-item>



    <el-form-item label="公告内容" prop="noticeDetail">
      <el-input v-model="ruleForm.noticeDetail" :rows="5" type="textarea"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
      >提交</el-button
      >
      <el-button @click="resetForm('ruleForm')">取消</el-button>
    </el-form-item>

  </el-form>
</template>

<script scope>
export default {
  data() {
    return {
      ruleForm: {
        title: '',
        noticeType: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        noticeDetail: '',
      },
      rules: {
        title: [
          {
            required: true,
            message: '请输入主题',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur',
          },
        ],
        noticeType: [
          {
            required: true,
            message: '请选择反馈的类别',
            trigger: 'change',
          },
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change',
          },
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
          },
        ],
        resource: [
          {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
          },
        ],
        noticeDetail: [
          {
            required: true,
            message: '请输入您的反馈',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      /*
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
       */
    },
    resetForm(formName) {
      //this.$refs[formName].resetFields()
    },
  },
}
</script>

<style scoped>

</style>