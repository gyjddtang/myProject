import Mock from 'mockjs';
import temp from '../templet';

let menuData = [
  {
    id: 1,
    text: '用户管理',
    children: [
      {
        id: 11,
        text: '校长管理',
        pathName: '/app/principal',
        children: []
      }, {
        id: 12,
        text: '学员管理',
        pathName: '/app/trainee',
        children: []
      }
    ]
  }, {
    id: 2,
    text: '订单管理',
    children: [
      {
        id: 21,
        text: '订单管理',
        pathName: '/app/order',
        children: []
      }
    ]
  }, {
    id: 3,
    text: '统计报表',
    children: [
      {
        id: 31,
        text: '学员统计',
        pathName: '/app/studentstatistics',
        children: []
      }, {
        id: 32,
        text: '学校统计',
        pathName: '/app/schoolstatistics',
        children: []
      }, {
        id: 33,
        text: '收费统计',
        pathName: '/app/rechargestatistics',
        children: []
      }
    ]
  }
];

function menu(request) {
  let res = { ...temp };
  res.data = menuData;
  return res;
}

export { menu };
