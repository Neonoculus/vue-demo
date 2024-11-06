<script setup>
import { ref } from 'vue'
const userInfo = ref({
  nickname: '很乆',
  image: require('@/assets/welt.jpg'),
  sex: 1,
  phone: 17778595462,
  email: '3391659834@qq.com'
})
const tableData = ref([
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  },
  {
    title: '爱神的箭',
    content: '撒可见度发挥会计师大后方可还是雕刻技法',
    static: '审核中',
    update_time: '2024-09-10 17:36'
  }
])
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
        <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="标题" width="180" />
            <el-table-column prop="content" label="内容简介" />
            <el-table-column prop="static" label="状态" width="150" />
            <el-table-column prop="update_time" label="修改时间" width="180" />
            <el-table-column label="操作" width="180">
                <el-button><el-icon>
                        <Delete />
                    </el-icon></el-button>
                <el-button><el-icon>
                        <Edit />
                    </el-icon></el-button>
            </el-table-column>
        </el-table>
        <div class="example-pagination-block">
            <div class="example-demonstration"></div>
            <el-pagination layout="prev, pager, next" :total="100" />
        </div>
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
</style>
