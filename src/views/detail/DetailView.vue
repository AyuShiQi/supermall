<template>
  <div id="detailView">
    <NavBar class="nav-bar">
        <div slot="left" @click="comeBack">&lt;</div>
        <ul slot="center" class="nav-list">
            <li class="nav-list-active" @click="gotoGood">商品</li>
            <li @click="gotoInfo">参数</li>
            <li @click="gotoCommand">评论</li>
            <li @click="gotoRecommend">推荐</li>
        </ul>
    </NavBar>
    <div id="detailContent" ref="detailContent">
        <MySwiper :banners="banners"></MySwiper>
        <GoodInfo :itemInfo="itemInfo" :columnInfo="columns" :services="services"></GoodInfo>
        <ShopInfo :shopInfo="shopInfo"></ShopInfo>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import MySwiper from './childComps/Swiper.vue'
import GoodInfo from './childComps/GoodInfo.vue';
import ShopInfo from './childComps/ShopInfo.vue'
import FooterBar from './childComps/FooterBar.vue'

import NavBar from '@/components/common/navbar/NavBar.vue'

import { getGoodWithIID } from '@/network/detail'

export default {
    name: 'Detail',
    components: {NavBar,MySwiper,GoodInfo,ShopInfo,FooterBar},
    data() {
        return {
            goodScroll: 0,
            infoScroll: 1,
            commandScroll: 2,
            recommendScroll: 3,
            iid: '',
            banners: [],
            itemInfo: null,
            columns: [],
            shopInfo: null,
            services: [],
        }
    },
    methods: {
        gotoGood() {
            this.$refs.detailContent.scrollTo(0,this.goodScroll);
        },
        gotoInfo() {
            console.log('ok');
        },
        gotoCommand() {

        },
        gotoRecommend() {

        },
        comeBack() {
            this.$router.back();
        },
        /**
         * 网络请求
         */
        getGoodInfo() {
            getGoodWithIID(this.iid)
            .then(data=>{
                console.log(data);
                this.banners = data.result.itemInfo.topImages;
                this.itemInfo = data.result.itemInfo;
                this.columns = data.result.columns;
                this.shopInfo = data.result.shopInfo;
                this.services = data.result.shopInfo.services;
            })
        }
    },
    activated() {
        this.iid = this.$route.params.iid;
        this.getGoodInfo();
    },
    deactivated() {
        this.banners = null;
    }
}
</script>

<style>
    #detailView {
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100vh;
    }

    #detailView .nav-bar {
        background-color: #fff;
        color: var(--color-text);
    }

    #detailView .nav-bar .nav-list {
        display: flex;
        width: 100%;
        font-size: 16px;
        align-content: center;
        justify-content: space-around;
    }

    #detailView .nav-bar .nav-list .nav-list-active {
        color: var(--color-tint);
    }

    #detailView #detailContent {
        overflow-y: scroll;
        width: 100%;
        height: 800px;
        padding-bottom: 58px;
        background-color: #fff;
    }
</style>