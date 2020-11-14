// 导入颜色选择器组件
import axios, {AxiosRequestConfig} from 'axios';
import {PluginObject, VueConstructor} from 'Vue';
import Vue from 'vue';
import {API, ApiObject, AppConfig} from '../../types';
import ApiProxy from './api-proxy';
import HttpMethod from './http-method';

export {
  // 以下是具体的组件列表
  HttpMethod
};

export default (apiObject: ApiObject, config: AppConfig,
                axiosConfig?: AxiosRequestConfig): ApiObject<API> => {
  axios.defaults.baseURL = config.basePath;
  const apiProxy: ApiObject<API> = ApiProxy(apiObject, config, axiosConfig || {});
  const plugin: PluginObject<any> = {
    installed: false,
    install: (vue: VueConstructor) => {
      if (plugin.installed) {
        return;
      }
      if (!vue.prototype.$api) {
        Object.defineProperties(vue.prototype, {
          $api: {
            get() {
              return apiProxy;
            }
          }
        });
      }
    }
  };
  Vue.use(plugin);
  return apiProxy;
};
