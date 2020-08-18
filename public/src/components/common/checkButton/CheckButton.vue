<template>
  <div class="checkButton" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .checkButton{
    border: 2px solid #aaa;
    border-radius: 50%;
  }
  .check{
    border: 2px solid var(--color-tint);
    background-color: var(--color-tint);
  }
</style>