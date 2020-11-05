import { sendGet, sendPut } from './axios';

export const getUserOnline = params => sendGet('/users/online', params);
export const getUserProfile = () => sendGet('/users/profile');
export const updateProfile = params => sendPut('/users/profile', params);
