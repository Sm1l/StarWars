import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NotFound from "./img/404.png";

const StyledMain = styled.main`
  width: 100%;
  background-color: var(--color-purple);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 50px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const StyledImageContainer = styled.div`
  position: relative;
  padding-bottom: 40%;
  padding-right: 80%;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledButton = styled(Link)`
  font-size: 23px;
  line-height: 100%;
  font-weight: bold;
  color: var(--color-black);
  padding: 20px 60px;
  background-color: var(--color-green);
  border-radius: 11px;
  box-shadow: inset 0px -9px rgba(0, 0, 0, 0.18);
  :hover {
    box-shadow: inset 0px -9px rgba(0, 0, 0, 0.5);
  }
`;

const NotFoundPage = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <StyledImageContainer>
          <StyledImage src={NotFound} alt="Not Found" />
        </StyledImageContainer>
        <StyledButton to="/">Return</StyledButton>
      </StyledContainer>
    </StyledMain>
  );
};

export { NotFoundPage };
