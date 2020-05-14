<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
    <tab-menu class="tabmenu"
    @click.native="tabClick"
     @selectItem='selectItem' :categories='categories'/>
    <Bscroll class="BScontent" ref="scroll">
      <content-category :categoryData='categoryData' class="category"></content-category>
    </Bscroll>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import tabControl from '../../components/content/tabControl/tabControl'
import Bscroll from '../../components/common/scroll/Scroll'
import TabMenu from './chidComps/TabMenu'
import ContentCategory from './chidComps/ContentCategory'
import ContentSubcate from './chidComps/ContentSubcate'

import {debounce} from '../../common/debounce'

import {getCategory,getSubcategory,getCategoryDetail} from '../../network/category'

export default {
  name:'Category',
  data(){
    return{
      categories: [],
      categoryData:[],
      currentIndex:-1
    }
  },
  computed:{
  },
  methods:{
    getCategory(){
      getCategory().then(res => {
        // console.log(res);
        this.categories = res.data.category.list

        this.getSubcategory(0)
      })
    },
    getSubcategory(index){
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey
      getSubcategory(maitKey).then(res => {
        this.categoryData = res.data.list
      })
    },
    selectItem(index){
      this.getSubcategory(index)
    },
    tabClick(){
      this.$refs.scroll.scrollTo(0,0)
    }
  },
  created(){
    this.getCategory()
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.$on('itemImageLoad',()=>{
      refresh() 
    })
  },
  components:{
    NavBar,
    tabControl,
    Bscroll,
    TabMenu,
    ContentCategory,
    ContentSubcate
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    font-weight: 900;
    color: #fff;
    position: relative;
    z-index: 10;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
  }
  .BScontent{
    flex: 1;
    height: 100%;
  }
  .category{
    display: flex;
  }
</style>