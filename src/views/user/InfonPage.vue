<script setup>
import { ref } from 'vue'
// import { ElMessage } from 'element-plus'
const accountInfoNum = ref(1)
const userInfo = ref({
  username: '123321',
  nickname: '很乆',
  password: '123456',
  image: require('@/assets/welt.jpg'),
  sex: 1,
  phone: '17778595462',
  email: '3391659834@qq.com'
})
const radio1 = ref(userInfo.value.sex)
// const handleAvatarSuccess = (
//   uploadFile
// ) => {
//   if (uploadFile.raw) {
//     userInfo.value.image = URL.createObjectURL(uploadFile.raw)
//   } else {
//     console.error('上传的文件为空')
//   }
// }

// const beforeAvatarUpload = (rawFile) => {
//   if (rawFile.type !== 'image/jpeg') {
//     ElMessage.error('Avatar picture must be JPG format!')
//     return false
//   } else if (rawFile.size / 1024 / 1024 > 2) {
//     ElMessage.error('Avatar picture size can not exceed 2MB!')
//     return false
//   }
//   return true
// }

const changeAccountInfoNum = () => {
  if (accountInfoNum.value === 1) {
    accountInfoNum.value = 2
  } else {
    accountInfoNum.value = 1
  }
  console.log(accountInfoNum.value)
}
</script>

<template>
    <el-card>
        <el-image :src="userInfo.image" style="width: 200px;height: 200px; border-radius: 50%;"></el-image>
        <div class="info">
            <!-- <el-divider style="border-top: 2px solid black;" /> -->
            <el-lable>
                <span style="font-size: 25px;font-weight: 700;position: absolute;top: 50px;">{{
                    userInfo.nickname }}</span>
            </el-lable>
            <el-lable style="position: absolute;top: 110px;left: 0px;" v-if="userInfo.sex == 1">
                <el-icon style="color: blue;font-size: 40px;">
                    <Male />
                </el-icon>
            </el-lable>
            <el-lable style="position: absolute;top: 110px;left: 0px;" v-if="userInfo.sex == 2">
                <el-icon style="color: red;font-size: 40px;">
                    <Female />
                </el-icon>
            </el-lable>
            <el-lable style="position: absolute;left: 230px;top: 61px;">
                <el-icon style="margin-right: 5px;">
                    <Iphone />
                </el-icon>
            </el-lable>
            <el-lable style="position: absolute;left: 250px;top: 60px;">
                <span style="font-size: 15px;">{{ userInfo.phone }}</span>
            </el-lable>
            <el-lable style="position: absolute;left: 230px;top: 126px;">
                <el-icon style="margin-right: 5px;">
                    <Message />
                </el-icon>
            </el-lable>
            <el-lable style="position: absolute;left: 250px;top: 125px;">
                <span style="font-size: 15px;">{{ userInfo.email }}</span>
            </el-lable>
        </div>
    </el-card>
    <div>
        <el-card class="account_info_card">
            <template #header>
                <div class="card-header">
                    <span>账号信息</span>
                </div>
            </template>
            <el-form :module="userInfo" v-if="accountInfoNum === 1">
                <!-- <el-upload
                    class="avatar-uploader"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="userInfo.image" :src="userInfo.image" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                </el-upload> -->
                <el-form-item label="账号" prop="username">
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="userInfo.nickname"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="userInfo.password" type="password"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 25vw;">
                    <el-button type="primary" @click="changeAccountInfoNum">修改信息</el-button>
                </el-form-item>
            </el-form>
            <el-form :module="userInfo" v-if="accountInfoNum === 2">
                <el-form-item label="账号" prop="username">
                    <el-input v-model="userInfo.username"></el-input>
                </el-form-item>
                <el-form-item label="昵称" prop="nickname">
                    <el-input v-model="userInfo.nickname"></el-input>
                </el-form-item>
                <el-form-item label="旧密码" prop="password">
                    <el-input v-model="userInfo.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="password">
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item label="再次确认密码" prop="password">
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item style="margin-left: 25vw;">
                    <el-button type="primary" @click="changeAccountInfoNum">完成修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="person_info_card">
            <template #header>
                <div class="card-header">
                    <span>个人信息</span>
                </div>
            </template>
            <el-form :module="userInfo">
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="userInfo.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="userInfo.email"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-radio-group v-model="radio1">
                        <el-radio :value="1" size="large">
                            <el-icon style="color: blue;"><Male /></el-icon>
                            男</el-radio>
                        <el-radio :value="2" size="large">
                            <el-icon style="color: red;"><Female /></el-icon>
                            女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item style="margin-left: 25vw;">
                    <el-button type="primary">完成修改</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped>
.info {
    width: 55vw;
    position: absolute;
    left: 300px;
    top: 70px;
}

.example-pagination-block {
    position: absolute;
    bottom: 0;
    left: 800px;
    .example-demonstration {
        margin-bottom: 16px;
    }
}

.account_info_card{
    width: 35vw;
    height: 65vh;
}

.person_info_card{
    width: 35vw;
    height: 65vh;
    position: absolute;
    right: 0;
    top: 246px;
}

.avatar-uploader .avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
