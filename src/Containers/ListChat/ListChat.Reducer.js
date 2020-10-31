import { LIST_GROUP_REQUEST, LIST_GROUP_SUCCESS, LIST_GROUP_FAIL } from './ListChat.Acion';

const initialState = { fetching: false, data: [], totalPage: 0, err: null };

export const getListGroup = (state = initialState, action) => {
  switch (action.type) {
    case LIST_GROUP_REQUEST:
      return {
        fetching: true,
        data: [],
        err: null,
        totalPage: 0
      };
    case LIST_GROUP_SUCCESS:
      return {
        fetching: false,
        data: [...state.data, ...action.payload.data.data],
        err: null,
        totalPage: action.payload.data.totalPage
      };
    case LIST_GROUP_FAIL:
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
