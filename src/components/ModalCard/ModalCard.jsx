import React from "react";
import styled, { css } from "styled-components";

import iconMale from "./img/Icon male.svg";
import iconFemale from "./img/Icon female.svg";
import iconHermo from "./img/icon hermo.svg";

const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const ModalContainer = styled.div`
  background-color: var(--color-blue);
  position: relative;
  display: flex;
  max-width: 800px;
  margin: 20px;
  box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
  border-radius: 16px;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;
const InfoContainer = styled.div`
  background-image: linear-gradient(var(--color-purple), var(--color-blue));
  padding: 30px;
  border-radius: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
`;
const TagItem = styled.div`
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

const ModalName = styled.h2`
  color: var(--color-white);
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 10px;
`;

const InfoP = styled.p`
  font-size: 16px;
`;

const ModalCard = ({ card }) => {
  const genderItem = () => {
    if (card.gender === "male") {
      return <TagItem>{card.gender}</TagItem>;
    } else if (card.gender === "female") {
      return <TagItem pink>{card.gender}</TagItem>;
    } else if (card.gender === "hermaphrodite") {
      return <TagItem yellow>{card.gender}</TagItem>;
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
  return (
    <ModalOverlay>
      <ModalContainer>
        <ImgContainer>
          {card.gender !== "n/a" && genderImg()}
          {/* <img src={genderImg()} alt="gender" /> */}
          <TagContainer>
            {card.gender !== "n/a" && genderItem()}
            {card.birth_year !== "unknown" && <TagItem blue>{card.birth_year}</TagItem>}
          </TagContainer>
        </ImgContainer>
        <InfoContainer>
          <ModalName>{card.name}</ModalName>
          <InfoBlock>
            <InfoP>eye color: {card.eye_color}</InfoP>
            <InfoP>hair color: {card.hair_color}</InfoP>
            <InfoP>skin color: {card.skin_color}</InfoP>
          </InfoBlock>
          Info Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit nihil mollitia itaque numquam
          totam aperiam provident pariatur perferendis doloribus repellendus quia, nostrum quis enim nemo optio!
          Repellendus, iusto ea.
        </InfoContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export { ModalCard };
