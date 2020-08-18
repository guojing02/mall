<template>
  <div>
    <div class="shop_name">
      <img :src="item.logo" alt="">
      <span>{{item.name}} ></span>
    </div>
    <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="item.checked" v-show="active" @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="item.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">商品描述: {{item.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{item.price}}</div>

        <div class="item-count right border">
          <span class="conter" v-show="active" @click="addition">+</span>
          {{item.count}}
          <span class="conter" v-show="active" @click="subtract">-</span>
        </div>
      </div>
    </div>
    </div>
    <slot name='itemInfos'></slot>

  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  data() {
    return {
      isShow: true
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.item.checked = !this.item.checked;
    },
    addition() {
      this.$emit("addition");
    },
    subtract() {
      this.$emit("subtract");
    }
    
    // isShow(){
    //  this.conter = this.$store.state.cartList.map( item => item.count)
    // }
  },
  computed:{
      active(){
        return this.$store.state.active
      }
  }
};
</script>

<style scoped>
#shop-item {
  display: flex;
  font-size: 0;
  background-color: #fff;
  padding: 5px;
  border-bottom: 1px solid  rgba(255, 129, 152, .5);
  margin: 0 12px 0 12px;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-title,
.item-desc {
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
.conter {
  width: 5.66667vw;
  padding: 0.53333vw 1.33333vw;
  background-color: var(--color-tint);
  color: #ffffff;
  border-radius: -16px;
  box-shadow: inset -1px 1px 11px 2px;
}
.border {
  width: 15.2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: -20px -5px 20vw 0px;
  border-radius: 50%;
}
.shop_name{
    height: 28px;
    border-top-left-radius: 15px;
    border-top-right-radius: 14px;
    margin: 12px 5px 0 5px;
    background-color: rgba(255, 129, 152, .5);
    display: flex;
    color: #fff;
    align-items: center;
    overflow: hidden;
}
.shop_name img{
    width: 30px;
    margin-left: 20px;
    margin-right: 15px;
}

</style>