import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLanguage } from "../../store/languageSlice";

import changeLanguage from "./img/Language.svg";

import { SLanguageContainer, SLanguage, SLanguageButton, SLanguageLogo } from "./stylesLanguageContainer";

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
