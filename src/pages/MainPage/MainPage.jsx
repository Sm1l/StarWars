import React from "react";
import styled from "styled-components";
import Yoda from "./img/Yoda.png";
import { Link } from "react-router-dom";

const StyledMain = styled.main`
  width: 100%;
  /* height: 100%; */
  color: var(--color-white);
  background-image: linear-gradient(var(--color-blue), var(--color-purple));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledContainer = styled.div`
  /* display: flex; */
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  grid-template-rows: auto;
  grid-template-areas: "text image";
  max-width: 1200px;
  padding: 20px 10px;
  width: 100%;
  /* height: 100vh; */
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1024px) {
    /* flex-direction: column-reverse; */
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas: "image" "text";
  }
`;
const StyledTextContainer = styled.div`
  display: flex;
  grid-area: text;
  /* flex: 1 35%; */
  flex-direction: column;
  gap: 40px;
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const StyledImageContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 72px;
  line-height: 80px;
`;

const StyledText = styled.p`
  font-size: 32px;
  line-height: 100%;
`;

const StyledButton = styled(Link)`
  font-size: 23px;
  line-height: 100%;
  font-weight: bold;
  color: var(--color-black);
  padding: 20px 60px;
  background-color: var(--color-yellow);
  border-radius: 11px;
  box-shadow: inset 0px -9px rgba(0, 0, 0, 0.18);
  align-self: flex-start;
  :hover {
    box-shadow: inset 0px -9px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 1024px) {
    align-self: stretch;
  }
`;
const StyledSpan = styled.span`
  font-weight: bold;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;

const MainPage = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledTextContainer>
          <StyledTitle>
            <StyledSpan>Find</StyledSpan> all your favorite <StyledSpan>character</StyledSpan>
          </StyledTitle>
          <StyledText>You can find out all the information about your favorite characters</StyledText>
          <StyledButton to="/characters">See more...</StyledButton>
        </StyledTextContainer>
        <StyledImageContainer>
          <StyledImage src={Yoda}></StyledImage>
        </StyledImageContainer>
      </StyledContainer>
    </StyledMain>
  );
};

export { MainPage };
