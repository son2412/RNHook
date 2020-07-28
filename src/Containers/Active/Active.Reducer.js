import {ACTIVE_REQUEST, ACTIVE_SUCCESS, ACTIVE_FAIL} from './Active.Action';

const initialState = {fetching: false, data: [], err: null};

export const getUserActive = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_REQUEST:
      return {
        fetching: true,
        data: [],
        err: null,
      };
    case ACTIVE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.items,
        err: null,
      };
    case ACTIVE_FAIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err,
      };
    default:
      return state;
  }
};
