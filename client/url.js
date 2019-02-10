import axios from 'axios';

// production
// export const baseURL = 'Instaclone-env-1.cnnhnf83mp.us-east-2.elasticbeanstalk.com';

// development
export const baseURL = 'http://192.168.1.68:8080';

const ax = axios.create({
  baseURL,
});

export default ax;
