import { CREATE_TOPIC_REQUEST, CREATE_TOPIC_SUCCESS, CREATE_TOPIC_FAIL } from '../Actions/CreateTopic.Action';

const initialState = { fetching: false, data: null, err: null };

export const createTopic = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TOPIC_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      };
    case CREATE_TOPIC_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null
      };
    case CREATE_TOPIC_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      };
    default:
      return state;
  }
};
