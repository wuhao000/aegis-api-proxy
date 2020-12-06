// @ts-nocheck
import qs from 'qs';
import {assignParams} from '../param-handler';

describe('参数处理', () => {
  it('get参数处理', () => {
    const res = assignParams({
      url: '/a',
      method: 'GET'
    } as any, {start: new Date()});
    console.log(res);
  });
  it('qs', () => {
    const s = qs.stringify({start: new Date()});
    console.log(s);
  });
});
