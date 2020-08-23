import {call, put, takeLatest} from 'redux-saga/effects';
import {
  CREATE_CHAT_WITH_REQUEST,
  createChatWithFail,
  createChatWithSuccess,
} from '../Actions/CreateChatWith.Action';
import {chatWith} from '../../Api/groupApi';
import {sendNetworkFail} from '../../actions';

export function* watchCreateChatWith() {
  yield takeLatest(CREATE_CHAT_WITH_REQUEST, handleCreateChatWith);
}

function* handleCreateChatWith(action) {
  const response = yield call(chatWith, action.payload);
  if (response.data.success) {
    yield put(createChatWithSuccess(response.data));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(createChatWithFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(createChatWithFail(response.problem));
    }
  }
}
