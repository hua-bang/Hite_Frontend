import axios from "axios";

const request = axios.create({
    // baseURL: "http://localhost:8080",
    timeout: 6000
});

request.interceptors.request.use(config => {
    config.headers['token'] = "hite-token-2021-05-26";
    return config;
});

request.interceptors.response.use(response => {
    if(response.status !== 200) {
        console.warn(`status is not 200, but ${response.data}`);
    }
    return response.data;
});

export default request;