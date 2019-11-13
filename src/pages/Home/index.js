import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Search from "components/Search";
import CardList from "components/CardList";
import Card from "components/Card";
import { Creators as Actions } from "store/ducks/characters";

export default ({ usuario, token, isProcessing, error, doLogin }) => {
  const dispatch = useDispatch();
  const charactersState = useSelector(state => state.characters);

  useEffect(() => {
    charactersState.characters.length === 0 &&
      dispatch(Actions.getCharacters());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Search />
      <CardList>
        {charactersState.filteredCharacters.map(character => (
          <Card key={character.id} {...character} />
        ))}
      </CardList>
    </>
  );
};
