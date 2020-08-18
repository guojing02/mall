<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name:'Toast',
  // props:{
  //   message:{
  //     type:String,
  //     default(){
  //       return ""
  //     }
  //   }
  // }
  data(){
    return{
      message:'',
      isShow:false
    }
  },
  methods:{
    show(message,duration=2000){
      this.isShow = true;
      this.message = message
      setTimeout(()=>{
        this.isShow = false
        this.message = ''
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 6px 10px;
    background-color: rgba(112, 109, 109,0.5);
    color: #fff;
    width: 180px;
    text-align: center;
    font-size: 20px;
    z-index: 999;
  }
</style>