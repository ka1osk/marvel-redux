import React from "react";
import { useDispatch } from "react-redux";
import { Creators as Actions } from "store/ducks/characters";
import { Container, Input } from "./styles";

export default () => {
  const dispatch = useDispatch();

  const handleOnChange = e => {
    dispatch(Actions.filterCharacters(e.target.value));
  };

  return (
    <Container>
      <Input onChange={handleOnChange} />
    </Container>
  );
};
