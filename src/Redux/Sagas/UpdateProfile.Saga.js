import { call, put, takeLatest } from 'redux-saga/effects';
import { UPDATE_PROFILE_REQUEST, updateProfileFail, updateProfileSuccess } from '../Actions/UpdateProfile.Action';
import { updateProfile } from '../../Api/userApi';
import { sendNetworkFail } from '../../actions';

export function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, handleUpdateProfile);
}

function* handleUpdateProfile(action) {
  const response = yield call(updateProfile, action.payload);
  if (response.data.success) {
    yield put(updateProfileSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(updateProfileFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(updateProfileFail(response.problem));
    }
  }
}
