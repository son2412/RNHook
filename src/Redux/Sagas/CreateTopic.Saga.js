import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_TOPIC_REQUEST, createTopicSuccess, createTopicFail } from '../Actions/CreateTopic.Action';
import { createTopic } from '../../Api/topicApi';
import { sendNetworkFail } from '../../actions';

export function* watchCreateTopic() {
  yield takeLatest(CREATE_TOPIC_REQUEST, handleCreateTopic);
}

function* handleCreateTopic(action) {
  const response = yield call(createTopic, action.payload);
  if (response.data.success) {
    yield put(createTopicSuccess(response.data));
  } else {
    if (response.problem !== 'NETWORK_ERROR' && response.problem !== 'TIMEOUT_ERROR' && response.problem !== 'CONNECTION_ERROR') {
      yield put(createTopicFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(createTopicFail(response.problem));
    }
  }
}
