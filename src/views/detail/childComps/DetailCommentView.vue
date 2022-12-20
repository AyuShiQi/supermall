<template>
  <dl id="commentContent">
        <dt class="title">
            <h4>用户评价</h4>
            <p>更多</p>
        </dt>
       <dd v-for="info in rates" :key="info.rateId" class="comment-card">
            <div class="user">
                <div class="img"><img src="~@/assets/img/detail/touxiangi.svg" alt="头像"></div>
                <p>{{info.user.uname}}</p>
            </div>
            <p class="comment">{{info.content}}</p>
            <p class="else-info">
                <span>{{getDate(info.created)}}</span>
                <span>{{info.style}}</span>
            </p>
            <ul class="image" v-if="info.images!=null">
                <li v-for="(img,i) in info.images" :key="i">
                    <img :src="img" alt="返图">
                </li>
            </ul>
       </dd> 
  </dl>
</template>

<script>

export default {
    name: 'DetailCommentView',
    props: ['rates'],
    computed: {
        hasComment() {
            if(this.rates?.length>0) {
                return true;
            }
            return false;
        }
    },
    methods: {
        getDate(time) {
            const date = new Date(time);
            return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        }
    },
}
</script>

<style>
    #commentContent {
        padding: 20px 20px 10px;
        border-bottom: 5px solid #f5f5f5;
    }

    #commentContent .title {
        display: flex;
        padding-bottom: 10px;
        border-bottom: 2px solid #f5f5f5;
        justify-content: space-between;
        align-items: center;
    }

    #commentContent .comment-card {
        padding: 10px 0;
    }

    #commentContent .comment-card .user {
        display: flex;
        align-items: center;
    }

    #commentContent .comment-card .user .img {
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    #commentContent .comment-card .user .img img {
        width: 100%;
        height: 100%;
    }

    #commentContent .comment-card .user p {
        padding-left: 5px;
        font-weight: 600;
    }

    #commentContent .comment-card .comment {
        color: #828282;
        padding: 15px 0;
    }

    #commentContent .comment-card .else-info {
        font-size: 16px;
        color: #aaa;
    }

    #commentContent .comment-card .else-info span{
        padding-right: 10px;
    }

    #commentContent .comment-card .image {
        display: flex;
        padding-top: 10px;
        align-items: center;
        align-content: center;
    }

    #commentContent .comment-card .image li {
        width: 80px;
        height: 80px;
        margin-right: 5px;
        }

    #commentContent .comment-card .image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>