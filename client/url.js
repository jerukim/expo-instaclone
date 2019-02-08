import axios from 'axios';

// export const baseURL = 'Instaclone-env-1.cnnhnf83mp.us-east-2.elasticbeanstalk.com';
export const baseURL = 'http://localhost:8080';

const ax = axios.create({
  baseURL,
});

export default ax;
