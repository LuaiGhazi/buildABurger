import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://buildaburger-4f2cb-default-rtdb.firebaseio.com/'
});

export default instance;

