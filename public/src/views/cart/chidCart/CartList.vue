<template>
  <div class="cartList">
    <cart-list-item v-for="(item,index) in cartList" 
      :key="index" :item='item' 
      @addition='addition(index)' @subtract='subtract(index)'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

export default {
  name:'CartList',
  components:{
    CartListItem
  },
  computed:{
    ...mapGetters(["cartList"])
  },
  methods:{
    addition(index){
      this.$store.commit('addition',index)
    },
     subtract(index){
      this.$store.commit('subtract',index)
    }
  }
}
</script>

<style scoped>
  .cartList{
    overflow: hidden;
    /* height: 10000px; */
  }
</style>