import React from "react";
import { useDispatch } from "react-redux";
import { Creators as Actions } from "../../store/ducks/characters";
import { Container, Title, Image, Button } from "./styles";

export default ({ id, name, thumbnail, ...rest }) => {
  const dispatch = useDispatch();

  const handleOnClick = e => {
    const character = { id, name, thumbnail, ...rest };

    dispatch(Actions.showCharacter(character));
  };

  return (
    <Container data-testid="character-card">
      <Title>{name}</Title>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} />
      <Button onClick={handleOnClick}>Detalhes</Button>
    </Container>
  );
};
