<template>
  <div class="home">
    <NavBar class="nav-bar">
      <template v-slot:center>购物街</template>
    </NavBar>
    <MySwiper :banners="banners"></MySwiper>
    <Recommend :recommends="recommends"></Recommend>
    <FeatureView/>
    <MoreView/>
  </div>
</template>


<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'

import MySwiper from './childComps/swiper/Swiper.vue'
import Recommend from './childComps/recommend/Recommend.vue'
import FeatureView from './childComps/FeatureView.vue'
import MoreView from './childComps/MoreView.vue'

import { getHomeMultidata,getHomeGoods } from '@/network/home'

export default {
    name: 'Home',
    components: {NavBar,TabControl,MySwiper,Recommend,FeatureView,MoreView},
    data() {
      return {
        // banner信息
        banners: [],
        // 评论信息
        recommends: [],
        // 关键字信息
        dkeyword: null,
        keywirds: null,
        goods: {
          'pop': {page: 0,list: []},
          'news': {page: 0,list: []},
          'sell': {page: 0,list: []},
        }
      }
    },
    methods: {
      getMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
          this.dkeyword = res.data.dkeyword;
          this.keywords = res.data.keywords;
        });
      },
      getGoods(type,page) {
        getHomeGoods(type,page).then(res=>{
          console.log(res);
        });
      }
    },
    created() {
      this.getMultidata();
      this.getGoods('pop',1);
    }
}
</script>

<style>
  .nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>