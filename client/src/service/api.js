import axios from 'axios';
// import { response } from 'express';
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS} from '../constants/config';
import { getAccessToken } from '../utils/common-utils';

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
        return Promise.reject(processError(error));

    }
)

/////////////////
// If success -> return { isSuccess: true, data: object}
// If fall -> return { isFailure: true, status: string, msg: string, code: int }
////////////////

const processResponse = (response) => {
    if(response?.status === 200){
        return {isSuccess: true, data: response.data }
    } else {
        return {
            isFailure: true,
            status: response?.status,
             msg: response?.msg, 
             code: response?.code
        }
    }
}

/////////////////
// If success -> return { isSuccess: true, data: object}
// If fall -> return { isFailure: true, status: string, msg: string, code: int }
////////////////
const  processError = (error) => {
     if(error.response){
        // server made and sever response with a status other
        // that falls out of the range 2.x.x
        console.log('ERROR IN RESPONSE: ', error.toJSON());
        return{
          isError: true,
          msg: API_NOTIFICATION_MESSAGES.responseFailure,
          code: error.response.status
        }
     }else if(error.request){
       //   request made but no response was received
       console.log('ERROR IN REQUEST: ', error.toJSON());
       return{
         isError: true,
         msg: API_NOTIFICATION_MESSAGES.requestFailure,
         code: ""
       }
     }else {
        //  something happend in setting up that triggers in error
        console.log('ERROR IN NETWORK: ', error.toJSON());
        return{
          isError: true,
          msg: API_NOTIFICATION_MESSAGES.networkError,
          code: ""
        }
     }
}

const API = {};

for( const [ key, value] of Object.entries(SERVICE_URLS)){
    API[key] = (body, showUploadProgress, showDownloadProgress) => 
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            headers: {
                  authorization: getAccessToken()
            },
            onUploadProgress: function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/ progressEvent.total)
                    showUploadProgress(percentageCompleted);

                }
            },
            onDownloadProgress: function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100)/ progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                    
                }
            }
        })
    
}

export { API };