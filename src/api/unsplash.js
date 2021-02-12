import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { 
    Authorization: 'Client-ID vjqH_vPYUMa269ZpOpHpKBsZ61HaKywIJDd_t9SWrrY'
  }
});
