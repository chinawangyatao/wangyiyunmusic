import { AxiosInstance } from "axios";
import { RequestConfig } from "@/service/request/type";
import axios from "axios";

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class Axios {
  instance: AxiosInstance;
  // request实例 => axios的实例
  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (err) => {
        return err;
      }
    );
    // 响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
    //   对特定的请求封装
    this.instance.interceptors.request.use(
      // @ts-ignore
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      //@ts-ignore
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
  }
  // 封装网络请求的方法
  request<T = any>(config: RequestConfig<T>) {
    //单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }
    //返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            // @ts-ignore
            res = config.interceptors.requestSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: RequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
}

export default Axios;
