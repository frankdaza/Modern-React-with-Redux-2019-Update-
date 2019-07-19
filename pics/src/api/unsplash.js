import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 0da318d43b02cc0d6a9d338e48134863e2cd8937c9cec229b5d58686ea65275a'
  }
});