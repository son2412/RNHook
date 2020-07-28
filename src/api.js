import apisauce from 'apisauce';

export const api_git = apisauce.create({
  baseURL: 'https://api.github.com/',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const api = apisauce.create({
  baseURL: 'http://34.87.19.12:3115/api/v1',
  timeout: 15000,
});

export const api_test = apisauce.create({
  baseURL: 'https://api.stackexchange.com/2.2/',
  timeout: 15000,
});

export const getProfile = body => {
  return api_git.get(`users/${body.username}`);
};

export const getFollower = body => {
  return api_git.get(`users/${body.username}/followers`);
};

export const loginIn = body => {
  return api.post('auth/login', body);
};

export const listUserActive = page => {
  return api_test.get(`users?page=${page}&order=desc&sort=reputation&site=stackoverflow`);
};
