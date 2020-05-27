<template>
  <div id="user-info">
    <div class="title" @click="drawerShow">
      <img src="~assets/img/profile/title.jpg" >
    </div>
    <div class="text">
      <span>词</span>
      <div>VIP9</div>
    </div>
    <div class="red-pack">
      <img src="~assets/img/profile/red.svg" alt="">
      <span>点击领取大额红包 ></span>
    </div>
  </div>
</template>

<script>
	export default {
    name: "UserInfo",
    data(){
      return{

      }
    },
    methods:{
      drawerShow(){
        this.$emit('drawerShow')
      }
    }
	}
</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    height: 44vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 35px solid #f2f2f2;
  }
  .title img{
    background-color: #fff;
    border-radius: 48%;
    margin-left: 30px;
    width: 75px;
  }
  .text{
    margin: 30px 13px;
    width: auto;
    color: #fff;
  }
  .text div{
    border-radius: 30px;
    background-color: #fff;
    color: var(--color-tint);
    width: 75px;
    height: 20px;
    display: flex;
    align-items: center;
    box-shadow: inset 1px 0px 7px 0px;
    justify-content: center;
    margin-top: 10px;
  }
  .red-pack{
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    background-color: #fff;
    border-radius: 2vw;
    width: 90%;
    position: absolute;
    top: 29.33333vw;
    left: calc(100% - 95%);
    box-shadow: 4px 2vw 2.13333vw 0px;
  }
  .red-pack img{
    width: 40px;
  }
</style>