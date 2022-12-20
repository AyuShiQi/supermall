<template>
  <div id="cartView">
    <NavBar class="nav-bar">
        <p slot="center">购物车({{$store.state.cartTotal}})</p>
    </NavBar>
    <ul id="goodList">
        <PayGoodCard v-for="(info,i) in $store.state.cart" :key="info.iid" :index="i" :info="info"/>
    </ul>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'

import PayGoodCard from './childComps/payGoodCard.vue'
import FooterBar from './childComps/FooterBar.vue'

export default {
    name: 'CartView',
    components: {NavBar,PayGoodCard,FooterBar},
    methods: {
        clickCard(iid) {
            this.$router.push('/detail/'+iid);
        }
    }
}
</script>

<style>
    #cartView {
        position: relative;
        width: 100%;
        height: 100%;
    }

    #cartView #goodList {
        width: 100%;
    }

    #cartView .nav-bar {
        color: #fff;
        background: var(--color-tint);
    }
</style>