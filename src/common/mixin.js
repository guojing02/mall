import {debounce} from './debounce'

import BackTop from '../components/content/backTop/BackTop'

export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    let refresh = debounce(this.$refs.scroll.refresh,50)
    this.itemImgListener = ()=>{
      refresh()
    }
    this.$bus.$on('itemimgload',this.itemImgListener)
  }
}
export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShowBack:false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}