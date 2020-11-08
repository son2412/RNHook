import { sendPost, sendGet } from './axios';

export const getTopics = params => sendGet('/topics', params);
export const createTopic = params => sendPost('/topics', params);
