<template lang="html">
  <header>
    <el-dropdown>
      <div>
        <span>欢迎您：{{ user }}</span>
        <i class="el-icon-arrow-down"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'headerBar',
    computed: {
      ...mapState('login', [
        'user'
      ])
    }
  }
</script>

<style lang="less">
  @import "../styles/base.less";

  header {
    width: 100%;
    height: 50px;
    background: #324157;
    padding: 0 20px;
    box-sizing: border-box;
    .fBox;
    .fBoxJe;

    .el-dropdown {
      cursor: default;
      color: #fff;

      .el-icon-arrow-down {
        margin-left: 5px;
      }
    }
  }
</style>
