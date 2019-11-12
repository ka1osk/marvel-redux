import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { MdArrowBack, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  const { id } = useParams();
  const characters = useSelector(state => state.characters);

  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <ImageContainerbackGround src={character.thumbnail} />
          <Image src={character.thumbnail} />
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
          onClick={() => history.push(`/character/${id}/edit`)}
          alt={"alterar"}
          title={"alterar"}
        >
          <MdEdit />
        </ButtonEdit>
        <Content>{character.description}</Content>
        {character.series && (
          <>
            <SeriesTitle>Séries:</SeriesTitle>
            <SeriesList>
              {character.series.map((serie, index) => (
                <SeriesItem key={index}>{serie.name}</SeriesItem>
              ))}
            </SeriesList>
          </>
        )}
      </ContentContainer>
    </Container>
  );
};
