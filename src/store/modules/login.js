import { signIn } from '../../services/login';

const login = {
  namespaced: true,
  state: {
    user: sessionStorage.getItem('user')
  },

  mutations: {
    setUser(state, { payload }) {
      state.user = payload.user;
    }
  },

  actions: {
    changeName({ commit }, payload) {
      commit({
        type: 'setUser',
        payload: {
          user: payload.name
        }
      })
    },

    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        signIn(payload)
        .then(res => {
          sessionStorage.setItem('user', res.data.name);
          commit({
            type: 'setUser',
            payload: {
              user: res.data.name
            }
          });
          resolve(res);
        });
      });
    },

  }
};

export default login;
