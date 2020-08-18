import {sendPost, sendGet} from './axios';

export const getGroups = params => sendGet('/groups', params);
export const chatWith = body => sendPost('/groups/chat-with', body);
export const listAllGroup = () => sendGet('/groups/list');
