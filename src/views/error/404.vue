<template lang="html">
  <div class='error'>
    <i class='el-icon-warning'></i>
    <h1>404 未找到该页面</h1>
  </div>
</template>

<script>
  export default {
    name: 'Err404'
  }
</script>

<style lang="less">
  .error {
    text-align: center;
    margin: 200px auto 0;
    color: #20a0ff;

    .el-icon-warning {
      font-size: 40px;
    }

    h1 {
      margin-top: 10px;
      font-size: 16px;
    }
  }
</style>
