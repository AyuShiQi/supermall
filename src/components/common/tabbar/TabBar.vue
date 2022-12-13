<template>
    <div id="appContent">
        <div id="mainContent">
          <router-view></router-view>
        </div>
        <footer id="tabBar">
            <slot></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style>
    #appContent {
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: var(--color-text);
        flex-direction: column;
    }

    #appContent #mainContent {
        height: 400px;
        background-color: #fff;
        flex: 9 1;
    }

    #appContent #tabBar {
        display: flex;
        height: 49px;
        padding: 5px;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0 0 5px 0px #e5e5e5;
        background-color: #fff;
        justify-content: space-around;
    }
</style>