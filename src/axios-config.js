import axios from "axios";

export default function configuration(router) {
    axios.defaults.baseURL = 'http://localhost:7060/api';
    axios.defaults.validateStatus = (status) => {
        const blacklist = [401, 403, 404, 405, 415, 500];
        return !blacklist.includes(status);
    };
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.status >= 500 && error.status <= 599) {
                router.replace('/serverError');
                return Promise.reject(error);
            }
            if (error.status === 404) {
                router.replace('/notFound');
                return Promise.reject(error);
            }
            if (!error.status) {
                router.replace('/serverError');
                return Promise.reject(error);
            }
            return Promise.reject(error);
        }
    );
}