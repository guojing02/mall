<template>
  <div class="tabControl">
     <div v-for="(item, index) in titles"  
     :key="index" :class="{active:index == currentIndex}"
     @click='itemClick(index)'>
       <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:'0'
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
.tabControl{
  display: flex;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
}
.tabControl div{
  flex:1
}
.active span{
  color:var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>