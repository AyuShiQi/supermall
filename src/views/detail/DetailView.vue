<template>
  <div id="detailView">
    <NavBar class="nav-bar">
        <div slot="left" @click="comeBack">&lt;</div>
        <ul slot="center" class="nav-list">
            <li :class="{'nav-list-active': currentIndex==1}" @click="gotoGood">商品</li>
            <li :class="{'nav-list-active': currentIndex==2}" @click="gotoInfo">参数</li>
            <li :class="{'nav-list-active': currentIndex==3}" @click="gotoCommand">评论</li>
            <li :class="{'nav-list-active': currentIndex==4}" @click="gotoRecommend">推荐</li>
        </ul>
    </NavBar>
    <div id="detailContent" ref="detailContent">
        <DetailGoodView ref="GoodView" :itemInfo="result?.itemInfo"
                        :columns="result?.columns"
                        :shopInfo="result?.shopInfo"
                        :detailInfo="result?.detailInfo"
                        :banners="result?.itemInfo.topImages"
                        :services="result?.shopInfo.services"/>
        <DetailParamView ref="ParamView" :info="itemParams?.info" :rule="itemParams?.rule"/>
        <DetailCommentView ref="CommentView" :rates="rate"/>
        <DetailRecommendView ref="RecommendView"/>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import FooterBar from './childComps/FooterBar.vue'
import DetailGoodView from './childComps/DetailGoodView';
import DetailParamView from './childComps/DetailParamView';
import DetailCommentView from './childComps/DetailCommentView';
import DetailRecommendView from './childComps/DetailRecommendView';

import NavBar from '@/components/common/navbar/NavBar.vue'

import { getGoodWithIID } from '@/network/detail'

export default {
    name: 'Detail',
    components: {NavBar,FooterBar,
                DetailGoodView,
                DetailParamView,
                DetailCommentView,
                DetailRecommendView},
    data() {
        return {
            currentIndex: 1,
            result: null,
            itemParams: null,
            iid: '',
            rate: null,
            goodScroll: 0,
            paramScroll: 10000,
            commentScroll: 10000,
            recommendScroll: 10000
        }
    },
    methods: {
        gotoGood() {
            if(this.currentIndex!=1) {
                this.currentIndex = 1;
                // 划过去
                this.$refs.detailContent.scrollTo(0,this.goodScroll);
            }
        },
        gotoInfo() {
            if(this.currentIndex!=2) {
                this.currentIndex = 2;
                this.$refs.detailContent.scrollTo(0,this.paramScroll);
            }   
        },
        gotoCommand() {
            if(this.currentIndex!=3) {
                this.currentIndex = 3;
                this.$refs.detailContent.scrollTo(0,this.commentScroll);
            }
        },
        gotoRecommend() {
            if(this.currentIndex!=4) {
                this.currentIndex = 4;
                this.$refs.detailContent.scrollTo(0,this.recommendScroll);
            }  
        },
        comeBack() {
            this.$router.back();
        },
        /**
         * 网络请求
         */
        getGoodInfo() {
            getGoodWithIID(this.iid)
            .then(data=>{
                this.result = data.result;
                this.itemParams = data.result.itemParams;
                this.rate = data.result.rate.list;
            })
        },
    },
    created() {
        this.currentIndex = 1;
    },
    activated() {
        this.iid = this.$route.params.iid;
        this.getGoodInfo();
        
        setTimeout(()=>{
            this.paramScroll = this.$refs.ParamView.$el.offsetTop;
            this.commentScroll= this.$refs.CommentView.$el.offsetTop;
            this.recommendScroll = this.$refs.RecommendView.$el.offsetTop;
        },1000);

        this.$refs.detailContent.addEventListener('scroll',e=>{
            const top = e.target.scrollTop;
            if(top<this.paramScroll) {
                this.currentIndex = 1;
            }
            else if(top<this.commentScroll) {
                this.currentIndex = 2;
            }
            else if(top<this.recommendScroll) {
                this.currentIndex = 3;
            }
            else {
                this.currentIndex = 4;
            }
        });
    },
    deactivated() {
        this.banners = null;
    }
}
</script>

<style>
    #detailView {
        position: fixed;
        z-index: 9;
        width: 100%;
        height: 100vh;
    }

    #detailView .nav-bar {
        background-color: #fff;
        color: var(--color-text);
    }

    #detailView .nav-bar .nav-list {
        display: flex;
        width: 100%;
        font-size: 16px;
        align-content: center;
        justify-content: space-around;
    }

    #detailView .nav-bar .nav-list .nav-list-active {
        color: var(--color-tint);
    }

    #detailView #detailContent {
        position: relative;
        overflow-y: scroll;
        width: 100%;
        height: 800px;
        padding-bottom: 58px;
        background-color: #fff;
        scroll-behavior: smooth;
    }
</style>
