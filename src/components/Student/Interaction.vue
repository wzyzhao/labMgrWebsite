<template>
  <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
  >
    <el-form-item label="反馈主题" prop="title">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>

    <el-form-item label="反馈类型" prop="feedbackType">
      <el-select position="left" v-model="ruleForm.feedbackType" placeholder="请选择反馈类型">
        <el-option label="实验改进" value="1"></el-option>
        <el-option label="成绩复合" value="2"></el-option>
        <el-option label="设备故障申报" value="3"></el-option>
        <el-option label="问题咨询" value="4"></el-option>
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
      <el-col class="line" :span="2">-</el-col>
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

    <el-form-item label="发送对象" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="责任教师" name="type"></el-checkbox>
        <el-checkbox label="教师" name="type"></el-checkbox>
        <el-checkbox label="助教" name="type"></el-checkbox>
        <el-checkbox label="公开" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="反馈详情" prop="feedbackDetail">
      <el-input v-model="ruleForm.feedbackDetail" type="textarea"></el-input>
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
        feedbackType: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        feedbackDetail: '',
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
        feedbackType: [
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
            message: 'Please pick a date',
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
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
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
        feedbackDetail: [
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