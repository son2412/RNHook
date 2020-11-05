import { all } from 'redux-saga/effects';
import { watchGetTopic } from './Containers/Topic/Topic.Saga';
import { watchGetFollower } from './Containers/Follower/Follower.Saga';
import { watchSignIn } from './Containers/SignIn/SignIn.Saga';
import { watchGetUserActive } from './Containers/Active/Active.Saga';
import { watchGetListGroup } from './Containers/ListChat/ListChat.Saga';
import { watchGetMyProfile } from './DrawerNavigator/MyProfile.Saga';
import { watchListChatWith } from './Redux/Sagas/ListChatWith.Saga';
import { watchSendMessage } from './Redux/Sagas/SendMessage.Saga';
import { watchCreateChatWith } from './Redux/Sagas/CreateChatWith.Saga';
import { watchUpdateProfile } from './Redux/Sagas/UpdateProfile.Saga';

export default function* rootSaga() {
  yield all([
    watchGetTopic(),
    watchGetFollower(),
    watchSignIn(),
    watchGetUserActive(),
    watchGetListGroup(),
    watchGetMyProfile(),
    watchListChatWith(),
    watchSendMessage(),
    watchCreateChatWith(),
    watchUpdateProfile()
  ]);
}
