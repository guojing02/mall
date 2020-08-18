<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button :is-checked='isSelectAll' @click.native="checkClick" class="check-button"/>
      <span>全选</span>
    </div>

    <div class="price">
      合计:{{totalPrice}}
    </div>

    <div class="calculate" @click="calcClick">
      去结算：{{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkButton/CheckButton'

import { mapGetters} from 'vuex'

export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return '￥' + this.cartList.filter(item => item.checked)
      .reduce((preValue,item) => preValue += item.price * item.count , 0)
      .toFixed(2)
    },
    checkLength(){
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll(){
      if(this.cartList.length === 0) return false
      // return !this.cartList.find(item => !item.checked)
      return this.cartList.every(item => item.checked)
      // return !this.cartList.some(item => !item.checked)
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){//全部选中
        this.cartList.forEach(item => item.checked = false);
      }else{//全部不选中
        this.cartList.forEach(item => item.checked = true);
      }
    },
    calcClick(){
      if(!this.checkLength){
        this.$toast.show('您还没有选择宝贝',2000)
      }else{
        this.$router.push('paymentpage')
        const activeFalse = false
        this.$store.commit('actives',activeFalse)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 40px;
    background-color:#fff;
    position: relative;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(219, 216, 215);
  }
  .check-all{
    display: flex;
    margin-left: 10px;
    /* width: 40px; */
  }
  .check-button{
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .price{
    margin-left: auto;
    /* flex: 1; */
  }
  .calculate{
    color: #fff;
    background-color: var(--color-tint);
    width: 90px;
    margin-left: auto;
    line-height: 40px;
  }
</style>