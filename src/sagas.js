import {all} from 'redux-saga/effects';
import {watchGetProfile} from './Containers/Profile/Profile.Saga';
import {watchGetFollower} from './Containers/Follower/Follower.Saga';
import {watchSignIn} from './Containers/SignIn/SignIn.Saga';
import {watchGetUserActive} from './Containers/Active/Active.Saga';
import {watchGetListGroup} from './Containers/ListChat/ListChat.Saga';
import {watchGetMyProfile} from './DrawerNavigator/MyProfile.Saga';
import {watchListChatWith} from './Redux/Sagas/ListChatWith.Saga';
import {watchSendMessage} from './Redux/Sagas/SendMessage.Saga';
import {watchCreateChatWith} from './Redux/Sagas/CreateChatWith.Saga';

export default function* rootSaga() {
  yield all([
    watchGetProfile(),
    watchGetFollower(),
    watchSignIn(),
    watchGetUserActive(),
    watchGetListGroup(),
    watchGetMyProfile(),
    watchListChatWith(),
    watchSendMessage(),
    watchCreateChatWith(),
  ]);
}
