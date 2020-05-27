<template>
  <div id="nav">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}
</script>

<style>
#nav{
  display: flex;
  align-items: center;
  background-color: #f7f5f5;
  position: absolute;
  z-index: 9;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, .2);
}

</style>