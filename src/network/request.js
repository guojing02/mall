import axios from 'axios'

export function request(config){

    const instance = axios.create({
      baseURL : "接口请加coderwhy"
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
