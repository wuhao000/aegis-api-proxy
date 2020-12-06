import proxy from '../api-proxy';
var config = {
  basePath: '/api',
  httpStatusErrorHandler: function httpStatusErrorHandler() {},
  logicErrorHandler: function logicErrorHandler() {
    return true;
  },
  pathSuffix: ''
};
var post = {
  post: {
    url: '/a/b',
    method: 'post'
  }
};
describe('请求', function () {
  it('get参数处理', function () {
    var api = proxy(post, config);
    api['post'].r();
  });
  it('qs', function () {});
});