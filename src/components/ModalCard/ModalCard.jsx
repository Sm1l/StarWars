import React from "react";
import styled, { css } from "styled-components";

import iconMale from "./img/Icon male.svg";
import iconFemale from "./img/Icon female.svg";
import iconHermo from "./img/icon hermo.svg";
import iconClose from "./img/closeIcon.svg";

const SModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const SModalContainer = styled.div`
  background-color: var(--color-blue);
  position: relative;
  display: flex;
  max-width: 800px;
  margin: 20px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 16px;
`;

const SImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;
const SInfoContainer = styled.div`
  background-image: linear-gradient(var(--color-purple), var(--color-blue));
  padding: 30px;
  border-radius: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
const STagContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;
const STagItem = styled.div`
  font-family: "Roboto";
  font-size: 12px;
  line-height: 14px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
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

const SModalName = styled.h2`
  color: var(--color-white);
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

const SInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
`;

const SInfoP = styled.p`
  font-size: 16px;
`;
const SAnthropometricContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const SAnthropometricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: var(--color-white);
  padding: 10px;
  border-radius: 16px;
`;
const SAnthropometricCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45px;
  height: 45px;
  font-size: 16px;
  line-height: 18px;
  padding: 10px;
  border: 3px solid var(--color-black);
  border-radius: 50%;
  overflow: hidden;
`;
const SAnthropometricText = styled.p`
  color: var(--color-grey);
`;

const SCloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotateZ(90deg);
    transition: transform 0.5s ease-in-out;
  }
`;

const SCloseImg = styled.img``;

//*component
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
