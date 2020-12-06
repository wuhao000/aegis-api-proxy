import {AppConfig} from '../../types';
import proxy from '../api-proxy';

const config: AppConfig = {
  basePath: '/api',
  httpStatusErrorHandler: () => {
  },
  logicErrorHandler: () => {
    return true;
  },
  pathSuffix: ''
};
const post = {
  post: {
    url: '/a/b',
    method: 'post'
  }
};
describe('请求', () => {
  it('get参数处理', () => {
    const api = proxy(post, config);
    api['post'].r();
  });
  it('qs', () => {
  });
});
