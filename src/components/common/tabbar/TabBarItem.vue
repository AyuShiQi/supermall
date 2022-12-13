<template>
  <router-link :to="to" custom class="tab-bar-item">
      <div class="img">
        <slot v-if="!isActive" name="normal"></slot>
        <slot v-else name="active"></slot>
      </div>
      <p class="title">{{title}}</p>
  </router-link>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: [
      'to',
      'title'
    ],
    data() {
      return {
        path: this.to
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) >= 0;
      }
    }
}
</script>

<style>
    .tab-bar-item {
        display: flex;
        width: 70px;
        height: 100%;
        background-color: transparent;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .tab-bar-item img {
        width: 20px;
        height: 20px;
        object-fit: contain;
    }

    .tab-bar-item .title {
        font-size: 0.7rem;
        text-align: center;
    }

    .router-link-active .title {
      color: var(--color-high-text);
    }
</style>