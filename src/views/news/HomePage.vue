<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const image = ref({
  carouselItems: [
    { src: require('@/assets/welt.jpg') },
    { src: 'https://pic3.zhimg.com/v2-5fb13110e1de13d4c11e6e7f5b8026da_r.jpg' },
    { src: require('@/assets/welt.jpg') },
    { src: require('@/assets/mnbz.jpg') }
  ]
})
const newsInfo = ref([
  {
    title: '金铲铲之战',
    image: require('@/assets/welt.jpg'),
    text: '按时交付的哈数据恢复等哈手机号覅撒娇撒几号放寒假撒谎房价开始爱上尽快发货尽快恢复健康尽快发啥可加分环境开会ask记录安徽省附件客户你就看撒ask房间内看来三分局案说法库拉索尼JFK了ask龙卷风打开拉萨解放可是到了JFK老师的案说法健康洒家分厘卡伺服电机萨克利夫尽快升级到角度上考虑房价开始劳动纠纷士大夫昆仑山大家好看'
  },
  {
    title: '和平精英',
    image: require('@/assets/gfmn.png'),
    text: 'i搜集佛i圣诞节佛i速度及附近'
  },
  {
    title: '金铲铲之战',
    image: require('@/assets/mnbz.jpg'),
    text: '啊是第几哦撒娇覅还是对谁都'
  },
  {
    title: '和平精英',
    image: require('@/assets/gfmn.png'),
    text: 'i搜集佛i圣诞节佛i速度及附近'
  },
  {
    title: '金铲铲之战',
    image: require('@/assets/mnbz.jpg'),
    text: '啊是第几哦撒娇覅还是对谁都'
  }
])
const loading = ref(false)
setTimeout(() => {
  loading.value = false // 数据加载完成，设置loading为false
}, 2000) // 2秒后结束加载

const startWrite = () => {
  router.push('/writer')
}

const getNewsInfo = () => {
  router.push('/news/info')
}
</script>

<template>
    <div class="left">
        <el-carousel :interval="4000" type="card" height="250px" v-if="image.carouselItems.length">
            <el-carousel-item v-for="(item, index) in image.carouselItems" :key="index">
                <el-image :src="item.src" fit:cover />
            </el-carousel-item>
        </el-carousel>
        <div class="bottom">
            <div>
                <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" @select="handleSelect"
                    style="height: 8vh;" router>
                    <el-menu-item index="0">论坛</el-menu-item>
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">热点</el-menu-item>
                    <el-menu-item index="3">关注</el-menu-item>
                    <el-menu-item index="5">历史</el-menu-item>
                    <el-menu-item index="6">消息</el-menu-item>
                </el-menu>
            </div>
            <div class="left_center">
                <el-skeleton style="width: 100%;border: 1px solid black;" :count="newsInfo.length" :loading="loading">
                    <template #template>
                        <el-skeleton-item variant="text" style="width: 400px;height: 40px;margin-bottom: 10px;" />
                        <div style="display: flex; align-items: center;">
                            <el-skeleton-item variant="image" style="width: 240px; height: 240px;margin-right: 50px;" />
                            <el-skeleton-item variant="text" style="width: 400px;height: 240px;" />
                        </div>
                        <el-button>点赞</el-button>
                        <el-button>讨论</el-button>
                    </template>
                    <template #default>
                        <el-card v-for="news in newsInfo" :key="news.title">
                            <div style="margin-bottom: 10px;"><span style="font-size: 20px;font-weight: bolder; ">{{
                                    news.title }}</span></div>
                            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                                <img :src="news.image" alt="news image"
                                    style="width: 240px; height: auto;margin-right: 50px;" />
                                <div>
                                    <el-text line-clamp="4">{{ news.text }}</el-text>
                                </div>
                            </div>
                            <el-button>
                                <el-icon>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" width="48px"
                                        height="48px">
                                        <path
                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                    </svg></el-icon>点赞
                            </el-button>
                            <el-button>
                                <el-icon><ChatRound /></el-icon>讨论
                            </el-button>
                            <el-button type="primary" style="" @click="getNewsInfo">
                                阅读全文
                            </el-button>
                        </el-card>
                    </template>
                </el-skeleton>
            </div>
        </div>
    </div>
    <div class="right">
        <div>
            <el-icon>
                <UserFilled />
            </el-icon>
            创作中心
            <el-link href="" style="float: right;">草稿箱</el-link>
        </div>
        <div style="margin-top: 30px;">
            <el-card>
                涂涂写写
                <img src="../../assets/write.jpg" style="width:240px">
            </el-card>
            <el-button @click="startWrite" style="width: 18vw;height: 50px;margin-top: 10px;border: 1px solid #409eff;">
                <span style="color: #409eff;font-size: 15px;">开始创作</span>
            </el-button>
        </div>
        <el-divider border-style="double" />
        <div style="margin-top: 30px;">
            <el-icon>
                <UserFilled />
            </el-icon>
            关于我们
            <el-link href="" style="float: right;">草稿箱</el-link>
        </div>
        <div style="margin-top: 20px;">
            <span>
                《叶圣陶散文》为“名家经典珍藏”丛书之一，
                收录了叶圣陶先生的散文精品数十篇。这些作品内容丰富，
                题材各异，构思精巧，文笔精巧、语言幽默、内蕴深厚、风格恬淡，
                充分显示了叶圣陶先生的文学功底及丰富的人生阅历，
                从一个侧面反映了作者的思想感情及创作风格，
                非常值得一读。叶圣陶是20世纪中国一位杰出的作家、教育家和出版家，
                又是中国现代儿童文学创作的先行者。作为散文家，
                他早期和周作人、朱自清共同成为文学研究会散文创作的中坚，
                后来又成为开明派散文的代表，
                其散文被一九三五年出版的《中国新文学大系》选录的篇数仅次于周作人、鲁迅和朱自清。
            </span>
        </div>
    </div>
</template>

<style scoped>
.left {
    width: 75vw;
}

.bottom {
    width: 100%;
    padding: 5px;
}

.left_center {
    width: 60%;
    height: 100%;
    margin-left: 250px;
}

.right {
    width: 18vw;
    height: 110vh;
    margin-top: 10px;
    margin-left: 10px;
    position: sticky;
    left: 77.5vw;
    bottom: 0;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
