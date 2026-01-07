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
                router.push('/serverError');
                return error.response;
            }
            if (error.status === 404) {
                router.push('/notFound');
                return error.response;
            }
            if (!error.status) {
                router.push('/serverError');
                return;
            }
            return Promise.reject(error);
        }
    );
}