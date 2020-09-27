import {
  GET_TOPIC_AIL,
  GET_TOPIC_REQUEST,
  GET_TOPIC_SUCCESS,
} from './Topic.Action';

const initialState = {fetching: false, data: [], err: null};

export const getTopic = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOPIC_REQUEST:
      return {
        fetching: true,
        data: [],
        err: null,
      };
    case GET_TOPIC_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null,
      };
    case GET_TOPIC_AIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err,
      };
    default:
      return state;
  }
};
