import xAxios from '../units/xAxios';

export function getSource(options) {
  return xAxios({
    url: '/webapi/user/getResource'
  });
}

