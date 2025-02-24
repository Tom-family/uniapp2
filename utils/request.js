import axios from 'axios';

const service = axios.create({
  baseURL: '',
  timeout: 10000,
});

service.interceptors.request.use(
  config => {
    const token = uni.getStorageSync('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; 
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject('请求失败');
    }
  },
  error => {
    // 可以根据错误码提示用户
    uni.showToast({
      title: '请求失败，请稍后重试',
      icon: 'none',
    });
    return Promise.reject(error);
  }
);

export default service;