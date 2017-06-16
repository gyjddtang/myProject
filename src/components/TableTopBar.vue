<!-- Created by yj02 on 2017/6/8. -->
<template lang="html">
  <div class="handelBar">
    <el-button type="primary" size="small">新建</el-button>
    <el-input placeholder="请输入搜索关键字" icon="search" size="small"></el-input>
  </div>
</template>

<script>
  export default {
    name: 'tableTopBar'
  }
</script>

<style lang="less">
  @import "../views/styles/base.less";

  .handelBar {
    margin-bottom: 15px;
    .fBox;

    .el-input {
      width: 200px;
    }
  }
</style>
