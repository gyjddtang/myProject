import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';
import layout from './modules/layout';
import trainee from './modules/trainee';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    login,
    layout,
    trainee
  }
});

export default store;
