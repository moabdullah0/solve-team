import axios from "axios";


// Create an axios instance with the correct baseURL
const axiosInstance = axios.create({
  baseURL: "http://test.trainees-mad-s.com/",
  headers: {
    Accept: "application/json",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);
  };

  getById = (id: number) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  update = (data: T, id: number|null) => {
    return axiosInstance
      .put<T>(`${this.endpoint}/${id}`, data)
      .then((res) => res.data);
  };

  delete = (id: number) => {
    return axiosInstance
      .delete<void>(`${this.endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default ApiClient;