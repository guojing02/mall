<template>
  <div>
    <div class="unseinfo">
    <div class="fromimg">
      <img src="~assets/img/PaymentPage/location.svg" alt="">
    </div>
    <div class="username">
        <span>郭敬</span>
        <span>17673092134</span>
      <div class="receiving">湖南省长沙市就啊是不嗲是不嗲吧爱速度好吧捞刀河</div>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'UserInfor'
}
</script>

<style scoped>
  .unseinfo{
    display: flex;
    border-radius: 15px;
    background-color: #fff;
    height: 15vh;
    margin: 10px;
    align-items: center;
  }
  .unseinfo::after{
    content: '>';
    font-size: 22px;
    margin-right: 8px;
  }
  .fromimg img{
    width: 40px;
  }
  .username :nth-child(1){
    font-size: 25px;
    margin: 7px;
  }
  .username :nth-child(2){
    font-size: 15px;
    margin: 7px;
  }
  .username :nth-child(3){
    margin: 7px;
    font-size: 15px;
  }
</style>