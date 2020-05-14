<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" 
        class="back">
      </div>
      <div slot="center" class="titles">
        <div v-for="(item,index) in titles" 
        :key="index" class="title-item"
        :class="{active:index === currentIndex}"
        @click="itemClick(index)"
        
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:'DetailNavBar',
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .titles{
    display: flex;
  }
  .title-item{
    flex:1;
  }
  .active{
    color: var(--color-high-text)
  }
  .back{
    margin-top: 11px;
  }
</style>