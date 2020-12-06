// 导入颜色选择器组件
import axios, {AxiosRequestConfig} from 'axios';
import {API, ApiObject, AppConfig} from '../types';
import ApiProxy from './api-proxy';

export {HttpMethod} from './http-method';

export default (apiObject: ApiObject, config: AppConfig,
                axiosConfig?: AxiosRequestConfig): ApiObject<API> => {
  axios.defaults.baseURL = config.basePath;
  return ApiProxy(apiObject, config, axiosConfig || {});
};
