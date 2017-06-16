<template lang="html">
  <div class="asideContainer">
    <h5 class="nameTitle">Mili 后台系统</h5>
    <el-menu theme='dark' :unique-opened="true" :router='true' :default-active='$route.path' :default-openeds="defaultOpen" @select="onSelect">
      <el-submenu v-for="(menu, index) of menus" :index="menu.text" :key='menu.id'>
        <template slot="title"><i :class="iconSource[index]"></i>{{ menu.text }}</template>
        <el-menu-item v-for="item of menu.children" :index="item.pathName" :key='item.id'>{{ item.text }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { mapState, mapActions, mapMutations } from 'vuex';
  const iconSource = ['el-icon-date', 'el-icon-document', 'el-icon-information', 'el-icon-menu', 'el-icon-message', 'el-icon-setting', 'el-icon-star-on'];

  export default {
    name: 'sidebar',
    data() {
      return {
        iconSource,
        defaultOpen: []
      }
    },
    computed: {
      ...mapState('layout', [
        'menus',
        'currentMenu'
      ]),
    },
    created() {
      this.getMenu()
      .then(res => {
        this.findMenu(this.$route.path);
      });
    },
    methods: {
      ...mapActions('layout', [
        'getMenu'
      ]),

      ...mapMutations('layout', [
        'setCurrentMenu'
      ]),

      onSelect(index, indexPath) {
        this.findMenu(index);
      },

      findMenu(matchPath) {
        for(let i = 0; i < this.menus.length; i++) {
          for(let j = 0; j < this.menus[i].children.length; j++) {
            if(this.menus[i].children[j].pathName == matchPath) {
              this.defaultOpen = [this.menus[i].text];
              this.setCurrentMenu({
                currentActive: this.menus[i].children[j].text,
                currentOpen: this.menus[i].text
              });
            }
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .asideContainer {
    height: 100%;
    background: #1f2d3d;
    padding-top: 20px;
    box-sizing: border-box;

    .nameTitle {
      color: #bfcbd9;
      text-align: center;
      border-radius: 5px;
      background: rgba(255, 255, 255, .2);
      line-height: 40px;
      margin: 0 15px 20px;
    }
  }
</style>
