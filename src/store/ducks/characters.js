import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  getCharacters: [],
  successGetCharacters: ["data"],
  failureGetCharacters: [],
  showCharacter: ["character"],
  editCharacter: ["character"],
  updateCharacter: ["character"],
  filterCharacters: ["term"]
});

const INITIAL_STATE = {
  characters: [],
  filteredCharacters: [],
  selectedCharacter: null,
  isProcessing: false,
  error: null
};

const getCharacters = (state = INITIAL_STATE, action) => ({
  ...state,
  isProcessing: true,
  error: false
});
const failureGetCharacters = (state = INITIAL_STATE, action) => ({
  ...state,
  isProcessing: false,
  error: action.payload.error
});
const successGetCharacters = (
  state = INITIAL_STATE,
  {
    payload: {
      data: { count, limit, offset, results }
    }
  }
) => {
  return {
    ...state,
    characters: results,
    filteredCharacters: results,
    isProcessing: false,
    error: null
  };
};

const setCharacter = (
  state = INITIAL_STATE,
  { character: selectedCharacter }
) => {
  return {
    ...state,
    selectedCharacter
  };
};

const updateCharacter = (state = INITIAL_STATE, { character }) => {
  const characters = state.characters.map(c =>
    c.id === character.id ? character : c
  );

  return { ...state, characters, selectedCharacter: null };
};

const filterCharacters = (state = INITIAL_STATE, { term }) => {
  const filteredCharacters = state.characters.filter(
    character => character.name.toUpperCase().indexOf(term.toUpperCase()) > -1
  );

  return {
    ...state,
    filteredCharacters
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.GET_CHARACTERS]: getCharacters,
  [Types.SUCCESS_GET_CHARACTERS]: successGetCharacters,
  [Types.FAILURE_GET_CHARACTERS]: failureGetCharacters,
  [Types.SHOW_CHARACTER]: setCharacter,
  [Types.EDIT_CHARACTER]: setCharacter,
  [Types.UPDATE_CHARACTER]: updateCharacter,
  [Types.FILTER_CHARACTERS]: filterCharacters
});
