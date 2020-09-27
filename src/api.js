import apisauce from 'apisauce';

export const api_git = apisauce.create({
  baseURL: 'https://api.github.com/',
  headers: {Accept: 'application/vnd.github.v3+json'},
  timeout: 15000,
});

export const api = apisauce.create({
  baseURL: 'http://34.87.19.12:3115/api/v1/',
  timeout: 15000,
});

export const getFollower = body => {
  return api_git.get(`users/${body.username}/followers`);
};

export const loginIn = body => {
  return api.post('auth/login', body);
};
