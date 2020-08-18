<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name:'Scroll',
  data(){
    return{
      scroll:null
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpload:{
      type:Boolean,
      default:false
    }
  },
  mounted(){
    // 1.创建BScroll的对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpload
    })
    // 2.监听滚动的位置
    if(this.probeType===2 || this.probeType===3){
      this.scroll.on('scroll',(position) => {
      this.$emit('scroll',position)      
    })
    }
    // 3.监听上拉
    if(this.pullUpload){
      this.scroll.on('pullingUp',()=>{
       this.$emit("pullingUp")   
    })
    }
  },
  methods:{
    scrollTo(x,y,time){
     this.scroll && this.scroll.scrollTo(x,y,time=500)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
     this.scroll && this.scroll.refresh()
    }
  },
  computed:{
    getY(){
      return this.scroll.y
      // console.log(this.scroll.y);
    }
  }
}
</script>

<style>

</style>