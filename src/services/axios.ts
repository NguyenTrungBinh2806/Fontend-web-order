import axios from 'axios';
import { MAIN_URL } from '../constant/config';

export default axios.create({
    baseURL: MAIN_URL, // 'http://localhost:4000'
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
});