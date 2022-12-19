<template>
  <div id="paramContent">
    <h4 class="title-info">{{rule?.key}}</h4>
    <table id="sizeTable">
        <tr v-for="(size,i) in rule?.tables[0]" :key="i">
            <td v-for="(info,i) in size" :key="i">{{info}}</td>
        </tr>
    </table>
    <p class="title-info">{{rule?.disclaimer}}</p>
    <h4 class="title-info">{{info?.key}}</h4>
    <table id="sizeTable">
        <tr v-for="(info,i) in info?.set" :key="i">
            <td>{{info.key}}</td>
            <td class="pink-color">{{info.value}}</td>
        </tr>
    </table>
 </div>
</template>

<script>
export default {
    name: 'DetailParamView',
    props: ['info','rule'],
    data() {
        return {
            key: null,
            disclaimer: null,
            tables: null,
        }
    }
}
</script>

<style>
    #paramContent {
        padding: 10px 20px 0;
        width: 100%;
    }

    #paramContent .title-info {
        padding: 5px 0;
        /* border-bottom: 2px solid #f5f5f5; */
    }

    #paramContent #sizeTable {
        width: 100%;
        border-bottom: 4px solid #f5f5f5;
        border-collapse:collapse;
    }

    #paramContent #sizeTable tr {
        border-bottom: 2px solid #f5f5f5;
        line-height: 30px;
    }

    #paramContent #sizeTable tr td:first-child {
        width: 36%;
    }

    #paramContent #sizeTable tr .pink-color {
        color: var(--color-tint);
    }
</style>