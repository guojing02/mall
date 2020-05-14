import axios from 'axios'

export function search(config){
  const instance2 = axios.create({
    baseURL:'https://suggest.taobao.com',
    timeout:5000
  })
instance2.interceptors.response.use(res =>{
  return res.data
},err =>{
  console.log(err);
})
//正式发送请求
return instance2(config)

}