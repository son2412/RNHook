import { all } from 'redux-saga/effects';
import { watchGetTopic } from './Redux/Sagas/Topic.Saga';
import { watchGetFollower } from './Screens/Follower/Follower.Saga';
import { watchSignIn } from './Screens/SignIn/SignIn.Saga';
import { watchGetUserActive } from './Redux/Sagas/Active.Saga';
import { watchGetListGroup } from './Redux/Sagas/ListChat.Saga';
import { watchGetMyProfile } from './DrawerNavigator/MyProfile.Saga';
import { watchListChatWith } from './Redux/Sagas/ListChatWith.Saga';
import { watchSendMessage } from './Redux/Sagas/SendMessage.Saga';
import { watchCreateChatWith } from './Redux/Sagas/CreateChatWith.Saga';
import { watchUpdateProfile } from './Redux/Sagas/UpdateProfile.Saga';
import { watchCreateTopic } from './Redux/Sagas/CreateTopic.Saga';

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
    watchUpdateProfile(),
    watchCreateTopic()
  ]);
}
