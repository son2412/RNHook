import { call, put, takeLatest } from 'redux-saga/effects';
import { getGroups } from '../../Api/groupApi';
import { LIST_GROUP_REQUEST, listChatFail, listChatSuccess } from './ListChat.Acion';
import { sendNetworkFail } from '../../actions';

export function* watchGetListGroup() {
  yield takeLatest(LIST_GROUP_REQUEST, handleGetListGroup);
}

function* handleGetListGroup(action) {
  const response = yield call(getGroups, action.payload);
  if (response.data.success) {
    yield put(listChatSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(listChatFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(listChatFail(response.problem));
    }
  }
}
