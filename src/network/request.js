import axios from 'axios'
import Qs from 'qs'

export const request = (config) => {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    // 2.axios拦截器

    // 1.请求拦截
    instance.interceptors.request.use(config => {
        return config;
    },err => {
        console.log(err);
    });

    // 2.响应拦截
    instance.interceptors.response.use(res=>{
        return res.data;
    },err=>{
        console.log(err);
    });

    return instance(config);
}