<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick='itemClick' ref="nav"/>
    <scroll class="content" ref="scroll" 
    @scroll="contentScroll" :probe-type='3'>
      <!-- <div>{{$store.state.cartList}}</div> -->
      <!-- <ul v-for="(item,index) in $store.state.cartList" :key='index'>
        <li>{{item}}</li>
      </ul> -->
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'/>
      <detail-param-info ref="param" :param-info='paramInfo'></detail-param-info>
      <!-- @imageLoad='imageLoad' -->
      <detail-comment-info ref="comment" :commentInfo="commentInfo"></detail-comment-info>
      <!-- <detail-recommend-info :recommendList='recommendList'></detail-recommend-info> -->
      <goods-list ref="recomment" :goods='recommendList'/>
    </scroll>
     <back-top @click.native="backClick" v-show="isShowBack"/>
    <detail-bottom-bar @addCar='addCar'/>
    <!-- <toast></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './chidComps/DetailNavBar'
import DetailSwiper from './chidComps/DetailSwiper'
import DetailBaseInfo from './chidComps/DetailBaseInfo'
import DetailShopInfo from './chidComps/DetailShopInfo'
import DetailGoodsInfo from './chidComps/DetailGoodsInfo'
import DetailParamInfo from './chidComps/DetailParamInfo'
import DetailCommentInfo from './chidComps/DetailCommentInfo'
import DetailBottomBar from './chidComps/DetailBottomBar'
// import DetailRecommendInfo from './chidComps/DetailRecommendInfo'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from '../../common/debounce'
import {itemListenerMixin,backTopMixin} from '../../common/mixin'

// import Toast from '../../components/common/toast/Toast'
import {mapActions} from 'vuex'
export default {
  name:'Detail',
  mixins:[itemListenerMixin,backTopMixin],
  data(){
    return {
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo: {},
      recommendList: [],
      themeTopYs:[],
      currentIndex:null,
      // a:''
    }
  },
  created(){
    // 1.保存传入的iid
    this.iid = this.$route.params.iid || this.$route.query.iid
    // this.iid = this.$route.params.iid 
    // 2.根据iid请求详情页数据
    getDetail(this.iid).then(res =>{
      // 1.获取顶部轮播图的数据
      console.log(res);
      const data = res.result
      this.topImages = data.itemInfo.topImages
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 3.创建店铺信息
      console.log(this.goods);
      
      this.shop = new Shop(data.shopInfo)
      console.log(this.shop);
      
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      if(data.rate.list){
        this.commentInfo = data.rate.list[0];
      }
    })

    getRecommend().then((res, error) => {
      console.log(res);
      if (error) return
      this.recommendList = res.data.list
    })
  },
    
  methods:{
      ...mapActions(['addCart']),
      imageLoad(){
        // this.$refs.scroll.refresh()
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recomment.$el.offsetTop - 44)
      this.themeTopYs.push(Number.MAX_VALUE)
      },
      itemClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        this.isShowBack = (-position.y) > 1000
        const positionY = -position.y
        for (let i = 0; i < this.themeTopYs.length-1; i++) {
          if (this.currentIndex !== i &&
           (positionY >= this.themeTopYs[i] &&
            positionY < this.themeTopYs[i+1])) {
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }       
      },
      addCar(){
        // 获取购物车信息   m 
        const cart = {}
        cart.image = this.topImages[0];
        cart.title = this.goods.title;
        cart.desc = this.goods.desc;
        cart.price = this.goods.realPrice;
        cart.iid = this.iid
        cart.name = this.shop.name;
        cart.logo = this.shop.logo
        // 将商品添加到购物车
        // this.$store.commit('addCart',cart)
        this.addCart(cart).then(res => {
          // this.a = res
          this.$toast.show(res,2000)
        })
      }
        
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    // DetailRecommendInfo,
    GoodsList,
    DetailBottomBar,
    // Toast
  },
  mounted(){
    // 图片加载完的事件监听
    let refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('imageLoad',()=>{
      refresh() 
    })
    
  },
  destroyed(){
    this.$bus.$off('itemimgload',this.itemImgListener)
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    background-color: #fff;
    z-index: 10;
    height: 100vh;
  }
  .detail-nav{
    background-color: #fff;
    position: relative;
    z-index: 11;
  }
  .content{
    height: calc( 100% - 44px - 50px);
    overflow: hidden;
  }
</style>