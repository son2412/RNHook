import { ACTIVE_REQUEST, ACTIVE_SUCCESS, ACTIVE_FAIL } from '../Actions/Active.Action';

const initialState = { fetching: false, data: [], totalPage: 0, err: null };

export const getUserActive = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_REQUEST:
      return {
        fetching: true,
        data: state.data,
        err: null,
        totalPage: 0
      };
    case ACTIVE_SUCCESS:
      return {
        fetching: false,
        data: [...state.data, ...action.payload.data.data],
        err: null,
        totalPage: action.payload.data.totalPage
      };
    case ACTIVE_FAIL:
      return {
        fetching: false,
        data: [],
        err: action.payload.err,
        totalPage: 0
      };
    default:
      return state;
  }
};
