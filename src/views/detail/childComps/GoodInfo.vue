<template>
  <div class="detail_good-info">
    <p class="title">{{itemInfo?.title}}</p>
    <p class="price">
        <span class="now-price">￥{{itemInfo?.highNowPrice}}</span>
        <span class="high-price">￥{{itemInfo?.highPrice}}</span>
        <span class="discount">{{itemInfo?.discountDesc}}</span>
    </p>
    <ul class="columns-info">
        <li v-for="item in columnInfo" :key="item">
            {{item}}
        </li>
    </ul>
    <ul class="service-info">
        <li v-for="item in services" :key="item.name">
            <img :src="item.icon" :alt="item.icon">    {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'DetailGoodInfo',
    props: ['columnInfo','itemInfo','services'],
}
</script>

<style>
    .detail_good-info {
        width: 100%;
        padding: 10px 5px;
        border-bottom: 4px solid #f5f5f5;
    }

    .detail_good-info .title {
        font-size: 20px;
        color: black;
    }

    .detail_good-info .price {
        padding: 6px 0;
        vertical-align: baseline;
    }

    .detail_good-info .price .now-price {
        font-size: 24px;
        color: var(--color-high-text);
    }

    .detail_good-info .price .high-price {
        padding: 0 5px;
        font-size: 14px;
        text-decoration: line-through solid black 1px;
    }

    .detail_good-info .price .discount {
        display: inline-block;
        padding: 4px;
        color: #fff;
        background-color: var(--color-tint);
        border-radius: 8px;
        transform: translate(0,-5px) scale(75%);
    }

    .detail_good-info .columns-info {
        display: flex;
        padding: 10px 0 5px;
        border-bottom: 3px solid #f5f5f5;
        font-size: 14px;
        color: #aaa;
        align-items: center;
        justify-content: space-between;
    }

    .detail_good-info .service-info {
        height: 10px;
        margin: 20px 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .detail_good-info .service-info li {
        font-size: 12px;
        height: 100%;
    }

    .detail_good-info .service-info img{
        height: 100%;
    }
</style>