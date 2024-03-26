<template>
    <div class="login-box">
        <div class="login-panel">
            <div class="title">
                <img src="../../assets/logo.png" alt="">
                <h1>CloudMind 管理面板</h1>
            </div>
            <div class="form-box">
                <el-form
                    ref="ruleFormRef"
                    style="max-width: 600px"
                    :model="ruleForm"
                    status-icon
                    :rules="rules"
                    label-width="auto"
                    class="demo-ruleForm"
                >
                    <el-form-item prop="pass">
                        <el-input 
                            v-model="ruleForm.pass" 
                            type="email" 
                            autocomplete="off" 
                            prefix-icon="User"
                            placeholder="请输入邮箱"
                        />
                    </el-form-item>
                    <el-form-item prop="checkPass">
                        <el-input
                            v-model="ruleForm.checkPass"
                            type="password"
                            autocomplete="off"
                            prefix-icon="Lock"
                            placeholder="请输入密码"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-checkbox v-model="autoLogin" label="自动登录" size="middle" />
                        <span>忘记密码</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button 
                            type="primary" 
                            @click="submitForm(ruleFormRef)"
                        >登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const autoLogin = ref(true)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  pass: '',
  checkPass: '',
})

const validatePass = (rule: any, value: any, callback: any) => {  
  if (value === '') {
    callback(new Error('请输入账号'))
  } 
  else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } 
  else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } 
  else {
    callback()
  }
}

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<style scoped lang="css">
.login-box {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login-panel {
        .title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
    
            img {
                transform: scale(0.8);
                margin-right: 10px;
            }
    
            h1 {
                font-size: 24px;
                color: #333;
            }
        }

        .form-box {
            padding-left: 10px;

            span {
                position: absolute;
                right: 0;
                color: #409eff;
            }

            .el-button {
                width: 100%;
            }
        }
    }
}
</style>