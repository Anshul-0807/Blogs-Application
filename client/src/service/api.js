import axios from 'axios';
import { response } from 'express';

const API_URL = 'http://localhost:8000'

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "content-type": 'application/json'
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        // stop global loader here
        return processResponse(response);
    },
    function(error){
        // stop global loader here
        return Promise.reject(processError(response));

    }
)