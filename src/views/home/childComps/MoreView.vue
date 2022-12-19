<template>
  <div id="moreContent">
    <TabControl :title="filter" :changeViewGoods="changeViewGoods"/>
    <ul class="good-card-ul">
      <GoodCard v-for="(item,i) in nowView.list" :key="i+item.iid" :goodInfo="item" @click.native="clickCard(item.iid)"/>
    </ul>    
  </div>
</template>

<script>
import TabControl from '@/components/content/tabControl/TabControl.vue'
import GoodCard from '@/components/content/GoodCard.vue'

export default {
    name: 'MoreView',
    components: {TabControl,GoodCard},
    props: {
        filter: {
            type: Array,
            default: []
        },
        goods: {
           type: Object,
           default: [] 
        },
        homeLoad: {
            type: Function
        }
    },
    data() {
        return {
            nowType: 'pop'
        }
    },
    computed: {
        nowView() {
            return this.goods[this.nowType];
        }
    },
    methods: {
        changeViewGoods(sort){
            this.nowType = sort;
        },
        loadWatcher() {
            this.$bus.$on('homeLoad',()=>{
                this.homeLoad(this.nowType);
            });
        },
        clickCard(iid) {
            console.log(iid);
            this.$router.push('/detail/'+iid);
        }
    },
    mounted() {
        this.loadWatcher();
    }
}
</script>

<style>
    #moreContent {
        top: 44px;
        width: 100%;
        margin-top: 15px;
    }

    #moreContent .tab-control {
        position: sticky;
        top: 42px;
    }

    #moreContent .good-card-ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: auto;
        grid-auto-flow: row dense;
        grid-gap: 10px;
    }
</style>