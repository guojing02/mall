<template>
  <div class="category">
    <div class="content" 
    v-for="(item,index) in categoryData" :key="index">
      <a href="item.link">
      <img v-lazy="item.image" @load="itemImageLoad" alt="">
      <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'ContentCategory',
  props:{
    categoryData:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    itemImageLoad(){
      this.$bus.$emit('imageLoad')
    }
  }
}
</script>

<style scoped>
  .category{
    flex-wrap: wrap;
  }
  .content{
    width: 40%;
    margin-left: 20px;
  }
  .content img{
    width: 100%;
  }
  .content a div{
    text-align: center;
  }
</style>