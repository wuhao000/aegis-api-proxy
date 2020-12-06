// @ts-nocheck
import qs from 'qs';
import { assignParams } from '../param-handler';
describe('参数处理', function () {
  it('get参数处理', function () {
    var res = assignParams({
      url: '/a',
      method: 'GET'
    }, {
      start: new Date()
    });
    console.log(res);
  });
  it('qs', function () {
    var s = qs.stringify({
      start: new Date()
    });
    console.log(s);
  });
});