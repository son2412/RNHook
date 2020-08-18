import {
  LIST_CHAT_WITH_REQUEST,
  LIST_CHAT_WITH_SUCCESS,
  LIST_CHAT_WITH_FAIL,
} from '../Actions/ListChatWith.Action';

const initialState = {fetching: false, data: [], err: null};

export const listChatWith = (state = initialState, action) => {
  switch (action.type) {
    case LIST_CHAT_WITH_REQUEST:
      return {
        fetching: true,
        data: [],
        err: null,
      };
    case LIST_CHAT_WITH_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null,
      };
    case LIST_CHAT_WITH_FAIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err,
      };
    default:
      return state;
  }
};
