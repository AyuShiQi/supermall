<template>
  <div class="nav-bar-content">
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>

    .nav-bar-content {
      width: 100%;
      height: 44px;
    }

    .nav-bar-content .nav-bar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        width: 100%;
        height: 44px;
        line-height: 44px;
        padding: 0 10px;
        font-size: 20px;
        box-shadow: 0 0 10px 0 #00000013;
        justify-content: space-between;
        align-items: center;
    }

    .nav-bar-content .nav-bar .left,
    .nav-bar-content .nav-bar .right {
        width: 60px;
        height: 100%;
    }

    .nav-bar-content .nav-bar .center {
        display: flex;
        height: 100%;
        flex: 1;
        justify-content: space-around;
        align-items: center;
    }
</style>