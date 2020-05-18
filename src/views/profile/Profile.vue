<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll">
    <UserInfo></UserInfo>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>

    <list-view :list-data="orderList" class="order-list"></list-view>
    <list-view :list-data="serviceList" class="service-list"></list-view>
    <div class="recommend">
      <div class="line"></div>
      <h4>你可能还想要</h4>
      <div class="line"></div>
    </div>
    <goods-list :goods='list'></goods-list>
    <div class='tips'>已经拉到底了噢~</div>
    </scroll>
    
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from '../../components/common/scroll/Scroll'
  import GoodsList from '../../components/content/goods/GoodsList'

  import {getHomeGoods} from '../../network/home'
  // import {itemListenerMixin} from '../../common/mixin'
  // import {debounce} from '../../common/debounce'
	export default {
    name: "Profile",
    // mixins:[itemListenerMixin],
    components: {
		  UserInfo, ListView, NavBar,Scroll,GoodsList
    },
    data() {
		  return {
		    orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ],
        list:[]
      }
    },
    methods:{
      getHomeGoods(){
        getHomeGoods('pop',1).then(res => {
        // console.log(res);
        this.list = res.data.list
      })
      }
    },
    mounted () {
      this.getHomeGoods()
      // let refresh = this.$refs.scroll.refresh
      //  this.$bus.$on('itemimgload',() => {
      //    refresh()
      //    console.log(refresh);
         
      //  })
    },
    // destroyed(){
    // this.$bus.$off('itemimgload',this.itemImgListener)
    // }
	}
</script>

<style scoped>
  #profile {
    background-color: #f2f2f2;
  }
  .nav-bar{
    background-color: var(--color-tint);
    font-weight: 900;
    color: #fff;
    position: relative;
    z-index: 10;
  }
  .account {
    display: flex;
  }
  .account-item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
  }
  .account-item:last-of-type {
    margin-right: 0;
  }
  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }
  .account-item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
  }
  .account-info {
    margin-top: 6px;
  }
  .order-list, .service-list {
    margin-top: 12px;
  }
  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .recommend{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    -webkit-text-emphasis-style: double-circle;
  }
  .line{
    width: 30vw;
    height: 1px;
    background-color: #a3a3a5;
  }
  .tips{
    position: absolute;
    bottom: -20px;
    left: calc(100% - 65%);
  }
</style>