import React from "react";
import Yoda from "./img/Yoda.png";

import {
  SMain,
  SContainer,
  STextContainer,
  SImageContainer,
  STitle,
  SText,
  SButton,
  SSpan,
  SImage,
} from "./stylesMainPage";

const MainPage = () => {
  return (
    <SMain>
      <SContainer>
        <STextContainer>
          <STitle>
            <SSpan>Find</SSpan> all your favorite <SSpan>character</SSpan>
          </STitle>
          <SText>You can find out all the information about your favorite characters</SText>
          <SButton to="/characters">See more...</SButton>
        </STextContainer>
        <SImageContainer>
          <SImage src={Yoda}></SImage>
        </SImageContainer>
      </SContainer>
    </SMain>
  );
};

export { MainPage };
