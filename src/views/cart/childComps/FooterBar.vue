<template>
  <div id="cartContent">
    <div id="cartFooterBar">
        <div class="left">
            <button @click="choose" :class="{choose: allChoosed}"></button>
            <p class="all-choose">全选</p>
            <p class="total">合计:￥{{$store.state.payPrice.toFixed(2)}}</p> 
        </div>
        <button class="right">
            去计算({{$store.state.cartCount}})
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CarFooterBar',
    computed: {
        allChoosed() {
            return this.$store.state.cartTotal == this.$store.state.cartCount;
        }
    },
    methods: {
        choose() {
            if(this.allChoosed) {
                this.$store.commit('noAll');
            }
            else this.$store.commit('chooseAll');
        },
    }
}
</script>

<style>
    #cartContent {
        width: 100%;
        height: 36px;
    }

    #cartFooterBar {
        display: flex;
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 36px;
        background-color: #fff;
        justify-content: space-between;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.164);
    }

    #cartFooterBar .left {
        display: flex;
        padding: 5px 10px;
        align-items: center;
    }

    #cartFooterBar .right {
        width: 120px;
        height: 100%;
        color: #fff;
        background-color: #ff5300;
    }


    #cartFooterBar .left button {
        width: 20px;
        height: 20px;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 50%;
    }

    #cartFooterBar .left .choose {
        position: relative;
        background-color: var(--color-tint);
    }

    #cartFooterBar .left .choose::after {
        content: "√";
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 20px;
    }

    #cartFooterBar .left .all-choose {
        padding-left: 5px;
    }

    #cartFooterBar .left .total {
        padding-left: 15px;
        font-size: 16px;
        color: #a4a4a4;
    }
</style>