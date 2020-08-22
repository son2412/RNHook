import {sendPost} from './axios';

export const sendMessage = body => sendPost('/messages', body);
