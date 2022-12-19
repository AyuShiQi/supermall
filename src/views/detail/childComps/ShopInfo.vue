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
                <li v-for="score in shopInfo?.score" :key="score.name" :class="{'better-score': score.isBetter}">
                    <span>{{score.name}}</span>
                    <span class="score">{{score.score}}</span>
                </li>
            </ul>
        </div>
        <div class="footer-bottom">
            <a class="goto-btn" :href="shopInfo?.shopUrl" >进店逛逛</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopInfo',
    props: ['shopInfo'],
    methods: {
        numberWithUnit(num) {
            if(num>=10000) {
                return (num/10000).toFixed(1)+'万';
            }
            return num;
        },
        gotoShop() {

        }
    }
}
</script>

<style>
    #shopInfoContent {
        width: 100%;
        height: 252px;
        padding: 20px 10px;
        border-bottom: 5px solid #f5f5f5;
        background-color: #fff;
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
        height: 120px;
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

    #shopInfoContent .else-info .right {
        width: 50%;
        padding-left: 30px;
        flex-direction: column;
    }

    #shopInfoContent .else-info .right li {
        position: relative;
        padding: 4px 0;
    }

    #shopInfoContent .else-info .right li .score {
        padding-left: 5px;
        color: var(--color-green);
    }

    #shopInfoContent .else-info .right li::after {
        content: "低";
        position: absolute;
        right: 30px;
        width: 15px;
        height: 18px;
        color: #fff;
        background-color: var(--color-green);
    }

    #shopInfoContent .else-info .right .better-score .score {
        color: var(--color-green);
        color: var(--color-red);
    }

    #shopInfoContent .else-info .right .better-score::after {
        content: "高";
        background-color: var(--color-red);
    }

    #shopInfoContent .footer-bottom {
        text-align: center;
    }

    #shopInfoContent .goto-btn {
        display: inline-block;
        width: 150px;
        height: 36px;
        color: var(--color-text);
        background-color: #f1f5f9;
        text-align: center;
        line-height: 36px;
        border-radius: 15px;
    }


</style>