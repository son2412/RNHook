import {sendPost, sendGet} from './axios';

export const getGroups = params => sendGet('/groups', params);
