export const LIST_CHAT_WITH_REQUEST = 'LIST_CHAT_WITH_REQUEST';
export const LIST_CHAT_WITH_SUCCESS = 'LIST_CHAT_WITH_SUCCESS';
export const LIST_CHAT_WITH_FAIL = 'LIST_CHAT_WITH_FAIL';

export const listChatWithRequest = data => {
  return {type: LIST_CHAT_WITH_REQUEST, payload: data};
};
export const listChatWithSuccess = data => {
  return {type: LIST_CHAT_WITH_SUCCESS, payload: {data}};
};
export const listChatWithFail = err => {
  return {type: LIST_CHAT_WITH_FAIL, payload: {err}};
};
