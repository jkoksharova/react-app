import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-burger-3aa0a.firebaseio.com/'
});

export default instance;