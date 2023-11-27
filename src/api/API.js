import axios from 'axios';

const newInstance = axios.create({
    baseURL: "http://localhost:8888/api"
});

newInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem("token");
    if (token)
        config.headers["Authorization"] = token;
    return config;
})

export default newInstance;