<template>
  <div id="moreContent">
    <TabControl :title="title"/>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>8</li>
    <li>8</li>
    <li>8</li>
    <li>4</li>
  </div>
</template>

<script>
import TabControl from '@/components/content/tabControl/TabControl.vue'
export default {
    name: 'MoreView',
    components: {TabControl},
    data() {
        return {
            title: ['流行','新款','精选']
        }
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
        top: 44px;
    }
</style>