<template>
    <ul id="RecommendContent">
        <GoodCard v-for="info in recommend" 
        :goodInfo="getGoodInfo(info)" 
        :key="info.item_id"></GoodCard>
    </ul>
</template>

<script>
import GoodCard from '@/components/content/GoodCard.vue'

import { getRecommend } from '@/network/detail'

export default {
    name: 'DetailRecommendView',
    components: {GoodCard},
    data() {
        return {
            recommend: null
        }
    },
    methods: {
        getRecommend() {
            getRecommend().then(res=>{
                this.recommend = res.data.list;
            });
        },
        getGoodInfo(info){
            return {
                show: {
                    img: info.image
                },
                title: info.title,
                price: info.price,
                sfav: info.cfva
            }
        }
    },
    mounted() {
        this.getRecommend();
    }
}
</script>

<style>
    #RecommendContent {
        display: grid;
        grid-gap: 5px;
        grid-template-columns: repeat(2,1fr);
    }
</style>