<template>
    <el-descriptions
        class="margin-top"
        title="用户个人信息"
        :column="3"
        border
    >
      <template #extra>
        <el-button type="primary" size="small" v-if="this.dataForm.showInput==false" @click="this.dataForm.showInput=true">编辑信息</el-button>
        <el-button type="primary" size="small" v-if="this.dataForm.showInput==true" @click="this.dataForm.showInput=false">退出编辑</el-button>
      </template>
      <el-descriptions-item align="center" width="100px">
        <template #label>
          <el-icon><user /></el-icon>
          姓名
        </template>
        jeremy
      </el-descriptions-item>
      <el-descriptions-item align="center" width="100px">
        <template #label>
          <el-icon><user /></el-icon>
          年级
        </template>
        大三
      </el-descriptions-item>
      <el-descriptions-item align="center" width="100px">
        <template #label>
          <el-icon><tickets /></el-icon>
          性别
        </template>
        男
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <el-icon><tickets /></el-icon>
          用户类别
        </template>
        <el-tag size="small">学生</el-tag>
      </el-descriptions-item>
      <el-descriptions-item align="center">
        <template #label>
          <el-icon><iphone /></el-icon>
          电话号码
        </template>
        <el-input v-if="dataForm.showInput==true" clearable v-model="dataForm.telephone" placeholder="请输入电话号码">
          <template #prepend>+86</template>
        </el-input>
      </el-descriptions-item>
    </el-descriptions>
  <el-descriptions
      :column="2"
      border
  >
    <el-descriptions-item align="center" width="213px">
      <template #label>
        <el-icon><location /></el-icon>
        常用地址
      </template>
    </el-descriptions-item>
  </el-descriptions>
  <el-descriptions
      direction="vertical"
      :column="3"
      border
  >
    <el-descriptions-item icon="position" align="center">
      <template #label>
        <el-icon><tickets /></el-icon>
        个人简介
      </template>
      <el-input
          v-if="dataForm.showInput==true"
          v-model="dataForm.personalProfile"
          maxlength="200"
          placeholder="请输入个人简介，不超过200字"
          show-word-limit
          type="textarea"
          rows=10
      />
    </el-descriptions-item>
  </el-descriptions>
  <el-form
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
      style="position: relative;right:80px;top:30px"
  >
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')"
      >提交
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script scoped>
import {User, Iphone, Location, Tickets} from '@element-plus/icons'
export default {
  components:{User, Iphone, Location, Tickets},
  data() {
    return {
      dataForm:{
        showInput:false,
        telephone:'',
        personalProfile:''
      }
    }
  },
  methods: {
  submitForm() {

    },
  },
}
</script>

<style scoped>

</style>
