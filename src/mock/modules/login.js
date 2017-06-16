import Mock from 'mockjs';
import temp from '../templet';

let Random = Mock.Random;
Random.cname();
Random.date();
Random.ctitle();
Random.city(true);
Random.url('http');

let userData = Mock.mock({
  name: '@cname',
  birthday: '@date',
  'interest|1-10': '打',
  'list|1-6': [{
    title: '@ctitle',
    address: '@city',
    url: '@url'
  }]
});

let signData = Mock.mock({
  name: 'admin'
});

function getInfo(requset) {
  return userData;
}

function signIn(request) {
  let res = { ...temp };
  const { userName, password } = JSON.parse(request.body);
  if(userName == 'admin' && password == '123qwe') {
    res.data = signData;
  } else {
    res.msg = '用户名或密码错误';
    res.succeed = false;
  }
  return res;
}

export { getInfo, signIn };
