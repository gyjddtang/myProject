import xAxios from '../units/xAxios';

export function signIn(options) {
  return xAxios({
    url: '/webapi/user/Login',
    method: 'POST',
    data: { ...options }
  });
}

