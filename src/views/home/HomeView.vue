<template>
  <div class="home" ref="homeContent">
    <NavBar class="nav-bar">
      <template v-slot:center>购物街</template>
    </NavBar>
    <MySwiper :banners="banners"></MySwiper>
    <Recommend :recommends="recommends"></Recommend>
    <FeatureView/>
    <MoreView :filter="filter" :goods="goods" :homeLoad="getGoods"/>
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
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []},
        },
        filter: [{title: '流行',sort: 'pop'},
                 {title: '热销',sort: 'sell'},
                 {title: '上新',sort: 'new'}
        ]
      }
    },
    methods: {
      getMultidata(){
        getHomeMultidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = res.data.page;
          this.$store.commit('homeLoadEnd');
        });
      }
    },
    created() {
      this.getMultidata();
      for(let item of this.filter) {
        this.getGoods(item.sort);
      }
    }
}
</script>

<style>
  .nav-bar {
    display: fixed;
    top: 0;
    left: 0;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>