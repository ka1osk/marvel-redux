import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  getCharacters: [],
  successGetCharacters: ['data'],
  failureGetCharacters: []
});

const INITIAL_STATE = {
  characters: [],
  isProcessing: false,
  error: null,
};

const getCharacters = (state = INITIAL_STATE, action) => ({ ...state, isProcessing: true, error: false });
const failureGetCharacters = (state = INITIAL_STATE, action) => ({ ...state, isProcessing: false, error: action.payload.error });
const successGetCharacters = (state = INITIAL_STATE, { payload: { data: { count, limit, offset, results }}}) => {
  return {
    ...state,
    characters: results,
    isProcessing: false,
    error: null
  }
}

export default createReducer(INITIAL_STATE, {
  [Types.GET_CHARACTERS]: getCharacters,
  [Types.SUCCESS_GET_CHARACTERS]: successGetCharacters,
  [Types.FAILURE_GET_CHARACTERS]: failureGetCharacters,
});