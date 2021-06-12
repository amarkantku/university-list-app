import axios from 'axios';
import Qs from 'qs';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://universities.hipolabs.com',
    timeout: process.env.REACT_APP_TIMEOUT || 1000
});

export const RestClient = {
    cancelableGet: () => {},
    get: (url, params, format = 'brackets') => instance.get(url, {
        params,
        paramsSerializer: function (params) {
            return Qs.stringify(params, {
                arrayFormat: format
            });
        },
    })
    .then(response => response.data)
    .catch(error => error),
};

export default RestClient;
