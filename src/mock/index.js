import Mock from 'mockjs';
import { getInfo, signIn } from './modules/login';
import { menu } from './modules/layout';
import { giveTraineeList } from './modules/trainee';

// 登录相关
Mock.mock('/webapi/user/Login', 'post', signIn);
Mock.mock('/webapi/user/getResource', 'get', menu);
Mock.mock('/webapi/consumer/list', 'post', giveTraineeList);

// 指定被拦截请求的响应时间
Mock.setup({
  timeout: 200
});

export default Mock;
