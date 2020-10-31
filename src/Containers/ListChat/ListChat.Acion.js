export const LIST_GROUP_REQUEST = 'LIST_GROUP_REQUEST';
export const LIST_GROUP_SUCCESS = 'LIST_GROUP_SUCCESS';
export const LIST_GROUP_FAIL = 'LIST_GROUP_FAIL';

export const listChatRequest = data => {
  return { type: LIST_GROUP_REQUEST, payload: data };
};
export const listChatSuccess = data => {
  return { type: LIST_GROUP_SUCCESS, payload: { data } };
};
export const listChatFail = err => {
  return { type: LIST_GROUP_FAIL, payload: { err } };
};
