import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  doLogin: [],
  successLogin: ['data'],
  failureLogin: [],
  setToken: ['token'],
});

const INITIAL_STATE = {
  usuario: null,
  token: null,
  isProcessing: false,
  error: null,
};

const setToken = (state = INITIAL_STATE, action) => ({ ...state, token: action.token });
const doLogin = (state = INITIAL_STATE, action) => ({ ...state, isProcessing: true, error: false });
const failureLogin = (state = INITIAL_STATE, action) => ({ ...state, isProcessing: false, error: action.payload.error });

const successLogin = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    usuario: action.payload.data.usuario,
    token: action.payload.data.token,
    isProcessing: false,
    error: null
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.SET_TOKEN]: setToken,
  [Types.DO_LOGIN]: doLogin,
  [Types.SUCCESS_LOGIN]: successLogin,
  [Types.FAILURE_LOGIN]: failureLogin,
});