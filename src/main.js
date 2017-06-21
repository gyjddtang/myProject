// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';   //状态管理
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';   //引入 elememt-ui 样式
import './mock/index.js';   // 注入请求mockjs模拟

  // 注册为全局组件
Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
