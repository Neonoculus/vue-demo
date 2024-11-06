<script setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const loginForm = ref({
  username: '',
  password: '',
  remember: false
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

const router = useRouter()
const register = () => {
  router.push('/register')
}

const login = () => {
  router.push('/news')
}
</script>

<template>
        <div>
            <div style="text-align: center;margin-top: 30px;">
                <div style="font-size: 30px;color: black;font-weight: bold;">登录</div>
                <div>请先输入用户名和密码进行登录</div>
            </div>
            <div style="margin-top: 50px;position: absolute;left: 15%;">
                <el-form :model="loginForm" :ref="loginForm" :rules="rules">
                    <el-form-item lable="用户名" porp="username">
                        <el-input v-model="loginForm.username" maxlength="10" placeholder="请输入用户名" type="text" style="width: 300px;">
                            <template #prefix>
                            <el-icon><User /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item lable="密码" porp="password">
                        <el-input v-model="loginForm.password" maxlength="10" placeholder="请输入密码" type="password" style="width: 300px; margin-top: 30px;">
                            <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item porp="remember">
                        <el-checkbox v-model="loginForm.remember" label="记住我" />
                        <el-link style="margin-left: 175px;" href="" target="_blank">忘记密码</el-link>
                    </el-form-item>
                    <el-form-item style="position: relative;left: 25px;">
                        <el-button @click="login" style="width: 300px;margin-top: 45px;position: absolute; left: -24px;" type="success" round >登录</el-button>
                    </el-form-item>
                </el-form>
                <div style="position: absolute;bottom: -120px;left: 80px;">
                    <el-link @click="register"  target="_black" type="warning" style="font-size: 16px;">没有账号？立即注册</el-link>
                </div>
            </div>
        </div>
</template>

<style scoped>

</style>
