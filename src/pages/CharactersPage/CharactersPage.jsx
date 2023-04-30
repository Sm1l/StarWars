import React from "react";
import styled from "styled-components";

import { CardContainer } from "../../components/CardContainer";

const StyledMain = styled.main`
  /* background-color: var(--color-yellow); */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 50px 10px;
  width: 100%;
  /* align-items: center;
  justify-content: center; */
  gap: 50px;
`;

const StyledLanguage = styled.p`
  align-self: flex-end;
  font-family: "Source Sans Pro";
  font-size: 16px;
  line-height: 20px;
`;

const StyledTitle = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 41px;
  text-align: center;
  letter-spacing: 3px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const StyledSpan = styled.span`
  font-weight: 700;
`;

const CharactersPage = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledLanguage>language: en</StyledLanguage>
        <StyledTitle>
          60 <StyledSpan>Peoples</StyledSpan> for you to choose your favorite
        </StyledTitle>
        <div>
          <div>Color eye</div>
          <CardContainer />
        </div>
      </StyledContainer>
    </StyledMain>
  );
};

export { CharactersPage };
