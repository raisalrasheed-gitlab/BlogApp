import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://blog-app-x2vy.vercel.app/',
});

export default axiosInstance;
