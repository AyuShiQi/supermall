<template>
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
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .nav-bar {
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

    .nav-bar .left,
    .nav-bar .right {
        width: 60px;
        height: 100%;
    }

    .nav-bar .center {
        display: flex;
        height: 100%;
        flex: 1;
        justify-content: space-around;
        align-items: center;
    }
</style>