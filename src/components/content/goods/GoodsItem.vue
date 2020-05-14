<template>
  <div class="goodsitem" @click="itemClick">
      <img v-lazy="showImage" alt="" @load="imgLoad" >
      <div class="info">
        <div class="info1">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{'￥'+goodsitem.price}}</span>
        <span class="cfav">{{goodsitem.cfav}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name:'GoodsItem',
props:{
  goodsitem:{
    type:Object,
    default(){
      return{}
    }
  } 
},
methods:{
    imgLoad(){
      // 第一种方法有bug首页滑不动
    //  if(this.$route.path.indexOf('/home')){
    //     this.$bus.$emit('itemimgload')
    //  }else if(this.$route.path.indexOf('/detail')){
    //     this.$bus.$emit('imageLoad')
    //  }
    this.$bus.$emit('itemimgload')
    },

    itemClick(){
      this.$router.push('/detail/' + this.goodsitem.iid) ||this.$router.push({
        path:'/detail',
        query:{
          iid:this.goodsitem.iid
        }
      })
    }
  },
  computed:{
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
}
</script>

<style>
.goodsitem{
  padding-bottom: 40px;
  position: relative;
  width:48%;
}
.goodsitem img{
  width:100%;
  height:100%;
  border-radius: 5px;
}
.info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  right: 0;
  left:0;
  overflow: hidden;
  text-align: right;
}
.info1{
  position: relative;
}
.info1 p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.info1 .price{
  color: var(--color-high-text);
  position: absolute;
  left: 5%;
}
.info1 .cfav{
  position: relative;
  right: 5%;
}
.info1 .cfav::before{
  content:'';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>