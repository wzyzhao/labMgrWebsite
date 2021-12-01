<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" size="medium" style="position: relative;left:400px;top:50px">
    <el-form-item label="旧密码" prop="oldPass">
      <el-input placeholder="请输入旧密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.oldPass" autocomplete="off">></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="pass">
      <el-input placeholder="请输入新密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input placeholder="请再次输入密码" style="width: 300px;right:450px" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button style="position:relative;right:450px;" type="primary" @click="submitForm('ruleForm');open1();open2()">确认修改</el-button>
      <el-button style="position:relative;right:450px;" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElNotification } from 'element-plus'

export default{
  data() {
    var checkOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('旧密码不能为空'));
      }
      else callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldPass: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        oldPass: [
          { validator: checkOldPass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.modification=true;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open1(){
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
      })
    },
    open2(){
      ElNotification({
        title: 'Error',
        message: 'This is an error message',
        type: 'error',
      })
    }
  }
}
</script>

