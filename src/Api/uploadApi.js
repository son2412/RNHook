import { sendPost } from './axios';

export const upload = body => sendPost('/upload/s3', body);
