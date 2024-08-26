import axios from 'axios';

const API_URL = 'https://hook.make.com/your-webhook-id';

export const schedulePost = (postData) => {
  return axios.post(API_URL, postData);
};
