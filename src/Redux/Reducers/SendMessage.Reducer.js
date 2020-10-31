import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL } from '../Actions/SendMessage.Action';

const initialState = { fetching: false, data: null, err: null };

export const sendMessage = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null
      };
    case SEND_MESSAGE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      };
    default:
      return state;
  }
};
