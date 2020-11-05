import { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL } from '../Actions/UpdateProfile.Action';

const initialState = { fetching: false, data: null, err: null };

export const updateProfile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        fetching: true,
        data: null,
        err: null
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        fetching: false,
        data: action.payload.data.data,
        err: null
      };
    case UPDATE_PROFILE_FAIL:
      return {
        fetching: false,
        data: null,
        err: action.payload.err
      };
    default:
      return state;
  }
};
