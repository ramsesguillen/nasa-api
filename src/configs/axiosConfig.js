const API_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'zZXqGNu48MVYEpBsSjF7H5aeHs6gmQMMBQmMSbeS';

import axios from "axios";

export const headersDefault = () => ({
	'X-Requested-With': 'XMLHttpRequest',
	'Accept': 'application/json',
	'Content-Type': 'application/json'
});


const nasaApi = axios.create({
  baseURL: API_URL,
});

nasaApi.defaults.headers.common = headersDefault();
nasaApi.interceptors.request.use(config => {
  config.params = {
    api_key: API_KEY,
    ...config.params,
  };
  return config;
});

export default nasaApi;
