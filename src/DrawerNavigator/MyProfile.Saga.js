import { call, put, takeLatest } from 'redux-saga/effects';
import { getUserProfile } from '../Api/userApi';
import { GET_MY_PROFILE_REQUEST, myProfileFail, myProfileSuccess } from './MyProfile.Action';
import { sendNetworkFail } from '../actions';

export function* watchGetMyProfile() {
  yield takeLatest(GET_MY_PROFILE_REQUEST, handleGetMyProfile);
}

function* handleGetMyProfile(action) {
  const response = yield call(getUserProfile);
  if (response.data.success) {
    yield put(myProfileSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(myProfileFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(myProfileFail(response.problem));
    }
  }
}
