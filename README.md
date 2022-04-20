# aegis-api-proxy

> 接口代理工具

## 安装

``` 
 npm install aegis-api-proxy -S
```
## 使用


```javascript
import ProxyApi from 'aegis-api-proxy';
import axios from 'axios';
import config from '../config';

// 接口描述对象
const apiDescriptor = {
  login: {
    method: 'POST',
    isFormData: true
  }
}
axios.defaults.baseURL = config.basePath;

const apiProxy = ProxyApi(apiDescriptor, config, {
  headers: {common: {}}
});

export const api = apiProxy;
```
### 请求接口
```javascript
import {api} from './api'

const data = await api.login.r(); // 返回 {code: 0, data: {} | []} 中的data的值
const wrapData = await api.login.req(); // 返回 {code: 0, data: {} | []}
const axiosResponse = await api.login.request(); // 返回axios的Response对象，其中的data为{code: 0, data: {} | []}
```
