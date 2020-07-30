import {
  LIST_GROUP_REQUEST,
  LIST_GROUP_SUCCESS,
  LIST_GROUP_FAIL,
} from './ListChat.Acion';

const initialState = {fetching: false, data: [], err: null};

export const getListGroup = (state = initialState, action) => {
  switch (action.type) {
    case LIST_GROUP_REQUEST:
      return {
        fetching: true,
        data: [],
        err: null,
      };
    case LIST_GROUP_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case LIST_GROUP_FAIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err,
      };
    default:
      return state;
  }
};
