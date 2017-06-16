<!-- Created by yj02 on 2017/6/8. -->
<template lang="html">
  <div class="pagination">
    <el-pagination
      layout="total, sizes, prev, pager, next, jumper"
      :total="100">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'pagination'
  }
</script>

<style lang="less">
  @import "../views/styles/base.less";

  .pagination {
    margin-top: 13px;
    .fBox;
    .fBoxJe;
  }
</style>
