import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Creators as Actions } from "store/ducks/characters";
import { Container, Row, Form, Label, Input, TextArea, Button } from "./styles";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const charactersState = useSelector(state => state.characters);
  const { selectedCharacter } = charactersState;
  const [character, setCharacter] = useState(selectedCharacter);

  const handleOnChange = e => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(Actions.updateCharacter(character));
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Label>Nome</Label>
          <Input
            name="name"
            onChange={handleOnChange}
            defaultValue={character.name}
          />
        </Row>
        <Row>
          <Label>Descrição</Label>
          <TextArea
            name="description"
            onChange={handleOnChange}
            defaultValue={character.description}
          />
        </Row>

        <Row style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Button onClick={() => history.goBack()} outline>
            Cancelar
          </Button>
          <Button type={"submit"}>Salvar</Button>
        </Row>
      </Form>
    </Container>
  );
};
