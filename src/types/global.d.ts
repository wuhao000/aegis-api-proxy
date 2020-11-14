import {AxiosRequestConfig} from 'axios';
import {Vue} from 'vue/types/vue';
import {API, ApiDef, ApiObject, AppConfig} from '../../types';

export class Global {
  public static proxyAPI: (obj: ApiObject<ApiDef>, config: AppConfig, axiosConfig?: AxiosRequestConfig) => ApiObject<API>;
}

declare module 'vue/types/vue' {

  interface Vue {
    $api: ApiObject<API>;
  }
}
