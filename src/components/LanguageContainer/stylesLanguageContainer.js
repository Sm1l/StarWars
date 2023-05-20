import styled from "styled-components";

export const SLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const SLanguage = styled.p`
  font-family: "Source Sans Pro";
  font-size: 16px;
  line-height: 20px;
`;

export const SLanguageButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  :hover {
    transform: rotateZ(180deg);
    transition: transform 0.5s ease-in-out;
  }
`;

export const SLanguageLogo = styled.img`
  width: 100%;
  height: 100%;
`;
