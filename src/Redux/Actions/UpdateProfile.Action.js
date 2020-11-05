export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export const updateProfileRequest = data => {
  return { type: UPDATE_PROFILE_REQUEST, payload: data };
};
export const updateProfileSuccess = data => {
  return { type: UPDATE_PROFILE_SUCCESS, payload: { data } };
};
export const updateProfileFail = err => {
  return { type: UPDATE_PROFILE_FAIL, payload: { err } };
};
