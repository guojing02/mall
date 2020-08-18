<template>
  <div class="login-container">
    <div class="login_box">
      <div class="avatar_box">
        <img src='~assets/img/login/taobao.svg' alt="">
      </div>
      <el-form ref="loginRef" :rules='loginRules' :model="loginForm" label-width="" class="loginForm">
        <!-- 用户名 -->
        <el-form-item  class="text_input" prop='username'>
          <el-input placeholder="请输入账号" v-model='loginForm.username' prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item  class="text_input" prop='password'>
          <el-input show-password placeholder="请输入密码" v-model='loginForm.password' prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click.once="loginClick">登录</el-button>
          <el-button type="info" @click="resetClick">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {loginHttp} from '../../network/login'

export default {
  name:'Login',
  data(){
    return{
      loginForm:{username:'admin',password:'123456'},
      // 表单验证规则
      loginRules:{
        username:[
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 13, message: '长度在 3 到 13 个字符', trigger: 'blur' }
          ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
        }
    }
  },
  methods:{
    resetClick(){
      this.$refs.loginRef.resetFields()
    },
    loginClick(){
      this.$refs.loginRef.validate(async valid => {
        if(!valid) return;
        const res = await loginHttp(this.loginForm)
        if(res.meta.status!== 200) return this.$message.error("登录失败!请确认密码！")
        window.sessionStorage.setItem('token',res.data.token)
        setTimeout(()=>{
        location.reload()
        },50)
        this.$router.replace('/home')
      })
    }
  }
}
</script>

<style scoped>
.login-container{
  height: 100%;
  display: flex;
  justify-content: center;
}
.login_box{
  width:100%;
  height:100%;
  background-image: url(~assets/img/login/bg.jpg);
  background-size: 100% 100%;
  border-radius: 3px;
  box-shadow: 0px -15px 15px 0px;
  position: absolute;
  z-index: 20;
}
.avatar_box{
  display: flex;
    flex-direction: row;
    height: 45%;
    justify-content: center;
}
.avatar_box img{
    box-shadow: -1px -6px 20px 0px;
    height: 34%;
    border-radius: 50%;
    background: #fff;
    margin-top: 10%;
    opacity:0.8;
  }
.btns{
  display: flex;
  justify-content: flex-end;
  margin-top: 200px;
  opacity:0.8;
}
.loginForm{
  padding: 0 10%;
  transform: translate(0px, -20%);
}
.text_input{
  opacity:0.8;
}
</style>