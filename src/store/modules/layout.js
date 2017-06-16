import { getSource } from '../../services/layout';

const layout = {
  namespaced: true,
  state: {
    menus: void 0,
    currentMenu: {
      currentActive: void 0,
      currentOpen: void 0
    },
    tableHeight: void 0
  },

  mutations: {
    setMenu(state, { payload }) {
      state.menus = payload.menus;
    },
    setCurrentMenu(state, currentMenu) {
      state.currentMenu = { ...state.currentMenu, ...currentMenu };
    },
    setTableHeight(state, value) {
      state.tableHeight = value;
    }
  },

  actions: {
    getMenu({ commit }, payload) {
      return new Promise((resolve, reject) => {
        getSource()
          .then(res => {
            commit({
              type: 'setMenu',
              payload: {
                menus: res.data
              }
            });
            resolve(res.data);
          });
      })
    }
  }
};

export default layout;
