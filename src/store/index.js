import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeLoadEnd: true
  },
  getters: {
  },
  mutations: {
    homeLoad(state) {
      state.homeLoadEnd = false;
    },
    homeLoadEnd(state) {
      state.homeLoadEnd = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
