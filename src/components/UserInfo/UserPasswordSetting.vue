<template>
  <span>
    <el-breadcrumb separator-class="el-icon-arrow-right" style="position:relative;left:220px;bottom:730px">
        <el-breadcrumb-item :to="{ path: '/student' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userInfo' }">个人信息</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/userPassWordSetting' }">登录密码重置</el-breadcrumb-item>
    </el-breadcrumb>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" size="medium" style="position:relative;left:620px;right:230px;bottom:650px">
           <el-form-item label="旧密码" prop="oldPass">
            <el-input placeholder="请输入旧密码" style="width: 300px;position:relative;right:570px;" type="password" v-model="ruleForm.oldPass" autocomplete="off">></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pass">
            <el-input placeholder="请输入新密码" style="width: 300px;position:relative;right:570px;" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input placeholder="请再次输入密码" style="width: 300px;position:relative;right:570px;" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="position:relative;right:600px;" type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
            <el-button style="position:relative;right:600px;" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </span>
</template>
<script>
export default {
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
        checkPass: ''
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
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

