<template>
  <li class="good-card">
    <a href="javascript:;" class="card-link">
      <div class="card-img">
        <img :src="goodInfo.show.img" :alt="goodInfo.title">
      </div>
      <p class="title">{{goodInfo.title}}</p>
      <p class="else-info">
        <span class="price">{{goodInfo.price}}</span>
        <span class="sale">☆{{goodInfo.cfav}}</span>
      </p>
    </a>
  </li>
</template>

<script>
export default {
    name: 'GoodCard',
    props: ['goodInfo']
}
</script>

<style>
    .good-card {
        overflow: hidden;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
    }

    .good-card .card-link {
        display: block;
        width: 100%;
        height: 100%;
    }

    .good-card .title {
        overflow: hidden;
        padding: 2px 5px;
	    text-overflow:ellipsis;
	    white-space: nowrap;
    }

    .good-card .else-info {
        padding: 2px 0;
        text-align: center;
    }

    .good-card .else-info .price {
        padding: 0 2px;
        color: var(--color-tint);
    }

    .good-card .else-info .sale {
        padding: 0 2px;
    }

    .good-card .card-link .card-img img {
        width: 100%;
        object-fit: contain;
    }
</style>