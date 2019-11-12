import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from "components/Search";
import CardList from "components/CardList";
import Card from "components/Card";
import { Creators as Actions } from "../../store/ducks/characters";

export default ({ usuario, token, isProcessing, error, doLogin }) => { 
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);

  useEffect(() => {
    dispatch(Actions.getCharacters())
  }, [])

  return (
    <>
      <Search />
      <CardList>
        {characters.characters.map(character => (
          <Card key={character.id} {...character} />
        ))}
      </CardList>
    </>
  );
}