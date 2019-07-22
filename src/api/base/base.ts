import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  timeout: 5000,
});

instance.interceptors.request.use(
  config => config,
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance as {
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>;
  get<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T>
};
