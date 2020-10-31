import { sendPost, sendGet } from './axios';

export const getTopics = params => sendGet('/topics', params);
