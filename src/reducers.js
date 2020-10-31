import { combineReducers } from 'redux';
import { getTopic } from './Containers/Topic/Topic.Reducer';
import { getFollower } from './Containers/Follower/Follower.Reducer';
import { signIn } from './Containers/SignIn/SignIn.Reducer';
import { getUserActive } from './Containers/Active/Active.Reducer';
import { getListGroup } from './Containers/ListChat/ListChat.Reducer';
import { CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL, RETRIEVE_TOKEN, SIGN_OUT } from './actions';
import { getMyProfile } from './DrawerNavigator/MyProfile.Reducer';
import { listChatWith } from '../src/Redux/Reducers/ListChatWith.Reducer';
import { sendMessage } from '../src/Redux/Reducers/SendMessage.Reducer';
import { createChatWith } from '../src/Redux/Reducers/CreateChatWith.Reducer';

const initialState = { fetching: false, data: null, err: null };

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null
      };
    default:
      return state;
  }
};
const initialStateAuth = { fetching: true, token: null };
const isAuth = (state = initialStateAuth, action) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return {
        token: action.payload.token,
        fetching: false
      };
    case SIGN_OUT:
      return {
        token: null,
        fetching: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sendNetworkFail,
  isAuth,
  getTopic,
  getFollower,
  signIn,
  getUserActive,
  getListGroup,
  getMyProfile,
  listChatWith,
  sendMessage,
  createChatWith
});
export default rootReducer;
