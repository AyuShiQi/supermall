<template>
  <ul class="tab-control">
    <li v-for="(item,i) in title" :key="item.sort" @click="changeOption(i,item.sort)" :class="{active: currentIndex==i}">
        {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        title: {
            type: Array,
            default: []
        },
        changeViewGoods: {
            type: Function
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        changeOption(index,sort) {
            this.currentIndex = index;
            this.changeGoods(sort);
        },
        changeGoods(sort) {
            this.changeViewGoods(sort);
        }
    }
}
</script>

<style>
    .tab-control {
        display: flex;
        width: 100%;
        height: 44px;
        background-color: #fff;
        box-shadow: 0 5px 5px 0 rgba(132, 132, 132, 0.05);
        justify-content: space-around;
        align-items: center;
    }

    .tab-control li {
        height: 35px;
        line-height: 35px;
        color: var(--color-text);
    }


    .tab-control .active {
        border-bottom: 2px solid var(--color-tint);
        color: var(--color-tint);
    }
</style>