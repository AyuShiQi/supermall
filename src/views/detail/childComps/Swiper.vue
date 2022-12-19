<template>
    <div id="swiperdetail">
        <div class="swiper-container" id="swiperIndex">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,i) in banners" :key="item">
                    <img :src="item" :alt="i">
                </li>
            </ul>
            <!-- //换页器 -->
            <div class="swiper-pagination">

            </div>
            <!-- //前进后退 -->
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
            <!-- //滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.min.css'  //引入swiper样式
import Swiper from 'swiper';	//引入swiper
export default {
    name: "mySwiper",
    props: ['banners'],
    data(){
        return{
            mySwiper: null,
        }
    },
    mounted() {
        setTimeout(() => {
          this.mySwiper = new Swiper('#swiperIndex',{
            //配置分页器内容
            loop: true, // 循环模式选项
            autoplay: 1,
            pagination: ".swiper-pagination",//换页器与哪个标签关联
              // 如果需要前进后退按钮
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },
            // //如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true//修改swiper的父元素时，自动初始化swiper
          })
        },100);
        
    }
}
</script>

<style>
    #swiperdetail{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 300px;
        background-color: #fff;
    }

    #swiperdetail #swiperIndex {
        width: 100%;
        height: 100%;
    }

    #swiperdetail #swiperIndex .swiper-slide {
        overflow: hidden;
        height: 100%;
    }

    #swiperdetail #swiperIndex .swiper-slide img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    #swiperdetail #swiperIndex .swiper-pagination {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 20px;

        /* background-color: red; */
    }

    #swiperdetail #swiperIndex .swiper-pagination-bullet-active {
        background-color: orangered;
    }
</style>
