<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
    <div class="index">
        <el-menu default-active="2" class="left_menu" @open="handleOpen" @close="handleClose" router>
            <el-lable>
                <img style="width: 60px;height: 8vh;margin-left: 20px;" src="../../assets/logo.jpg" />
                <h1 style="position: absolute;left: 80px;top: -12px;">论坛</h1>
            </el-lable>
            <el-menu-item index="/user/info">
                <el-icon></el-icon>
                个人信息管理
            </el-menu-item>
            <el-menu-item index="/user/draft">
                <el-icon></el-icon>
                草稿箱
            </el-menu-item>
            <el-menu-item index="/user/published">
                <el-icon></el-icon>
                已发布
            </el-menu-item>
            <el-menu-item index="/user/love">
                <el-icon></el-icon>
                喜欢
            </el-menu-item>
            <el-menu-item index="/news/home">
                <el-icon></el-icon>
                返回首页
            </el-menu-item>
        </el-menu>
        <div class="center">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
.index {
    width: 100vw;
    height: 100vh;
    background-color: rgba(243, 244, 246);
}

.left_menu {
    width: 15vw;
    height: 100vh;
    position: relative;
    left: 5vw;
}

.center {
    width: 75vw;
    height: 99vh;
    position: absolute;
    top: 0vh;
    left: 20vw;
    background-color: white;
}

.avatar {
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    overflow: hidden;
    /* 隐藏溢出部分 */
}

.example-pagination-block {
    position: absolute;
    bottom: 0;
    left: 800px;
    .example-demonstration {
        margin-bottom: 16px;
    }
}
</style>
