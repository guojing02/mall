<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key='index'>
      <a :href="item.link">
        <img :src="item.image" alt="" @load="remImgLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      typr:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    remImgLoad(){
      this.$emit('remImgLoad')
    }
  }
}
</script>

<style>
.recommend{
  width: 100%;
  display:flex;
  align-items: center;
  text-align: center;
  font-size:16px;
  padding: 10px 0 20px;
  border-bottom:#eee solid 10px;
}
.recommend img{
  flex: 1;
  width:80%;
}
.recommend div div{
  padding-top: 15px;
}
</style>