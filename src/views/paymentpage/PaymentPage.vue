<template>
  <div class="payment">
      <nav-bar class="nav_bar">
         <div slot="left" @click="back">
             <img src="~assets/img/common/back.svg" alt="" class="back">
         </div>
         <div slot="center">支付页</div>
      </nav-bar>
      <user-infor></user-infor>
      <goods-info></goods-info>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfor from './children/UserInfor'
import GoodsInfo from './children/GoodsInfo'
export default {   
    name:'PaymentPage',
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.back()
            const activeTrue = true
            this.$store.commit('actives',activeTrue)
        }
    },
    created(){
        
    },
    components:{
        NavBar,
        UserInfor,
        GoodsInfo
    }
}
</script>

<style scoped>
    .back{
     margin-top: 8px;
     width:25px
    }
    .payment{
        background-color: #eee;
    }
    .nav_bar{
        background-color: #fff;
    }
</style>