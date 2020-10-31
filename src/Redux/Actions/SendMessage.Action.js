export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL';

export const sendMessageRequest = data => {
  return { type: SEND_MESSAGE_REQUEST, payload: data };
};
export const sendMessageSuccess = data => {
  return { type: SEND_MESSAGE_SUCCESS, payload: { data } };
};
export const sendMessageFail = err => {
  return { type: SEND_MESSAGE_FAIL, payload: { err } };
};
