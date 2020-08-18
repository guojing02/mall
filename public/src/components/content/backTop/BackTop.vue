<template>
  <div class="backTop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}
</script>

<style scoped>
.backTop{
  position: fixed;
  z-index: 100;
  right: -10px;
  bottom: 65px;
}
.backTop img{
  width: 60%;
}
</style>