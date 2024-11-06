<script setup>
import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import '@/router/index'

// const router = useRouter()
const activeIndex = ref('/news/home')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const input = ref('')
// const login = () => {
//   router.push('/')
// }
const userInfo = ref({
  nickname: '很乆',
  image: require('@/assets/welt.jpg')
})
</script>

<template>
    <div style="display: flex;justify-content: center;;background-color: rgba(243, 244, 246);">
        <div class="index">
            <div class="top-menu">
                <el-menu class="el-menu-demo" :default-active="activeIndex" mode="horizontal" :ellipsis="false"
                    @select="handleSelect" style="height: 8vh;">
                    <el-menu-item>
                        <img style="width: 60px;height: 6vh;" src="../../assets/logo.jpg" />
                        论坛
                    </el-menu-item>
                    <el-menu-item index="/news/home">
                        <router-link to="/news/home">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="/news/hot">
                        <router-link to="/news/hot">热点</router-link>
                    </el-menu-item>
                    <el-menu-item index="/news/love">
                        <router-link to="/news/love">关注</router-link>
                    </el-menu-item>
                    <el-menu-item >
                        <el-input v-model="input" style="width: 240px" size="large" placeholder="Please Input"
                            :suffix-icon="Search">
                        </el-input>
                        <el-button type="primary">搜索</el-button>
                    </el-menu-item>
                    <el-menu-item index="/news/history">
                        <router-link to="/news/history">历史</router-link>
                    </el-menu-item>
                    <!-- <el-menu-item index="">
                        <el-button type="primary" @click="login">登录/注册</el-button>
                    </el-menu-item> -->
                    <el-sub-menu>
                        <template #title>
                            <el-image class="avatar" :src="userInfo.image"></el-image>
                            <span>{{ userInfo.nickname }}</span>
                        </template>
                        <el-menu-item index="/user">
                            <router-link to="/user">个人信息管理</router-link>
                        </el-menu-item>
                        <el-menu-item index="/">
                            <router-link to="/">退出登录</router-link>
                        </el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </div>
            <div class="center">
               <router-view/>
            </div>
        </div>
    </div>
</template>

<style scoped>
.index {
    width: 95vw;
    display: flex;
    flex-direction: column; /* 垂直排列子元素 */
    justify-content: flex-start; /* 子元素从顶部开始排列 */
    align-items: center; /* 水平居中 */
    background-color: rgba(243, 244, 246);
}

.top-menu {
    width: 95vw;
    height: 8vh;
    position: absolute;
    top: 0;
}

.el-menu-demo.el-menu--horizontal>.el-menu-item:nth-child(5) {
    margin-right: auto;
}

.center {
    position: relative;
    background-color: white;
    width: 95vw;
    height: auto; /* 让中心区域的高度自动根据内容调整 */
    margin-top: 10vh; /* 增加上边距，用于与 top-menu 分开 */
}

.avatar{
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    overflow: hidden; /* 隐藏溢出部分 */
}
</style>
