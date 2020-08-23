export const CREATE_CHAT_WITH_REQUEST = 'CREATE_CHAT_WITH_REQUEST';
export const CREATE_CHAT_WITH_SUCCESS = 'CREATE_CHAT_WITH_SUCCESS';
export const CREATE_CHAT_WITH_FAIL = 'CREATE_CHAT_WITH_FAIL';

export const createChatWithRequest = data => {
  return {type: CREATE_CHAT_WITH_REQUEST, payload: data};
};
export const createChatWithSuccess = data => {
  return {type: CREATE_CHAT_WITH_SUCCESS, payload: {data}};
};
export const createChatWithFail = err => {
  return {type: CREATE_CHAT_WITH_FAIL, payload: {err}};
};
