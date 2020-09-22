import axios from 'axios';
import {baseUrl} from './constant'

let config={
  baseURL: baseUrl
}

// Instance of axios
const httpClient = axios.create(config);

// Middleware: Maybe check for the headers or anything here
const requestInterceptor = config=>{
  // User is logged in then set the headers
  if(localStorage.getItem('userExtAccessDetails')){
    let tokens = JSON.parse(JSON.parse(localStorage.getItem('userExtAccessDetails')).value)
    config.headers.Authorization = tokens.token_type+' '+tokens.access_token;
  }
  return config;
}

const responseInterceptor = response=>{
  try {
    // console.log(response);
    return response;
  } catch (err) {
    return err.message;
  }
}

httpClient.interceptors.request.use(requestInterceptor);
httpClient.interceptors.response.use(responseInterceptor);

export default httpClient;
