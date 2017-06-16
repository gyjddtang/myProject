<template lang="html">
  <div class="frameContainer">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'frame'
  }
</script>

<style lang="less">
  .frameContainer {
    width: 100%;
    height: 100%;
  }
</style>
