<template>
  <div class="backTop" @click="backTop"></div>
</template>

<script>
export default {
    name: 'BackTopBtn',
    methods: {
        backTop() {
            this.$bus.$emit("backTop");
        }
    }
}
</script>

<style>
    .backTop {
        position: fixed;
        z-index: 99;
        right: 0;
        bottom: 0;
        width: 46px;
        height: 46px;
        border: 1px solid var(--color-tint);
        background-color: #fff;
        border-radius: 50%;
        box-shadow: 0 0 5px 0 #6565654a;
    }

    .backTop::before {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        width: 30%;
        height: 30%;
        margin-top: -10%;
        margin-left: -15%;
        border-left: 2px solid var(--color-tint);
        border-top: 2px solid var(--color-tint);
        background-color: transparent;
        transform: rotate(45deg);
    }

    .backTop:active {
        background-color: #fffafa;
    }

</style>