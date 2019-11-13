import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdArrowBack, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { Creators as Actions } from "store/ducks/characters";
import {
  Container,
  TitleContainer,
  Title,
  BackButton,
  ContentContainer,
  ImageContainer,
  ImageContainerbackGround,
  Image,
  ButtonEdit,
  Content,
  SeriesTitle,
  SeriesList,
  SeriesItem
} from "./styles";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const charactersState = useSelector(state => state.characters);
  const { selectedCharacter: character } = charactersState;

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <ImageContainerbackGround
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <TitleContainer>
            <BackButton
              onClick={() => history.goBack()}
              title={"voltar"}
              alt={"voltar"}
            >
              <MdArrowBack />
            </BackButton>
            <Title>{character.name}</Title>
          </TitleContainer>
        </ImageContainer>
        <ButtonEdit
          onClick={() => dispatch(Actions.editCharacter(character))}
          alt={"alterar"}
          title={"alterar"}
        >
          <MdEdit /> alterar
        </ButtonEdit>
        <Content>{character.description}</Content>
        {charactersState.selectedCharacter.series.items && (
          <>
            <SeriesTitle>Séries:</SeriesTitle>
            <SeriesList>
              {charactersState.selectedCharacter.series.items.map(
                (serie, index) => (
                  <SeriesItem key={index}>{serie.name}</SeriesItem>
                )
              )}
            </SeriesList>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};
