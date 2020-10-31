import { sendPost } from './axios';

export const login = ({ email, password }) => sendPost('/auth/login', { email, password });
