<template>
    <div id="appContent">
        <div id="mainContent" ref="mainContent">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
        <footer id="tabBar">
            <slot></slot>
        </footer>
        <BackTop class="back-top" :class="{'back-top-active': backTopActive}"/>
    </div>
</template>

<script>
// import BScroll from 'better-scroll'
import BackTop from '@/components/content/BackTop.vue'

export default {
    name: 'TabBar',
    components: {BackTop},
    data() {
        return {
            backTopActive: false,
        }
    },
    methods: {
      listenScroll() {
        this.$refs.mainContent.addEventListener('scroll',(e)=>{
          if(this.$store.state.homeLoadEnd) {
            const clientHeight = e.target.clientHeight;
            const scrollTop = e.target.scrollTop;
            const scrollHeight = e.target.scrollHeight;
            // 这个是判断是否继续请求数据的
            if (clientHeight + scrollTop === scrollHeight) {
              this.continueGetGoods();
            }

            if(scrollTop>400) {
              this.activeBackTop();
            }
            else {
              this.deactiveBackTop();
            }
          }
        });
      },
      continueGetGoods() {
        this.$store.commit('homeLoad');
              // 触发数据请求
        this.$bus.$emit('homeLoad');;
      },
      activeBackTop() {
        this.backTopActive = true;
      },
      deactiveBackTop() {
        this.backTopActive = false;
      },
      backTop() {
        this.$bus.$on('backTop',()=>{
          this.$refs.mainContent.scrollTo(0,0);
        })
      }
    },
    mounted() {
      this.listenScroll();
      this.backTop();
    }
}
</script>

<style>
    #appContent {
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: var(--color-text);
        background: #efefed;
        flex-direction: column;
    }

    #appContent #mainContent {
        overflow-y: scroll;
        scroll-behavior: smooth;
        height: 100vh;
        flex: 9 1;
    }

    #appContent #tabBar {
        display: flex;
        width: 100%;
        height: 49px;
        padding: 5px;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0 0 5px 0px #e5e5e5;
        background-color: #fff;
        justify-content: space-around;
    }

    #appContent .back-top {
      margin: 0 -50px 52px 0;
      transition: all 0.3s ease 0s;
    }

    #appContent .back-top-active {
      margin-right: 2px;
    }
</style>