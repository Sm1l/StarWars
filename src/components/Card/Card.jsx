import React from "react";
import styled, { css } from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-light-grey);
  padding: 10px 25px;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
  gap: 15px;
  cursor: pointer;
`;
const CardName = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

const AnthropometricContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AnthropometricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const AnthropometricCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45px;
  height: 45px;
  font-size: 15px;
  line-height: 18px;
  padding: 10px;
  border: 3px solid var(--color-black);
  border-radius: 50%;
  overflow: hidden;
`;
const AnthropometricText = styled.p`
  color: var(--color-grey);
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TagItem = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-green);
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  padding: 2px 20px;
  ${(props) =>
    props.blue &&
    css`
      background-color: var(--color-light-blue);
    `}
  ${(props) =>
    props.yellow &&
    css`
      background-color: var(--color-yellow);
    `}
  ${(props) =>
    props.pink &&
    css`
      background-color: var(--color-pink);
    `}
`;

const Card = ({ card, setModalIsVisible }) => {
  const cardHandleClick = (e) => {
    console.log("hello");
    setModalIsVisible(true);
  };

  const genderItem = () => {
    if (card.gender === "male") {
      return <TagItem>{card.gender}</TagItem>;
    } else if (card.gender === "female") {
      return <TagItem pink>{card.gender}</TagItem>;
    } else if (card.gender === "hermaphrodite") {
      return <TagItem yellow>{card.gender}</TagItem>;
    }
  };

  return (
    <CardContainer onClick={() => cardHandleClick()}>
      <CardName>{card.name}</CardName>
      <AnthropometricContainer>
        <AnthropometricItem>
          <AnthropometricCircle>{card.height !== "unknown" ? card.height : "?"}</AnthropometricCircle>
          <AnthropometricText>height</AnthropometricText>
        </AnthropometricItem>
        <AnthropometricItem>
          <AnthropometricCircle>{card.mass !== "unknown" ? card.mass : "?"}</AnthropometricCircle>
          <AnthropometricText>mass</AnthropometricText>
        </AnthropometricItem>
      </AnthropometricContainer>
      <TagContainer>
        {card.gender !== "n/a" && genderItem()}
        {card.birth_year !== "unknown" && <TagItem blue>{card.birth_year}</TagItem>}
      </TagContainer>
    </CardContainer>
  );
};

export { Card };
