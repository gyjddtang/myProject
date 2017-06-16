<template lang="html">
  <div class="mainLayout">
    <aside>
      <Sidebar />
    </aside>
    <section class="rightContainer">
      <HeaderBar />
      <section class="contentContainer" ref="contentContainer">
        <BreadBar />
        <router-view></router-view>
      </section>
      <footer>
        版权所有 © 2017-Mili 由DDT技术部支持
      </footer>
    </section>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  import Sidebar from './Sidebar';
  import HeaderBar from './HeaderBar';
  import BreadBar from './BreadBar';

  export default {
    name: 'app',
    components: {
      Sidebar,
      HeaderBar,
      BreadBar
    },
    computed: {

    },
    mounted() {
      this.setTableHeight(this.$refs.contentContainer.offsetHeight - 49 - 45 - 45);
    },
    methods: {
      ...mapMutations('layout', [
        'setTableHeight'
      ])
    }
  }
</script>

<style lang="less">
  @import "../styles/base.less";

  .mainLayout {
    height: 100%;
    .fBox;
    .fBoxAs;
    .fBoxJs;

    aside {
      width: 200px;
      height: 100%;
    }

    .rightContainer {
      flex: 1;
      height: 100%;
      .fBox;
      .fBoxDc;

      .contentContainer {
        width: 100%;
        flex: 1;
        padding: 0 15px;
        box-sizing: border-box;
      }

      footer {
        width: 100%;
        font-size: 12px;
        line-height: 50px;
        color: #666;
        text-align: center;
      }
    }
  }
</style>
