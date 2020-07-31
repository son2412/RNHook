export const GET_MY_PROFILE_REQUEST = 'GET_MY_PROFILE_REQUEST';
export const GET_MY_PROFILE_SUCCESS = 'GET_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAIL = 'GET_MY_PROFILE_FAIL';

export const myProfileRequest = () => {
  return {type: GET_MY_PROFILE_REQUEST};
};
export const myProfileSuccess = data => {
  return {type: GET_MY_PROFILE_SUCCESS, payload: {data}};
};
export const myProfileFail = err => {
  return {type: GET_MY_PROFILE_FAIL, payload: {err}};
};
