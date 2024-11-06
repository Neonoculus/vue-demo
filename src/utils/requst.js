import axios  from "axios";
import { useATokenStore } from "@/store/token";
import { ElMessage } from "element-plus";

const instance = axios.create({
    baseURL: '/api',
    timeout: 5000
})

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        //请求前回顾，添加token
        const tokenStore = useATokenStore()
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config
    },(err) => {
        //请求错误回调
        Promise.reject(err)
    }
)

import router from "@/router";
//响应拦截
instance.interceptors.response.use(
    result => {
        return result.data
    },(err) => {
        if(err.response.status === 401){
            ElMessage.error("请先登录")
            router.push('/')
        }else{
            alert('服务器异常')
        }
        return Promise.reject(err);//异步状态转化为失败状态
    }
)

export default instance