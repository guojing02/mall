<template>
    <swiper class="detail-item">
      <swiper-item v-for="(item,index) in topImages" :key='index'>
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:'DetailSwiper',
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
 .detail-item{
   width: 100%;
   height: 300px;
   overflow: hidden;
 }
 img{
   height: 500px;
 }
</style>