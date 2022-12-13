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
        position: fixed;
        left: 0;
        bottom: 0;
        display: flex;
        width: 100%;
        height: 100vh;
        background-color: var(--color-text);
        background: #efefed;
        flex-direction: column;
    }

    #appContent #mainContent {
        overflow-y: scroll;
        height: 100vh;
        flex: 9 1;
    }

    #appContent #tabBar {
        display: flex;
        width: 100%;
        height: 49px;
        padding: 5px;
        border-top: 1px solid #e5e5e5;
        box-shadow: 0 0 5px 0px #e5e5e5;
        background-color: #fff;
        justify-content: space-around;
    }
</style>