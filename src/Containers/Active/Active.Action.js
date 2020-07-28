export const ACTIVE_REQUEST = 'ACTIVE_REQUEST';
export const ACTIVE_SUCCESS = 'ACTIVE_SUCCESS';
export const ACTIVE_FAIL = 'ACTIVE_FAIL';

export const activeRequest = data => {
  return {type: ACTIVE_REQUEST, payload: data};
};
export const activeSuccess = data => {
  return {type: ACTIVE_SUCCESS, payload: {data}};
};
export const activeFail = err => {
  return {type: ACTIVE_FAIL, payload: {err}};
};
