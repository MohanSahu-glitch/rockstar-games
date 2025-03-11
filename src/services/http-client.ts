import { AxiosRequestConfig } from 'axios';
import apiClient from './api-client';

class HttpClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * Get list of items from the specified endpoint database
   * Has a abort functionality which can be used when component unmounts
   */
  async getAll<T>(requestConfig?: AxiosRequestConfig) {
    const controller = new AbortController();
    const response = await apiClient.get<T>(this.endpoint, {
      signal: controller.signal,
      ...requestConfig,
    });

    return { response, cancel: () => controller.abort() };
  }
}

const create = (endpoint: string) => new HttpClient(endpoint);

export default create;
