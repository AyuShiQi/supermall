<template>
  <div id="recommendContent">
    <a class="recommend-item" v-for="item in recommends" :key="item.title" :href="item.link">
      <div class="recommend-img">
        <img :src="item.image" :alt="item.title">
      </div>
      <p class="recommend-title">{{item.title}}</p>
    </a>
  </div>
</template>

<script>
export default {
    name: 'Recommends',
    props: ['recommends'],
}
</script>

<style>
  #recommendContent {
    display: flex;
    width: 100%;
    height: 130px;
    margin-bottom: 15px;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
  }

  #recommendContent .recommend-item {
    display: block;
    width: 80px;
    height: 110px;
    text-align: center;
  }

  #recommendContent .recommend-item .recommend-img {
    overflow: hidden;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--color-tint);
  }

  .recommend-item .recommend-img img {
    width: 100%;
    object-fit: contain;
  }

  #recommendContent .recommend-item .recommend-title {
    margin-top: 10px;
  }
</style>