import { GET_TOPIC_AIL, GET_TOPIC_REQUEST, GET_TOPIC_SUCCESS, RE_NEW_TOPIC } from '../Actions/Topic.Action';

const initialState = { fetching: false, data: [], err: null };

export const getTopic = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC_REQUEST:
      return {
        fetching: true,
        data: state.data,
        err: null
      };
    case GET_TOPIC_SUCCESS:
      return {
        fetching: false,
        data: [...state.data, ...action.payload.data.data],
        err: null
      };
    case GET_TOPIC_AIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err
      };
    case RE_NEW_TOPIC:
      return {
        fetching: false,
        data: [],
        err: null
      };
    default:
      return state;
  }
};
