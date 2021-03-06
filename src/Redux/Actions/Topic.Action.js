export const GET_TOPIC_REQUEST = 'GET_TOPIC_REQUEST';
export const GET_TOPIC_SUCCESS = 'GET_TOPIC_SUCCESS';
export const GET_TOPIC_AIL = 'GET_TOPIC_AIL';
export const RE_NEW_TOPIC = 'RE_NEW_TOPIC';

export const getTopicRequest = data => {
  return { type: GET_TOPIC_REQUEST, payload: data };
};
export const getTopicSuccess = data => {
  return { type: GET_TOPIC_SUCCESS, payload: { data } };
};
export const getTopicFail = err => {
  return { type: GET_TOPIC_AIL, payload: { err } };
};
export const reNewTopic = () => {
  return { type: RE_NEW_TOPIC };
};
