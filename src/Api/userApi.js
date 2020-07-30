import {sendPost, sendGet} from './axios';

export const getUserOnline = params => sendGet('/users/online', params);
