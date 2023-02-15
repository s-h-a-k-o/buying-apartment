import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export class ApiWrapper {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8080/back",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Methods":
          "POST, PUT, DELETE, GET, PATCH, OPTIONS",
      },
    });
  }

  GET<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.get<T>(url, config);
  }

  POST<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.client.post<T>(url, data, config);
  }

  PUT<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.client.put<T>(url, data, config);
  }

  PATCH<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): AxiosPromise<T> {
    return this.client.patch<T>(url, data, config);
  }

  DELETE<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T> {
    return this.client.delete<T>(url, config);
  }
}
