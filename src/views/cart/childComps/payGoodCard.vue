<template>
  <li class="pay-good-card">
    <div class="option">
        <button @click="choose" :class="{choose: info.choosed}"></button>
    </div>
    <div class="img">
        <img :src="info.img" alt="省略图">
    </div>
    <div class="text">
        <h3 @click="clickCard(info.iid)">{{info.title}}</h3>
        <p>{{info.desc}}</p>
        <div class="buy-info">
            <p class="price">￥{{getPrice(info.price)}}</p>
            <div class="count">
                <button v-if="countChange" @click="reduce">-</button>
                <span @click="focusCount">×{{info.count}}</span>
                <button v-if="countChange" @click="add">+</button>
            </div>
        </div>
    </div>
  </li>
</template>

<script>
export default {
    name: 'PayGoodCard',
    props: ['index','info'],
    data() {
        return {
            countChange: false
        }
    },
    methods: {
        clickCard(iid) {
            this.$router.push('/detail/'+iid);
        },
        getPrice(price) {
            return (price).toFixed(2);
        },
        choose() {
            this.$store.commit("changeChoose",this.index);
            if(this.info.choosed) {
                this.$store.commit('addPrice',this.index);
            }
            else this.$store.commit('deletePrice',this.index);
        },
        focusCount() {
            this.countChange = !this.countChange;
        },
        add() {
            if(this.info.choosed) this.$store.commit('addOne',this.index);
            this.$store.commit('addCount',this.index);
        },
        reduce() {
            if(this.info.choosed) this.$store.commit('deleteOne',this.index);
            this.$store.commit('reduceCount',this.index);
        }
    },
}
</script>

<style>
    .pay-good-card {
        overflow: hidden;
        display: flex;
        width: 100%;
        height: 140px;
        padding: 10px 5px;
        border-bottom: 1px solid #eee;
        margin-bottom: 5px;
        background-color: #fff;
        border-radius: 10px;
        align-items: center;
        justify-content: space-between;
    }

    .pay-good-card .option {
        display: flex;
        width: 8%;
        height: 100%;
        align-items: center;
    }

    .pay-good-card .option button {
        width: 20px;
        height: 20px;
        border: 1px solid #eee;
        background-color: #fff;
        border-radius: 50%;
    }

    .pay-good-card .option .choose {
        position: relative;
        background-color: var(--color-tint);
    }

    .pay-good-card .option .choose::after {
        content: "√";
        position: absolute;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 20px;
    }

    .pay-good-card .img {
        overflow: hidden;
        width: 25%;
        height: 100%;
        border-radius: 5px;
    }   

    .pay-good-card .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pay-good-card .text {
        display: flex;
        width: 65%;
        height: 100%;
        padding: 0 2%;
        flex-direction: column;
        justify-content: space-between;
    }

    .pay-good-card .text h3 {
        overflow: hidden;
        width: 100%;
        font-size: 16px;
        text-overflow:ellipsis;
	    white-space: nowrap;
    }

    .pay-good-card .text p {
        overflow: hidden;
        width: 100%;
        text-overflow:ellipsis;
	    white-space: nowrap;
    }

    .pay-good-card .text .buy-info {
        display: flex;
        width: 100%;
        /* padding-top: 10%; */
        justify-content: space-between;
        align-items: flex-end;
    }

    .pay-good-card .text .buy-info .price {
        color: #f58b5a;
        font-size: 16px;
        font-weight: 600;
    }

    .pay-good-card .text .buy-info .count {
        display: flex;
        height: 30px;
        border: 1px solid #dcdcdc;
        font-size: 16px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }

    .pay-good-card .buy-info .count span {
        display: block;
        padding: 0 5px;
    }

    .pay-good-card .buy-info .count button {
        width: 25px;
        height: 100%;
        padding: 0 5px;
        background-color: #fff;
    }

    .pay-good-card .buy-info .count button:first-child {
        border-right: 1px solid #dcdcdc;
    }

    .pay-good-card .buy-info .count button:last-child {
        border-left: 1px solid #dcdcdc;
    }
</style>