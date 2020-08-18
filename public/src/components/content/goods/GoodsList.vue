<template>
  <div class="goods">
    <goods-item v-for='(item,index) in goods' :key='index'
    :goodsitem='item'></goods-item>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodsItem
  }

}
</script>

<style>

.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>