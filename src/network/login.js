import axios from 'axios'
export function login(config) {
  const instance =  axios.create({
    baseURL:'http://timemeetyou.com:8889/api/private/v1/',
    timeout:5000
  })
  instance.interceptors.response.use(res =>{
    res.headers.Authorization = window.sessionStorage.getItem('token')
    return res.data
  },err =>{
    console.log(err);
  })
  //正式发送请求
  return instance(config)
}
export function loginHttp(from){
  return login({
    url:'/login',
    params:from
  })
}
