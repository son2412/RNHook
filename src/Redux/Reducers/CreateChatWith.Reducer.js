import { CREATE_CHAT_WITH_REQUEST, CREATE_CHAT_WITH_SUCCESS, CREATE_CHAT_WITH_FAIL } from '../Actions/CreateChatWith.Action';

const initialState = { fetching: false, data: null, err: null };

export const createChatWith = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CHAT_WITH_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      };
    case CREATE_CHAT_WITH_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null
      };
    case CREATE_CHAT_WITH_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      };
    default:
      return state;
  }
};
