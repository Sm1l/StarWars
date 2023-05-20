import React from "react";

import {
  SModalOverlay,
  SModalContainer,
  SImgContainer,
  SInfoContainer,
  STagContainer,
  STagItem,
  SModalName,
  SInfoBlock,
  SInfoP,
  SAnthropometricContainer,
  SAnthropometricItem,
  SAnthropometricCircle,
  SAnthropometricText,
  SCloseButton,
  SCloseImg,
} from "./stylesModalCard";

import iconMale from "./img/Icon male.svg";
import iconFemale from "./img/Icon female.svg";
import iconHermo from "./img/icon hermo.svg";
import iconClose from "./img/closeIcon.svg";

const ModalCard = ({ card, setModalIsVisible }) => {
  const genderItem = () => {
    if (card.gender === "male") {
      return <STagItem>{card.gender}</STagItem>;
    } else if (card.gender === "female") {
      return <STagItem pink>{card.gender}</STagItem>;
    } else if (card.gender === "hermaphrodite") {
      return <STagItem yellow>{card.gender}</STagItem>;
    }
  };
  const genderImg = () => {
    if (card.gender === "male") {
      return <img src={iconMale} alt="gender" />;
    } else if (card.gender === "female") {
      return <img src={iconFemale} alt="gender" />;
    } else if (card.gender === "hermaphrodite") {
      return <img src={iconHermo} alt="gender" />;
    }
  };

  const buttonHandleClick = (e) => {
    e.preventDefault();
    setModalIsVisible(false);
  };

  return (
    <SModalOverlay>
      <SModalContainer>
        <SImgContainer>
          {card.gender !== "n/a" && genderImg()}
          <STagContainer>
            {card.gender !== "n/a" && genderItem()}
            {card.birth_year !== "unknown" && <STagItem blue>{card.birth_year}</STagItem>}
          </STagContainer>
        </SImgContainer>
        <SInfoContainer>
          <SModalName>{card.name}</SModalName>
          <SInfoBlock>
            <SInfoP> {card.eye_color !== "n/a" && `eye color: ${card.eye_color}`}</SInfoP>
            <SInfoP> {card.hair_color !== "n/a" && `hair color: ${card.hair_color}`}</SInfoP>
            <SInfoP> {card.skin_color !== "n/a" && `skin color: ${card.skin_color}`}</SInfoP>
          </SInfoBlock>
          <SAnthropometricContainer>
            {card.height !== "unknown" && card.height !== "n/a" && (
              <SAnthropometricItem>
                <SAnthropometricCircle>{card.height}</SAnthropometricCircle>
                <SAnthropometricText>height</SAnthropometricText>
              </SAnthropometricItem>
            )}
            {card.mass !== "unknown" && card.mass !== "n/a" && (
              <SAnthropometricItem>
                <SAnthropometricCircle>{card.mass}</SAnthropometricCircle>
                <SAnthropometricText>mass</SAnthropometricText>
              </SAnthropometricItem>
            )}
          </SAnthropometricContainer>
        </SInfoContainer>
        <SCloseButton onClick={buttonHandleClick}>
          <SCloseImg src={iconClose} alt="Close button"></SCloseImg>
        </SCloseButton>
      </SModalContainer>
    </SModalOverlay>
  );
};

export { ModalCard };
