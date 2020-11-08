export const CREATE_TOPIC_REQUEST = 'CREATE_TOPIC_REQUEST';
export const CREATE_TOPIC_SUCCESS = 'CREATE_TOPIC_SUCCESS';
export const CREATE_TOPIC_FAIL = 'CREATE_TOPIC_FAIL';

export const createTopicRequest = data => {
  return { type: CREATE_TOPIC_REQUEST, payload: data };
};
export const createTopicSuccess = data => {
  return { type: CREATE_TOPIC_SUCCESS, payload: { data } };
};
export const createTopicFail = err => {
  return { type: CREATE_TOPIC_FAIL, payload: { err } };
};
