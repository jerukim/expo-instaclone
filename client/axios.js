import axios from 'axios';

export const baseURL =
  'Instaclone-env-1.cnnhnf83mp.us-east-2.elasticbeanstalk.com';

const axio = axios.create({
  baseURL,
});

export default axio;
