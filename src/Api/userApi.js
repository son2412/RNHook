import {sendGet} from './axios';

export const getUserOnline = params => sendGet('/users/online', params);
export const getUserProfile = () => sendGet('/users/profile');
