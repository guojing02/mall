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
  addition(state,index){
    state.cartList[index].count++
  },
  subtract(state,index){
   if (state.cartList[index].count > 1) {
    state.cartList[index].count--   
   }else{
    state.cartList.splice(index,1)
    //  console.log(state.cartList[index]);
     
    //  console.log(num);
   }
  },
  actives(state,active){
    state.active = active
    console.log(state.active);
    
  }
}