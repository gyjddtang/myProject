/**
 * Created by yj02 on 2017/6/7.
 */
import { getData } from '../../services/trainee';

let trainee = {
  namespaced: true,
  state: {
    dataSource: []
  },

  mutations: {
    setDataSource(state, { payload }) {
      state.dataSource = payload.dataSource;
    }
  },

  actions: {
    getList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        getData()
        .then(res => {
          commit({
            type: 'setDataSource',
            payload: {
              dataSource: res.data
            }
          });
          resolve(res);
        });
      });
    }
  }
};

export default trainee;
