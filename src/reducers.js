import {combineReducers} from 'redux';
import {getProfile} from './Containers/Profile/Profile.Reducer';
import {getFollower} from './Containers/Follower/Follower.Reducer';
import {signIn} from './Containers/SignIn/SignIn.Reducer';
import {getUserActive} from './Containers/Active/Active.Reducer';
import {getListGroup} from './Containers/ListChat/ListChat.Reducer';
import {CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL} from './actions';
import {getMyProfile} from './DrawerNavigator/MyProfile.Reducer';

const initialState = {fetching: false, data: null, err: null};

const sendNetworkFail = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sendNetworkFail,
  getProfile,
  getFollower,
  signIn,
  getUserActive,
  getListGroup,
  getMyProfile,
});
export default rootReducer;
