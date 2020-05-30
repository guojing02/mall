import axios from 'axios'

export function request(config){

    const instance = axios.create({
      baseURL : 'http://152.136.185.210:8000/api/n3',
    // baseURL : "http://123.207.32.32:8000",
    // baseURL : "http://106.54.54.237:8000",
    // baseURL: 'http://192.168.0.105:3000',
      timeout:5000
  })
  // instance.interceptors.request.use(config =>{
  //   return config
  // },err =>{
  //   // console.log(err);
  // })
  //响应拦截器
  instance.interceptors.response.use(res =>{
    return res.data
  },err =>{
    console.log(err);
  })
  //正式发送请求
  return instance(config)
}