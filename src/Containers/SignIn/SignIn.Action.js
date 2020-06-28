export const SIGNIN_REQUEST = 'SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';

export const signInRequest = data => {
  return {type: SIGNIN_REQUEST, payload: data};
};
export const signInSuccess = data => {
  return {type: SIGNIN_SUCCESS, payload: {data}};
};
export const signInFail = err => {
  return {type: SIGNIN_FAIL, payload: {err}};
};
