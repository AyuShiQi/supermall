<template>
  <div class="home">
    <NavBar class="nav-bar">
      <template v-slot:center>购物街</template>
    </NavBar>
    <Swiper :banners="banners"></Swiper>
  </div>
</template>


<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import Swiper from '@/views/home/childComps/swiper/Swiper.vue'
import { getHomeMultidata } from '@/network/home'

export default {
    name: 'Home',
    components: {NavBar,Swiper},
    data() {
      return {
        // banner信息
        banners: [],
        // 评论信息
        recommends: [],
        // 关键字信息
        dkeyword: null,
        keywirds: null,
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.dkeyword = res.data.dkeyword;
        this.keywords = res.data.keywords;
      })
    }
}
</script>

<style>
  .nav-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>