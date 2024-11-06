<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const login = () => {
  router.push('/')
}

const registerForm = ref({
  username: '',
  password: '',
  re_password: ''
})

// 校验密码
const checkRepassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再此确认密码'))
  } else if (value !== registerForm.value.password) {
    callback(new Error('两次密码不一致，请确认密码'))
  } else {
    callback()
  }
}
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
  re_password: [
    { validator: checkRepassword, trigger: 'blur' }
  ]
}
</script>

<template>
    <div>
        <div style="text-align: center;margin-top: 30px;">
            <div style="font-size: 30px;color: black;font-weight: bold;">注册</div>
            <div>请先输入基本信息进行用户注册</div>
        </div>
        <div style="margin-top: 50px;position: absolute;left: 15%;">
                <el-form :module="registerForm" :ref="registerForm" :rules="rules">
                    <el-form-item >
                        <el-input v-model="registerForm.username" maxlength="10" placeholder="请输入用户名" type="text" style="width: 300px;">
                            <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item porp="password">
                        <el-input v-model="registerForm.password" maxlength="10" placeholder="请输入密码" type="password" style="width: 300px; margin-top: 10px;">
                            <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item porp="re_password">
                        <el-input v-model="registerForm.re_password" maxlength="10" placeholder="请再次确认密码" type="password" style="width: 300px; margin-top: 10px;">
                            <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item style="position: relative;left: 25px;">
                        <el-button style="width: 300px;margin-top: 80px;position: absolute; left: -24px;" type="success" round >注册</el-button>
                    </el-form-item>
                </el-form>
                <div style="position: absolute;bottom: -120px;left: 80px;">
                    <el-link @click="login" target="_black" type="warning" style="font-size: 16px;">已有账号？立即登录</el-link>
                </div>
            </div>
    </div>
</template>

<style scoped>
</style>
