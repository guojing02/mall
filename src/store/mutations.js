import {ADD_COUNTER,ADD_TO_CART}from './mutation-type'

export default {
  // addCart(state,payload){
  //   // 1.查找之前的数组中是否已经存在该商品
  //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
  //   // 2.判断oldProduct
  //   if(oldProduct){
  //     oldProduct.count += 1
  //   }else{
  //     payload.count = 1
  //     state.cartList.push(payload)
  //   }
  // }
  [ADD_COUNTER](state,payload){
    payload.count++
    
  },
  
  [ADD_TO_CART](state,payload){
    payload.checked = true
    payload.count = 1
    state.cartList.push(payload) 
  },
  addition(state){
    state.cartList.find(item => {
      return item.count++
    });
  },
  subtract(state){
    let num = state.cartList.find(item => item.count);
   console.log(num);
   if (num.count >= 1) {
      num.count--     
   }else{
     num = {}
    //  console.log(num);
   }
  }
}