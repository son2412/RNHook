import Axios from 'axios';
import configs from '../config';
import AsyncStorage from '@react-native-community/async-storage';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.apiDomain,
});
axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => Promise.reject(error),
);

export const sendGet = (url, params) => axiosInstance.get(url, {params});
export const sendPost = (url, params) => axiosInstance.post(url, params);
export const sendPut = (url, params) => axiosInstance.put(url, params);
export const sendPatch = (url, params) => axiosInstance.patch(url, params);
export const sendDelete = (url, params) => axiosInstance.delete(url, {params});
