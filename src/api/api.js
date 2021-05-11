import axios from 'axios';

export default axios.create({
  baseURL: 'https://memeshare-server01.herokuapp.com/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
});