<template lang="html">
  <div class="breadcrumb">
    <div class="breadItem">
      <span>{{ currentMenu.currentOpen }}</span>
      <span class="icon">/</span>
    </div>
    <div class="breadItem">
      <span>{{ currentMenu.currentActive }}</span>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'breadBar',
    computed: {
      ...mapState('layout', [
        'currentMenu'
      ])
    }
  }
</script>

<style lang="less">
  @import "../styles/base.less";

  .breadcrumb {
    padding: 15px 0;
    .fBox;
    .fBoxJs;

    .breadItem {
      font-size: 14px;
      color: #999;

      &:last-child {
        color: #666;
      }

      .icon {
        margin: 0 5px;
      }
    }
  }
</style>
