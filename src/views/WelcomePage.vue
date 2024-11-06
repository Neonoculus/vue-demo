<script setup>
</script>

<template>
    <div style="width: 100vw;height: 100vh;overflow: hidden;">
        <div style="width: 100vw;height: 100vh;">
            <el-image style="width: 100% ;height: 100%;" fit="cover" :src="require('@/assets/welt.jpg')" class="back-image"/>
        </div>

        <div class="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.page{
    width: 417px;
    height: 80vh;
    position: absolute;
    bottom: 10vh;
    left: 40vw;
    background-color:rgba(238, 236, 211, 0.7);
    /* text-shadow: 0 0 10px black; */
}
</style>
