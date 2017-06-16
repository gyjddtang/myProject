/**
 * Created by yj02 on 2017/6/7.
 */

import Mock from 'mockjs';
import temp from '../templet';

let Random = Mock.Random;
Random.cname();
Random.date();
Random.province;

const sourceData = Mock.mock({
  'list|20': [{
    name: '@cname',
    'gender|1-2': 1,
    birthday: '@date',
    address: '@province'
  }]
});

function giveTraineeList(request) {
  let res = { ...temp };
  res.data = sourceData.list;
  return res;
}

export { giveTraineeList };
