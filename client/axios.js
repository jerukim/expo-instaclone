import axios from 'axios';

const axio = axios.create({
  process.env.NODE_ENV === 'development' ? process.env.DEV_URL : process.env.URL
});

export default axio;
