<template>
    <ul id="detailFooterBar">
        <li class="small">
            <img src="~@/assets/img/detail/kefu_pink.svg" alt="客服">
            <p>客服</p>
        </li>
        <li class="small">
            <img src="~@/assets/img/detail/dianpu.svg" alt="店铺">
            <p>店铺</p>
        </li>
        <li class="small">
            <img src="~@/assets/img/detail/shoucang.svg" alt="收藏">
            <p>收藏</p>
        </li>
        <li class="large">加入购物车</li>
        <li class="large">购买</li>
    </ul>
</template>

<script>
export default {
    name: 'FooterBar',
    data() {
        return {

        }
    }
}
</script>

<style>
    #detailFooterBar {
        position: absolute;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 58px;
        background-color: pink;
        align-items: center;
    }

    #detailFooterBar .small {
        display: flex;
        width: 16%;
        height: 100%;
        background-color: #fff;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #detailFooterBar .small img {
        width: 38%;
    }

    #detailFooterBar .small p {
        padding-top: 5px;
        font-size: 14px;
    }

    #detailFooterBar .large {
        width: 26%;
        height: 100%;
        font-size: 16px;
        text-align: center;
        line-height: 58px;
    } 

    #detailFooterBar .large:nth-of-type(4) {
        background-color: #ffdd12;
    }

    #detailFooterBar .large:nth-of-type(5) {
        color: #fff;
        background-color: var(--color-tint);
    }

</style>