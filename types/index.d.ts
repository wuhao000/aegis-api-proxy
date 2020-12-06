import {AxiosRequestConfig} from 'axios';
import {API, ApiDef, ApiObject, AppConfig} from './api';

export * from './api';

declare function apiProxy(apiObj: ApiObject<ApiDef>,
                          config?: AppConfig,
                          commonSettings?: AxiosRequestConfig): ApiObject<API>;

export default apiProxy;
