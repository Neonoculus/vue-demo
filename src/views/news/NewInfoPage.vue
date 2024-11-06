<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, shallowRef, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

const newsInfo = ref({
  title: '很正常。因为人有冲天之志，非运不能自通。',
  authName: '很乆',
  authAvatar: require('@/assets/gfmn.png'),
  createTime: '2024-10-31',
  content: 'hfshfshfhskslajfkljaskfhjkashfk',
  commentsNum: 10
})

const comments = ref([
  {
    id: 1,
    authName: '很乆',
    content: '哎u噶士大夫乖哈岁的后i啊是u打开零售i对方雅思u发hi i啊还是客户埃里克森较好的看了哈说客家话艰苦的卢卡斯就打开了建行卡九十六黄金复活节卡刷卡积分哈数据库恢复吉安市ask陆军防空拦截哈萨克就很烦爱上了复活节卡设计开发卡机是否考虑结婚克拉斯',
    time: '2024-10-31',
    authAvatar: require('@/assets/gfmn.png')
  },
  {
    id: 2,
    authName: '很乆',
    content: '哎u噶士大夫乖哈岁的后i啊是u打开零售i对方雅思u发hi i啊还是客户埃里克森较好的看了哈说客家话艰苦的卢卡斯就打开了建行卡九十六黄金',
    time: '2024-10-31',
    authAvatar: require('@/assets/gfmn.png')
  },
  {
    id: 3,
    authName: '很乆',
    content: '哎u噶士大夫乖哈岁的后i啊是u打开零售i对方雅思u发hi i啊还是客户埃里克森较好的看了哈说客家话艰苦的卢卡斯就打开了建行卡九十六黄金',
    time: '2024-10-31',
    authAvatar: require('@/assets/gfmn.png')
  }
])

const user = ref({
  id: 1,
  nickname: '很乆',
  avatar: require('@/assets/gfmn.png')
})

const commentNum = ref(false)

const changeCommentNum = () => {
  if (commentNum.value === true) {
    commentNum.value = false
  } else {
    commentNum.value = true
  }
}

/**
 * 富文本
 */
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML

// 模拟 ajax 异步获取内容

const toolbarKeys = [
  'emotion',
  'uploadImage'
]
const toolbarConfig = { toolbarKeys }
const editorConfig = { placeholder: '请输入内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor) {
    editor.destroy()
  }
})

const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>

<template>
    <div class="index">
        <div class="center">
            <div class="text">
                <el-card>
                    <div>
                        <el-text style="font-size: larger;font-weight: bold;">{{ newsInfo.title }}</el-text>
                    </div>
                    <div style="margin-top: 30px;">
                        <el-image :src="newsInfo.authAvatar" class="avatar"></el-image>
                        <el-text style="font-size: 24px;position: absolute;left: 5vw;top: 11.5vh">{{ newsInfo.authName }}</el-text>
                    </div>
                    <div style="margin-top: 10px;">
                        <el-text>{{ newsInfo.createTime }}</el-text>
                    </div>
                </el-card>
                <el-card style="min-height: 60vh;">
                    <el-text>{{ newsInfo.content }}</el-text>
                </el-card>
                <el-card>
                    <el-button @click="changeCommentNum">
                        <el-icon><ChatRound /></el-icon>
                        <el-text v-if="commentNum === false">评论{{ newsInfo.commentsNum }}</el-text>
                        <el-text v-if="commentNum === true">收起评论</el-text>
                    </el-button>
                    <el-button>
                        <el-icon>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" width="48px"
                                height="48px">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg></el-icon>点赞
                    </el-button>
                    <el-button>返回</el-button>
                </el-card>
            </div>
            <div class="foot" v-if="commentNum === true">
                <el-card>
                    <div>
                        <el-image :src="user.avatar" class="avatar"></el-image>
                        <el-text style="font-size: large;position: absolute;left: 5.5vw;margin-top: 2vh;">{{ user.nickname }}</el-text>
                        <Toolbar
                        style="border-bottom: 1px solid #ccc"
                        :editor="editorRef"
                        :defaultConfig="toolbarConfig"
                        :mode="mode"
                      />
                      <Editor
                        style="min-height: 50px; width: 68vw; overflow-y: hidden;border: 1px solid black;"
                        :defaultConfig="editorConfig"
                        :mode="mode"
                        @onCreated="handleCreated"
                      />
                      <el-button type="primary" plain style="margin-top: 5px;margin-left: 62vw;">发布</el-button>
                    </div>
                    <template #header>
                        <div class="card-header">
                            <span>评论</span>
                        </div>
                    </template>
                    <el-card v-for="comment in comments" :key="comment.id" style="margin-top: 5px;">
                        <div style="margin-bottom: 5px;">
                            <el-image :src="comment.authAvatar" class="avatar"></el-image>
                            <el-text style="font-size: large;position: absolute;left: 7vw;margin-top: 2vh;">{{ comment.authName }}</el-text>
                        </div>
                        <div>
                            <el-text>{{ comment.content }}</el-text>
                        </div>
                        <div style="margin-top: 5px;">
                            <el-text style="position: relative;top: 4vh"> {{ comment.time }}</el-text>
                            <el-button type="primary" plain style="margin-left: 60vw;">回复</el-button>
                        </div>
                    </el-card>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.index {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(243, 244, 246);
    position: relative;
    top: 0;
}
.center{
    width: 95vw;
    min-height: 100vh;
    position: relative;
    left: 2.5vw;
}

.text{
    width: 71vw;
    min-height: 70vh;
    background-color: white;
    position: relative;
    left: 14.5vw;
}

.foot{
    margin-top: 5px;
    width: 71vw;
    min-height: 70vh;
    background-color: white;
    position: relative;
    left: 14.5vw;
}

.avatar{
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    overflow: hidden; /* 隐藏溢出部分 */
}
</style>
