import { takeLatest, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { Types as AuthTypes } from '../ducks/auth';
import api from '../../services/api';

function* doLogin() {
  try {
    const { data } = yield call(api.post, '/auth', { email: 'adm@somnio.com.br', senha: '123456' });

    yield put({ type: AuthTypes.SUCCESS_LOGIN, payload: { data } });

    yield put(push('/contato'))
  } catch (error) {
    yield put({ type: AuthTypes.FAILURE_LOGIN });
  }
}

export function* handleLogin() {
  yield takeLatest(AuthTypes.DO_LOGIN, doLogin);
}