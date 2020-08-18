<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    
    <main-tab-bar v-show="active"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name:'app',
  components:{
    MainTabBar
  },
  computed:{
    active(){
      return this.$store.state.active
    }
  }
}
</script>
<style>
  @import 'assets/css/base.css';
</style>
