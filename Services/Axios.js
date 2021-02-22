import axios from 'axios';
import { SITE_NAME } from '../config';

const Axios = axios.create({
  baseURL: SITE_NAME,
  headers: {
    Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

Axios.interceptors.request.use((config) => {
  const { headers } = config;
  const token = localStorage.getItem('token') ? localStorage.getItem('user') : '';
  config.headers = {
    Authorization: `Bearer ${token}`,
    ...headers,
  };
  return config;
});

export default Axios;