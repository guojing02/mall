<template>
     <div id="shop-item" v-show="item.count >= 1">
    <div class="item-selector">
      <CheckButton :is-checked='item.checked'
      @click.native='checkClick' />
    </div>
    <div class="item-img">
      <img :src="item.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述: {{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{item.price}}</div>
        
        <div class="item-count right">
          <span class="conter" @click="addition">+</span>
          {{item.count}}
          <span class="conter" @click='subtract'>-</span>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkButton/CheckButton'

export default {
  name:'CartListItem',
  components:{
    CheckButton
  },
  data(){
    return{
      isShow:true
    }
  },
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      this.item.checked = !this.item.checked
    },
    addition(){
      this.$store.commit('addition')
    },
    subtract(){
      this.$store.commit('subtract')
    },
    // isShow(){
    //  this.conter = this.$store.state.cartList.map( item => item.count)
    // }
  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price {
    color: orangered;
  }
  .conter{
    border: 1px solid #f7f7f7;
    width: 10px;
    padding: 2px 5px;
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>