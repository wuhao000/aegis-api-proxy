// 导入颜色选择器组件
import axios from 'axios';
import ApiProxy from './api-proxy';
export { HttpMethod } from './http-method';
export default (function (apiObject, config, axiosConfig) {
  axios.defaults.baseURL = config.basePath;
  return ApiProxy(apiObject, config, axiosConfig || {});
});