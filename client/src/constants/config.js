// API_NOTOFICATION_MESSAGE

export const API_NOTOFICATION_MESSAGE = {
     loading: {
        title: "loading...",
        message: "Data is being loaded, please wait"
     },
     success: {
        title: "success",
        message: "Data successfully loaded"
     },
     responseFailure: {
        title: "Error",
        message: "An error occured while fetching response from the server. please try again "
     },
     request: {
        title:  "Error",
        message: "An error occured while parsing request data"
     },
     networkError: {
        title: "Error",
        message: "unable to connect with the server, please check network connectivity and try agian later.."
     }
}

//  API service call
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: '/' , method: 'POST, GET, PUT, DELETE' params: true/false, query: true/false}
export const SERVICE_URLS = {
    userSignup: { url: '/signup', method: 'POST'},
    userLogin: { url: '/login', method: 'POST' },
    uploadFile: { url: '/file/upload', method: 'POST'}
}