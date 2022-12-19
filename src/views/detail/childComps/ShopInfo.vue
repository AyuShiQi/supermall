<template>
    <div id="shopInfoContent">
        <div class="title">
            <div class="img-ico">
                <img :src="shopInfo?.shopLogo" alt="店铺">
            </div>
            <p>{{shopInfo?.name}}</p>
        </div>
        <div class="else-info">
            <ul class="left">
                <li>
                    <p class="number">{{numberWithUnit(shopInfo?.cSells)}}</p>
                    <p>总销量</p>
                </li>
                <li>
                    <p class="number">{{numberWithUnit(shopInfo?.cGoods)}}</p>
                    <p>全部宝贝</p>
                </li>
            </ul>
            <ul class="right">

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInfo',
    props: ['shopInfo'],
    computed: {
    },
    methods: {
        numberWithUnit(num) {
            if(num>=10000) {
                return (num/10000).toFixed(1)+'万';
            }
            return num;
        }
    }
}
</script>

<style>
    #shopInfoContent {
        width: 100%;
        height: 280px;
        padding: 20px 10px;
        border-bottom: 5px solid #f5f5f5;
        background-color: pink;
    }

    #shopInfoContent .title {
        width: 100%;
        height: 46px;
    }

    #shopInfoContent .title .img-ico {
        overflow: hidden;
        float: left;
        width: 46px;
        height: 46px;
        margin-right: 10px;
        border-radius: 50%;
    }

    #shopInfoContent .title .img-ico img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #shopInfoContent .title p {
        line-height: 46px;    
    }

    #shopInfoContent .else-info {
        display: flex;
        width: 100%;
        height: 150px;
        padding: 10px 0;
        background-color: #fff;
        align-items: center;
        justify-content: space-between;
    }

    #shopInfoContent .else-info .left {
        display: flex;
        width: 50%;
        height: 40%;
        border-right: 1px solid #eaeaea;
        align-items: center;
        justify-content: space-around;
    }

    #shopInfoContent .else-info .left li {
        text-align: center;
        font-size: 15px;
    }

    #shopInfoContent .else-info .left p {
        padding: 3px;
    }

    #shopInfoContent .else-info .number {
        font-size: 20px;
    }
</style>