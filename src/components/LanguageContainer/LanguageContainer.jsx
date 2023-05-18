import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { setLanguage } from "../../store/languageSlice";

import changeLanguage from "./img/Language.svg";

const SLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

const SLanguage = styled.p`
  font-family: "Source Sans Pro";
  font-size: 16px;
  line-height: 20px;
`;

const SLanguageButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotateZ(180deg);
    transition: transform 0.5s ease-in-out;
  }
`;

const SLanguageLogo = styled.img`
  width: 100%;
  height: 100%;
`;
//*component

const LanguageContainer = () => {
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();

  const buttonHandleSubmit = () => {
    dispatch(setLanguage());
  };

  return (
    <SLanguageContainer>
      <SLanguage>language: {language}</SLanguage>
      <SLanguageButton onClick={buttonHandleSubmit}>
        <SLanguageLogo src={changeLanguage} alt="change language" />
      </SLanguageButton>
    </SLanguageContainer>
  );
};

export { LanguageContainer };
