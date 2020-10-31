import { GET_MY_PROFILE_REQUEST, GET_MY_PROFILE_SUCCESS, GET_MY_PROFILE_FAIL } from './MyProfile.Action';

const initialState = { fetching: false, data: {}, err: null };

export const getMyProfile = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE_REQUEST:
      return {
        fetching: true,
        data: {},
        err: null
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null
      };
    case GET_MY_PROFILE_FAIL:
      return {
        fetching: false,
        data: {},
        err: action.payload.err
      };
    default:
      return state;
  }
};
