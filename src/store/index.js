import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeLoadEnd: true,
    cartTotal: 0,
    cartCount: 0,
    payPrice: 0,
    cart: [
    ]
  },
  getters: {
  },
  mutations: {
    homeLoad(state) {
      state.homeLoadEnd = false;
    },
    homeLoadEnd(state) {
      state.homeLoadEnd = true;
    },
    addCart(state,config) {
      for(let i = 0;i<state.cart.length;i++) {
        if(config.iid==state.cart[i].iid) {
          state.cart[i].count++;
          return;
        }
      }
      state.cart.push(config);
      state.cartTotal++;
    },
    deleteCart(state,iid) {
      for(let i = 0;i<state.cart.length;i++) {
        if(state.cart[i].iid==iid) {
          state.cart.splice(i,1);
          break;
        }
      }
      state.cartTotal--;
    },
    addCount(state,index) {
      const good = state.cart[index];
      good.count++
    },
    reduceCount(state,index) {
      const good = state.cart[index];
      if(good.count>1) good.count--;
    },
    addPrice(state,index) {
      state.cartCount++;
      const good = state.cart[index];
      state.payPrice += good.price*good.count;
    },
    deletePrice(state,index) {
      state.cartCount--;
      const good = state.cart[index];
      state.payPrice -= good.price*good.count;
    },
    addOne(state,index) {
      const good = state.cart[index];
      state.payPrice += good.price;
    },
    deleteOne(state,index) {
      const good = state.cart[index];
      if(good.count>1) state.payPrice -= good.price;
    },
    changeChoose(state,index) {
      state.cart[index].choosed = !state.cart[index].choosed;
    },
    chooseAll(state) {
      let sum = 0;
      for(let i = 0;i<state.cart.length;i++) {
        state.cart[i].choosed = true;
        sum += state.cart[i].price*state.cart[i].count;
      }
      state.cartCount = state.cartTotal;
      state.payPrice = sum;
    },
    noAll(state) {
      for(let i = 0;i<state.cart.length;i++) {
        state.cart[i].choosed = false;
      }
      state.cartCount = 0;
      state.payPrice = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
