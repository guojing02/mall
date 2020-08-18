<template>
  <div id="home">
   <nav-bar class="home-nav">
     <div slot='center'>淘淘乐</div>
   </nav-bar>
   <tab-control ref="tabControl1" 
    :titles='["流行","新款","精选"]' 
    @tabClick='tabClick'
     class="tab-control" v-show='isTabFixed'></tab-control>
   <Scroll class="content" ref="scroll" 
   :probe-type='3' @scroll="contentScroll"
   :pull-upload='true' @pullingUp='loadMore'>

    <home-swiper 
    :banners='banners' ref="swiper"
     @swiperImgLoad='swiperImgLoad'/>
    <recommend-view :recommends='recommends' ref="recommend"
    @remImgLoad='remImgLoad'></recommend-view>
    <feature></feature>
    <tab-control ref="tabControl2" 
    :titles='["流行","新款","精选"]' 
    @tabClick='tabClick'
    ></tab-control>
    <goods-list :goods="showGoods"/>
   </Scroll>
   <back-top @click.native="backClick" v-show="isShowBack"/>
  </div>
</template>

<script>
import HomeSwiper from './chidComps/HomeSwiper'
import RecommendView from './chidComps/RecommendView'
import Feature from './chidComps/feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from "../../components/common/scroll/Scroll"
import BackTop from '../../components/content/backTop/BackTop'

import  {getHomeMultidata ,getHomeGoods} from '../../network/home'
import {debounce} from 'common/debounce'
import {itemListenerMixin} from '../../common/mixin'
// import {getHomeTaoBao} from '../../network/home-search'

export default {
  name: 'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins:[itemListenerMixin],
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBack:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getY
    // console.log(this.saveY);
    // 取消全局事件的监听
    this.$bus.$off('itemimgload',this.itemImgListener)
    
  },
  created(){//生命周期函数
    //1请求多个数据
    this.getHomeMultidata()
    // getHomeTaoBao().then(res=>{
    //   console.log(res);
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')  
    this.getHomeGoods('sell')  
    // 监听item中图片加载
    
  },
  mounted(){
    // 图片加载完的事件监听
    // const refresh = debounce(this.$refs.scroll.refresh,50)
    // this.itemImgListener = ()=>{
    //   refresh()
    // }
    // this.$bus.$on('itemimgload',this.itemImgListener)
    // 获取tabControl的offsetTop
    // this.tabOffsetTop = this.$refs.tabControl.el.offsetTop
    // console.log(this.$refs.tabControl2.$el.offsetTop);
  },
  methods:{
    // 事件监听相关 

    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      this.$refs.scroll.scrollTo(0,-this.tabOffsetTop)
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      // 判断Backtop是否显示
       this.isShowBack = (-position.y) > 1000
      //  决定tabcontrol是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop

    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      // this.$refs.scroll.refresh()
    },
    swiperImgLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    remImgLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    // 网络请求相关
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(res);
    })
    },
    getHomeGoods(type){
      let page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        let page = this.goods[type].page += 1
        // console.log(this.goods[type].list);
        // 完成了加载更多/\
        this.$refs.scroll.finishPullUp()
      })
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
}
</script>
<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    font-weight: 900;
    color:#fff;
    /* position: fixed;
    left: 0;
    right:0;
    top:0;
    z-index: 1000; */
  }

  .content{
    /* height:80%; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    z-index: 100;
    background-color: #fff;
  }
</style>
