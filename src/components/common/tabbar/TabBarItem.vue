<template>
  <div class="tab-bar-item" @click='itemCliack'>
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <div :style="activeStyle"><slot name='item-text'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path: String,
    activeColor:{
      type: String,
      default:'#e04a06'
    }
  },
  data(){
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemCliack(){
      this.$router.replace(this.path).catch(error => error)
    }
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
/* .active{
  color:#e04a06
} */
</style>