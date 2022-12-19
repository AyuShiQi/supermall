<template>
  <div id="goodContent">
        <MySwiper :banners="banners"></MySwiper>
        <GoodInfo :itemInfo="itemInfo" :columnInfo="columns" :services="services"></GoodInfo>
        <ShopInfo :shopInfo="shopInfo"></ShopInfo>
        <ul class="detail-info">
            <li>{{detailInfo?.desc}}</li>
            <li class="fenge"><img src="~@/assets/img/detail/fenge.webp" alt="分割线"></li>
            <li v-for="detail in detailInfo?.detailImage" :key="detail.key" class="detail-img">
                <p>{{detail.key}}</p>
                <img v-for="img in detail.list" :key="img" :src="img" alt="详情">
            </li>
        </ul>
 </div>
</template>

<script>
import MySwiper from './Swiper.vue'
import GoodInfo from './GoodInfo.vue'
import ShopInfo from './ShopInfo.vue'
export default {
    name: 'DetailGoodView',
    components: {MySwiper,GoodInfo,ShopInfo},
    props: ['itemInfo','columns','shopInfo','detailInfo','banners','services'],
    data() {
        return {

        }
    }
}
</script>

<style>
    #goodContent {
        width: 100%;
        border-bottom: 5px solid #f5f5f5;
    }

    #goodContent  .detail-info {
        padding: 20px 20px 0;
    }

    #detailContent .detail-info .fenge {
        overflow: hidden;
        width: 100%;
        height: 20px;
    }

    #goodContent .detail-info .fenge img {
        height: 100%;
    }

    #goodContent .detail-info .detail-img {
        padding-top: 20px;
    }

    #goodContent .detail-img img {
        width: 100%;
        object-fit: contain;
    }
</style>