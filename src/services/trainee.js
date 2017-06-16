/**
 * Created by yj02 on 2017/6/7.
 */

import xAxios from '../units/xAxios';

export function getData(options) {
  return xAxios({
    url: '/webapi/consumer/list',
    method: 'post',
    data: { ...options }
  });
}
