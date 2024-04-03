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
                  label-width="auto"
                  class="demo-ruleForm"
                >
                  <el-form-item 
                    prop="email"
                    :rules="[
                      {
                        required: true,
                        message: '请输入邮箱',
                        trigger: 'blur',
                      },
                      {
                        type: 'email',
                        message: '请输入正确的邮箱格式',
                        trigger: ['blur', 'change'],
                      },
                    ]"  
                  >
                    <el-input 
                        v-model="ruleForm.email" 
                        type="email" 
                        prefix-icon="User"
                        placeholder="请输入邮箱"
                    />
                  </el-form-item>
                  <el-form-item 
                    prop="password"
                    :rules="[
                      {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur',
                      },
                      {
                        min: 6,
                        max: 20,
                        message: '密码长度在 6 到 20 个字符',
                        trigger: 'blur',
                      },
                    ]"
                  >
                    <el-input
                      v-model="ruleForm.password"
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
import type { FormInstance } from 'element-plus'
import { post } from '@/utils/axios'

const autoLogin = ref(true)
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  email: '',
  password: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      post('/users/login', {
        email: ruleForm.email,
        password: ruleForm.password,
      })
      .then((res: any) => {
        if (res.success) {
          console.log('提交成功！')
        } else {
          console.log(res.msg)
        }
      })
    } else {
      console.log('提交失败！')
      return false
    }
  })
}
</script>

<style scoped lang="css">
.login-box {
    width: 100%;
    height: 100%;
    padding: 50px;
    background: rgb(240,240,240);
    background: linear-gradient(59deg, rgba(240,240,240,1) 0%, rgba(246,246,246,1) 31%, rgba(228,238,246,1) 59%, rgba(231,245,255,1) 74%, rgba(240,240,255,1) 89%, rgba(247,242,255,1) 98%, rgba(255,253,254,1) 100%, rgba(209,228,255,1) 100%);
    overflow-y: auto;
    display: flex;
    align-items: center;

    .login-panel {
      margin: auto;

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