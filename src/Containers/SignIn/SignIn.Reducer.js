import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_INIT,
} from './SignIn.Action';

const initialState = {fetching: false, data: null, err: null};

export const signIn = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null,
      };
    case SIGNIN_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data,
        err: null,
      };
    case SIGNIN_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err,
      };
    case SIGNIN_INIT:
      return {
        fetching: false,
        data: null,
        err: null,
      };
    default:
      return state;
  }
};
