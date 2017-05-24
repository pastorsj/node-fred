'use strict';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.stlouisfed.org/fred/',
    timeout: 5000,
    headers: {}
});

export default api;
