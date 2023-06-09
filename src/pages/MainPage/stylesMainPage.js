import styled from "styled-components";
import { Link } from "react-router-dom";

export const SMain = styled.main`
  width: 100%;
  /* height: 100%; */
  color: var(--color-white);
  background-image: linear-gradient(var(--color-blue), var(--color-purple));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SContainer = styled.div`
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
export const STextContainer = styled.div`
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

export const SImageContainer = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

export const STitle = styled.h1`
  font-size: 72px;
  line-height: 80px;
  @media (max-width: 768px) {
    font-size: 52px;
  }
`;

export const SText = styled.p`
  font-size: 32px;
  line-height: 100%;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SButton = styled(Link)`
  font-size: 23px;
  line-height: 100%;
  font-weight: bold;
  color: var(--color-black);
  padding: 20px 60px;
  background-color: var(--color-yellow);
  border-radius: 11px;
  box-shadow: inset 0px -9px rgba(0, 0, 0, 0.18);
  align-self: flex-start;
  transition: box-shadow 0.3s ease-in-out;
  :hover {
    box-shadow: inset 0px -9px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    align-self: stretch;
  }
`;
export const SSpan = styled.span`
  font-weight: bold;
`;

export const SImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;
