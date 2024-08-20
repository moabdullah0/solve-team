import axiosInstance from "./axiosInstance";

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (): Promise<T[]> => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  getById = (id: number): Promise<T> => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  getAllById = (id: number): Promise<T[]> => {
    return axiosInstance
      .get<T[]>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  post = (data: T): Promise<T> => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T, id: number | null): Promise<T> => {
    return axiosInstance
      .put<T>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };

  delete = (id: number): Promise<void> => {
    return axiosInstance
      .delete<void>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default ApiClient;
