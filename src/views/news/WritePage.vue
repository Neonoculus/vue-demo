<script setup>
import { ElMessage } from 'element-plus'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, shallowRef, onMounted, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useRouter } from 'vue-router'

const news = ref({
  title: '',
  image: require('@/assets/welt.jpg'),
  content: ''
})

const handleAvatarSuccess = (uploadFile) => {
  if (uploadFile.raw) {
    news.value.image = URL.createObjectURL(uploadFile.raw)
    console.log('jashhjdhg' + news.value.image)
  } else {
    console.error('上传的文件为空')
  }
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/png') {
    ElMessage.error('图片格式不对!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能超过2MB!')
    return false
  }
  return true
}

/**
 * 富文本
 */
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p>hello</p>')

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})

const toolbarConfig = {}
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

const router = useRouter()
const cancel = () => {
  router.push('/news/home')
}
</script>

<template>
    <div class="index">
        <div class="center">
            <div class="text">
                <el-form :moudle="news">
                    <el-form-item  prop="title">
                        <el-input v-model="news.title" style="height: 10vh;font-size: x-large;" placeholder="标题"></el-input>
                    </el-form-item>
                    <el-form-item prop="image" label="封面">
                        <el-upload
                          class="avatar-uploader"
                          action="#"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                            <el-image v-if="news.image" :src="news.image" style="width: 278;height: 178px;"/>
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item prop="content">
                      <Toolbar
                        style="border-bottom: 1px solid #ccc"
                        :editor="editorRef"
                        :defaultConfig="toolbarConfig"
                        :mode="mode"
                      />
                      <Editor
                        style="height: 500px; width: 70vw; overflow-y: hidden;"
                        v-model="valueHtml"
                        :defaultConfig="editorConfig"
                        :mode="mode"
                        @onCreated="handleCreated"
                      />
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" plain style="height: 30px;width: 5vw;margin-left: 27vw;">提交</el-button>
                      <el-button type="success" plain style="height: 30px;width: 5vw;">草稿</el-button>
                      <el-button type="danger" plain style="height: 30px;width: 5vw;" @click="cancel">取消</el-button>
                    </el-form-item>
                </el-form>
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
  width: 278px;
  height: 178px;
  text-align: center;
}
</style>
