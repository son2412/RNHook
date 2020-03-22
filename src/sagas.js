import {all} from 'redux-saga/effects';
import {watchGetProfile} from './Containers/Profile/Profile.Saga';
import {watchGetFollower} from './Containers/Follower/Follower.Saga';

export default function* rootSaga() {
  yield all([watchGetProfile(), watchGetFollower()]);
}
