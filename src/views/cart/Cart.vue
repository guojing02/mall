<template>
  <div class="cart">
    <nav-bar class="NavBar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref='scroll'>
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from './chidCart/CartList'
import CartBottomBar from './chidCart/CartBottomBar'

import NavBar from '../../components/common/navbar/NavBar'
import Scroll from '../../components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength','cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .NavBar{
    background-color: var(--color-tint);
    font-weight: 900;
    color:#fff;
    position: relative;
    z-index: 10;
  }
  .content{
    height: calc(100vh - 44px - 49px - 40px);
  }
</style>