import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NotFound from "./img/404.png";

const SMain = styled.main`
  width: 100%;
  background-color: var(--color-purple);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  padding: 50px 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

const SImageContainer = styled.div`
  position: relative;
  padding-bottom: 40%;
  padding-right: 80%;
`;

const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SButton = styled(Link)`
  font-size: 23px;
  line-height: 100%;
  font-weight: bold;
  color: var(--color-black);
  padding: 20px 60px;
  background-color: var(--color-green);
  border-radius: 11px;
  box-shadow: inset 0px -9px rgba(0, 0, 0, 0.18);
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: inset 0px -9px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const NotFoundPage = () => {
  return (
    <SMain>
      <SContainer>
        <SImageContainer>
          <SImage src={NotFound} alt="Not Found" />
        </SImageContainer>
        <SButton to="/">Return</SButton>
      </SContainer>
    </SMain>
  );
};

export { NotFoundPage };
