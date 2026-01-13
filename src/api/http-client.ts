import { ApiResponse } from "@/types/api.types";
import axios, { AxiosInstance } from "axios";

export default class HttpClient {
  protected baseUrl: string;
  protected client: AxiosInstance;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;

    this.client = axios.create({
      baseURL: this.baseUrl,
      timeout: 30000, // 30 секунд
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  public async get<T = any>(url: string): Promise<ApiResponse<T>> {
    return this.client.get(url);
  }

  public async post<T = any, D = any>(url: string, data?: D): Promise<ApiResponse<T>> {
    return this.client.post(url, data);
  }
}
