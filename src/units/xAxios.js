import axios from 'axios';
import { Notification } from 'element-ui';

function xAxios(options) {
  const opts = {...options};

  opts.headers = {
    'Content-Type': 'application/json',
    ...opts.headers
  };
  opts.method = opts.method || 'GET';
  opts.data = opts.method == 'GET' || opts.method == 'DELETE' ? null : JSON.stringify(opts.data);

  return new Promise((resolve, reject) => {
    axios(opts)
    .then(respone => {
      if(respone.data.succeed) {
        resolve(respone.data);
      } else {
        Notification.error({
          title: '提示',
          message: respone.data.msg
        });
        reject(respone.data);
      }
    })
    .catch(function (error) {
      console.log(error);
      Notification.error({
        title: '错误',
        message: '服务器异常'
      });
    });
  });
}

export default xAxios;
