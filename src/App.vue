<template>
  <div id="app">
    <Tabbar>
        <TabbarItem to="/home" title="首页">
          <template v-slot:normal>
            <img src="./assets/img/tabbar/shouye.svg" alt="shoye">
          </template>
          <template v-slot:active>
            <img src="./assets/img/tabbar/shouye_active.svg" alt="shouye_active">
          </template>
        </TabbarItem>
        <TabbarItem to="/classify" title="分类">
          <template v-slot:normal>
            <img src="./assets/img/tabbar/fenlei.svg" alt="fenlei">
          </template>
          <template v-slot:active>
            <img src="./assets/img/tabbar/fenlei_active.svg" alt="fenlei_active">
          </template>
        </TabbarItem>
        <TabbarItem to="/cart" title="购物车">
          <template v-slot:normal>
            <img src="./assets/img/tabbar/gouwuche.svg" alt="gouwuche">
          </template>
          <template v-slot:active>
            <img src="./assets/img/tabbar/gouwuche_active.svg" alt="gouwuche_active">
          </template>
        </TabbarItem>
        <TabbarItem to="/profile" title="我的">
          <template v-slot:normal>
            <img src="./assets/img/tabbar/wode.svg" alt="wode">
          </template>
          <template v-slot:active>
            <img src="./assets/img/tabbar/wode_active.svg" alt="wode_active">
          </template>
        </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/common/tabbar/TabBar'
import TabbarItem from './components/common/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components: {Tabbar,TabbarItem}
}
</script>

<style>
@import './assets/css/base.css';

#app {
  width: 100%;
  background-color: #efefed;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
